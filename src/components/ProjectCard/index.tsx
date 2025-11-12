"use client";

import * as S from "./ProjectCard.styles";
import { ProjectT } from "@/types/project";

export default function ProjectCard({ project }: { project: ProjectT }) {
  return (
    <S.Card>
      {project.image && <S.Image src={project.image} alt={project.name} />}
      <S.Title>{project.name}</S.Title>
      <S.Description>{project.description}</S.Description>
    </S.Card>
  );
}
