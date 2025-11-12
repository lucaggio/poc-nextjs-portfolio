import { getProjects } from "@/lib/api/projects.api";
import { HomeProjects } from "./components/HomeProjects";

export default async function Home() {
  const projects = await getProjects();
  return <HomeProjects initialProjects={projects} />;
}
