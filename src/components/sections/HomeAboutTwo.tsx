"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function HomeAboutTwo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeAboutTwo;
  return (
    <section id="about-two" className="section_about-two" ref={sectionRef}>
      <div className="padding-section-large"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="grid_two-columns">
            <div
              data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c00"
              data-motion="homeAboutTwo-element-5"
            >
              <div data-wf--tag--variant="base" className="tag">
                <div className="icon-1x1-extrasmall bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.aboutVistal}
                </div>
              </div>
            </div>
            <div>
              <h2
                data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c04"
                className="h4"
                data-motion="homeAboutTwo-element-10"
              >
                {content.heading}
              </h2>
              <div className="spacer-medium"></div>
              <div
                data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c07"
                className="text-color-grey"
                data-motion="homeAboutTwo-element-12"
              >
                {
                  content.withACommitmentToInnovationSustainabilityAndPrecisionWeBringYourI
                }
              </div>
              <div className="spacer">
                <div
                  style={{ height: "4rem" }}
                  className="spacer-desktop"
                ></div>
                <div style={{ height: "2rem" }} className="spacer-tablet"></div>
                <div style={{ height: "2rem" }} className="spacer-mobile"></div>
              </div>
              <div
                data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c0a"
                className="expertise_visual"
                data-motion="homeAboutTwo-element-17"
              >
                <div className="img-wrapper">
                  <Image
                    src={content.hero206Image}
                    alt={content.Alt}
                    className="img-parallax"
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
      <div className="padding-section-large"></div>
    </section>
  );
}
