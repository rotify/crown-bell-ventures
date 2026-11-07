"use client";

import { useSyncExternalStore } from "react";
import type Lenis from "lenis";



const MOTION_EVENT = "cbv:motion";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

function subscribeMotion(callback: () => void) {
  window.addEventListener(MOTION_EVENT, callback);
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => {
    window.removeEventListener(MOTION_EVENT, callback);
    mq.removeEventListener("change", callback);
  };
}

export function isMotionEnabled() {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return document.documentElement.dataset.motion !== "off";
}

export function setMotionEnabled(enabled: boolean) {
  document.documentElement.dataset.motion = enabled ? "on" : "off";
  window.dispatchEvent(new Event(MOTION_EVENT));
}

/** Re-renders when animations are switched on or off. */
export function useMotionEnabled() {
  return useSyncExternalStore(subscribeMotion, isMotionEnabled, () => true);
}

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToY(y: number) {
  if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.2 });
  else window.scrollTo({ top: y, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

export function scrollToTarget(target: string | HTMLElement) {
  const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { duration: 1.4 });
  else el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

export function lockScroll(locked: boolean) {
  if (window.__lenis) {
    if (locked) window.__lenis.stop();
    else window.__lenis.start();
  }
  document.documentElement.classList.toggle("is-locked", locked);
}
