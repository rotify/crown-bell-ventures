"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { services } from "@/content/site";
import styles from "./Services.module.css";

/**
 * Service list with a photo that follows the cursor on hover (desktop),
 * then the four-step process with a line that draws as you scroll.
 */
export default function Services() {
  const root = useRef<HTMLElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(0);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        `.${styles.lineFill}`,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: `.${styles.process}`, start: "top 80%", end: "bottom 55%", scrub: 0.6 },
        },
      );
      gsap.from(`.${styles.step}`, {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: `.${styles.process}`, start: "top 80%", once: true },
      });
    },
    { scope: root },
  );

  const move = (e: React.PointerEvent) => {
    if (!preview.current || e.pointerType !== "mouse") return;
    gsap.to(preview.current, { x: e.clientX, y: e.clientY, duration: 0.7, ease: "power3.out", overwrite: true });
  };

  return (
    <section ref={root} id="services" className={`section container ${styles.services}`} data-theme="light" aria-labelledby="services-title">
      <Reveal className="section-head">
        <span className="section-head__index">{services.index}</span>
        <span className="eyebrow">{services.eyebrow}</span>
      </Reveal>

      <Reveal as="h2" id="services-title" className={`display h-lg ${styles.title}`}>
        {services.title} <em>{services.titleEm}</em>
      </Reveal>

      <ul className={styles.list} onPointerMove={move} onPointerLeave={() => setHovered(null)}>
        {services.items.map((s, i) => (
          <li
            key={s.title}
            className={styles.item}
            data-open={open === i || undefined}
            onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(i)}
          >
            <button className={styles.row} aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.name}>{s.title}</span>
              <span className={styles.plus} aria-hidden />
            </button>
            <div className={styles.body}>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div ref={preview} className={styles.preview} data-visible={hovered !== null || undefined} aria-hidden>
        {services.items.map((s, i) => (
          <div key={s.title} className={styles.previewImg} data-active={hovered === i || undefined}>
            <Image src={s.image} alt="" fill sizes="320px" />
          </div>
        ))}
      </div>

      <div className={styles.process}>
        <p className="eyebrow muted">How we work</p>
        <div className={styles.line}>
          <span className={styles.lineFill} />
        </div>
        <ol className={styles.steps}>
          {services.process.map((p) => (
            <li key={p.step} className={styles.step}>
              <span className={styles.dot} />
              <span className={styles.stepNum}>{p.step}</span>
              <h3>{p.title}</h3>
              <p className="muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
