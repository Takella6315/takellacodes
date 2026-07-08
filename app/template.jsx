"use client";
import { motion, useReducedMotion } from "framer-motion";

// Plays on every navigation: a glowing scanline sweeps down the screen
// while the incoming page is revealed behind it, top to bottom.
const Template = ({ children }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 z-50 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
          boxShadow:
            "0 0 12px hsl(var(--primary) / 0.8), 0 0 36px hsl(var(--primary) / 0.4)",
        }}
        initial={{ top: "0%", opacity: 1 }}
        animate={{ top: "100%", opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.65, 0, 0.35, 1],
          opacity: { delay: 0.42, duration: 0.12 },
        }}
      />
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.85 }}
        animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Template;
