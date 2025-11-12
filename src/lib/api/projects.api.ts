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

/**
 * GET: fetch single project
 */
export async function getSingleProject(id: string): Promise<ProjectT> {
  return await apiFetch<ProjectT>(`/projects/${id}`);
}

/**
 * POST: create a new project
 */
export async function createProject(data: {
  name: string;
  description: string;
  image?: string;
}): Promise<ProjectT> {
  return apiFetch<ProjectT>("/projects", {
    method: "POST",
    body: data,
  });
}

/**
 * PUT: edit an existing project
 */
export async function updateProject(
  id: string,
  data: { name?: string; description?: string; image?: string }
): Promise<ProjectT> {
  return apiFetch<ProjectT>(`/projects/${id}`, {
    method: "PUT",
    body: data,
  });
}

/**
 * DELETE: delete a project by id
 */
export async function deleteProject(id: string): Promise<void> {
  await apiFetch(`/projects/${id}`, {
    method: "DELETE",
  });
}
