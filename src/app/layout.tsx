import type { Metadata, Viewport } from "next";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource-variable/dm-sans";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Crown Bell Ventures | A new standard for living well",
  description:
    "Crown Bell Ventures is a real estate company delivering considered homes, developments and property services, from first conversation to keys and beyond.",
  openGraph: {
    title: "Crown Bell Ventures",
    description: "Homes, developments and investments shaped with care.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#141311",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-motion="on">
      <body>
        <a href="#company" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
