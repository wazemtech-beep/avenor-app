"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function AboutSustainability() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutSustainability;
  return (
    <section id="sustainability" className="section_journey" ref={sectionRef}>
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="grid_two-columns">
            <div
              data-w-id="84de6248-44a4-29c6-cef8-1381e4a48f17"
              className="w-layout-vflex"
              data-motion="aboutSustainability-element-5"
            >
              <div
                data-wf--tag--variant="secondary"
                className="tag w-variant-efd82f01-7b51-243c-2713-615d96756a76"
              >
                <div className="icon-1x1-extrasmall w-variant-efd82f01-7b51-243c-2713-615d96756a76 bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.ourSustainabilityJourney}
                </div>
              </div>
            </div>
            <div
              id="w-node-_1341ce88-3516-63d6-2225-9655d1b772bd-08bff021"
              className="content_flex"
            >
              <h2
                data-w-id="f5ea8184-3544-6bef-929d-24cc594c5f7f"
                className="h6"
                data-motion="aboutSustainability-element-10"
              >
                {content.heading}
              </h2>
              <div
                data-w-id="987a29bf-4144-7536-d132-326345999fef"
                data-motion="aboutSustainability-element-11"
              >
                <div data-wf--button--variant="base">
                  <Link
                    data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                    href={content.getStartedHref}
                    className="button w-inline-block"
                    data-motion="aboutSustainability-element-13"
                  >
                    <div>{content.getStarted}</div>
                    <div
                      data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                      className="icon_button"
                      data-motion="aboutSustainability-element-15"
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
          <div className="spacer">
            <div style={{ height: "6.25rem" }} className="spacer-desktop"></div>
            <div style={{ height: "4rem" }} className="spacer-tablet"></div>
            <div style={{ height: "3rem" }} className="spacer-mobile"></div>
          </div>
        </div>
      </div>
      <div className="padding-left">
        <div
          data-w-id="5188f9e9-4a25-c550-e0b2-79039146fc48"
          className="expertise_visual-img is-second"
          data-motion="aboutSustainability-element-26"
        >
          <div className="img-wrapper">
            <Image
              alt={content.Alt}
              src={content.hero2031Image}
              className="img"
              width={100}
              height={100}
              sizes="100px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
