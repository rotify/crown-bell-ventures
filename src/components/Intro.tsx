"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { lockScroll, prefersReducedMotion } from "@/lib/motion";
import { LogoMark } from "./Logo";
import { brand } from "@/content/site";
import styles from "./Intro.module.css";

export const INTRO_DONE = "cbv:intro-done";
export const INTRO_REPLAY = "cbv:intro-replay";

/**
 * Opening sequence: the crown-bell mark draws itself, the name rises with a light sweep,
 * then the curtain lifts to reveal the hero. Skippable, and replayable from the footer.
 */
export default function Intro() {
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [visible, setVisible] = useState(true);
  const [run, setRun] = useState(0);

  const finish = useCallback(() => {
    lockScroll(false);
    setVisible(false);
    window.dispatchEvent(new Event(INTRO_DONE));
  }, []);

  const skip = useCallback(() => {
    tl.current?.progress(1);
  }, []);

  // Replay requested from the footer.
  useEffect(() => {
    const onReplay = () => {
      window.scrollTo(0, 0);
      setVisible(true);
      setRun((n) => n + 1);
    };
    window.addEventListener(INTRO_REPLAY, onReplay);
    return () => window.removeEventListener(INTRO_REPLAY, onReplay);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!visible || !el) return;
    lockScroll(true);

    const q = gsap.utils.selector(el);
    const reduced = prefersReducedMotion();

    const timeline = gsap.timeline({ onComplete: finish });
    tl.current = timeline;

    if (reduced) {
      timeline.set(q("[data-draw]"), { strokeDashoffset: 0 }).to(el, { opacity: 0, duration: 0.6, delay: 1 });
    } else {
      timeline
        .set(el, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 })
        .fromTo(q("[data-draw]"), { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.4, stagger: 0.18, ease: "power2.inOut" })
        .from(q(`.${styles.eyebrow}`), { y: 14, opacity: 0, duration: 0.8, ease: "power3.out" }, 0.2)
        .from(q(`.${styles.letter}`), { yPercent: 110, duration: 1.1, stagger: 0.035, ease: "power4.out" }, 0.55)
        .add(() => el.classList.add(styles.sweep), 1.1)
        .from(q(`.${styles.tagline}`), { y: 14, opacity: 0, duration: 0.9, ease: "power3.out" }, 1.45)
        .to(q(`.${styles.inner}`), { y: -40, opacity: 0, duration: 0.8, ease: "power2.in" }, 3.1)
        .to(el, { clipPath: "inset(0% 0% 100% 0%)", duration: 1.1, ease: "power4.inOut" }, 3.5);
    }

    return () => {
      // revert (not just kill) so a re-run in React dev mode starts from a clean state
      timeline.revert();
      el.classList.remove(styles.sweep);
    };
  }, [visible, run, finish]);

  if (!visible) return null;

  const words = brand.short.toUpperCase().split(" ");

  return (
    <div ref={root} className={styles.intro} role="dialog" aria-label={`${brand.name} introduction`}>
      <div className={styles.inner}>
        <p className={`eyebrow ${styles.eyebrow}`}>{brand.name} presents</p>
        <LogoMark size={64} className={styles.mark} />
        <h2 className={styles.name} aria-label={brand.name}>
          {words.map((word, wi) => (
            <span key={word} className={styles.word} aria-hidden>
              {word.split("").map((ch, i) => (
                <span key={`${wi}-${i}`} className={styles.mask}>
                  <span className={styles.letter}>{ch}</span>
                </span>
              ))}
            </span>
          ))}
          <span className={styles.shine} aria-hidden />
        </h2>
        <p className={styles.tagline}>
          <span className="eyebrow">Ventures</span>
          <span className={styles.rule} />
          <span className={styles.taglineText}>{brand.tagline}</span>
        </p>
      </div>
      <button className={styles.skip} onClick={skip}>
        Skip intro
      </button>
    </div>
  );
}
