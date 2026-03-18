import Home from "../page";

export const metadata = {
  title: "سعر الذهب اليوم في الإمارات",
  description:
    "تابع سعر الذهب اليوم في الإمارات لجميع العيارات 24 و22 و21 و18 مع تحديث مباشر ورسوم بيانية.",
  alternates: {
    canonical: "https://goldliveprices.net/uae",
  },
};

export default function UaePage() {
  return <Home country="الإمارات" defaultCurrency="AED" />;
}
