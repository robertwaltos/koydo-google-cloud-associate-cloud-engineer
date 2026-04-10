import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://google-cloud-associate-cloud-engineer.koydo.app/sitemap.xml",
    host: "https://google-cloud-associate-cloud-engineer.koydo.app",
  };
}
