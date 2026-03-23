import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اتصل بنا | Contact Us - Gold Live Prices",
  description:
    "تواصل مع فريق Gold Live Prices لأي استفسارات أو اقتراحات أو فرص تعاون.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-amber-400/10 to-transparent">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-3 text-sm font-medium text-amber-300">
            Gold Live Prices
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            اتصل بنا
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            إذا كان لديك أي استفسار أو اقتراح أو ترغب في التواصل معنا بخصوص
            الموقع أو المحتوى أو فرص التعاون، يمكنك مراسلتنا عبر البريد
            الإلكتروني الموضح في هذه الصفحة.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              وسيلة التواصل
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                نحن نرحب بجميع الرسائل، سواء كانت استفسارات عامة، أو ملاحظات،
                أو اقتراحات لتحسين الموقع، أو فرص تعاون وشراكات.
              </p>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="mb-1 text-sm text-zinc-400">البريد الإلكتروني</p>
                <p className="font-semibold text-amber-300">
                  goldprice2211@gmail.com
                </p>
              </div>

              <p>
                نحاول الرد على جميع الرسائل خلال مدة تتراوح بين 24 إلى 48 ساعة،
                حسب حجم الرسائل الواردة وطبيعة الاستفسار.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              ماذا يمكنك التواصل معنا بشأنه؟
            </h2>
            <ul className="space-y-3 leading-8 text-zinc-300">
              <li>• الاستفسار عن أسعار الذهب والمحتوى المنشور</li>
              <li>• الإبلاغ عن أي مشكلة تقنية أو خطأ ظاهر في الموقع</li>
              <li>• اقتراحات التطوير والتحسين</li>
              <li>• الاستفسارات العامة المتعلقة بالمقالات أو الأدوات</li>
              <li>• فرص التعاون أو الشراكات أو التواصل المهني</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
          <div className="space-y-4 leading-8 text-zinc-400">
            <p>
              If you have any questions, suggestions, or would like to contact
              us regarding the website or content, feel free to reach out via
              email.
            </p>
            <p>
              Email:{" "}
              <span className="font-semibold text-amber-300">
                goldprice2211@gmail.com
              </span>
            </p>
            <p>We aim to respond to all messages within 24–48 hours.</p>
            <p>
              You can contact us for general inquiries, feedback, reporting
              issues, or business and collaboration opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
