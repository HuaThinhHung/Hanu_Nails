import type { MetadataRoute } from "next";
import { collections } from "@/data/collections";
import { courses } from "@/data/courses";

const baseUrl = "https://hanunails.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/collections",
    "/mau-nail",
    "/gallery",
    "/pricing",
    "/academy",
    "/booking",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const collectionRoutes = collections.map((collection) => `/collections/${collection.id}`);
  const courseRoutes = courses.map((course) => `/academy/${course.id}`);

  return [...staticRoutes, ...collectionRoutes, ...courseRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
