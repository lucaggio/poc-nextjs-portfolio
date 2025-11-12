"use client";

import { ProjectCardPropsT } from "./ProjectCard.types";

import * as S from "./ProjectCard.styles";

export default function ProjectCard({ project }: ProjectCardPropsT) {
  return (
    <S.Card href={`/projects/${project.id}`}>
      {project.image && <S.Image src={project.image} alt={project.name} />}
      <S.Title>{project.name}</S.Title>
      <S.Description>{project.description}</S.Description>
    </S.Card>
  );
}
