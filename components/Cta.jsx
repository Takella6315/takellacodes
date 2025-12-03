"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 dark:from-primary/20 dark:via-accent/20 dark:to-primary/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="h2 max-w-2xl text-center mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Ready to collaborate or discuss your next project? Let's connect!
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <Button size="lg" className="glow-primary-hover text-lg px-8 py-6">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
