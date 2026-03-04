import Link from "next/link";

export default function SimpleHeader() {
  return (
    <header className="border-b border-border/40">
      <div className="max-w-2xl mx-auto px-6 py-5 flex justify-between items-center gap-4">
        <Link href="/" className="text-foreground font-medium hover:text-primary transition-colors">
          Teja Akella
        </Link>
        <span className="flex-1 min-w-2" aria-hidden />
        <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
          blog
        </Link>
      </div>
    </header>
  );
}
