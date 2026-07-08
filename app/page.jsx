import RetroGraphic from "@/components/RetroGraphic";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-120px)] flex flex-col">
      {/* Big retro graphic - hero */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12">
        <RetroGraphic />
      </section>

      {/* Copy + CTA - same simple layout */}
      <div className="max-w-2xl mx-auto px-6 py-8 flex-1">
        <Reveal delay={0.15}>
          <h1 className="text-2xl font-semibold text-foreground mb-6">
            Hi, I'm Teja.
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm a Security Researcher @ Georgia Tech, with interests in penetration testing, AI security research, and software development.
            Current resaercher at CyFI Lab, working on detecting architectural backdoors in state-of-the-art models.
            Previous at NASA and currently working on PostgreSQL database security
          </p>
        </Reveal>
        <Reveal delay={0.45}>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Get in touch:{" "}
            <a href="mailto:takella6315@gmail.com" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
              takella6315@gmail.com
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.6}>
          <a
            href="/assets/Teja_Akella_Resume.pdf"
            download="Teja_Akella_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium retro-glow btn-glow"
          >
            Download resume
          </a>
        </Reveal>
      </div>
    </main>
  );
}
