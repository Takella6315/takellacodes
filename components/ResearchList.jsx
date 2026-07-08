"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function ResearchList({ items }) {
  return (
    <motion.ul
      className="space-y-8"
      variants={listVariants}
      initial="hidden"
      animate="show"
    >
      {items.map((item) => (
        <motion.li key={item.slug ?? item.title} variants={itemVariants}>
          {item.comingSoon || !item.slug ? (
            <div className="block border-l-2 border-dashed border-primary/30 pl-4 -ml-4">
              <span className="text-foreground font-medium">{item.title}</span>
              {item.excerpt && (
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {item.excerpt}
                </p>
              )}
              <span className="soft-pulse inline-block font-mono text-xs text-primary mt-2 uppercase tracking-widest">
                [ coming soon... ]
              </span>
            </div>
          ) : (
            <Link
              href={`/research/${item.slug}`}
              className="group block border-l-2 border-transparent hover:border-primary/60 pl-4 -ml-4 transition-all duration-300 hover:translate-x-1"
            >
              <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                {item.title}
                <span className="inline-block opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary ml-1">
                  →
                </span>
              </span>
              {item.excerpt && (
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {item.excerpt}
                </p>
              )}
            </Link>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}
