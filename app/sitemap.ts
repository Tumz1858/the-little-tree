import type { MetadataRoute } from "next";
import { absoluteUrl, pagePaths } from "./lib/seo";

const pages = Object.values(pagePaths);

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) => {
    const lastModified = new Date();
    return [
      { url: absoluteUrl(path), lastModified },
      { url: absoluteUrl(`/en${path === "/" ? "" : path}`), lastModified },
    ];
  });
}
