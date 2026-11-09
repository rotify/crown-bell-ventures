"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion, scrollToTarget } from "@/lib/motion";
import { INTRO_DONE } from "./Intro";
import { hero, photos } from "@/content/site";
import { ArrowDown } from "./Icons";
import styles from "./Hero.module.css";

/**
 * Full-bleed hero. As you scroll, the photo eases back into a framed panel,
 * day turns to night, and the headline drifts away.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      const q = gsap.utils.selector(root);

      // Entrance, played once the intro curtain lifts.
      const entrance = gsap.timeline({ paused: true });
      entrance
        .from(q(`.${styles.line}`), { yPercent: 105, duration: 1.4, stagger: 0.12, ease: "power4.out" })
        .from(q(`.${styles.fade}`), { y: 20, opacity: 0, duration: 1, stagger: 0.08, ease: "power3.out" }, 0.4);
      const play = () => entrance.play(0);
      window.addEventListener(INTRO_DONE, play);

      if (!reduced) {
        gsap
          .timeline({
            scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 0.65 },
          })
          .fromTo(
            q(`.${styles.media}`),
            { clipPath: "inset(0% 0% 0% 0% round 0px)" },
            { clipPath: "inset(10% 6.25% 10% 6.25% round 6px)", ease: "none" },
            0,
          )
          .fromTo(q(`.${styles.day}`), { scale: 1.18 }, { scale: 1, ease: "none" }, 0)
          .fromTo(q(`.${styles.night}`), { scale: 1.18, opacity: 0 }, { scale: 1, opacity: 1, ease: "none" }, 0.25)
          .to(q(`.${styles.content}`), { y: -140, opacity: 0, ease: "none", duration: 0.55 }, 0)
          .fromTo(q(`.${styles.after}`), { y: 40, opacity: 0 }, { y: 0, opacity: 1, ease: "none", duration: 0.35 }, 0.6);
      }

      return () => window.removeEventListener(INTRO_DONE, play);
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className={styles.hero} data-theme="dark" aria-label="Introduction">
      <div className={styles.stage}>
        <div className={styles.media}>
          <Image
            src={photos.heroDay}
            alt="The Lekki–Ikoyi Link Bridge over the Lagos lagoon"
            fill
            preload
            sizes="100vw"
            className={styles.day}
          />
          <Image src={photos.heroNight} alt="" fill sizes="100vw" className={styles.night} />
          <div className={styles.shade} />
        </div>

        <div className={styles.content}>
          <p className={`eyebrow ${styles.fade}`}>{hero.eyebrow}</p>
          <h1 className={`display h-xl ${styles.title}`}>
            <span className={styles.mask}>
              <span className={styles.line}>{hero.titleTop}</span>
            </span>
            <span className={styles.mask}>
              <span className={styles.line}>
                <em>{hero.titleEm}</em>
              </span>
            </span>
          </h1>
          <p className={`${styles.intro} ${styles.fade}`}>{hero.intro}</p>
          <div className={`${styles.actions} ${styles.fade}`}>
            <a href="#developments" className="btn btn--light">
              <span>View developments</span>
            </a>
            <a href="#contact" className="btn btn--ghost-light">
              <span>Book a viewing</span>
            </a>
          </div>
        </div>

        <p className={`display h-md ${styles.after}`}>
          Day or night, <em>Lagos is home.</em>
        </p>

        <div className={styles.bottom}>
          <span className={`eyebrow ${styles.fade}`}>{hero.location}</span>
          <button className={`${styles.cue} ${styles.fade}`} onClick={() => scrollToTarget("#company")}>
            <span className="eyebrow">Scroll to discover</span>
            <i />
            <ArrowDown size={14} />
          </button>
          <span className={`eyebrow ${styles.fade} ${styles.note}`}>Artistic impression</span>
        </div>
      </div>
    </section>
  );
}
