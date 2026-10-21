"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function AboutAboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutAboutHero;
  return (
    <section id="about-hero" className="section_hero-about" ref={sectionRef}>
      <div className="sticky">
        <div className="padding-global padding-section-medium">
          <div className="container-small">
            <div className="vertical_center">
              <div
                data-w-id="a642875b-dfd0-2c0f-cf3f-8d963116fba9"
                data-motion="aboutAboutHero-element-5"
              >
                <div data-wf--tag--variant="base" className="tag">
                  <div className="icon-1x1-extrasmall bg-secondary"></div>
                  <div className="text-sm text-style-allcaps">
                    {content.services}
                  </div>
                </div>
              </div>
              <div className="spacer-xlarge"></div>
              <div
                data-w-id="3e869994-65c3-5094-e2c3-0228f50f7f21"
                className="max-title is-40rem"
                data-motion="aboutAboutHero-element-10"
              >
                <h1 className="h2">{content.title}</h1>
              </div>
              <div className="spacer-xlarge"></div>
              <div
                data-w-id="f5237b94-3f88-8a4e-d0f9-ce23664ce2e6"
                className="max-description is-32rem"
                data-motion="aboutAboutHero-element-13"
              >
                <div className="text-color-grey">
                  {
                    content.weArePassionateAboutCreatingInspiringAttentionGrabbingAndEnduring
                  }
                </div>
              </div>
              <div className="gap-xsmall"></div>
              <div
                data-w-id="a809410e-9f01-ad2e-3962-a3d63baf1fb8"
                data-motion="aboutAboutHero-element-16"
              >
                <div data-wf--button--variant="secondary">
                  <Link
                    data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                    href={content.getStartedHref}
                    className="button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2 w-inline-block"
                    data-motion="aboutAboutHero-element-18"
                  >
                    <div>{content.getStarted}</div>
                    <div
                      data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                      className="icon_button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2"
                      data-motion="aboutAboutHero-element-20"
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
          <div className="spacer">
            <div style={{ height: "5rem" }} className="spacer-desktop"></div>
            <div style={{ height: "4rem" }} className="spacer-tablet"></div>
            <div style={{ height: "3rem" }} className="spacer-mobile"></div>
          </div>
          <div className="container-large">
            <div className="hero_statistics">
              <div
                data-w-id="bdbd3ff9-172e-50fa-d885-065212807129"
                className="item_left"
                data-motion="aboutAboutHero-element-32"
              >
                <div className="card_number">
                  <div className="h6">{content.value50}</div>
                  <div className="spacer-small"></div>
                  <div>{content.projectComplete}</div>
                </div>
              </div>
              <div
                data-w-id="bdbd3ff9-172e-50fa-d885-06521280712b"
                className="vertical_center is-left"
                data-motion="aboutAboutHero-element-37"
              >
                <div className="card_number">
                  <div className="h6">{content.value100}</div>
                  <div className="spacer-small"></div>
                  <div>{content.expertTeams}</div>
                </div>
              </div>
              <div
                id="w-node-bdbd3ff9-172e-50fa-d885-06521280712f-08bff021"
                data-w-id="bdbd3ff9-172e-50fa-d885-06521280712f"
                className="item_right"
                data-motion="aboutAboutHero-element-42"
              >
                <div className="card_number">
                  <div className="h6">{content.value35m}</div>
                  <div className="spacer-small"></div>
                  <div>{content.projectValue}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer-medium"></div>
        </div>
      </div>
      <div className="animation">
        <div className="hero_img-bottom">
          <Image
            src={content.hero2039Image}
            alt={content.Alt}
            className="img"
            width={100}
            height={100}
            sizes="100px"
          />
        </div>
      </div>
    </section>
  );
}
