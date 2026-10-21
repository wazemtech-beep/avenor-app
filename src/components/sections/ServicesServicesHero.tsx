"use client";
import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function ServicesServicesHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.servicesServicesHero;
  return (
    <section id="services-hero" className="section_full" ref={sectionRef}>
      <div className="padding-section-small"></div>
      <div className="padding-global z-index">
        <div className="container-large">
          <div className="w-layout-vflex">
            <div
              data-w-id="6211d1cf-d19a-ae29-b38b-2debbcb9dbe2"
              data-motion="servicesServicesHero-element-5"
            >
              <div
                data-wf--tag--variant="secondary"
                className="tag w-variant-efd82f01-7b51-243c-2713-615d96756a76"
              >
                <div className="icon-1x1-extrasmall w-variant-efd82f01-7b51-243c-2713-615d96756a76 bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.services}
                </div>
              </div>
            </div>
            <div className="spacer-xlarge"></div>
            <div
              data-w-id="e01a7a99-7033-2656-9959-7734f05a22bd"
              className="max-title is-40rem"
              data-motion="servicesServicesHero-element-10"
            >
              <h1 className="h2">{content.title}</h1>
            </div>
            <div className="spacer-xlarge"></div>
            <div
              data-w-id="06256fa4-9e26-704e-ae86-4527f3c9047d"
              className="max-description is-32rem"
              data-motion="servicesServicesHero-element-13"
            >
              <div>
                {
                  content.bringYourArchitecturalProjectsToLifeWithATemplateThatPutsYourWork
                }
              </div>
            </div>
            <div className="gap-xsmall"></div>
            <div
              data-w-id="b52ce493-a889-d108-10d9-6763dfb134eb"
              data-motion="servicesServicesHero-element-16"
            >
              <div data-wf--button--variant="base">
                <Link
                  data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                  href={content.getStartedHref}
                  className="button w-inline-block"
                  data-motion="servicesServicesHero-element-18"
                >
                  <div>{content.getStarted}</div>
                  <div
                    data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                    className="icon_button"
                    data-motion="servicesServicesHero-element-20"
                  >
                    <div className="icon_wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="icon-1x1-small is-hide"
                      >
                        <path
                          d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="icon-1x1-small"
                      >
                        <path
                          d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-w-id="a2ddd619-9b69-1eb0-8d49-8a9d816de906"
        className="hero_image-full"
        data-motion="servicesServicesHero-element-26"
      ></div>
    </section>
  );
}
