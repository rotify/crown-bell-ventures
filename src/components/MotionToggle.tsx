"use client";

import { gsap } from "@/lib/gsap";
import { setMotionEnabled, useMotionEnabled } from "@/lib/motion";
import { Pause, Play } from "./Icons";
import styles from "./MotionToggle.module.css";

/** Floating button that pauses or resumes animations, like the original design. */
export default function MotionToggle() {
  const on = useMotionEnabled();

  const toggle = () => {
    const next = !on;
    setMotionEnabled(next);
    gsap.globalTimeline.timeScale(next ? 1 : 0.0001);
  };

  return (
    <button className={styles.toggle} onClick={toggle} aria-pressed={!on}>
      {on ? <Pause size={11} /> : <Play size={11} />}
      <span>{on ? "Animations" : "Animations off"}</span>
    </button>
  );
}
