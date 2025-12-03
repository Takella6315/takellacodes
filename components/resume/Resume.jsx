"use client";

import { Button } from "../ui/button";
import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-y-8 py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-y-6"
        >
          <motion.a
            href="/assets/Teja_Akella_Resume.pdf"
            download="Teja Akella Resume"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="gap-x-2 glow-primary-hover text-lg px-8 py-6">
              Download Resume <Download size={18} />
            </Button>
          </motion.a>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-[1400px] items-center justify-center flex shadow-2xl rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm"
          >
            <embed 
              src="/assets/Teja_Akella_Resume.pdf"  
              className="w-[90%] md:w-[80%] h-[85vh] md:h-[90vh]"
              type="application/pdf"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
