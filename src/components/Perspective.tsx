"use client";

import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion, scrollToTarget } from "@/lib/motion";
import { perspective } from "@/content/site";
import { ArrowDown } from "./Icons";
import styles from "./Perspective.module.css";

const STRIPS = 26;
/** Share of the scroll used to open the frame before the photos start changing. */
const OPEN_SHARE = 0.22;

const small = (src: string) => src.replace("w=2400", "w=900").replace("q=80", "q=60");

/**
 * The "cinema" chapter. A framed photo sits on a fluted-glass backdrop,
 * opens up to fill the screen as you scroll, then steps through the scenes.
 * Moving the pointer bends the glass.
 */
export default function Perspective() {
  const root = useRef<HTMLElement>(null);
  const glass = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const frames = perspective.frames;
  const n = frames.length;

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const reduced = prefersReducedMotion();

      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const p = Math.max(0, (self.progress - OPEN_SHARE) / (1 - OPEN_SHARE));
          const idx = Math.min(n - 1, Math.floor(p * n));
          setActive((prev) => (prev === idx ? prev : idx));
          if (line.current) line.current.style.transform = `scaleX(${self.progress})`;
        },
      });

      if (!reduced) {
        gsap
          .timeline({
            scrollTrigger: { trigger: root.current, start: "top top", end: `${OPEN_SHARE * 100 + 4}% bottom`, scrub: 0.8 },
          })
          .fromTo(
            q(`.${styles.frame}`),
            {
              clipPath:
                window.innerWidth < 800 ? "inset(6% 0% 52% 30% round 6px)" : "inset(16% 5% 20% 46% round 6px)",
            },
            { clipPath: "inset(0% 0% 0% 0% round 4px)", ease: "power1.inOut" },
            0,
          )
          .fromTo(q(`.${styles.frameInner}`), { scale: 1.25 }, { scale: 1, ease: "none" }, 0)
          .to(q(`.${styles.intro}`), { x: -80, opacity: 0, ease: "power1.in" }, 0)
          .fromTo(q(`.${styles.bar}`), { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 0.6);

        // Pointer bends the glass.
        const setK = gsap.quickTo(glass.current, "--k", { duration: 1.2, ease: "power3.out" });
        const onMove = (e: PointerEvent) => setK((e.clientX / window.innerWidth - 0.5) * 2);
        const el = root.current;
        el?.addEventListener("pointermove", onMove);
        return () => el?.removeEventListener("pointermove", onMove);
      }
    },
    { scope: root },
  );

  const current = frames[active];

  return (
    <section ref={root} id="perspective" className={styles.perspective} data-theme="dark" aria-labelledby="perspective-title">
      <div className={styles.stage}>
        {/* Fluted glass backdrop */}
        <div ref={glass} className={styles.glass} aria-hidden style={{ "--k": 0 } as CSSProperties}>
          {Array.from({ length: STRIPS }, (_, i) => (
            <span
              key={i}
              className={styles.strip}
              style={
                {
                  "--i": i,
                  "--n": STRIPS,
                  backgroundImage: `url(${small(current.src)})`,
                } as CSSProperties
              }
            />
          ))}
          <div className={styles.glassShade} />
        </div>

        <div className={styles.top}>
          <span className="eyebrow">{perspective.eyebrow}</span>
          <a
            href="#essence"
            className="link-arrow"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget("#essence");
            }}
          >
            Scroll to explore <ArrowDown size={13} />
          </a>
        </div>

        <div className={styles.intro}>
          <p className={`eyebrow ${styles.sub}`}>{perspective.sub}</p>
          <h2 id="perspective-title" className="display h-lg">
            {perspective.titleTop}
            <br />
            <em>{perspective.titleEm}</em>
          </h2>
          <p className={styles.lede}>{perspective.lede}</p>
        </div>

        <div className={styles.frame}>
          <div className={styles.frameInner}>
            {frames.map((f, i) => (
              <div key={f.src} className={styles.shot} data-active={i === active || undefined}>
                <Image src={f.src} alt={f.alt} fill sizes="100vw" className={styles.img} />
              </div>
            ))}
          </div>
          <div className={styles.frameShade} />
        </div>

        <div className={styles.bar}>
          <span className={styles.count}>
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
          <span key={current.title} className={styles.caption}>
            {current.title}
          </span>
          <span className={styles.track}>
            <span ref={line} />
          </span>
          <a
            href="#essence"
            className="link-arrow"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget("#essence");
            }}
          >
            Continue <ArrowDown size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
