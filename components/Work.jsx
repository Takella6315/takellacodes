"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "./ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";

import { projectData2 } from "./projects/content";

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 mt-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto mt-[250px] relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="items-center max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mt-10 mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start"
        >
          <h2 className="section-title mb-4">Recent Projects</h2>
          <p className="subtitle mb-8">
            Here are some of my recent projects showcasing my work in AI security research, 
            full-stack development, and cybersecurity
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/projects">
              <Button className="glow-primary-hover">All Projects</Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="xl:max-w-[1000px] xl:absolute right-0 top-0"
        >
          <Swiper
            className="xl:h-[520px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
          >
            {projectData2.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index} className="pb-12">
                  <ProjectCard project={project} index={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
