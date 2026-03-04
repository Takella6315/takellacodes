// Add new posts here. No backend — just edit this file and push.
// content: use markdown (e.g. **bold**, [links](url), code blocks).

export const posts = [
//   {
//     slug: "example-post",
//     title: "Example security post",
//     date: "2025-01-26",
//     excerpt: "A short intro or summary for the list view.",
//     content: `You can use **markdown** here.

// Links work: [Google](https://google.com).

// \`\`\`bash
// echo "code blocks too"
// \`\`\`

// Add new entries to the \`posts\` array in \`content/blog.js\` to publish more.`,
//   },
//   // Add more posts below, e.g.:
//   // {
//   //   slug: "my-ctf-writeup",
//   //   title: "My CTF writeup",
//   //   date: "2025-02-01",
//   //   excerpt: "How I solved challenge X.",
//   //   content: `Full markdown body here...`,
//   // },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}

export function getSortedPosts() {
  return [...posts].sort((a, b) => (b.date > a.date ? 1 : -1));
}
