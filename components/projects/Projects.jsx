"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { projectData2 } from "./content";

const uniqueCategories = [
  "all projects",
  ...new Set(projectData2.map((item) => item.category)),
];

const Projects = () => {
  const [categories, SetCategories] = useState(uniqueCategories);
  const [category, SetCategory] = useState("all projects");
  const filteredProjects = projectData2.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title mb-8 xl:mb-16 text-center mx-auto"
        >
          My Projects
        </motion.h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          {/* Tab List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TabsList className="w-full grid h-full md:grid-cols-4 gap-4 lg:max-w-[900px] mb-12 mx-auto md:border dark:border-none px-2">
              {categories.map((cat, index) => {
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TabsTrigger
                      onClick={() => SetCategory(cat)}
                      value={cat}
                      className="uppercase w-[162px] px-4 md:w-auto transition-all"
                    >
                      {cat}
                    </TabsTrigger>
                  </motion.div>
                );
              })}
            </TabsList>
          </motion.div>

          {/* Tabs content */}
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-lg h-full xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={`${category}-${index}`}>
                  <ProjectCard project={project} index={index} />
                </TabsContent>
              );
            })}
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
