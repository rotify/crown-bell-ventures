"use client";

import { useEffect, useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { contact, developments } from "@/content/site";
import { ENQUIRE_EVENT } from "./Developments";
import { ArrowRight, WhatsApp } from "./Icons";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "sent";
type Errors = Partial<Record<"name" | "email" | "phone", string>>;

const GENERAL = "General enquiry";

export default function Contact() {
  const [interest, setInterest] = useState(GENERAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  // "Enquire about …" buttons in Developments pre-select the development here.
  useEffect(() => {
    const onEnquire = (e: Event) => setInterest((e as CustomEvent<string>).detail);
    window.addEventListener(ENQUIRE_EVENT, onEnquire);
    return () => window.removeEventListener(ENQUIRE_EVENT, onEnquire);
  }, []);

  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    `Hello Crown Bell Ventures, I'd like to know more about: ${interest}.`,
  )}`;

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (phone && !/^[+\d][\d\s()-]{6,}$/.test(phone)) next.phone = "Please check this number.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    // TODO (backend): send `Object.fromEntries(data)` to an API route, e.g. POST /api/enquiries.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  return (
    <section id="contact" className={styles.contact} data-theme="dark" aria-labelledby="contact-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <Reveal as="p" className={`eyebrow ${styles.eyebrow}`}>
            Contact
          </Reveal>
          <Reveal as="h2" id="contact-title" className="display h-lg">
            Let&rsquo;s find your <em>place.</em>
          </Reveal>
          <Reveal as="p" className={styles.lede} delay={0.1}>
            Tell us what you are looking for and a member of the team will get back to you within one working day. Prefer to chat? We are on WhatsApp.
          </Reveal>

          <Reveal className={styles.actions} delay={0.15}>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn--light">
              <WhatsApp />
              <span>Chat on WhatsApp</span>
            </a>
          </Reveal>

          <Reveal as="dl" className={styles.details} stagger={0.08}>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Office</dt>
              <dd>
                <a href={contact.mapUrl} target="_blank" rel="noreferrer">
                  {contact.addressLines.map((line) => (
                    <span key={line} style={{ display: "block" }}>
                      {line}
                    </span>
                  ))}
                </a>
                <a href={contact.mapUrl} target="_blank" rel="noreferrer" className={styles.directions}>
                  Get directions ↗
                </a>
              </dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>{contact.hours}</dd>
            </div>
          </Reveal>
        </div>

        <Reveal className={styles.formWrap} delay={0.1}>
          {status === "sent" ? (
            <div className={styles.sent} role="status">
              <p className="eyebrow">Thank you</p>
              <h3 className="display h-md">
                We&rsquo;ll be in <em>touch.</em>
              </h3>
              <p>Your enquiry about {interest} has been received.</p>
              <button className="btn btn--ghost-light" onClick={() => setStatus("idle")}>
                <span>Send another</span>
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={submit} noValidate>
              <Field label="Full name" name="name" autoComplete="name" error={errors.name} required />
              <div className={styles.row}>
                <Field label="Email" name="email" type="email" autoComplete="email" error={errors.email} required />
                <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" error={errors.phone} />
              </div>
              <label className={styles.field}>
                <span>I&rsquo;m interested in</span>
                <select name="interest" value={interest} onChange={(e) => setInterest(e.target.value)}>
                  <option>{GENERAL}</option>
                  {developments.map((d) => (
                    <option key={d.slug}>{d.name}</option>
                  ))}
                  <option>Selling or letting my property</option>
                  <option>Property management</option>
                  <option>Investment advice</option>
                </select>
              </label>
              <label className={styles.field}>
                <span>Message</span>
                <textarea name="message" rows={4} placeholder="Budget, timeline, number of bedrooms…" />
              </label>
              <button className="btn btn--light" type="submit" disabled={status === "sending"}>
                <span>{status === "sending" ? "Sending…" : "Send enquiry"}</span>
                <ArrowRight />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", autoComplete, error, required }: FieldProps) {
  return (
    <label className={styles.field} data-error={error ? "" : undefined}>
      <span>{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <small id={`${name}-error`} className={styles.error}>
          {error}
        </small>
      )}
    </label>
  );
}
