export const metadata = {
  title: "Contact Us | Gold Live Prices",
  description: "Contact Gold Live Prices for questions and business inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="space-y-4 text-zinc-300 leading-8">
          <p>
            If you have any questions, suggestions, or business inquiries, please contact us at:
          </p>
          <p>
            📧 Email: info@goldliveprices.net
          </p>
          <p>
            We aim to respond within 24–48 hours.
          </p>
          <p>
            Thank you for visiting Gold Live Prices.
          </p>
        </div>
      </div>
    </main>
  );
}
