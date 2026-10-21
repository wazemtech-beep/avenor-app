"use client";
import { useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
export default function ProjectsProjectsHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.projectsProjectsHero;
  return (
    <section
      id="projects-hero"
      data-w-id="da4f4464-cff4-9d8a-1066-1fa1708f5e4c"
      className="section_full is-project"
      data-motion="projectsProjectsHero-element-0"
      ref={sectionRef}
    >
      <div className="padding-section-small"></div>
      <div className="padding-global">
        <div className="container-small">
          <div className="vertical_center">
            <div
              data-w-id="7f0a6481-70a3-1728-0b14-19cb6a2061a4"
              data-motion="projectsProjectsHero-element-5"
            >
              <div
                data-wf--tag--variant="secondary"
                className="tag w-variant-efd82f01-7b51-243c-2713-615d96756a76"
              >
                <div className="icon-1x1-extrasmall w-variant-efd82f01-7b51-243c-2713-615d96756a76 bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.projects}
                </div>
              </div>
            </div>
            <div className="spacer-xlarge"></div>
            <div
              data-w-id="da4f4464-cff4-9d8a-1066-1fa1708f5e54"
              className="max-title is-40rem"
              data-motion="projectsProjectsHero-element-10"
            >
              <h1 className="h1-big">{content.title}</h1>
            </div>
            <div className="spacer-xlarge"></div>
            <div
              data-w-id="da4f4464-cff4-9d8a-1066-1fa1708f5e58"
              className="max-description is-42rem"
              data-motion="projectsProjectsHero-element-13"
            >
              <div>
                {
                  content.bringYourArchitecturalProjectsToLifeWithATemplateThatPutsYourWork
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
