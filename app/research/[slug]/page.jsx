import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getResearchItem, getAllResearchSlugs } from "@/content/research";

export async function generateStaticParams() {
  return getAllResearchSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const item = getResearchItem(params.slug);
  if (!item) return { title: "Research" };
  return { title: item.title, description: item.excerpt };
}

export default function ResearchDetailPage({ params }) {
  const item = getResearchItem(params.slug);
  if (!item) notFound();

  return (
    <main className="min-h-[calc(100vh-120px)]">
      <article className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/research"
          className="text-muted-foreground hover:text-foreground text-sm mb-6 inline-block"
        >
          ← back to research
        </Link>
        <h1 className="text-2xl font-semibold text-foreground mb-6">
          {item.title}
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-a:text-primary prose-code:text-foreground prose-pre:bg-muted prose-strong:text-foreground">
          <ReactMarkdown>{item.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
