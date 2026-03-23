import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشروط والأحكام | Terms & Conditions - Gold Live Prices",
  description:
    "اطلع على الشروط والأحكام الخاصة باستخدام موقع Gold Live Prices والمحتوى المعروض فيه، بما في ذلك دقة المعلومات وإخلاء المسؤولية واستخدام الموقع.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-amber-400/10 to-transparent">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-3 text-sm font-medium text-amber-300">
            Gold Live Prices
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            الشروط والأحكام
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام
            التالية. يرجى قراءة هذه الصفحة بعناية قبل استخدام الموقع أو
            الاعتماد على أي معلومات معروضة فيه.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              استخدام الموقع
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                يتم توفير موقع Gold Live Prices لأغراض معلوماتية وتعليمية فقط،
                ويهدف إلى عرض أسعار الذهب ومقالات عامة مرتبطة بالسوق والعوامل
                المؤثرة عليه.
              </p>
              <p>
                باستخدامك للموقع، فإنك توافق على استخدامه بطريقة قانونية
                ومسؤولة، وعدم إساءة استخدام المحتوى أو محاولة تعطيل الخدمات أو
                الوصول إلى أجزاء غير مخصصة للاستخدام العام.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              دقة المعلومات
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                نحن نسعى لتقديم معلومات دقيقة ومحدثة قدر الإمكان، بما في ذلك
                أسعار الذهب والمقالات التفسيرية والمحتوى التعليمي.
              </p>
              <p>
                ومع ذلك، لا نضمن أن جميع البيانات أو الأسعار أو المعلومات
                المعروضة خالية تمامًا من الأخطاء أو التأخير أو الاختلافات
                المرتبطة بالمصدر أو توقيت التحديث أو السوق المحلي.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              الأسعار والبيانات
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                أسعار الذهب قد تتغير باستمرار خلال اليوم، وقد تختلف من سوق إلى
                آخر أو من متجر إلى آخر بحسب الرسوم والعيار وسعر الصرف والعوامل
                المحلية.
              </p>
              <p>
                لذلك يجب اعتبار الأسعار المعروضة على الموقع مرجعًا معلوماتيًا
                عامًا، وليس بديلاً عن التحقق المباشر من المصدر أو الجهة التي
                تنوي الشراء أو البيع من خلالها.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              إخلاء المسؤولية
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                جميع المعلومات والمقالات والأدوات المتوفرة في الموقع هي لأغراض
                تعليمية ومعلوماتية فقط، ولا تُعتبر نصيحة استثمارية أو مالية أو
                قانونية أو شرعية خاصة.
              </p>
              <p>
                أي قرار مالي أو استثماري أو شرائي أو بيعي يتم اتخاذه بناءً على
                المعلومات الموجودة في الموقع يكون على مسؤولية المستخدم وحده.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              المحتوى والمقالات
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                المقالات المنشورة في الموقع تهدف إلى تبسيط المعلومات المتعلقة
                بالذهب، مثل التضخم، والفائدة، والدولار، والزكاة، والتحليلات
                العامة.
              </p>
              <p>
                هذا المحتوى لا يمثل توصية مباشرة بالشراء أو البيع، وإنما يقدم
                شرحًا عامًا يساعد القارئ على فهم السوق بشكل أفضل.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              الروابط الخارجية
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                قد يحتوي الموقع على روابط خارجية لمواقع أو خدمات أخرى. نحن غير
                مسؤولين عن محتوى تلك المواقع أو سياساتها أو أي أضرار قد تنتج عن
                استخدامها.
              </p>
              <p>
                استخدام أي روابط خارجية يتم وفق تقدير المستخدم وعلى مسؤوليته
                الشخصية.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
            <h2 className="mb-3 text-2xl font-bold text-white">
              التعديلات على الشروط
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                نحتفظ بالحق في تعديل أو تحديث هذه الشروط والأحكام في أي وقت دون
                إشعار مسبق، وذلك بما يتناسب مع تطوير الموقع أو تحديث الخدمات أو
                المتطلبات القانونية والتنظيمية.
              </p>
              <p>
                استمرارك في استخدام الموقع بعد نشر أي تحديث يعني موافقتك على
                النسخة المحدثة من هذه الشروط.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-bold">Terms & Conditions</h2>
          <div className="space-y-4 leading-8 text-zinc-400">
            <p>
              By using this website, you agree to comply with the following
              terms and conditions. Please read them carefully before using the
              site or relying on any information provided on it.
            </p>
            <p>
              Gold Live Prices provides gold price information, educational
              tools, and general market content for informational purposes only.
              We aim to keep information updated and accurate, but we do not
              guarantee completeness, accuracy, or uninterrupted availability.
            </p>
            <p>
              Gold prices may change frequently and may vary depending on the
              market, timing, exchange rates, fees, and local conditions.
              Information shown on the website should be treated as a general
              reference only.
            </p>
            <p>
              Nothing on this website constitutes financial, investment, legal,
              or personalized religious advice. Any action taken based on the
              website content is at the user’s own responsibility.
            </p>
            <p>
              Articles and analysis published on this website are intended to
              provide general educational explanations about the gold market and
              should not be interpreted as direct buy or sell recommendations.
            </p>
            <p>
              This website may contain links to third-party websites. We are not
              responsible for their content, availability, or policies.
            </p>
            <p>
              We reserve the right to update or modify these terms at any time
              without prior notice. Continued use of the website after updates
              means acceptance of the revised terms.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
