"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import {  projectData2 } from "./content";

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
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          {/* Tab List */}
          <TabsList className="w-full grid h-full md:grid-cols-4 gap-4 lg:max-w-[900px] mb-12 mx-auto md:border dark:border-none px-2">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => SetCategory(category)}
                  value={category}
                  key={index}
                  className="uppercase w-[162px] px-4 md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tabs content */}
          <div className="text-lg h-full xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
