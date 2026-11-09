"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { developments, type DevelopmentStatus } from "@/content/site";
import { scrollToTarget } from "@/lib/motion";
import { ArrowRight } from "./Icons";
import styles from "./Developments.module.css";

export const ENQUIRE_EVENT = "cbv:enquire";

const statusFilters: ("All" | DevelopmentStatus)[] = ["All", "Selling now", "Off-plan", "Completed"];
const cityFilters = ["All cities", "Lagos", "Abuja"] as const;

export default function Developments() {
  const [filter, setFilter] = useState<(typeof statusFilters)[number]>("All");
  const [city, setCity] = useState<(typeof cityFilters)[number]>("All cities");
  const list = developments.filter(
    (d) => (filter === "All" || d.status === filter) && (city === "All cities" || d.city === city),
  );

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
            Homes and land across Lagos and Abuja, each with a verified title and finished to the same standard.
          </p>
          <div className={styles.filters}>
            <div className="chips" role="group" aria-label="Filter by status">
              {statusFilters.map((f) => (
                <button key={f} className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                  {f}
                </button>
              ))}
            </div>
            <div className="chips" role="group" aria-label="Filter by city">
              {cityFilters.map((c) => (
                <button key={c} className="chip" aria-pressed={city === c} onClick={() => setCity(c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {list.length === 0 && <p className={`muted ${styles.empty}`}>No developments match those filters yet.</p>}

      <ul className={styles.grid}>
        {list.map((d, i) => (
          <li key={d.slug} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className={`frame ${styles.media}`}>
              <Image src={d.image} alt={`${d.name}, ${d.location}`} fill sizes="(max-width: 800px) 100vw, 50vw" />
              <span className={styles.badges}>
                <span className={styles.status} data-status={d.status}>
                  {d.status}
                </span>
                {d.paymentPlan && <span className={styles.status}>Payment plan</span>}
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
                <dt>{d.type === "Serviced plots" ? "Plot sizes" : "Homes"}</dt>
                <dd>{d.bedrooms}</dd>
              </div>
              <div>
                <dt>Title</dt>
                <dd>{d.title}</dd>
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
