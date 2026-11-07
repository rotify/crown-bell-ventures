"use client";

import { useRef, type ElementType, type ReactNode, type CSSProperties } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  /** Animate each direct child one after another instead of the block as a whole. */
  stagger?: number;
  y?: number;
  id?: string;
};

/** Fades and lifts content into place when it scrolls into view. */
export default function Reveal({ children, as: Tag = "div", className, style, delay = 0, stagger, y = 44, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const targets = stagger ? Array.from(el.children) : el;
      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 1.3,
        delay,
        stagger: stagger ?? 0,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} style={style} id={id}>
      {children}
    </Tag>
  );
}
