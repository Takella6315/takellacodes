import Link from "next/link";
import { researchItems } from "@/content/research";

export const metadata = {
  title: "Research",
  description: "Research in AI security, architectural backdoors, and medical imaging.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-[calc(100vh-120px)]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold text-foreground mb-10">research</h1>
        <ul className="space-y-8">
          {researchItems.map((item) => (
            <li key={item.slug}>
              <Link href={`/research/${item.slug}`} className="group block">
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {item.title}
                </span>
                {item.excerpt && (
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
