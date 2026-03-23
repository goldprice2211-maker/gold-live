import type { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";

export const metadata: Metadata = {
  title: "من نحن | About Us - Gold Live Prices",
  description:
    "تعرف على موقع Gold Live Prices، مهمتنا في تقديم أسعار الذهب المباشرة، والمحتوى التعليمي والتحليلي الخاص بسوق الذهب.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNavbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-white/10 bg-gradient-to-b from-amber-400/10 to-transparent">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="mb-3 text-sm font-medium text-amber-300">Gold Live Prices</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              من نحن
            </h1>
            <p className="mt-4 max-w-2xl leading-8 text-zinc-300">
              منصة مستقلة تهدف إلى تقديم أسعار الذهب بشكل مباشر، ومحتوى واضح
              ومفيد يساعد القارئ على فهم السوق ومتابعة أهم العوامل المؤثرة عليه.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">ماذا نقدم؟</h2>
              <div className="space-y-4 leading-8 text-zinc-300">
                <p>
                  نوفر تحديثات لأسعار الذهب، إلى جانب مقالات تعليمية وتحليلية
                  تشرح العوامل التي تؤثر على حركة الذهب عالميًا، مثل التضخم،
                  وأسعار الفائدة، والدولار الأمريكي، والأحداث الاقتصادية
                  والسياسية.
                </p>
                <p>
                  كما نوفر محتوى مبسطًا يساعد الزائر على فهم أساسيات سوق الذهب،
                  سواء كان مهتمًا بمتابعة الأسعار اليومية أو بالاطلاع على
                  المعلومات العامة المتعلقة بالذهب والزكاة والاستثمار.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">رسالتنا</h2>
              <div className="space-y-4 leading-8 text-zinc-300">
                <p>
                  هدفنا هو تقديم معلومات واضحة وسريعة وموثوقة تساعد المستخدم على
                  متابعة سوق الذهب واتخاذ قرارات أكثر وعيًا بناءً على فهم أفضل
                  للبيانات والعوامل المؤثرة.
                </p>
                <p>
                  نحن نؤمن بأهمية تبسيط المعلومات المالية وتقديمها بلغة مفهومة
                  للقارئ، مع الحفاظ على تصميم سهل وتجربة استخدام مريحة على مختلف
                  الأجهزة.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">لمن هذا الموقع؟</h2>
              <p className="leading-8 text-zinc-300">
                هذا الموقع موجه لكل من يهتم بمتابعة أسعار الذهب، سواء كانوا
                أفرادًا يرغبون في معرفة السعر اليومي، أو أشخاصًا مهتمين
                بالادخار، أو قراء يبحثون عن محتوى يشرح أساسيات سوق الذهب
                والعوامل التي تحركه.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">تنبيه مهم</h2>
              <p className="leading-8 text-zinc-300">
                المعلومات المعروضة في الموقع لأغراض تعليمية ومعلوماتية فقط، ولا
                تُعد نصيحة استثمارية أو مالية أو شرعية خاصة. قد تختلف الأسعار
                والبيانات بحسب المصدر والتوقيت والسوق المحلي، لذلك يُنصح دائمًا
                بالرجوع إلى المصادر الرسمية أو المختصين عند الحاجة.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-2xl font-bold">About Us</h2>
            <div className="space-y-4 leading-8 text-zinc-400">
              <p>
                Gold Live Prices is an independent platform focused on providing
                live gold price updates and informative content that helps users
                better understand the gold market.
              </p>
              <p>
                We publish price updates, educational articles, and simple market
                explanations covering topics such as inflation, interest rates,
                the US dollar, and the key factors that influence global gold
                prices.
              </p>
              <p>
                Our mission is to make gold market information easier to access,
                easier to understand, and more useful for everyday readers and
                market followers.
              </p>
              <p>
                The content on this website is provided for informational and
                educational purposes only and should not be considered financial,
                investment, or personalized religious advice.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
