"use client";

import { useState } from "react";
import { ProjectDetailProps } from "./ProjectDetail.types";

import * as S from "./ProjectDetail.styles";

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <S.Container>
      <S.Title>{project.name}</S.Title>
      <S.ImageWrapper>
        {!loaded && <S.Skeleton />}
        <S.ProjectImage
          src={project.image}
          alt={project.name}
          fill
          priority
          onLoad={() => setLoaded(true)}
          $loaded={loaded}
        />
      </S.ImageWrapper>
      <S.Description>{project.description}</S.Description>
    </S.Container>
  );
}
