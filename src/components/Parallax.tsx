"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type ParallaxProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  /** How far the image drifts inside its frame, in percent. */
  amount?: number;
};

/** An image that drifts slowly inside its frame as the page scrolls. */
export default function Parallax({ src, alt, className, sizes = "50vw", amount = 12 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const img = ref.current?.querySelector("img");
      if (!img) return;
      gsap.fromTo(
        img,
        { yPercent: -amount / 2, scale: 1 + amount / 100 },
        {
          yPercent: amount / 2,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`frame ${className ?? ""}`}>
      <Image src={src} alt={alt} fill sizes={sizes} />
    </div>
  );
}
