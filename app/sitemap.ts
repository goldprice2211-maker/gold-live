import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://goldliveprices.net'

  return [
    {
      url: `${baseUrl}`,
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

    // Blog Articles
    {
      url: `${baseUrl}/blog/gold-market-2026`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/how-gold-price-is-determined`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/is-gold-a-safe-investment-during-inflation`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/zakat-gold-ruling`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/dollar-impact-gold`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/gold-oil-dollar-relation`,
      lastModified: new Date(),
    },
  ]
}
