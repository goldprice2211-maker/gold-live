export const metadata = {
  title: "من نحن | About Us - Gold Live Prices",
  description:
    "تعرف على موقع Gold Live Prices ومهمتنا في تقديم أسعار الذهب بشكل مباشر.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-8">

        <h1 className="text-3xl font-bold">من نحن</h1>
        <div className="space-y-4 text-zinc-300 leading-8">
          <p>
            Gold Live Prices هو موقع مستقل يوفر تحديثات مباشرة لأسعار الذهب
            في الإمارات والخليج وأوروبا.
          </p>
          <p>
            هدفنا هو تقديم معلومات دقيقة وسريعة تساعد الأفراد والمستثمرين
            في متابعة سوق الذهب.
          </p>
          <p>
            المعلومات المعروضة لأغراض تعليمية ومعلوماتية فقط وليست نصيحة استثمارية.
          </p>
        </div>

        <hr className="border-zinc-700" />

        <h2 className="text-2xl font-bold">About Us</h2>
        <div className="space-y-4 text-zinc-400 leading-8">
          <p>
            Gold Live Prices is an independent platform providing real-time gold price updates
            across the UAE, Gulf region, and Europe.
          </p>
          <p>
            Our mission is to deliver fast, accurate, and reliable market information
            to help users stay informed about gold prices.
          </p>
          <p>
            All information provided is for informational purposes only and not financial advice.
          </p>
        </div>

      </div>
    </main>
  );
}
