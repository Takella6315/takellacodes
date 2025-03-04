"use client";

import { Button } from "../ui/button";
import React from "react";
import { Download } from "lucide-react";

const Resume = () => {
  

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-y-4">
      <a
        href="/assets/Teja_Akella_Resume.pdf"
        download="Teja Akella Resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="gap-x-2">
          Download Resume <Download size={18} />
        </Button>
      </a>
      <div className="w-full max-w-[1400px] items-center justify-center flex">
        <embed src="/assets/Teja_Akella_Resume.pdf"  className="w-[80%] h-[90vh]"></embed>
      </div>
</section>


  );
  
};

export default Resume;
