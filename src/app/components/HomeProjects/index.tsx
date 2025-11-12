"use client";

import { JSX, useEffect, useState } from "react";
import { ProjectList } from "@/components/ProjectList";
import { getProjects } from "@/lib/api/projects.api";
import { ProjectT } from "@/types/project";
import { handleFetchError } from "@/utils/errors.utils";
import { HOME_POLLING_INTERVAL } from "./HomeProjects.constans";
import { HomeProjectsPropsT } from "./HomeProjects.types";

import * as S from "./HomeProjects.styles";

export function HomeProjects({
  initialProjects,
}: HomeProjectsPropsT): JSX.Element {
  const [projects, setProjects] = useState<ProjectT[]>(initialProjects);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchProjects() {
      try {
        const data = await getProjects({
          cache: "no-store",
          signal: controller.signal,
        });
        setProjects((prev) =>
          JSON.stringify(prev) !== JSON.stringify(data) ? data : prev
        );
      } catch (err) {
        handleFetchError(err, "projects - polling", "unmounted");
      }
    }

    const interval = setInterval(fetchProjects, HOME_POLLING_INTERVAL);
    return () => {
      controller.abort();
      clearInterval(interval);
    };
  }, []);

  return (
    <S.Main>
      <S.Title>My Portfolio</S.Title>
      <S.Subtitle>
        A selection of projects I&apos;ve worked on recently
      </S.Subtitle>
      <ProjectList projects={projects} />
    </S.Main>
  );
}
