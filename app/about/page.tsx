import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "من نحن | About Us - Gold Live Prices",
  description:
    "تعرف على موقع Gold Live Prices، مهمتنا في تقديم أسعار الذهب المباشرة، والمحتوى التعليمي والتحليلي الخاص بسوق الذهب.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl space-y-8">

        {/* زر الرجوع */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-sm text-amber-400 hover:underline"
          >
            ← الصفحة الرئيسية
          </Link>
        </div>

        <header className="space-y-3">
          <h1 className="text-3xl font-bold md:text-4xl">من نحن</h1>
          <p className="leading-8 text-zinc-300">
            Gold Live Prices هو موقع مستقل يركز على تقديم أسعار الذهب بشكل مباشر
            ومحتوى معلوماتي يساعد المستخدمين على متابعة سوق الذهب بصورة أوضح
            وأسهل.
          </p>
        </header>

        <section className="space-y-4 leading-8 text-zinc-300">
          <h2 className="text-2xl font-bold text-white">ماذا نقدم؟</h2>
          <p>
            نعمل على توفير تحديثات لأسعار الذهب، إلى جانب مقالات تعليمية وتحليلية
            تشرح العوامل التي تؤثر على حركة الذهب عالميًا، مثل التضخم، وأسعار
            الفائدة، والدولار الأمريكي، والأحداث الاقتصادية والسياسية.
          </p>
          <p>
            كما نوفر أدوات ومحتوى يساعد الزائر على فهم أساسيات سوق الذهب بطريقة
            مبسطة، سواء كان مهتمًا بمتابعة الأسعار اليومية أو بالاطلاع على
            المعلومات العامة المتعلقة بالذهب والزكاة والاستثمار.
          </p>
        </section>

        <section className="space-y-4 leading-8 text-zinc-300">
          <h2 className="text-2xl font-bold text-white">رسالتنا</h2>
          <p>
            هدفنا هو تقديم معلومات واضحة وسريعة وموثوقة تساعد المستخدم على متابعة
            سوق الذهب واتخاذ قرارات أكثر وعيًا بناءً على فهم أفضل للبيانات
            والعوامل المؤثرة.
          </p>
          <p>
            نحن نؤمن بأهمية تبسيط المعلومات المالية وتقديمها بلغة مفهومة للقارئ،
            مع الحفاظ على تصميم سهل وتجربة استخدام مريحة على مختلف الأجهزة.
          </p>
        </section>

        <section className="space-y-4 leading-8 text-zinc-300">
          <h2 className="text-2xl font-bold text-white">لمن هذا الموقع؟</h2>
          <p>
            هذا الموقع موجه لكل من يهتم بمتابعة أسعار الذهب، سواء كانوا أفرادًا
            يرغبون في معرفة السعر اليومي، أو أشخاصًا مهتمين بالادخار، أو قراء
            يبحثون عن محتوى يشرح أساسيات سوق الذهب والعوامل التي تحركه.
          </p>
        </section>

        <section className="space-y-4 leading-8 text-zinc-300">
          <h2 className="text-2xl font-bold text-white">تنبيه مهم</h2>
          <p>
            المعلومات المعروضة في الموقع لأغراض تعليمية ومعلوماتية فقط، ولا تُعد
            نصيحة استثمارية أو مالية أو شرعية خاصة. قد تختلف الأسعار والبيانات
            بحسب المصدر والتوقيت والسوق المحلي، لذلك يُنصح دائمًا بالرجوع إلى
            المصادر الرسمية أو المختصين عند الحاجة.
          </p>
        </section>

        <hr className="border-zinc-700" />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">About Us</h2>
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
        </section>

      </div>
    </main>
  );
}
