"use client";

import * as S from "./ProjectList.styles";
import { ProjectT } from "@/types/project";
import ProjectCard from "../ProjectCard";

export function ProjectList({ projects }: { projects: ProjectT[] }) {
  return (
    <S.Grid>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </S.Grid>
  );
}
