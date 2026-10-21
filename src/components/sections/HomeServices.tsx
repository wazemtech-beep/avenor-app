"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function HomeServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeServices;
  return (
    <section id="services" className="section_services" ref={sectionRef}>
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="w-layout-vflex">
            <div
              data-w-id="23bd34e3-8659-c796-cb56-cec0b7f41115"
              className="w-layout-vflex"
              data-motion="homeServices-element-5"
            >
              <div
                data-wf--tag--variant="secondary"
                className="tag w-variant-efd82f01-7b51-243c-2713-615d96756a76"
              >
                <div className="icon-1x1-extrasmall w-variant-efd82f01-7b51-243c-2713-615d96756a76 bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.services}
                </div>
              </div>
            </div>
            <div className="spacer-xlarge"></div>
            <div
              data-w-id="23bd34e3-8659-c796-cb56-cec0b7f41119"
              className="max-title is-50rem"
              data-motion="homeServices-element-10"
            >
              <h2>
                {content.heading}
                <span className="text-color-accent">{content.tailored}</span>
                {content.heading2}
              </h2>
            </div>
            <div className="spacer-huge"></div>
            <div
              data-w-id="81af6003-d648-ddc1-44fa-ea622737b89a"
              data-motion="homeServices-element-14"
            >
              <div data-wf--button--variant="base">
                <Link
                  data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                  href={content.learnMoreHref}
                  className="button w-inline-block"
                  data-motion="homeServices-element-16"
                >
                  <div>{content.learnMore}</div>
                  <div
                    data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                    className="icon_button"
                    data-motion="homeServices-element-18"
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
          <div className="spacer">
            <div style={{ height: "6.25rem" }} className="spacer-desktop"></div>
            <div style={{ height: "3rem" }} className="spacer-tablet"></div>
            <div style={{ height: "2rem" }} className="spacer-mobile"></div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              {content.items.map((item, index) => (
                <div
                  data-w-id="23bd34e3-8659-c796-cb56-cec0b7f41125"
                  role="listitem"
                  className="w-dyn-item"
                  data-motion="homeServices-element-64"
                  key={index}
                >
                  <a
                    data-w-id="e30e864d-afff-f669-f173-2338d03612a1"
                    href={item.href}
                    className="w-inline-block"
                    data-motion="homeServices-element-65"
                  >
                    <div className="service_card">
                      <div className="service_left">
                        <div className="w-layout-hflex">
                          <div className="text-xs">
                            {content.value00}
                            <br />
                          </div>
                          <div className="text-xs">{item.label}</div>
                        </div>
                        <h6>{item.title}</h6>
                      </div>
                      <div
                        id="w-node-e30e864d-afff-f669-f173-2338d03612a7-d03612a1"
                        className="service_description"
                      >
                        <div>{item.label2}</div>
                        <div className="learn_button">
                          <div className="text-sm text-style-allcaps">
                            {content.learnMore}
                          </div>
                          <div className="line_underline"></div>
                        </div>
                      </div>
                      <div className="service_img-wrap">
                        <div className="service_img">
                          <Image
                            src={item.image}
                            alt={content.Alt}
                            className="img"
                            width={100}
                            height={100}
                            sizes="100px"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="padding_inside"></div>
        </div>
      </div>
    </section>
  );
}
