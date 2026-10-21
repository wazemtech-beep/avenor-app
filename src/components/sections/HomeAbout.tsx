"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeAbout;
  return (
    <section id="about" className="section_about" ref={sectionRef}>
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical_center">
            <div
              data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b90"
              data-motion="homeAbout-element-5"
            >
              <div data-wf--tag--variant="base" className="tag">
                <div className="icon-1x1-extrasmall bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.aboutVistal}
                </div>
              </div>
            </div>
            <div className="gap-small"></div>
            <div className="w-layout-vflex about_layout">
              <div className="w-layout-vflex vertical_center">
                <div
                  data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b96"
                  className="max-title is-50rem"
                  data-motion="homeAbout-element-12"
                >
                  <h2>{content.heading}</h2>
                </div>
                <div className="spacer-medium"></div>
                <div
                  data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b9a"
                  className="max-description is-32rem"
                  data-motion="homeAbout-element-15"
                >
                  <div>
                    {
                      content.weCraftInspiringSpacesThatBlendCuttingEdgeDesignWithEnduringFunct
                    }
                  </div>
                </div>
              </div>
              <div
                data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b9d"
                data-motion="homeAbout-element-17"
              >
                <div data-wf--button--variant="secondary">
                  <Link
                    data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                    href={content.learnMoreHref}
                    className="button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2 w-inline-block"
                    data-motion="homeAbout-element-19"
                  >
                    <div>{content.learnMore}</div>
                    <div
                      data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                      className="icon_button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2"
                      data-motion="homeAbout-element-21"
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
          <div
            data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6ba0"
            className="card_wrap"
            data-motion="homeAbout-element-27"
          >
            <div className="cards_container">
              {content.items.map((item, index) => (
                <div className={item.className} key={index}>
                  <div
                    data-wf--about-card--variant="base"
                    className="about_card"
                  >
                    <div className="card-img">
                      <Image
                        src={item.image}
                        alt={content.Alt}
                        className="img"
                        width={100}
                        height={100}
                        sizes="100px"
                      />
                    </div>
                    <div className="card_content">
                      <div className="text-2xl text-style-1lines">
                        {item.label}
                      </div>
                      <div className="card_description">
                        <div className="text-color-secondary text-style-3lines">
                          {item.label2}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
