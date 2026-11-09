/**
 * Custom next/image loader.
 *
 * Unsplash is already an image CDN that resizes on request, so we ask it for the
 * exact width instead of routing through the Next.js optimizer (which was timing
 * out while downloading full-size originals). Local images in /public are served as-is.
 */
type LoaderArgs = { src: string; width: number; quality?: number };

export default function imageLoader({ src, width, quality }: LoaderArgs) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    // Cap at 2400px: larger files are slow over typical connections and barely sharper.
    url.searchParams.set("w", String(Math.min(width, 2400)));
    url.searchParams.set("q", String(quality ?? 75));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    return url.toString();
  }
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
}
