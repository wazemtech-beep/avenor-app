"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function ServicesHowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.servicesHowWeWork;
  return (
    <section
      id="how-we-work"
      data-w-id="2a244f6a-6480-188b-31bb-63e780952010"
      className="section_work"
      data-motion="servicesHowWeWork-element-0"
      ref={sectionRef}
    >
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical_center">
            <div
              data-w-id="9b86beb1-aeae-5cd8-ae28-37f16b8c0105"
              data-motion="servicesHowWeWork-element-5"
            >
              <div
                data-wf--tag--variant="secondary"
                className="tag w-variant-efd82f01-7b51-243c-2713-615d96756a76"
              >
                <div className="icon-1x1-extrasmall w-variant-efd82f01-7b51-243c-2713-615d96756a76 bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.howWeWork}
                </div>
              </div>
            </div>
            <div className="spacer-xlarge"></div>
            <h1
              data-w-id="840acf3a-9451-b0a4-570c-7af30449bf50"
              className="h2"
              data-motion="servicesHowWeWork-element-10"
            >
              {content.title}
            </h1>
            <div className="spacer-xlarge"></div>
            <div
              data-w-id="840acf3a-9451-b0a4-570c-7af30449bf53"
              className="max-description is-32rem"
              data-motion="servicesHowWeWork-element-12"
            >
              <div className="text-color-tertiary">
                {
                  content.theInteriorDesignCombinesAestheticsAndFunctionalityToImproveUserC
                }
              </div>
            </div>
          </div>
          <div className="spacer">
            <div style={{ height: "6.25rem" }} className="spacer-desktop"></div>
            <div style={{ height: "5rem" }} className="spacer-tablet"></div>
            <div style={{ height: "4rem" }} className="spacer-mobile"></div>
          </div>
          <div className="container-xs">
            <div className="vertical_flex">
              <div className="work_grid">
                <div className="work_number">
                  <div className="number_wrap">
                    <div className="number">
                      <div className="text-sm">{content.value1}</div>
                    </div>
                  </div>
                  <div className="number_wrap">
                    <div className="number">
                      <div className="text-sm">{content.value2}</div>
                    </div>
                  </div>
                  <div className="number_wrap">
                    <div className="number">
                      <div className="text-sm">{content.value3}</div>
                    </div>
                  </div>
                </div>
                <div className="work_item">
                  {content.items.map((item, index) => (
                    <div className={item.className} key={index}>
                      <Link
                        data-wf--service-card-v2--variant="secondary"
                        data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"
                        href={content.preliminaryStudyanalysisPhaseWhereTHref}
                        className="card_service w-variant-a401fc5d-d901-91a8-dda6-15d685383209 w-inline-block"
                        data-motion="servicesHowWeWork-element-69"
                      >
                        <div className="card-grid w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                          <div className="service_card-description w-variant-a401fc5d-d901-91a8-dda6-15d685383209">
                            <div className="icon_card">
                              <Image
                                src={item.image}
                                alt={content.Alt}
                                className="icon-1x1-medium"
                                width={100}
                                height={100}
                                sizes="100px"
                                unoptimized
                              />
                            </div>
                            <div className="w-layout-vflex">
                              <div className="text-2xl">{item.label}</div>
                              <div className="spacer-small"></div>
                              <div className="text-color-grey text-style-3lines">
                                {item.label2}
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
                              unoptimized
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="line_grid"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-medium"></div>
    </section>
  );
}
