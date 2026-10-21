"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { projectsAnimation } from "@/hooks/pages/projectsAnimation";
import { mountVistalInteractions } from "@/hooks/vistal/interactions";
import { useProjectsAnimation } from "@/hooks/pages/useProjectsAnimation";
import Navbar from "@/components/VistalNavbar";
import Footer from "@/components/VistalFooter";
import ProjectsProjectsHero from "@/components/sections/ProjectsProjectsHero";
import ProjectsSustainability from "@/components/sections/ProjectsSustainability";
import ProjectsProjects from "@/components/sections/ProjectsProjects";
import ProjectsCta from "@/components/sections/ProjectsCta";
export default function ProjectsView() {
  const rootRef = useRef<HTMLDivElement>(null);
  useProjectsAnimation(rootRef);
  usePageAnimation(rootRef, projectsAnimation, mountVistalInteractions);
  return (
    <div
      ref={rootRef}
      className="page-wrapper vistal-reference vistal-projects-page"
    >
      <Navbar />
      <main className="main-wrapper">
        <div className="reference-fragment">
          <ProjectsProjectsHero />
        </div>
        <div className="reference-fragment">
          <ProjectsSustainability />
        </div>
        <div className="reference-fragment">
          <ProjectsProjects />
        </div>
        <div className="reference-fragment">
          <ProjectsCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
