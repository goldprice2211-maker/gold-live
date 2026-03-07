export const metadata = {
  title: "اتصل بنا | Contact Us - Gold Live Prices",
  description: "تواصل معنا لأي استفسارات أو اقتراحات.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-8">

        <h1 className="text-3xl font-bold">اتصل بنا</h1>
        <div className="space-y-4 text-zinc-300 leading-8">
          <p>
            لأي استفسارات أو اقتراحات يرجى التواصل معنا عبر البريد:
          </p>
          <p className="font-semibold">info@goldliveprices.net</p>
          <p>نرد خلال 24–48 ساعة.</p>
        </div>

        <hr className="border-zinc-700" />

        <h2 className="text-2xl font-bold">Contact Us</h2>
        <div className="space-y-4 text-zinc-400 leading-8">
          <p>
            For inquiries, suggestions, or business opportunities, please contact:
          </p>
          <p className="font-semibold">info@goldliveprices.net</p>
          <p>We aim to respond within 24–48 hours.</p>
        </div>

      </div>
    </main>
  );
}
