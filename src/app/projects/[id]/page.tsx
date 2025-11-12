import { getSingleProject } from "@/lib/api/projects.api";
import ProjectDetail from "./ProjectDetail";

export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await getSingleProject(id);

  return <ProjectDetail project={project} />;
}
