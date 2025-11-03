import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://plconsulting.az/az", lastModified: new Date() },
    { url: "https://plconsulting.az/en", lastModified: new Date() },
    { url: "https://plconsulting.az/ru", lastModified: new Date() },
  ];
}
