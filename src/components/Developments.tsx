"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { developments, type DevelopmentStatus } from "@/content/site";
import { scrollToTarget } from "@/lib/motion";
import { ArrowRight } from "./Icons";
import styles from "./Developments.module.css";

export const ENQUIRE_EVENT = "cbv:enquire";

const filters: ("All" | DevelopmentStatus)[] = ["All", "Selling now", "Off-plan", "Completed"];

export default function Developments() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = filter === "All" ? developments : developments.filter((d) => d.status === filter);

  const enquire = (name: string) => {
    window.dispatchEvent(new CustomEvent(ENQUIRE_EVENT, { detail: name }));
    scrollToTarget("#contact");
  };

  return (
    <section id="developments" className={`section container ${styles.developments}`} data-theme="light" aria-labelledby="developments-title">
      <Reveal className="section-head">
        <span className="section-head__index">02</span>
        <span className="eyebrow">Developments</span>
      </Reveal>

      <div className={styles.top}>
        <Reveal as="h2" id="developments-title" className="display h-lg">
          Homes with <em>presence.</em>
        </Reveal>
        <Reveal className={styles.intro} delay={0.1}>
          <p className="lede">
            A growing portfolio of residences, each chosen for its location and finished to the same standard.
          </p>
          <div className="chips" role="group" aria-label="Filter developments">
            {filters.map((f) => (
              <button key={f} className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <ul className={styles.grid}>
        {list.map((d, i) => (
          <li key={d.slug} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className={`frame ${styles.media}`}>
              <Image src={d.image} alt={`${d.name}, ${d.location}`} fill sizes="(max-width: 800px) 100vw, 50vw" />
              <span className={styles.status} data-status={d.status}>
                {d.status}
              </span>
            </div>
            <div className={styles.meta}>
              <div>
                <h3 className={styles.name}>{d.name}</h3>
                <p className="eyebrow muted">{d.location}</p>
              </div>
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <p className={styles.summary}>{d.summary}</p>
            <dl className={styles.specs}>
              <div>
                <dt>Type</dt>
                <dd>{d.type}</dd>
              </div>
              <div>
                <dt>Homes</dt>
                <dd>{d.bedrooms}</dd>
              </div>
              <div>
                <dt>Price</dt>
                <dd>On request</dd>
              </div>
            </dl>
            <button className={styles.enquire} onClick={() => enquire(d.name)}>
              Enquire about {d.name} <ArrowRight />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
