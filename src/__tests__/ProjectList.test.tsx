/**
 * @file ProjectList.test.ts
 *
 * Unit test for the <ProjectList /> component.
 *
 * This test verify that:
 * - The list correctly renders multiple <ProjectCard /> items.
 */

import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { ProjectList } from "@/components/ProjectList";
import { theme } from "@/theme/theme";

const mockProjects = [
  { id: "1", name: "Project 1", description: "Desc 1", image: "" },
  { id: "2", name: "Project 2", description: "Desc 2", image: "" },
];

describe("ProjectList", () => {
  it("renders multiple ProjectCards", () => {
    render(
      <ThemeProvider theme={theme}>
        <ProjectList projects={mockProjects} />
      </ThemeProvider>
    );
    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
  });
});
