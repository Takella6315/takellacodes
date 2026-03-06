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
    slug: "einsia-ai-research-agent-audit",
    title: "The Great Firewall of Privacy: Unmasking the \"Einsia.ai\" Research Agent",
    date: "2026-02-19",
    excerpt:
      "A multi-week technical audit of Einsia—an AI research assistant for Overleaf—reveals an opaque pipeline for sensitive, unpublished research data, obfuscated code, and infrastructure tied to Chinese research entities.",
    content: `![Privacy and code audit](https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800)

## The "Einsia" Illusion: A Trojan Horse for Academic Data?

Einsia markets itself as an AI-native research assistant for Overleaf, promising to reclaim **"up to 10x more of your time"** by automating LaTeX grunt work, generating figures, and fixing compilation errors. However, a multi-week technical audit conducted in February 2026 reveals that this "all-in-one" agent may function as an opaque pipeline for sensitive, unpublished research data.

While the tool provides a functional product, the primary concern is that **researchers are sending unpublished work through a chain of unidentifiable entities with zero data protection commitments.**

---

## Technical Red Flags: A Timeline of Evasion

### 1. The Obfuscation Pivot and Distribution Tactics

Initially, Einsia was distributed as a manual ZIP download from **Alibaba Cloud**, requiring users to enable "Developer Mode" and bypass the Chrome Web Store (CWS) review process entirely.

- **Intentional Secrecy:** Versions v0.1.0 and v0.1.1 used \`javascript-obfuscator\` to hide over **164,000 identifiers** and **84,000 hex-encoded string literals**.
- **Banned Techniques:** This specific obfuscation method has been **banned from the CWS since 2019** because it is a primary indicator of malicious intent, found in over 70% of blocked malicious extensions.
- **The "Reaction" Update:** On February 13, 2026—just two days after security concerns were raised in the Einsia Discord—**v0.1.2** was released, removing the obfuscation and listing the tool on the CWS. While the code is now readable, the underlying data risks persist.

### 2. A Pipeline with Three Shadows: Where Does Your Data Go?

Traffic interception using **mitmproxy** reveals that document content does not simply stay between the user and Einsia. When the chat feature is utilized, data follows a complex, undisclosed chain:

| Stage | Entity | Role |
| :--- | :--- | :--- |
| **1** | **Einsia.ai** | API gateway hosted on Alibaba Cloud in Singapore |
| **2** | **OpenRouter** | Intermediate LLM aggregator that facilitates model access |
| **3** | **Google Gemini 3 Flash** | Final destination for the document content |

Critically, **neither OpenRouter nor Google is disclosed in the privacy policy** as a data processor. Researchers are unknowingly subjecting their proprietary work to three different sets of terms and conditions.

---

## The Attribution: Finding the Unknown "Author"

To understand the origins of this tool, the audit moved beyond client-side code and into infrastructure analysis. By leveraging **Validin**, an advanced DNS intelligence platform, we were able to pivot through the digital footprints of the \`einsia.ai\` domain.

### Infrastructure Pivoting with Validin

Using Validin's passive DNS and host response history, we identified critical links that the developers likely intended to keep separate:

- **Host Connections:** Validin identified historical IP overlaps and host response fingerprints that linked \`einsia.ai\` directly to \`nbdevenv.xiaoaojianghu.fun\`.
- **The Identity:** A Chinese AI researcher.
- **Institutional Ties:** The investigation found that the backend utilizes **ByteDance's Feishu (Lark)** enterprise suite and **Alibaba Cloud** infrastructure. Server timestamps consistently return **China Standard Time (+08:00)**, and API calls contain hardcoded \`zh-CN\` language headers.

This confirms the tool is operated by a research group in a jurisdiction with some vested interest in monitoring Western AI research developments—**all while masquerading as a standard academic productivity tool.**

---

## Agentic Overreach and WebSocket Interception

The extension utilizes an **"agentic"** design, meaning the AI autonomously decides when to read or modify your files without per-action confirmation.

- **Silent Full-File Reads:** A simple request like "review my intro" triggers a \`Read\` tool call, causing the extension to **fetch the entire contents of your LaTeX project** and upload it to the server as a tool response.
- **MAIN World Injection:** The extension injects \`inject.js\` into the **"Main World"** of the browser at \`document_start\`. This allows it to **patch the WebSocket constructor** and monitor every real-time edit and cursor movement before Overleaf's own security layers even load.
- **Telemetry without Consent:** The extension reports usage duration to \`einsia.ai\` even if the user is not logged in or authenticated.

---

## Manufactured Legitimacy: The Influencer Problem

Einsia's growth has been fueled by a social media presence that appears highly inorganic.

- **Bot Patterns:** Multiple accounts like \`@AvaGrace_AI\` and \`@code_bykuti\` use formulaic, near-identical praise and similar writing styles to promote the tool.
- **The "Useful Idiot" Risk:** High-profile AI influencers, such as **Rohan Paul**, have advertised the software to hundreds of thousands of followers. These promotions often occur without the influencer performing any due diligence on the extension's data handling or privacy practices.

---

## Detailed Risk Assessment for Researchers

| Threat Category | Finding |
| :--- | :--- |
| **Data Retention** | Chat histories (including full documents) are stored server-side with no stated deletion policy. |
| **Identity & Accountability** | No registered business entity exists. Founder "Siyi Zhu" uses the alias "Calvin X" on the site. |
| **Transparency** | Terms of Service consistently return a **404 error**; the privacy policy omits key partners. |
| **Jurisdiction** | Data is proxied through infrastructure linked to Chinese research entities using Alibaba Cloud. |
| **Technical Risk** | The code interpreter (web worker) can execute arbitrary JavaScript via dynamic function construction. |

---

## Conclusion

For academics working on high-stakes, unpublished research, the "convenience" of Einsia comes at the cost of **total data transparency**. Sending proprietary research through an opaque pipeline operated by an unidentifiable entity is a significant security gamble that most institutional data policies would not permit.

---

*Audit conducted by **Teja Akella** (Hatndagger), **Saketh Reddy** (Hatndagger), **Allistair Hakim** (Hatndagger), and **Yixiong** (GT AI Safety Initiative). Infrastructure analysis powered by **Validin**.*`,
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
