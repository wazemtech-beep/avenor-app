"use client";
import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function ServicesCta() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.servicesCta;
  return (
    <section id="cta" className="section_cta" ref={sectionRef}>
      <div className="padding-section-small"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="grid_two-columns">
            <div
              data-w-id="b65fb2c5-1d51-2882-83fd-de7a556a59ab"
              className="scroll-into-view-left"
              data-motion="servicesCta-element-5"
            >
              <div data-wf--tag--variant="base" className="tag">
                <div className="icon-1x1-extrasmall bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.getStarted}
                </div>
              </div>
            </div>
            <div className="faq_content">
              <div className="w-layout-vflex">
                <h2
                  data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc75"
                  className="h2-large"
                  data-motion="servicesCta-element-11"
                >
                  {content.heading}
                </h2>
                <div className="spacer-xlarge"></div>
                <div
                  data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc78"
                  data-motion="servicesCta-element-13"
                >
                  {
                    content.weCraftInspiringSpacesThatBlendCuttingEdgeDesignWithEnduringFunct
                  }
                </div>
                <div className="gap-xsmall"></div>
              </div>
              <div
                data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc7b"
                className="w-layout-vflex"
                data-motion="servicesCta-element-15"
              >
                <div data-wf--button--variant="secondary">
                  <Link
                    data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                    href={content.getStartedHref}
                    className="button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2 w-inline-block"
                    data-motion="servicesCta-element-17"
                  >
                    <div>{content.getStarted}</div>
                    <div
                      data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                      className="icon_button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2"
                      data-motion="servicesCta-element-19"
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
        </div>
      </div>
      <div className="padding-section-small"></div>
    </section>
  );
}
