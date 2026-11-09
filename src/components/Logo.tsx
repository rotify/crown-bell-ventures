import { useId } from "react";

/**
 * Crownbell Ventures logo, redrawn from the client's artwork as a vector:
 * a crowned bell with a city skyline cut into it, a rim and a clapper.
 *
 * Colours follow the design system:
 *  - the bell and wordmark use `currentColor` (ink on light, paper on dark)
 *  - the crown, rim, clapper and feature tower use `--logo-accent` (brass)
 * The skyline is cut out of the bell with a mask, so the background shows through.
 */

type MarkProps = { size?: number; className?: string };

export function LogoMark({ size = 34, className }: MarkProps) {
  const id = useId().replace(/:/g, "");
  const maskId = `cbv-bell-${id}`;
  const accent = "var(--logo-accent, #9b7a4d)";

  return (
    <svg width={size} height={(size * 102) / 100} viewBox="0 0 100 102" fill="none" aria-hidden className={className}>
      <defs>
        <mask id={maskId}>
          <rect width="100" height="102" fill="white" />
          {/* skyline cut-outs */}
          <rect x="35.5" y="68" width="3" height="16" fill="black" />
          <rect x="40.5" y="59" width="3.6" height="25" fill="black" />
          <path d="M46 84 V50 L51 43 V84 Z" fill="black" />
          <rect x="52.6" y="46" width="4.6" height="38" fill="black" />
          <rect x="59" y="56" width="3.6" height="28" fill="black" />
          <rect x="64.4" y="66" width="3" height="18" fill="black" />
        </mask>
      </defs>

      {/* Crown */}
      <g data-part="crown" fill={accent}>
        <path d="M35 27 L37.6 13.5 L44.2 21 L50 9 L55.8 21 L62.4 13.5 L65 27 Z" />
        <circle cx="37.4" cy="11.4" r="2.3" />
        <circle cx="50" cy="6.6" r="2.5" />
        <circle cx="62.6" cy="11.4" r="2.3" />
        <rect x="35" y="28.6" width="30" height="2.6" rx="1.3" />
      </g>

      {/* Bell with skyline */}
      <g data-part="bell">
        <path
          d="M50 34 C37 34 31 43.5 31 56 L31 69 C31 77.5 25.5 83 19 87 L81 87 C74.5 83 69 77.5 69 69 L69 56 C69 43.5 63 34 50 34 Z"
          fill="currentColor"
          mask={`url(#${maskId})`}
        />
        {/* feature tower in brass */}
        <rect x="52.6" y="46" width="4.6" height="38" fill={accent} opacity="0.9" />
      </g>

      {/* Rim and clapper */}
      <g data-part="rim">
        <ellipse data-draw cx="50" cy="89.2" rx="33.5" ry="3.4" stroke={accent} strokeWidth="1.4" pathLength={1} />
        <circle cx="50" cy="96.6" r="4.4" fill={accent} />
      </g>
    </svg>
  );
}

type LogoProps = { className?: string; compact?: boolean };

/** Full lockup: mark + CROWNBELL wordmark + VENTURES LIMITED. */
export default function Logo({ className, compact = false }: LogoProps) {
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: compact ? 10 : 14 }}>
      <LogoMark size={compact ? 34 : 44} />
      <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: compact ? 22 : 28,
            letterSpacing: "0.08em",
            fontWeight: 400,
          }}
        >
          CROWNBELL
        </span>
        <span
          style={{
            fontSize: compact ? 7.5 : 9,
            letterSpacing: "0.34em",
            marginTop: compact ? 4 : 6,
            fontWeight: 500,
            color: "var(--logo-accent, #9b7a4d)",
          }}
        >
          VENTURES LIMITED
        </span>
      </span>
    </span>
  );
}
