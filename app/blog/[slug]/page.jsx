import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPost, getAllSlugs } from "@/content/blog";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return { title: "Post" };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-[calc(100vh-120px)]">
      <article className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/blog" className="text-muted-foreground hover:text-foreground text-sm mb-6 inline-block">
          ← back to blog
        </Link>
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          {post.title}
        </h1>
        <time className="text-muted-foreground text-sm">{post.date}</time>
        <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-a:text-primary prose-code:text-foreground prose-pre:bg-muted">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
