import Link from "next/link";

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-amber-300 transition hover:text-amber-200"
        >
          Gold Live Prices
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm text-zinc-300 md:gap-5">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-amber-300"
          >
            الرئيسية
          </Link>

          <Link
            href="/blog"
            className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-amber-300"
          >
            المدونة
          </Link>

          <Link
            href="/about"
            className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-amber-300"
          >
            من نحن
          </Link>

          <Link
            href="/contact"
            className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-amber-300"
          >
            تواصل
          </Link>

          <Link
            href="/privacy-policy"
            className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-amber-300"
          >
            الخصوصية
          </Link>

          <Link
            href="/terms"
            className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-amber-300"
          >
            الشروط
          </Link>
        </nav>
      </div>
    </header>
  );
}
