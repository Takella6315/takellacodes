"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "./ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";

import { projectData2 } from "./projects/content";

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 mt-10">
      <div className="container mx-auto mt-[150px]">
        {/* Text */}
        <div className="items-center max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mt-10 mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start">
          <h2 className="section-title mb-4">Recent Projects</h2>
          <p className="subtitle mb-8">Here are a few of my recent projects</p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
          <Swiper
            className="xl:h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            autoplay
            pagination={{ clickable: true }}
          >
            {projectData2.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index} className="pb-12 ">
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
