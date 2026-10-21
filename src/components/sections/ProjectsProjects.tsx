"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function ProjectsProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.projectsProjects;
  return (
    <section id="projects" className="section_projects-two" ref={sectionRef}>
      <div className="padding-section-small"></div>
      <div className="padding-global">
        <div className="container-large">
          <div
            data-current="Tab 2"
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            className="w-tabs"
          >
            <div className="grid_four-columns w-tab-menu">
              {content.items.map((item, index) => (
                <a className={item.className} key={index}>
                  <div className="tab_content">
                    <div className="tab_text-top hide-tablet">
                      <div className="text-2xs">{item.label}</div>
                    </div>
                    <div className="padding_horizontal">
                      <div className="text-2xl">{item.label2}</div>
                    </div>
                    <div className="tab_flex hide-tablet">
                      <div className="text-xs">{content.residential}</div>
                      <div className="text-xs">{content.ecoFriendly}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="project_tab-content w-tab-content">
              <div className="w-tab-pane">
                <div>
                  <div className="spacer">
                    <div
                      style={{ height: "6rem" }}
                      className="spacer-desktop"
                    ></div>
                    <div
                      style={{ height: "4rem" }}
                      className="spacer-tablet"
                    ></div>
                    <div
                      style={{ height: "2rem" }}
                      className="spacer-mobile"
                    ></div>
                  </div>
                  <div className="project_content-text">
                    <h2
                      data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1b"
                      data-motion="projectsProjects-element-143"
                    >
                      {content.shoppingCenter}
                    </h2>
                    <div
                      data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1d"
                      className="w-layout-vflex"
                      data-motion="projectsProjects-element-144"
                    >
                      <div data-wf--tag--variant="base" className="tag">
                        <div className="icon-1x1-extrasmall bg-secondary"></div>
                        <div className="text-sm text-style-allcaps">
                          {content.overview}
                        </div>
                      </div>
                      <div className="spacer-xlarge"></div>
                      <div>
                        {
                          content.shoppingCenterDeliversAVibrantRetailExperienceByBlendingContempor
                        }
                      </div>
                      <div className="spacer-xlarge"></div>
                      <div data-wf--button--variant="secondary">
                        <a
                          data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                          href={content.viewProjectHref}
                          className="button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2 w-inline-block"
                          data-motion="projectsProjects-element-152"
                        >
                          <div>{content.viewProject}</div>
                          <div
                            data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                            className="icon_button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2"
                            data-motion="projectsProjects-element-154"
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
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="spacer">
                    <div
                      style={{ height: "6rem" }}
                      className="spacer-desktop"
                    ></div>
                    <div
                      style={{ height: "4rem" }}
                      className="spacer-tablet"
                    ></div>
                    <div
                      style={{ height: "2rem" }}
                      className="spacer-mobile"
                    ></div>
                  </div>
                  <div className="project_tab">
                    <div className="project_img">
                      <Image
                        src={content.frame202147227046Image}
                        alt={content.Alt}
                        className="img-parallax"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-tab-pane w--tab-active">
                <div>
                  <div className="spacer">
                    <div
                      style={{ height: "6rem" }}
                      className="spacer-desktop"
                    ></div>
                    <div
                      style={{ height: "4rem" }}
                      className="spacer-tablet"
                    ></div>
                    <div
                      style={{ height: "2rem" }}
                      className="spacer-mobile"
                    ></div>
                  </div>
                  <div className="project_content-text">
                    <h2
                      data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1b"
                      data-motion="projectsProjects-element-143"
                    >
                      {content.sustainableOffices}
                    </h2>
                    <div
                      data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1d"
                      className="w-layout-vflex"
                      data-motion="projectsProjects-element-144"
                    >
                      <div data-wf--tag--variant="base" className="tag">
                        <div className="icon-1x1-extrasmall bg-secondary"></div>
                        <div className="text-sm text-style-allcaps">
                          {content.overview}
                        </div>
                      </div>
                      <div className="spacer-xlarge"></div>
                      <div>
                        {
                          content.sustainableOfficesRedefineModernWorkspacesWithAbundantNaturalLigh
                        }
                      </div>
                      <div className="spacer-xlarge"></div>
                      <div data-wf--button--variant="secondary">
                        <a
                          data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                          href={content.viewProjectHref2}
                          className="button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2 w-inline-block"
                          data-motion="projectsProjects-element-152"
                        >
                          <div>{content.viewProject}</div>
                          <div
                            data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                            className="icon_button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2"
                            data-motion="projectsProjects-element-154"
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
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="spacer">
                    <div
                      style={{ height: "6rem" }}
                      className="spacer-desktop"
                    ></div>
                    <div
                      style={{ height: "4rem" }}
                      className="spacer-tablet"
                    ></div>
                    <div
                      style={{ height: "2rem" }}
                      className="spacer-mobile"
                    ></div>
                  </div>
                  <div className="project_tab">
                    <div className="project_img">
                      <Image
                        src={content.hero2023Image}
                        alt={content.Alt}
                        className="img-parallax"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-tab-pane">
                <div>
                  <div className="spacer">
                    <div
                      style={{ height: "6rem" }}
                      className="spacer-desktop"
                    ></div>
                    <div
                      style={{ height: "4rem" }}
                      className="spacer-tablet"
                    ></div>
                    <div
                      style={{ height: "2rem" }}
                      className="spacer-mobile"
                    ></div>
                  </div>
                  <div className="project_content-text">
                    <h2
                      data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1b"
                      data-motion="projectsProjects-element-143"
                    >
                      {content.heading}
                    </h2>
                    <div
                      data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1d"
                      className="w-layout-vflex"
                      data-motion="projectsProjects-element-144"
                    >
                      <div data-wf--tag--variant="base" className="tag">
                        <div className="icon-1x1-extrasmall bg-secondary"></div>
                        <div className="text-sm text-style-allcaps">
                          {content.overview}
                        </div>
                      </div>
                      <div className="spacer-xlarge"></div>
                      <div>
                        {
                          content.urbanRetreatInGoldenGateParkOffersAPeacefulEscapeWithinSanFrancis
                        }
                      </div>
                      <div className="spacer-xlarge"></div>
                      <div data-wf--button--variant="secondary">
                        <a
                          data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                          href={content.viewProjectHref3}
                          className="button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2 w-inline-block"
                          data-motion="projectsProjects-element-152"
                        >
                          <div>{content.viewProject}</div>
                          <div
                            data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                            className="icon_button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2"
                            data-motion="projectsProjects-element-154"
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
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="spacer">
                    <div
                      style={{ height: "6rem" }}
                      className="spacer-desktop"
                    ></div>
                    <div
                      style={{ height: "4rem" }}
                      className="spacer-tablet"
                    ></div>
                    <div
                      style={{ height: "2rem" }}
                      className="spacer-mobile"
                    ></div>
                  </div>
                  <div className="project_tab">
                    <div className="project_img">
                      <Image
                        src={content.hero205Image}
                        alt={content.Alt}
                        className="img-parallax"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-tab-pane">
                <div>
                  <div className="spacer">
                    <div
                      style={{ height: "6rem" }}
                      className="spacer-desktop"
                    ></div>
                    <div
                      style={{ height: "4rem" }}
                      className="spacer-tablet"
                    ></div>
                    <div
                      style={{ height: "2rem" }}
                      className="spacer-mobile"
                    ></div>
                  </div>
                  <div className="project_content-text">
                    <h2
                      data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1b"
                      data-motion="projectsProjects-element-143"
                    >
                      {content.heading2}
                    </h2>
                    <div
                      data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1d"
                      className="w-layout-vflex"
                      data-motion="projectsProjects-element-144"
                    >
                      <div data-wf--tag--variant="base" className="tag">
                        <div className="icon-1x1-extrasmall bg-secondary"></div>
                        <div className="text-sm text-style-allcaps">
                          {content.overview}
                        </div>
                      </div>
                      <div className="spacer-xlarge"></div>
                      <div>
                        {
                          content.grandConferenceHallOffersARefinedSpaciousSettingThatBlendsModernD
                        }
                      </div>
                      <div className="spacer-xlarge"></div>
                      <div data-wf--button--variant="secondary">
                        <a
                          data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                          href={content.viewProjectHref4}
                          className="button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2 w-inline-block"
                          data-motion="projectsProjects-element-152"
                        >
                          <div>{content.viewProject}</div>
                          <div
                            data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                            className="icon_button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2"
                            data-motion="projectsProjects-element-154"
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
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="spacer">
                    <div
                      style={{ height: "6rem" }}
                      className="spacer-desktop"
                    ></div>
                    <div
                      style={{ height: "4rem" }}
                      className="spacer-tablet"
                    ></div>
                    <div
                      style={{ height: "2rem" }}
                      className="spacer-mobile"
                    ></div>
                  </div>
                  <div className="project_tab">
                    <div className="project_img">
                      <Image
                        src={content.frame202147227047Image}
                        alt={content.Alt}
                        className="img-parallax"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                  </div>
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
