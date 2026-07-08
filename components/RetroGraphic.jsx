"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TERMINAL_TEXT = `$ cat intro.txt
Teja Akella

$ cat tags
[ cybersecurity · security research · ai ]
[ Georgia Tech · CyFI Lab · NASA]`;

export default function RetroGraphic() {
  const tejaArt = `
 _____ _____   _   _
|_   _| ____| | | / \\
  | | |  _|   | |/ _ \\
  | | | |___  | / ___ \\
  |_| |_____| |_/_/   \\_\\`.trimStart();

  const akellaArt = `
    _    _  _______ _      _        _
   / \\  | |/ / ____| |    | |      / \\
  / _ \\ | ' /|  _| | |    | |     / _ \\
 / ___ \\| . \\| |___| |___ | |___ / ___ \\
/_/   \\_\\_|\\_\\_____|_____|_____/_/   \\_\\`.trimStart();

  // Typewriter for the terminal command block
  const [typedCount, setTypedCount] = useState(0);
  const doneTyping = typedCount >= TERMINAL_TEXT.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedCount(TERMINAL_TEXT.length);
      return;
    }
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setTypedCount((c) => {
          if (c >= TERMINAL_TEXT.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, 28);
    }, 700);
    return () => clearTimeout(start);
  }, []);

  // Subtle 3D tilt following the mouse
  const cardRef = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [3, -3]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-3, 3]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4" style={{ perspective: "1200px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative rounded-lg border-2 border-primary/60 bg-black/95 retro-glow crt-flicker overflow-hidden"
      >
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-primary/40 bg-primary/15 px-4 py-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          <span className="text-primary/90 text-xs font-mono ml-3 tracking-widest">
            takella@terminal:~$
          </span>
        </div>

        {/* Main content */}
        <div className="relative py-6 px-4 md:py-8 md:px-8 scanlines min-h-[280px] md:min-h-[380px] flex flex-col items-center justify-center">
          {/* TEJA - row 1 */}
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="font-mono text-primary leading-tight select-none text-center w-full overflow-x-auto"
            style={{
              fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', 'SF Mono', monospace",
              fontSize: "clamp(0.55rem, 1.8vw, 0.85rem)",
            }}
            aria-hidden
          >
            {tejaArt}
          </motion.pre>

          {/* AKELLA - row 2 */}
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="font-mono text-primary leading-tight select-none text-center w-full overflow-x-auto mt-2"
            style={{
              fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', 'SF Mono', monospace",
              fontSize: "clamp(0.55rem, 1.8vw, 0.85rem)",
            }}
            aria-hidden
          >
            {akellaArt}
          </motion.pre>

          {/* Terminal commands - typed out live */}
          <pre
            className="font-mono text-primary text-sm sm:text-base leading-relaxed select-none overflow-x-auto text-center md:text-left w-full mt-6 min-h-[9.5rem] sm:min-h-[11rem]"
            style={{ fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', 'SF Mono', monospace" }}
            aria-hidden
          >
            {TERMINAL_TEXT.slice(0, typedCount)}
            <span className={doneTyping ? "cursor-blink" : ""}>▌</span>
          </pre>
        </div>

        {/* Bottom cursor */}
        <div className="border-t border-primary/40 px-4 py-2 flex items-center gap-2 font-mono text-xs text-primary/60">
          <span className="animate-pulse">▌</span>
          <span>connection secure</span>
        </div>
      </motion.div>
    </div>
  );
}
