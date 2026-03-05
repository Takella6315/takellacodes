// Add new posts here. No backend — just edit this file and push.
// content: use markdown (e.g. **bold**, [links](url), code blocks).

export const posts = [
  {
    // Coming-soon teaser — not clickable
    title: "PostgreSQL multi-tenant vuln (coming soon)",
    date: "2026-03-05",
    excerpt:
      "Writeup on a PostgreSQL vulnerability in multi-tenant deployments, from discovery to exploit chain. Coming soon.",
    comingSoon: true,
  },
  {
    title: "Chinese hackers or just bad coding practices?",
    date: "2026-02-19",
    excerpt:
      "A weird incident that could be nation-state activity — or just terrifyingly bad engineering. Untangling the difference. Coming soon.",
    comingSoon: true,
  },
  {
    title: "Can AI stop C2 exfiltration before it happens?",
    date: "2025-12-10",
    excerpt:
      "Exploring whether models can spot and kill command-and-control exfiltration before the first byte leaves the box. Coming soon.",
    comingSoon: true,
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug && p.slug === slug) ?? null;
}

export function getAllSlugs() {
  return posts.filter((p) => p.slug).map((p) => p.slug);
}

export function getSortedPosts() {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
