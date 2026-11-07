"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Photo } from "@/content/site";
import { lockScroll, useMotionEnabled } from "@/lib/motion";
import { ArrowLeft, ArrowRight, Close, Pause, Play } from "./Icons";
import styles from "./Lightbox.module.css";

type LightboxProps = {
  items: Photo[];
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
  label?: string;
  /** Start the slideshow straight away when opened. */
  autoPlay?: boolean;
};

const AUTOPLAY_MS = 5000;

/** Full-screen image viewer with arrows, keyboard, swipe and slideshow. */
export default function Lightbox({ items, index, onChange, onClose, label = "Gallery", autoPlay = false }: LightboxProps) {
  const open = index !== null;
  const [playing, setPlaying] = useState(autoPlay);
  const motionOn = useMotionEnabled();
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const count = items.length;
  const current = open ? items[index] : null;

  const next = () => open && onChange((index + 1) % count);
  const prev = () => open && onChange((index - 1 + count) % count);

  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    closeRef.current?.focus();
    return () => lockScroll(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % count);
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, count, onChange, onClose]);

  useEffect(() => {
    if (!open || !playing || !motionOn) return;
    const t = window.setTimeout(() => onChange((index + 1) % count), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [open, playing, motionOn, index, count, onChange]);

  if (!open || !current) return null;

  return (
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) {
          if (dx < 0) next();
          else prev();
        }
        touchX.current = null;
      }}
    >
      <div className={styles.top}>
        <span className="eyebrow">{label}</span>
        <div className={styles.controls}>
          <button className={styles.ctrl} onClick={() => setPlaying((p) => !p)} aria-pressed={playing}>
            {playing ? <Pause /> : <Play />}
            <span>{playing ? "Pause" : "Slideshow"}</span>
          </button>
          <button ref={closeRef} className={styles.ctrl} onClick={onClose}>
            <span>Close</span>
            <Close />
          </button>
        </div>
      </div>

      <figure className={styles.figure}>
        <div className={styles.imageWrap} key={current.src}>
          <Image src={current.src} alt={current.alt} fill sizes="100vw" className={styles.image} />
        </div>
        <figcaption className={styles.caption}>
          <span className={styles.count}>
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <span className={styles.title}>{current.title}</span>
          {current.category && <span className="eyebrow">{current.category}</span>}
        </figcaption>
        {playing && motionOn && <span key={`p-${index}`} className={styles.progress} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />}
      </figure>

      <button className={`${styles.nav} ${styles.prev}`} onClick={prev} aria-label="Previous image">
        <ArrowLeft size={20} />
      </button>
      <button className={`${styles.nav} ${styles.next}`} onClick={next} aria-label="Next image">
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
