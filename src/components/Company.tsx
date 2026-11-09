import Reveal from "./Reveal";
import Parallax from "./Parallax";
import { company, photos } from "@/content/site";
import styles from "./Company.module.css";

export default function Company() {
  return (
    <section id="company" className={`section container ${styles.company}`} data-theme="light" aria-labelledby="company-title">
      <Reveal className="section-head">
        <span className="section-head__index">{company.index}</span>
        <span className="eyebrow">{company.eyebrow}</span>
      </Reveal>

      <div className={styles.grid}>
        <Reveal as="h2" id="company-title" className={`display h-lg ${styles.statement}`}>
          {company.statement} <em>{company.statementEm}</em>
        </Reveal>

        <Reveal className={styles.body} stagger={0.12}>
          {company.body.map((p) => (
            <p key={p.slice(0, 20)} className="lede">
              {p}
            </p>
          ))}
        </Reveal>
      </div>

      <div className={styles.media}>
        <Parallax src={photos.modernFacade} alt="Modern Lagos home facade" className={styles.tall} sizes="(max-width: 800px) 100vw, 40vw" />
        <div className={styles.side}>
          <Parallax src={photos.lagosAerial} alt="Aerial view of Lagos by the water" className={styles.wide} sizes="(max-width: 800px) 100vw, 50vw" amount={16} />
          <Reveal as="ol" className={styles.principles} stagger={0.1}>
            {company.principles.map((p, i) => (
              <li key={p.title}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p className="muted">{p.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
