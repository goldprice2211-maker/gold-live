import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اتصل بنا | Contact Us - Gold Live Prices",
  description: "تواصل معنا لأي استفسارات أو اقتراحات.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold md:text-5xl">اتصل بنا</h1>
        <p className="mt-4 text-zinc-300 leading-8">
          يمكنك التواصل معنا لأي استفسار أو اقتراح عبر البريد الإلكتروني.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400 text-sm">البريد الإلكتروني</p>
          <p className="text-amber-300 font-semibold">
            goldprice2211@gmail.com
          </p>
        </div>

        <p className="mt-4 text-zinc-300">
          يتم الرد خلال 24 - 48 ساعة.
        </p>
      </section>
    </main>
  );
}
