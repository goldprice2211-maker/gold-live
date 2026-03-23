import Link from "next/link";

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-amber-300 transition hover:text-amber-200"
        >
          Gold Live Prices
        </Link>

        <nav className="flex items-center gap-5 text-sm text-zinc-300">
          <Link href="/" className="transition hover:text-amber-300">
            الرئيسية
          </Link>
          <Link href="/blog" className="transition hover:text-amber-300">
            المدونة
          </Link>
          <Link href="/about" className="transition hover:text-amber-300">
            من نحن
          </Link>
          <Link href="/contact" className="transition hover:text-amber-300">
            تواصل
          </Link>
        </nav>
      </div>
    </header>
  );
}
