"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function ServicesProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.servicesProjects;
  return (
    <section id="projects" className="section_projects" ref={sectionRef}>
      <div className="padding-section-small"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="grid_two-columns">
            <div
              data-w-id="42db87dd-7b97-6d37-2880-aa17112ec666"
              className="w-layout-vflex"
              data-motion="servicesProjects-element-5"
            >
              <div data-wf--tag--variant="base" className="tag">
                <div className="icon-1x1-extrasmall bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.projects}
                </div>
              </div>
            </div>
            <div className="w-layout-vflex project_text-flex">
              <h2
                data-w-id="42db87dd-7b97-6d37-2880-aa17112ec66a"
                className="h4"
                data-motion="servicesProjects-element-10"
              >
                {content.heading}
              </h2>
              <div
                data-w-id="2e84e2a2-6a20-a45a-0de3-755fa9b3dbf1"
                data-motion="servicesProjects-element-11"
              >
                <div data-wf--button--variant="secondary">
                  <Link
                    data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                    href={content.viewProjectHref}
                    className="button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2 w-inline-block"
                    data-motion="servicesProjects-element-13"
                  >
                    <div>{content.viewProject}</div>
                    <div
                      data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                      className="icon_button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2"
                      data-motion="servicesProjects-element-15"
                    >
                      <div className="icon_wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="icon-1x1-small w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2 is-hide"
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
                          className="icon-1x1-small w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2"
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
          <div className="spacer">
            <div style={{ height: "6rem" }} className="spacer-desktop"></div>
            <div style={{ height: "4rem" }} className="spacer-tablet"></div>
            <div style={{ height: "2rem" }} className="spacer-mobile"></div>
          </div>
          <div className="grid_four-columns animation">
            <div
              data-w-id="42db87dd-7b97-6d37-2880-aa17112ec697"
              className="project_tab-card"
              data-motion="servicesProjects-element-26"
            >
              <div className="tab_content">
                <div className="tab_text-top hide-tablet">
                  <div className="text-2xs">{content.californiaUsa}</div>
                </div>
                <div className="padding_horizontal">
                  <div className="text-2xl">{content.shooppingCenter}</div>
                </div>
                <div className="tab_flex hide-tablet">
                  <div className="text-xs">{content.residential}</div>
                  <div className="text-xs">{content.ecoFriendly}</div>
                </div>
                <div className="img-wrapper">
                  <Image
                    src={content.frame202147226808Image}
                    alt={content.Alt}
                    className="img"
                    width={100}
                    height={100}
                    sizes="100px"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <div
              data-w-id="42db87dd-7b97-6d37-2880-aa17112ec67d"
              className="project_tab-card"
              data-motion="servicesProjects-element-37"
            >
              <div className="tab_content">
                <div className="tab_text-top hide-tablet">
                  <div className="text-2xs">{content.texasUsa}</div>
                </div>
                <div className="padding_horizontal">
                  <div className="text-2xl">{content.sustainableOffices}</div>
                </div>
                <div className="tab_flex hide-tablet">
                  <div className="text-xs">{content.residential}</div>
                  <div className="text-xs">{content.ecoFriendly}</div>
                </div>
                <div className="img-wrapper">
                  <Image
                    src={content.frame202147227048Image}
                    alt={content.Alt}
                    className="img"
                    width={100}
                    height={100}
                    sizes="100px"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <div
              data-w-id="f7f47fd4-b9af-4197-a22e-7a3d6dcb88c1"
              className="project_tab-card"
              data-motion="servicesProjects-element-48"
            >
              <div className="tab_content">
                <div className="tab_text-top hide-tablet">
                  <div className="text-2xs">{content.texasUsa}</div>
                </div>
                <div className="padding_horizontal">
                  <div className="text-2xl">{content.sustainableOffices}</div>
                </div>
                <div className="tab_flex hide-tablet">
                  <div className="text-xs">{content.residential}</div>
                  <div className="text-xs">{content.ecoFriendly}</div>
                </div>
                <div className="img-wrapper">
                  <Image
                    src={content.frame202147227048Image}
                    alt={content.Alt}
                    className="img"
                    width={100}
                    height={100}
                    sizes="100px"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <div
              data-w-id="42db87dd-7b97-6d37-2880-aa17112ec68a"
              className="project_tab-card"
              data-motion="servicesProjects-element-59"
            >
              <div className="tab_content">
                <div className="tab_text-top hide-tablet">
                  <div className="text-2xs">{content.washingtonDCUsa}</div>
                </div>
                <div className="padding_horizontal">
                  <div className="text-2xl">{content.urbanReatreat}</div>
                </div>
                <div className="tab_flex hide-tablet">
                  <div className="text-xs">{content.residential}</div>
                  <div className="text-xs">{content.ecoFriendly}</div>
                </div>
                <div className="img-wrapper">
                  <Image
                    src={content.frame202147227049Image}
                    alt={content.Alt}
                    className="img"
                    width={100}
                    height={100}
                    sizes="100px"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-small"></div>
    </section>
  );
}
