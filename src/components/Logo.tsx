type MarkProps = { size?: number; className?: string; animated?: boolean };

/** The Crown Bell mark: a bell with a three-point crown. Stroke-only so it can be "drawn" in the intro. */
export function LogoMark({ size = 34, className, animated = false }: MarkProps) {
  return (
    <svg
      width={size}
      height={(size * 44) / 40}
      viewBox="0 0 40 44"
      fill="none"
      aria-hidden
      className={className}
      data-animated={animated || undefined}
    >
      <path
        data-draw
        d="M11 12.5 L13.6 4.5 L20 9.2 L26.4 4.5 L29 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        data-draw
        d="M11 15.5 C11 11.8 29 11.8 29 15.5 L29 24.5 C29 29.5 32.5 31.5 35 33.5 L5 33.5 C7.5 31.5 11 29.5 11 24.5 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path data-draw d="M16.5 37.2 a3.5 3.5 0 0 0 7 0" stroke="currentColor" strokeWidth="1.4" pathLength={1} />
    </svg>
  );
}

type LogoProps = { className?: string; compact?: boolean };

/** Full lockup: mark + wordmark. */
export default function Logo({ className, compact = false }: LogoProps) {
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <LogoMark size={compact ? 26 : 32} />
      <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{ fontSize: compact ? 15 : 17, letterSpacing: "0.32em", fontWeight: 400 }}>CROWN BELL</span>
        <span style={{ fontSize: 8.5, letterSpacing: "0.5em", marginTop: 6, opacity: 0.75 }}>VENTURES</span>
      </span>
    </span>
  );
}
