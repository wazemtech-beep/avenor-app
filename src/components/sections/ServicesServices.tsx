"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function ServicesServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.servicesServices;
  return (
    <section id="services" className="section_services-full" ref={sectionRef}>
      <div className="padding-section-small"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="services_top">
            <div
              data-w-id="47c2d06d-2619-6674-b8ca-ceba8df3d039"
              data-motion="servicesServices-element-5"
            >
              <div data-wf--tag--variant="base" className="tag">
                <div className="icon-1x1-extrasmall bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.services}
                </div>
              </div>
            </div>
            <div
              data-w-id="a6acc1a0-ed12-3e40-d4f0-c7c130df5f48"
              className="max-title is-50rem"
              data-motion="servicesServices-element-9"
            >
              <h2>{content.heading}</h2>
            </div>
          </div>
          <div className="spacer">
            <div style={{ height: "6.25rem" }} className="spacer-desktop"></div>
            <div style={{ height: "5rem" }} className="spacer-tablet"></div>
            <div style={{ height: "3rem" }} className="spacer-mobile"></div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="service_grid w-dyn-items">
              {content.items.map((item, index) => (
                <div
                  role="listitem"
                  className="service_item animation w-dyn-item"
                  key={index}
                >
                  <a
                    data-wf--service-card-v2--variant="base"
                    data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"
                    href={item.href}
                    className="card_service w-inline-block"
                    data-motion="servicesServices-element-108"
                  >
                    <div className="card-grid">
                      <div className="service_card-description">
                        <div className="icon_card">
                          <Image
                            src={item.image}
                            alt={content.Alt}
                            className="icon-1x1-medium"
                            width={100}
                            height={100}
                            sizes="100px"
                          />
                        </div>
                        <div className="w-layout-vflex">
                          <div className="text-2xl">{item.label}</div>
                          <div className="spacer-small"></div>
                          <div className="text-color-grey text-style-3lines">
                            {item.label2}
                          </div>
                          <div className="div-block">
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
                      <div className="card_content-img">
                        <Image
                          src={item.image2}
                          alt={content.Alt}
                          className="img"
                          width={100}
                          height={100}
                          sizes="100px"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-small"></div>
    </section>
  );
}
