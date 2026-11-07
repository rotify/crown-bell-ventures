"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/content/site";
import { lockScroll, scrollToTarget } from "@/lib/motion";
import styles from "./Header.module.css";

/**
 * Fixed header.
 *  - Turns light-on-dark over dark sections (any element with data-theme="dark").
 *  - Highlights the nav link of the section in view.
 *  - Full-screen menu on small screens.
 */
export default function Header() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Read the theme of whatever sits under the middle of the header.
    const headerEl = document.querySelector<HTMLElement>(`.${styles.header}`);
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const y = (headerEl?.offsetHeight ?? 76) / 2;
      const under = document
        .elementsFromPoint(window.innerWidth / 2, y)
        .find((el) => !headerEl?.contains(el) && el.closest("[data-theme]"));
      const themed = under?.closest<HTMLElement>("[data-theme]");
      if (themed) setDark(themed.dataset.theme === "dark");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // A thin band at the top of the viewport, where the header sits.
    const band = { rootMargin: "0px 0px -94% 0px", threshold: 0 };

    const ids = nav.map((n) => n.href.slice(1));
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, band);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      navObserver.disconnect();
    };
  }, []);

  const toggleMenu = (next: boolean) => {
    setOpen(next);
    lockScroll(next);
  };

  const go = (href: string) => {
    toggleMenu(false);
    // Let the menu close before scrolling.
    requestAnimationFrame(() => scrollToTarget(href));
  };

  return (
    <>
      <header
        className={styles.header}
        data-dark={dark && !open ? "" : undefined}
        data-scrolled={scrolled ? "" : undefined}
        data-open={open ? "" : undefined}
      >
        <a
          href="#top"
          className={styles.brand}
          aria-label="Crown Bell Ventures, back to top"
          onClick={(e) => {
            e.preventDefault();
            go("#top");
          }}
        >
          <Logo compact />
        </a>

        <nav className={styles.nav} aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} aria-current={active === item.href.slice(1) ? "true" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.cta}>
          Book a viewing
        </a>

        <button
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => toggleMenu(!open)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={styles.menu} data-open={open ? "" : undefined} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${0.08 + i * 0.05}s` : "0s" }}
              onClick={(e) => {
                e.preventDefault();
                go(item.href);
              }}
            >
              <span className={styles.menuIndex}>{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
