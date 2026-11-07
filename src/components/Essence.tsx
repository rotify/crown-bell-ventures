"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion, useMotionEnabled } from "@/lib/motion";
import { essence } from "@/content/site";
import styles from "./Essence.module.css";

const ROTATE_MS = 7000;

/** Three ideas behind the brand, shown as tabs that rotate on their own while in view. */
export default function Essence() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const motionOn = useMotionEnabled();
  const pillars = essence.pillars;

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !motionOn) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % pillars.length), ROTATE_MS);
    return () => window.clearTimeout(t);
  }, [active, inView, motionOn, pillars.length]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        `.${styles.card}`,
        { clipPath: "inset(8% 8% 8% 8% round 18px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 8px)",
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "top 15%", scrub: 0.6 },
        },
      );
    },
    { scope: root },
  );

  const current = pillars[active];
  const playing = inView && motionOn;

  return (
    <section ref={root} id="essence" className={styles.essence} data-theme="light" aria-labelledby="essence-title">
      <div className={styles.card} data-theme="dark">
        {pillars.map((p, i) => (
          <div key={p.key} className={styles.image} data-active={i === active || undefined}>
            <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 900px) 100vw, 90vw" />
          </div>
        ))}
        <div className={styles.shade} />

        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>{essence.eyebrow}</p>
          <h2 id="essence-title" className="display h-lg">
            {essence.titleTop}
            <br />
            <em>{essence.titleEm}</em>
          </h2>
          <p className={styles.lede}>{essence.lede}</p>
        </div>

        <div className={styles.detail} key={current.key}>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Our essence">
          {pillars.map((p, i) => (
            <button
              key={p.key}
              role="tab"
              aria-selected={i === active}
              className={styles.tab}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabNum}>{String(i + 1).padStart(2, "0")}</span>
              {p.label}
              <span className={styles.tabBar}>
                {i === active && (
                  <span
                    key={`${active}-${playing}`}
                    data-playing={playing || undefined}
                    style={{ animationDuration: `${ROTATE_MS}ms` }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
