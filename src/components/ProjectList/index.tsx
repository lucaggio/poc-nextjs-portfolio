"use client";

import ProjectCard from "../ProjectCard";
import { ProjectListPropsT } from "./ProjectList.types";

import * as S from "./ProjectList.styles";

export function ProjectList({ projects }: ProjectListPropsT) {
  return (
    <S.Grid>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </S.Grid>
  );
}
