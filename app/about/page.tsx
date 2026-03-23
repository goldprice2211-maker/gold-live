import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن | About Us - Gold Live Prices",
  description:
    "تعرف على موقع Gold Live Prices، مهمتنا في تقديم أسعار الذهب المباشرة والمحتوى التعليمي حول سوق الذهب.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-amber-400/10 to-transparent">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-4xl font-bold md:text-5xl">من نحن</h1>
          <p className="mt-4 leading-8 text-zinc-300">
            Gold Live Prices هو موقع مستقل يقدم أسعار الذهب بشكل مباشر ومحتوى
            تعليمي يساعد المستخدمين على فهم السوق بشكل أوضح.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold mb-3">ماذا نقدم؟</h2>
          <p className="text-zinc-300 leading-8">
            نقدم تحديثات أسعار الذهب بالإضافة إلى مقالات تحليلية تشرح تأثير
            التضخم، الفائدة، الدولار، والعوامل الاقتصادية على الذهب.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold mb-3">رسالتنا</h2>
          <p className="text-zinc-300 leading-8">
            هدفنا هو تبسيط المعلومات المالية وتقديمها بشكل واضح يساعد المستخدم
            على اتخاذ قرارات أفضل.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold mb-3">تنبيه مهم</h2>
          <p className="text-zinc-300 leading-8">
            المعلومات لأغراض تعليمية فقط ولا تعتبر نصيحة استثمارية.
          </p>
        </div>
      </section>
    </main>
  );
}
