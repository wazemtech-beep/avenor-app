"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeProjects;
  return (
    <section id="projects" className="section_projects" ref={sectionRef}>
      <div className="padding-section-large"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="projects_flex">
            <div className="project_heading">
              <div
                data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6bb4"
                className="w-layout-vflex"
                data-motion="homeProjects-element-6"
              >
                <div data-wf--tag--variant="base" className="tag">
                  <div className="icon-1x1-extrasmall bg-secondary"></div>
                  <div className="text-sm text-style-allcaps">
                    {content.ourLatestProjects}
                  </div>
                </div>
              </div>
              <div
                data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6bb7"
                className="max-title is-40rem"
                data-motion="homeProjects-element-10"
              >
                <h2>{content.heading}</h2>
              </div>
            </div>
            <div
              data-current="Tab 1"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="projects_tabs w-tabs"
            >
              <div
                data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6bbb"
                className="tabs_menu w-tab-menu"
                data-motion="homeProjects-element-13"
              >
                <a className="tabs_content is-one w-inline-block w-tab-link w--current">
                  <div className="tab_content">
                    <div className="tab_text-top hide-tablet">
                      <div className="text-2xs">{content.californiaUsa}</div>
                    </div>
                    <div className="text-2xl">{content.shoppingCenter}</div>
                    <div className="tab_flex hide-tablet">
                      <div className="text-xs">{content.residential}</div>
                      <div className="text-xs">{content.ecoFriendly}</div>
                    </div>
                  </div>
                </a>
                <a className="tabs_content is-two w-inline-block w-tab-link">
                  <div className="tab_content">
                    <div className="tab_text-top hide-tablet">
                      <div className="text-2xs">{content.texasUsa}</div>
                    </div>
                    <div className="text-2xl">{content.sustainableOffices}</div>
                    <div className="tab_flex hide-tablet">
                      <div className="text-xs">{content.residential}</div>
                      <div className="text-xs">{content.ecoFriendly}</div>
                    </div>
                  </div>
                </a>
                <a className="tabs_content is-three w-inline-block w-tab-link">
                  <div className="tab_content">
                    <div className="tab_text-top hide-tablet">
                      <div className="text-2xs">{content.washingtonDCUsa}</div>
                    </div>
                    <div className="text-2xl">{content.urbanReatreat}</div>
                    <div className="tab_flex hide-tablet">
                      <div className="text-xs">{content.residential}</div>
                      <div className="text-xs">{content.ecoFriendly}</div>
                    </div>
                  </div>
                </a>
                <a className="tabs_content is-four w-inline-block w-tab-link">
                  <div className="tab_content">
                    <div className="tab_text-top hide-tablet">
                      <div className="text-2xs">{content.phoenixUsa}</div>
                    </div>
                    <div className="text-2xl">
                      {content.grandConferenceHall}
                    </div>
                    <div className="tab_flex hide-tablet">
                      <div className="text-xs">{content.residential}</div>
                      <div className="text-xs">{content.ecoFriendly}</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="animation w-tab-content">
                <div className="w-tab-pane w--tab-active">
                  <div className="project_tab">
                    <div className="project_img">
                      <Image
                        src={content.frame202147227046Image}
                        data-w-id="832b69d1-ce38-c7e9-7963-e6f5ad9bfec0"
                        alt={content.Alt}
                        className="img-parallax"
                        data-motion="homeProjects-element-101"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                    <div className="project_description">
                      <div className="max-description is-50rem">
                        <div className="text-color-on-primary">
                          {
                            content.designedWithExpansiveNaturalLightAndSleekModernArchitectureThisSh
                          }
                        </div>
                      </div>
                      <div data-wf--button--variant="base">
                        <Link
                          data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                          href={content.learnMoreHref}
                          className="button w-inline-block"
                          data-motion="homeProjects-element-106"
                        >
                          <div>{content.learnMore}</div>
                          <div
                            data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                            className="icon_button"
                            data-motion="homeProjects-element-108"
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
                    <div className="bg_shadow-gradient"></div>
                  </div>
                </div>
                <div className="w-tab-pane">
                  <div className="project_tab">
                    <div className="project_img">
                      <Image
                        src={content.hero204Image}
                        data-w-id="832b69d1-ce38-c7e9-7963-e6f5ad9bfec0"
                        alt={content.Alt}
                        className="img-parallax"
                        data-motion="homeProjects-element-101"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                    <div className="project_description">
                      <div className="max-description is-50rem">
                        <div className="text-color-on-primary">
                          {
                            content.thisProjectFeaturesBrightModernOfficeSpacesEnhancedByCuttingEdgeE
                          }
                        </div>
                      </div>
                      <div data-wf--button--variant="base">
                        <Link
                          data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                          href={content.learnMoreHref2}
                          className="button w-inline-block"
                          data-motion="homeProjects-element-106"
                        >
                          <div>{content.learnMore}</div>
                          <div
                            data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                            className="icon_button"
                            data-motion="homeProjects-element-108"
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
                    <div className="bg_shadow-gradient"></div>
                  </div>
                </div>
                <div className="w-tab-pane">
                  <div className="project_tab">
                    <div className="project_img">
                      <Image
                        src={content.hero205Image}
                        data-w-id="832b69d1-ce38-c7e9-7963-e6f5ad9bfec0"
                        alt={content.Alt}
                        className="img-parallax"
                        data-motion="homeProjects-element-101"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                    <div className="project_description">
                      <div className="max-description is-50rem">
                        <div className="text-color-on-primary">
                          {
                            content.urbanRetreatInGoldenGateParkOffersAPeacefulEscapeWithinSanFrancis
                          }
                        </div>
                      </div>
                      <div data-wf--button--variant="base">
                        <Link
                          data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                          href={content.learnMoreHref2}
                          className="button w-inline-block"
                          data-motion="homeProjects-element-106"
                        >
                          <div>{content.learnMore}</div>
                          <div
                            data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                            className="icon_button"
                            data-motion="homeProjects-element-108"
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
                    <div className="bg_shadow-gradient"></div>
                  </div>
                </div>
                <div className="w-tab-pane">
                  <div className="project_tab">
                    <div className="project_img">
                      <Image
                        src={content.frame202147227047Image}
                        data-w-id="832b69d1-ce38-c7e9-7963-e6f5ad9bfec0"
                        alt={content.Alt}
                        className="img-parallax"
                        data-motion="homeProjects-element-101"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                    <div className="project_description">
                      <div className="max-description is-50rem">
                        <div className="text-color-on-primary">
                          {
                            content.theGrandConferenceHallIsThoughtfullyDesignedToFosterCollaboration
                          }
                        </div>
                      </div>
                      <div data-wf--button--variant="base">
                        <Link
                          data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                          href={content.learnMoreHref2}
                          className="button w-inline-block"
                          data-motion="homeProjects-element-106"
                        >
                          <div>{content.learnMore}</div>
                          <div
                            data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                            className="icon_button"
                            data-motion="homeProjects-element-108"
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
                    <div className="bg_shadow-gradient"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-large"></div>
    </section>
  );
}
