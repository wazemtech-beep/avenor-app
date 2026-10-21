"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function ProjectsSustainability() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.projectsSustainability;
  return (
    <section id="sustainability" className="section_purpose" ref={sectionRef}>
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="grid_two-columns">
            <div
              data-w-id="86e71fe3-3335-e9a6-3439-5a0f329f221b"
              data-motion="projectsSustainability-element-5"
            >
              <div data-wf--tag--variant="base" className="tag">
                <div className="icon-1x1-extrasmall bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.ourSustainabilityJourney}
                </div>
              </div>
            </div>
            <div className="w-layout-vflex service_flex">
              <h2
                data-w-id="da4f4464-cff4-9d8a-1066-1fa1708f5e7a"
                className="h6"
                data-motion="projectsSustainability-element-10"
              >
                {content.heading}
              </h2>
              <div className="spacer">
                <div
                  style={{ height: "4.5rem" }}
                  className="spacer-desktop"
                ></div>
                <div style={{ height: "4rem" }} className="spacer-tablet"></div>
                <div style={{ height: "2rem" }} className="spacer-mobile"></div>
              </div>
              <div className="hero_statistics scroll-into-view-left">
                <div className="item_left">
                  <div className="card_number">
                    <div className="h6">
                      {content.value50}
                      <span className="text-color-accent">{content.text}</span>
                    </div>
                    <div className="spacer-small"></div>
                    <div>{content.projectComplete}</div>
                  </div>
                </div>
                <div className="vertical_center is-left">
                  <div className="card_number">
                    <div className="h6">{content.value100}</div>
                    <div className="spacer-small"></div>
                    <div>{content.expertTeams}</div>
                  </div>
                </div>
                <div className="item_right">
                  <div className="card_number">
                    <div className="h6">{content.value35m}</div>
                    <div className="spacer-small"></div>
                    <div>{content.projectValue}</div>
                  </div>
                </div>
              </div>
              <div className="spacer">
                <div
                  style={{ height: "4.5rem" }}
                  className="spacer-desktop"
                ></div>
                <div style={{ height: "4rem" }} className="spacer-tablet"></div>
                <div style={{ height: "2rem" }} className="spacer-mobile"></div>
              </div>
              <div
                data-w-id="ea2d9ac0-8df7-f4c5-583f-9b6731cbd6ff"
                className="expertise_visual-img"
                data-motion="projectsSustainability-element-36"
              >
                <div className="img-wrapper">
                  <Image
                    src={content.hero2041Image}
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
      <div className="padding-section-medium"></div>
    </section>
  );
}
