"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function AboutPurpose() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutPurpose;
  return (
    <section id="purpose" className="section_purpose" ref={sectionRef}>
      <div className="padding-section-small"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="grid_layout">
            <div className="purpose_content">
              <div className="w-layout-vflex">
                <div
                  data-w-id="57eacece-90ca-7fc4-4a7a-ed336abac437"
                  data-motion="aboutPurpose-element-7"
                >
                  <div data-wf--tag--variant="base" className="tag">
                    <div className="icon-1x1-extrasmall bg-secondary"></div>
                    <div className="text-sm text-style-allcaps">
                      {content.ourPurpose}
                    </div>
                  </div>
                </div>
                <div className="spacer-xlarge"></div>
                <div
                  data-w-id="8215988f-43ca-a395-d8ce-78e2e216f7b3"
                  className="max-description is-23rem"
                  data-motion="aboutPurpose-element-12"
                >
                  <div className="text-xl">
                    {
                      content.weBelieveInClarityCareAndConnectionOurGoalIsSimpleToHelpYouMoveSm
                    }
                  </div>
                </div>
              </div>
              <div
                data-w-id="aef2e555-1f3c-f360-2fee-7f1b94f74bea"
                className="img_border"
                data-motion="aboutPurpose-element-14"
              >
                <div className="purpose_img-h">
                  <Image
                    src={content.hero2032Image}
                    alt={content.Alt}
                    className="img"
                    width={100}
                    height={100}
                    sizes="100px"
                  />
                </div>
              </div>
            </div>
            <div className="w-layout-vflex">
              <h2
                data-w-id="98ec34b1-438a-59e4-5ebc-501b92b2c061"
                className="h4"
                data-motion="aboutPurpose-element-18"
              >
                {content.heading}
              </h2>
              <div className="spacer-xlarge"></div>
              <div
                data-w-id="5284a558-dab3-6b38-0308-12e7f14e4cfc"
                className="max-description is-32rem"
                data-motion="aboutPurpose-element-20"
              >
                <div className="text-color-grey">
                  {
                    content.focusedOnCreativityAndPrecisionWeTurnIdeasIntoLastingDesigns
                  }
                </div>
              </div>
              <div className="spacer">
                <div
                  style={{ height: "4.5rem" }}
                  className="spacer-desktop"
                ></div>
                <div style={{ height: "3rem" }} className="spacer-tablet"></div>
                <div style={{ height: "2rem" }} className="spacer-mobile"></div>
              </div>
              <div
                data-w-id="e74a7d9f-679c-5021-338f-ce2c1425a39b"
                className="service_flex"
                data-motion="aboutPurpose-element-26"
              >
                <Link
                  data-wf--service-card-v2--variant="secondary"
                  data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"
                  href={content.innovativePerspectivefunctionalDesiHref}
                  className="card_service w-variant-a401fc5d-d901-91a8-dda6-15d685383209 w-inline-block"
                  data-motion="aboutPurpose-element-61"
                >
                  <div className="card-grid w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                    <div className="service_card-description w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                      <div className="icon_card">
                        <Image
                          src={content.roundStarImage}
                          alt={content.Alt}
                          className="icon-1x1-medium"
                          width={100}
                          height={100}
                          sizes="100px"
                        />
                      </div>
                      <div className="w-layout-vflex">
                        <div className="text-2xl">
                          {content.innovativePerspective}
                        </div>
                        <div className="spacer-small"></div>
                        <div className="text-color-grey text-style-3lines">
                          {
                            content.functionalDesignOrganizesTheProjectToMeetItsUseObjectives
                          }
                        </div>
                        <div className="div-block w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                          <div className="spacer-xlarge"></div>
                          <div>
                            <div className="learn_button">
                              <div className="text-sm text-style-allcaps">
                                {content.learnMore}
                              </div>
                              <div className="line_underline"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_content-img w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                      <Image
                        src={content.hero2019Image}
                        alt={content.Alt}
                        className="img"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                  </div>
                </Link>
                <Link
                  data-wf--service-card-v2--variant="secondary"
                  data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"
                  href={content.innovativePerspectivefunctionalDesiHref}
                  className="card_service w-variant-a401fc5d-d901-91a8-dda6-15d685383209 w-inline-block"
                  data-motion="aboutPurpose-element-61"
                >
                  <div className="card-grid w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                    <div className="service_card-description w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                      <div className="icon_card">
                        <Image
                          src={content.settingFilledImage}
                          alt={content.Alt}
                          className="icon-1x1-medium"
                          width={100}
                          height={100}
                          sizes="100px"
                        />
                      </div>
                      <div className="w-layout-vflex">
                        <div className="text-2xl">
                          {content.customizedSolutions}
                        </div>
                        <div className="spacer-small"></div>
                        <div className="text-color-grey text-style-3lines">
                          {
                            content.tailoringDesignsToPerfectlyAlignWithTheClientSNeeds
                          }
                        </div>
                        <div className="div-block w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                          <div className="spacer-xlarge"></div>
                          <div>
                            <div className="learn_button">
                              <div className="text-sm text-style-allcaps">
                                {content.learnMore}
                              </div>
                              <div className="line_underline"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_content-img w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                      <Image
                        src={content.hero2019Image}
                        alt={content.Alt}
                        className="img"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                  </div>
                </Link>
                <Link
                  data-wf--service-card-v2--variant="secondary"
                  data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"
                  href={content.innovativePerspectivefunctionalDesiHref}
                  className="card_service w-variant-a401fc5d-d901-91a8-dda6-15d685383209 w-inline-block"
                  data-motion="aboutPurpose-element-61"
                >
                  <div className="card-grid w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                    <div className="service_card-description w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                      <div className="icon_card">
                        <Image
                          src={content.hammerSolidImage}
                          alt={content.Alt}
                          className="icon-1x1-medium"
                          width={100}
                          height={100}
                          sizes="100px"
                        />
                      </div>
                      <div className="w-layout-vflex">
                        <div className="text-2xl">
                          {content.sustainablePractices}
                        </div>
                        <div className="spacer-small"></div>
                        <div className="text-color-grey text-style-3lines">
                          {
                            content.implementingEnergyEfficientAndEnvironmentallyFriendlySolutions
                          }
                        </div>
                        <div className="div-block w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                          <div className="spacer-xlarge"></div>
                          <div>
                            <div className="learn_button">
                              <div className="text-sm text-style-allcaps">
                                {content.learnMore}
                              </div>
                              <div className="line_underline"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_content-img w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                      <Image
                        src={content.hero2019Image}
                        alt={content.Alt}
                        className="img"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-small"></div>
    </section>
  );
}
