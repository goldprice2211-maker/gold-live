import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://goldliveprices.net'

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
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
    {
      url: `${baseUrl}/euro`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/usd`,
      lastModified: new Date(),
    },
  ]
}
