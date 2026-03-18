import Home from "../page";

export const metadata = {
  title: "سعر الذهب اليوم في السعودية",
  description:
    "تابع سعر الذهب اليوم في السعودية لجميع العيارات 24 و22 و21 و18 مع تحديث مباشر ورسوم بيانية.",
  alternates: {
    canonical: "https://goldliveprices.net/saudi",
  },
};

export default function SaudiPage() {
  return <Home country="السعودية" defaultCurrency="SAR" />;
}
