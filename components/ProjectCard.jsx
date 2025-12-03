"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon, Award } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden relative transform-3d perspective-1000 hover:shadow-2xl transition-all duration-300">
        <motion.div
          whileHover={{ 
            rotateY: 5,
            rotateX: 2,
            scale: 1.02,
            z: 20
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="transform-3d"
        >
          <CardHeader className="p-0">
            <div className="relative w-full h-[300px] flex items-center justify-center bg-gradient-to-br from-tertiary via-primary/10 to-accent/20 dark:from-secondary/40 dark:via-primary/20 dark:to-accent/30 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-accent/10 transition-all duration-500" />
              
              {/* Centering the Image */}
              <div className="flex items-center justify-center w-full h-full relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image
                    className="object-cover shadow-2xl transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                    fill={true}
                    alt={project.name || "Project image"}
                    priority
                  />
                </motion.div>
              </div>

              {/* Buttons */}
              <div className="absolute flex gap-x-4 z-20">
                {project.link && (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={project.link}
                      title="View Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 glow-primary-hover"
                    >
                      <Link2Icon className="text-white" size={20} />
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </CardHeader>
          <div className="h-full px-8 py-6 relative">
            <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 right-5 bg-primary/10 text-primary border-primary/20">
              {project.category}
            </Badge>
            {project.award && (
              <div className="absolute top-4 left-5 flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                <Award size={12} />
                <span className="font-medium">{project.award}</span>
              </div>
            )}
            <div className="h-auto min-h-[120px] overflow-y-auto pt-8">
              <h4 className="h4 mb-2 text-foreground group-hover:text-primary transition-colors">
                {project.name}
              </h4>
              <p className="text-muted-foreground text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
