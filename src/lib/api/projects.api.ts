import { ProjectT } from "@/types/project";
import { apiFetch } from "./client";

type FetchOptions = {
  cache?: RequestCache;
  signal?: AbortSignal;
};

/**
 * GET: fetch all projects
 */
export async function getProjects(
  options: FetchOptions = {}
): Promise<ProjectT[]> {
  const { cache } = options;
  return apiFetch<ProjectT[]>("/projects", { cache });
}
