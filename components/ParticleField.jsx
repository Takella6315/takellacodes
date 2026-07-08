"use client";
import { useEffect, useRef } from "react";

// Ambient backdrop: slow-drifting purple particles on a canvas, plus two
// aurora blobs. Fixed behind all content, pointer-events off.
export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      const count = Math.min(70, Math.floor(window.innerWidth / 22));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        // each particle twinkles on its own phase
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;
        const twinkle = 0.35 + 0.3 * Math.sin(t / 1600 + p.phase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(270, 90%, 72%, ${twinkle})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    spawn();
    if (reduceMotion) {
      draw(0);
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onResize = () => {
      resize();
      spawn();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
      <div
        className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full blur-3xl bg-primary/10"
        style={{ animation: "aurora-drift 26s ease-in-out infinite" }}
      />
      <div
        className="absolute -bottom-40 -right-32 w-[36rem] h-[36rem] rounded-full blur-3xl bg-primary/[0.07]"
        style={{ animation: "aurora-drift 32s ease-in-out infinite reverse" }}
      />
    </div>
  );
}
