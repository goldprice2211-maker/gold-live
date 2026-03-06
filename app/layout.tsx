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

  title: "سعر الذهب اليوم في الإمارات والخليج | تحديث مباشر",
  description:
    "تابع سعر الذهب اليوم في الإمارات، السعودية، الكويت، قطر، عمان واليورو. تحديث مباشر لكل دقيقة لأسعار الذهب عيار 24 و22 و21 و18.",
  icons: {
    icon: "/icon.png",
  },

  // ✅ الأفضل تكون Array
  keywords: [
    "سعر الذهب اليوم",
    "سعر الذهب الإمارات",
    "سعر الذهب السعودية",
    "سعر الذهب الكويت",
    "سعر الذهب قطر",
    "سعر الذهب عمان",
    "سعر الذهب باليورو",
    "gold price today",
    "gold price UAE",
  ],

  // ✅ رابط أساسي رسمي (Canonical)
  alternates: {
    canonical: "https://goldliveprices.net",
  },

  // ✅ يساعد جوجل يفهرس صح
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
    title: "سعر الذهب اليوم - تحديث مباشر",
    description:
      "أسعار الذهب اليوم لجميع العيارات في الإمارات والخليج مع تحديث مباشر.",
    url: "https://goldliveprices.net",
    siteName: "Gold Live Prices",
    locale: "ar_AE",
    type: "website",
  },

  // اختياري: لو تبغى تضيف كود التحقق من Search Console (HTML tag)
  // verification: {
  //   google: "PUT_YOUR_VERIFICATION_CODE_HERE",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=g-5SXP4YKN8E"
          strategy="afterInteractive"
          />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer=window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5SXP4YKN8E');
          `}
        </Script>
      </body>
    </html>
  );
}
