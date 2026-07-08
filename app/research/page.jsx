import { researchItems } from "@/content/research";
import ResearchList from "@/components/ResearchList";

export const metadata = {
  title: "Research",
  description: "Research in AI security, architectural backdoors, and medical imaging.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-[calc(100vh-120px)]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold text-foreground mb-10">research</h1>
        <ResearchList items={researchItems} />
      </div>
    </main>
  );
}
