import Link from "next/link";
import { getSortedPosts } from "@/content/blog";

export const metadata = {
  title: "Blog",
  description: "Security and other notes.",
};

export default function BlogPage() {
  return (
    <main className="min-h-[calc(100vh-120px)]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold text-foreground mb-10">blog (Coming soon...)</h1>
        <ul className="space-y-8">
          {getSortedPosts().map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {post.title}
                </span>
                <span className="text-muted-foreground text-sm block mt-1">
                  {post.date}
                </span>
                {post.excerpt && (
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {post.excerpt}
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
