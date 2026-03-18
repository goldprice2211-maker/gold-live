import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldliveprices.net"),

  title: {
    default: "سعر الذهب اليوم في الإمارات والخليج",
    template: "%s | Gold Live Prices",
  },

  description:
    "تابع سعر الذهب اليوم في الإمارات والسعودية وقطر والكويت وعُمان لحظة بلحظة. احسب سعر جرام الذهب عيار 24 و22 و21 و18 مع الرسوم البيانية والتحليلات وحاسبة زكاة الذهب.",

  keywords: [
    "سعر الذهب اليوم",
    "سعر الذهب في الامارات",
    "سعر الذهب الإمارات",
    "سعر الذهب السعودية",
    "سعر الذهب قطر",
    "سعر الذهب الكويت",
    "سعر الذهب عمان",
    "سعر جرام الذهب",
    "سعر اونصة الذهب",
    "gold price today",
    "gold price UAE",
    "gold gram price",
    "gold ounce price",
    "تحليلات الذهب",
    "Gold Live Prices",
    "حاسبة زكاة الذهب",
    "Gold Zakat Calculator",
    "العوامل التي تؤثر على أسعار الذهب عالميًا وتوقعات 2026",
    "كيف يتم تحديد سعر الذهب عالميًا",
    "هل الذهب استثمار آمن في أوقات التضخم",
    "حكم زكاة الذهب في الإسلام",
    "كيف يؤثر الدولار الأمريكي على سعر الذهب",
  ],

  alternates: {
    canonical: "https://goldliveprices.net",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "سعر الذهب اليوم في الإمارات والخليج",
    description:
      "تابع سعر الذهب اليوم في الإمارات والخليج مع تحديث مباشر ورسوم بيانية وتحليلات وحاسبة زكاة الذهب.",
    url: "https://goldliveprices.net",
    siteName: "Gold Live Prices",
    locale: "ar_AE",
    type: "website",
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-1466322893906496"
        />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1466322893906496"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5SXP4YKN8E"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5SXP4YKN8E');
          `}
        </Script>
      </body>
    </html>
  );
}
