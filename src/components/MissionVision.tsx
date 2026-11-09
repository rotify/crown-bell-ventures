import Reveal from "./Reveal";
import { LogoMark } from "./Logo";
import { missionVision } from "@/content/site";
import styles from "./MissionVision.module.css";

/** Mission and vision, shown side by side on a dark band. */
export default function MissionVision() {
  const items = [missionVision.mission, missionVision.vision];

  return (
    <section id="mission" className={styles.band} data-theme="dark" aria-label="Mission and vision">
      <LogoMark size={520} className={styles.watermark} />
      <div className={`container ${styles.grid}`}>
        {items.map((item, i) => (
          <Reveal key={item.label} className={styles.item} delay={i * 0.12}>
            <p className={`eyebrow ${styles.label}`}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </p>
            <h2 className={`display ${styles.lead}`}>
              {item.lead} <em>{item.leadEm}</em>
            </h2>
            <p className={styles.text}>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
