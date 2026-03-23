import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن | About Us - Gold Live Prices",
  description:
    "تعرف على موقع Gold Live Prices، مهمتنا في تقديم أسعار الذهب المباشرة، والمحتوى التعليمي والتحليلي الخاص بسوق الذهب.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-amber-400/10 to-transparent">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-3 text-sm font-medium text-amber-300">
            Gold Live Prices
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            من نحن
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            Gold Live Prices هو موقع مستقل يركز على تقديم أسعار الذهب بشكل مباشر
            ومحتوى معلوماتي يساعد المستخدمين على متابعة سوق الذهب بصورة أوضح
            وأسهل، مع توفير محتوى تعليمي وتحليلي يساعد القارئ على فهم السوق
            والعوامل التي تؤثر عليه.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">ماذا نقدم؟</h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                نعمل على توفير تحديثات لأسعار الذهب، إلى جانب مقالات تعليمية
                وتحليلية تشرح العوامل التي تؤثر على حركة الذهب عالميًا، مثل
                التضخم، وأسعار الفائدة، والدولار الأمريكي، والأحداث الاقتصادية
                والسياسية.
              </p>
              <p>
                كما نوفر محتوى يساعد الزائر على فهم أساسيات سوق الذهب بطريقة
                مبسطة، سواء كان مهتمًا بمتابعة الأسعار اليومية أو بالاطلاع على
                المعلومات العامة المتعلقة بالذهب، مثل الزكاة والاستثمار وتحليل
                الاتجاهات العامة في السوق.
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
            <h2 className="mb-3 text-2xl font-bold text-white">
              لمن هذا الموقع؟
            </h2>
            <p className="leading-8 text-zinc-300">
              هذا الموقع موجه لكل من يهتم بمتابعة أسعار الذهب، سواء كانوا أفرادًا
              يرغبون في معرفة السعر اليومي، أو أشخاصًا مهتمين بالادخار، أو قراء
              يبحثون عن محتوى يشرح أساسيات سوق الذهب والعوامل التي تحركه بشكل
              عام، أو حتى من يبحثون عن أدوات مساعدة مثل حاسبة زكاة الذهب.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              ما الذي يميز الموقع؟
            </h2>
            <p className="leading-8 text-zinc-300">
              نركز على تقديم محتوى واضح وسهل القراءة، مع تصميم يساعد الزائر على
              الوصول السريع للمعلومة، سواء كانت سعر الذهب الحالي أو مقالًا
              يشرح عاملًا اقتصاديًا مثل التضخم أو الفائدة أو تأثير الدولار على
              الذهب.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
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
  );
}
