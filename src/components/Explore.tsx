"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import { explore, exploreCategories, type ExploreCategory } from "@/content/site";
import { ArrowUpRight, Play } from "./Icons";
import styles from "./Explore.module.css";

type Filter = "All" | ExploreCategory;

/** Filterable scene gallery that opens into the full-screen viewer. */
export default function Explore() {
  const [filter, setFilter] = useState<Filter>("All");
  const [viewer, setViewer] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const list = filter === "All" ? explore : explore.filter((p) => p.category === filter);

  return (
    <section id="explore" className={`section container ${styles.explore}`} data-theme="light" aria-labelledby="explore-title">
      <Reveal className="section-head">
        <span className="section-head__index">04</span>
        <span className="eyebrow">Explore every detail</span>
      </Reveal>

      <div className={styles.top}>
        <Reveal as="h2" id="explore-title" className="display h-lg">
          {explore.length} scenes, <em>one standard.</em>
        </Reveal>
        <Reveal className={styles.controls} delay={0.1}>
          <div className="chips" role="group" aria-label="Filter scenes">
            {(["All", ...exploreCategories] as Filter[]).map((c) => (
              <button key={c} className="chip" aria-pressed={filter === c} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
          <button className="btn btn--solid" onClick={() => {
              setAutoPlay(true);
              setViewer(0);
            }}
          >
            <Play size={12} />
            <span>Play slideshow</span>
          </button>
        </Reveal>
      </div>

      <ul className={styles.grid} key={filter}>
        {list.map((p, i) => (
          <li key={p.src} className={styles.cell} style={{ animationDelay: `${Math.min(i, 10) * 0.05}s` }}>
            <button className={`frame ${styles.tile}`} onClick={() => {
                setAutoPlay(false);
                setViewer(i);
              }}
              aria-label={`Open ${p.title}`}>
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 700px) 50vw, 25vw" />
              <span className={styles.label}>
                <span>{p.title}</span>
                <ArrowUpRight size={12} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <p className={`muted ${styles.note}`}>Illustrative images. Final finishes may vary by development.</p>

      <Lightbox
        key={`${autoPlay}-${viewer === null ? "closed" : "open"}`}
        autoPlay={autoPlay}
        items={list}
        index={viewer} onChange={setViewer} onClose={() => setViewer(null)}
        label="Explore every detail"
      />
    </section>
  );
}
