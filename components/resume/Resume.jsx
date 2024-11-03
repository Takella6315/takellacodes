"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import React from "react";
import { Download } from "lucide-react";

const Resume = () => {
  

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-y-4">
      <a
        href="/assets/TejaAkellaResume.pdf"
        download="Teja Akella Resume"
        target="_blank"
        rel="noopener noreferrer"
      >        
        <Button className="gap-x-2">
          Download Resume <Download size={18} />
        </Button>
      </a>
      <embed src="/assets/TejaAkellaResume.pdf" width="1000" height="750"></embed>
    </section>

  );
  
};

export default Resume;
