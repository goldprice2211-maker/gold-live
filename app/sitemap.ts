import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goldliveprices.net";

  // 📂 مسار مجلد المقالات
  const blogDir = path.join(process.cwd(), "app/blog");

  // 🧠 قراءة أسماء المجلدات (المقالات)
  const blogSlugs = fs
    .readdirSync(blogDir)
    .filter((file) => {
      const fullPath = path.join(blogDir, file);
      return fs.statSync(fullPath).isDirectory();
    });

  // 🔥 تحويلها إلى روابط
  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/zakat-gold-calculator`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },

    // Countries
    {
      url: `${baseUrl}/uae`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/saudi`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/qatar`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kuwait`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/oman`,
      lastModified: new Date(),
    },

    // Currencies
    {
      url: `${baseUrl}/usd`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/euro`,
      lastModified: new Date(),
    },

    // 🔥 المقالات (Auto)
    ...blogUrls,
  ];
}
