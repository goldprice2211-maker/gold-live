import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اتصل بنا | Contact Us - Gold Live Prices",
  description:
    "تواصل مع فريق Gold Live Prices لأي استفسارات أو اقتراحات أو فرص تعاون.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl space-y-8">

        <header className="space-y-3">
          <h1 className="text-3xl font-bold md:text-4xl">اتصل بنا</h1>
          <p className="leading-8 text-zinc-300">
            إذا كان لديك أي استفسار أو اقتراح أو ترغب في التواصل معنا بخصوص
            الموقع أو المحتوى، يمكنك التواصل معنا عبر البريد الإلكتروني.
          </p>
        </header>

        <section className="space-y-4 text-zinc-300 leading-8">
          <p>
            نحن نرحب بجميع الرسائل، سواء كانت استفسارات عامة، ملاحظات، أو اقتراحات
            لتحسين الموقع.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-zinc-400 mb-1">البريد الإلكتروني:</p>
            <p className="font-semibold text-amber-300">
              goldprice2211@gmail.com
            </p>
          </div>

          <p>
            نحاول الرد على جميع الرسائل خلال مدة تتراوح بين 24 إلى 48 ساعة.
          </p>
        </section>

        <section className="space-y-4 text-zinc-300 leading-8">
          <h2 className="text-2xl font-bold text-white">
            ماذا يمكنك التواصل معنا بشأنه؟
          </h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>الاستفسار عن أسعار الذهب والمحتوى</li>
            <li>الإبلاغ عن أي مشكلة في الموقع</li>
            <li>اقتراحات تطوير وتحسين</li>
            <li>فرص التعاون أو الشراكات</li>
          </ul>
        </section>

        <hr className="border-zinc-700" />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <div className="space-y-4 text-zinc-400 leading-8">
            <p>
              If you have any questions, suggestions, or would like to contact us
              regarding the website or content, feel free to reach out via email.
            </p>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-zinc-500 mb-1">Email:</p>
              <p className="font-semibold text-amber-300">
                goldprice2211@gmail.com
              </p>
            </div>

            <p>
              We aim to respond to all messages within 24–48 hours.
            </p>

            <p>
              You can contact us for general inquiries, feedback, reporting issues,
              or business and collaboration opportunities.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
