import type { MetadataRoute } from "next";
import { siteUrlForRobots } from "./lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrlForRobots}/sitemap.xml`,
  };
}
