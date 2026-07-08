"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BOOT_TEXT = `> takella.os v2.0 — secure boot
> verifying kernel .......... ok
> loading modules [ai][sec] . ok
> mounting /research /blog .. ok
> encrypted session ......... ok

> access granted. welcome_`;

// Full-screen terminal boot on page load: types a boot log, then collapses
// like a CRT powering off. Plays on full page loads only (client-side
// navigation never remounts the layout). Any key/tap skips.
export default function BootSequence() {
  const [phase, setPhase] = useState("boot"); // boot -> off -> done
  const [count, setCount] = useState(0);

  // Skip entirely for reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
    }
  }, []);

  // Type the boot log, then trigger the power-off
  useEffect(() => {
    if (phase !== "boot") return;
    if (count >= BOOT_TEXT.length) {
      const t = setTimeout(() => setPhase("off"), 350);
      return () => clearTimeout(t);
    }
    const interval = setInterval(() => {
      setCount((c) => Math.min(c + 2, BOOT_TEXT.length));
    }, 10);
    return () => clearInterval(interval);
  }, [phase, count]);

  // Any key or tap skips straight to the power-off
  useEffect(() => {
    if (phase !== "boot") return;
    const skip = () => {
      setCount(BOOT_TEXT.length);
      setPhase("off");
    };
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center px-6"
      style={{ transformOrigin: "50% 50%" }}
      animate={
        phase === "off"
          ? { scaleY: 0.004, opacity: 0 }
          : { scaleY: 1, opacity: 1 }
      }
      transition={
        phase === "off"
          ? {
              duration: 0.45,
              ease: [0.76, 0, 0.24, 1],
              opacity: { delay: 0.35, duration: 0.15 },
            }
          : { duration: 0 }
      }
      onAnimationComplete={() => {
        if (phase === "off") setPhase("done");
      }}
    >
      {/* screen brightens as it collapses — the classic CRT-off line */}
      <motion.div
        className="absolute inset-0 bg-primary pointer-events-none"
        animate={{ opacity: phase === "off" ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <pre
        className="font-mono text-primary text-xs sm:text-sm leading-relaxed select-none"
        style={{ fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', 'SF Mono', monospace" }}
        aria-hidden
      >
        {BOOT_TEXT.slice(0, count)}
        <span className="cursor-blink">▌</span>
      </pre>
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-primary/40">
        press any key to skip
      </span>
    </motion.div>
  );
}
