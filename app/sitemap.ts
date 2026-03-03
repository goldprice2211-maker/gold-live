export default function sitemap() {
  const base = "https://gold-live.vercel.app";
  const now = new Date();

  return [
    { url: base, lastModified: now },
    { url: `${base}/uae`, lastModified: now },
    { url: `${base}/saudi`, lastModified: now },
    { url: `${base}/qatar`, lastModified: now },
    { url: `${base}/kuwait`, lastModified: now },
    { url: `${base}/oman`, lastModified: now },
    { url: `${base}/euro`, lastModified: now },
    { url: `${base}/usd`, lastModified: now },
  ];
}
