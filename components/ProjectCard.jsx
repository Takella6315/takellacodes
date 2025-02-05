import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat">
          {/* Centering the Image */}
          <div className="flex items-center justify-center w-full h-full">
            <Image
              className="object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
              src={project.image}
              fill={true}
              alt=""
              priority
            />
          </div>

          {/* Buttons */}
          <div className="absolute flex gap-x-4">
            <Link
              href={project.link}
              title="Demo"
              target="_blank"
              className="bg-[#1E2A3B] w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute bottom-4 right-5">
          {project.category}
        </Badge>
        <div className="h-32 overflow-y-auto">
          <h4 className="h4 mb-1">{project.name}</h4>
          <p className="text-muted-foreground text-lg">{project.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
