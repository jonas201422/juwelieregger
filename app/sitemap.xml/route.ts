import { site } from "@/content/site";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.baseUrl;
  const routes = ["/", "/anfrage", "/kontakt", "/impressum", "/datenschutz"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
}
