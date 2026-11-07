"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ScrollTrigger, useGSAP } from "@/lib/gsap";
import { scrollToTarget, scrollToY } from "@/lib/motion";
import type { Photo } from "@/content/site";
import Lightbox from "./Lightbox";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "./Icons";
import styles from "./PhotoJourney.module.css";

type PhotoJourneyProps = {
  id: string;
  eyebrow: string;
  title: string;
  titleEm: string;
  items: Photo[];
  next?: { href: string; label: string };
};

/** Viewport heights of scrolling given to each photo. */
const PER_PHOTO_VH = 75;

/**
 * Sticky, scroll-driven gallery. The section stays pinned while scrolling
 * steps through the photos; each new photo wipes in over the last.
 */
export default function PhotoJourney({ id, eyebrow, title, titleEm, items, next }: PhotoJourneyProps) {
  const root = useRef<HTMLElement>(null);
  const bars = useRef<(HTMLSpanElement | null)[]>([]);
  const trigger = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const [viewer, setViewer] = useState<number | null>(null);
  const n = items.length;

  useGSAP(
    () => {
      trigger.current = ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const p = self.progress * n;
          const idx = Math.min(n - 1, Math.floor(p));
          setActive((prev) => (prev === idx ? prev : idx));
          bars.current.forEach((bar, i) => {
            if (bar) bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p - i))})`;
          });
        },
      });
      return () => trigger.current?.kill();
    },
    { scope: root },
  );

  const goTo = (i: number) => {
    const t = trigger.current;
    const target = Math.max(0, Math.min(n - 1, i));
    if (!t) return;
    scrollToY(t.start + ((target + 0.5) / n) * (t.end - t.start));
  };

  const current = items[active];

  return (
    <section
      ref={root}
      id={id}
      className={styles.journey}
      style={{ height: `${n * PER_PHOTO_VH + 100}vh` }}
      data-theme="light"
      aria-label={`${eyebrow}: ${title} ${titleEm}`}
    >
      <div className={styles.stage}>
        <div className={styles.head}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={`display ${styles.title}`}>
            {title} <em>{titleEm}</em>
          </h2>
          {next && (
            <a
              href={next.href}
              className="link-arrow"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget(next.href);
              }}
            >
              {next.label} <ArrowDown size={13} />
            </a>
          )}
        </div>

        <div className={styles.viewport}>
          {items.map((item, i) => (
            <div key={item.src} className={styles.slide} data-state={i < active ? "past" : i === active ? "current" : "future"}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 88vw" className={styles.img} />
            </div>
          ))}
          <button className={styles.full} onClick={() => setViewer(active)}>
            Full image <ArrowUpRight size={12} />
          </button>
        </div>

        <div className={styles.footer}>
          <div className={styles.caption}>
            <h3 key={current.title} className={styles.captionTitle}>
              {current.title}
            </h3>
            <p className="eyebrow muted">
              {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")} · {current.caption}
            </p>
          </div>

          <div className={styles.bars} aria-hidden>
            {items.map((item, i) => (
              <span key={item.src} className={styles.bar}>
                <span ref={(el) => void (bars.current[i] = el)} />
              </span>
            ))}
          </div>

          <div className={styles.arrows}>
            <button onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous photo">
              <ArrowLeft />
            </button>
            <button onClick={() => goTo(active + 1)} disabled={active === n - 1} aria-label="Next photo">
              <ArrowRight />
            </button>
          </div>
        </div>
        <p className={`eyebrow ${styles.hint}`}>Scroll to see the next image</p>
      </div>

      <Lightbox items={items} index={viewer} onChange={setViewer} onClose={() => setViewer(null)} label={eyebrow} />
    </section>
  );
}
