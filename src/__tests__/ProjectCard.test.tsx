/**
 * @file ProjectCard.test.ts
 *
 * Unit tests for the <ProjectCard /> component.
 *
 * These tests verify that:
 * - The project name and description are correctly rendered.
 * - The image is displayed with the proper alt text.
 * - The link points to the expected project detail page.
 */

import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import ProjectCard from "@/components/ProjectCard";
import { theme } from "@/theme/theme";

const mockProject = {
  id: "1",
  name: "Test Project",
  description: "This is a test project",
  image: "https://picsum.photos/200",
};

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("ProjectCard", () => {
  it("renders project name and description", () => {
    renderWithTheme(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("This is a test project")).toBeInTheDocument();
  });

  it("renders project image with correct alt text", () => {
    renderWithTheme(<ProjectCard project={mockProject} />);
    const img = screen.getByAltText("Test Project");
    expect(img).toBeInTheDocument();
  });

  it("has a valid link to project detail page", () => {
    renderWithTheme(<ProjectCard project={mockProject} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/projects/1");
  });
});
