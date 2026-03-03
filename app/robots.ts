export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://gold-live.vercel.app/sitemap.xml",
  };
}
