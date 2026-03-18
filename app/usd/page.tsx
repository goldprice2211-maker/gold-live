import Home from "../page";

export const metadata = {
  title: "سعر الذهب اليوم بالدولار",
  description:
    "تابع سعر الذهب اليوم بالدولار لجميع العيارات 24 و22 و21 و18 مع تحديث مباشر ورسوم بيانية.",
  alternates: {
    canonical: "https://goldliveprices.net/usd",
  },
};

export default function UsdPage() {
  return <Home country="الدولار الأمريكي" defaultCurrency="USD" />;
}
