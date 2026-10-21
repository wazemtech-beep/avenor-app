"use client";
import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeHero;
  return (
    <section
      id="hero"
      data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b76"
      className="section_hero-full"
      data-motion="homeHero-element-0"
      ref={sectionRef}
    >
      <div className="container-full">
        <div {...{ animation: "bg" }} className="hero_container">
          <div className="hero_sticky">
            <div className="hero_wrap">
              <div {...{ animation: "word" }} className="hero_title">
                <div className="avenor-display-wordmark" aria-label={siteConfig.name}>
                  <span>{siteConfig.name}</span><sup aria-hidden="true">&copy;</sup>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_img-overlay"></div>
          <div className="hero_bg"></div>
          <div className="hero_content-bottom">
            <div className="padding-global">
              <div className="container-large">
                <div className="hero_content-wrap">
                  <h1
                    data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b83"
                    data-motion="homeHero-element-13"
                  >
                    {content.title}
                  </h1>
                  <div
                    id="w-node-ca44d9f3-8cba-b6dc-f9be-b68a43aa6b85-1cf81e71"
                    className="w-layout-vflex hero_content-right"
                  >
                    <div
                      data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b86"
                      data-motion="homeHero-element-15"
                    >
                      {
                        content.bringYourArchitecturalProjectsToLifeWithATemplateThatPutsYourWork
                      }
                    </div>
                    <div
                      data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b88"
                      data-motion="homeHero-element-16"
                    >
                      <div data-wf--button--variant="base">
                        <Link
                          data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                          href={content.getStartedHref}
                          className="button w-inline-block"
                          data-motion="homeHero-element-18"
                        >
                          <div>{content.getStarted}</div>
                          <div
                            data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                            className="icon_button"
                            data-motion="homeHero-element-20"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
