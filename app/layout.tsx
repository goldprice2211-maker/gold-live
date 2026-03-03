import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "سعر الذهب اليوم في الإمارات والخليج | تحديث مباشر",
  description:
    "تابع سعر الذهب اليوم في الإمارات، السعودية، الكويت، قطر، عمان واليورو. تحديث مباشر لكل دقيقة لأسعار الذهب عيار 24 و22 و21 و18.",
  keywords: [
    "سعر الذهب اليوم",
    "سعر الذهب الإمارات",
    "سعر الذهب السعودية",
    "سعر الذهب الكويت",
    "gold price today",
    "gold price UAE"
  ],
  openGraph: {
    title: "سعر الذهب اليوم - تحديث مباشر",
    description:
      "أسعار الذهب اليوم لجميع العيارات في الإمارات والخليج مع تحديث مباشر.",
    url: "https://goldliveprices.net",
    siteName: "Gold Live Prices",
    locale: "ar_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
