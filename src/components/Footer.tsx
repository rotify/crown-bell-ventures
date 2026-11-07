"use client";

import { useSyncExternalStore } from "react";
import Logo from "./Logo";
import { brand, contact, legal, nav } from "@/content/site";
import { INTRO_REPLAY } from "./Intro";
import styles from "./Footer.module.css";

const noop = () => () => {};

/** Current year, read in the browser so the static build never goes stale. */
function useYear() {
  return useSyncExternalStore(noop, () => new Date().getFullYear(), () => 2026);
}

export default function Footer() {
  const year = useYear();
  return (
    <footer className={styles.footer} data-theme="dark">
      <div className={`container ${styles.top}`}>
        <Logo />
        <nav className={styles.nav} aria-label="Footer">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className={styles.contact}>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
          <span>{brand.city}</span>
        </div>
      </div>

      <p className={styles.giant} aria-hidden>
        Crown Bell
      </p>

      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} {brand.name}. All rights reserved.
        </span>
        <button className={styles.replay} onClick={() => window.dispatchEvent(new Event(INTRO_REPLAY))}>
          Replay the intro
        </button>
        <p className={styles.legal}>{legal}</p>
      </div>
    </footer>
  );
}
