"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function AboutTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.aboutTeam;
  return (
    <section id="team" className="section_teams" ref={sectionRef}>
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical_center">
            <div
              data-w-id="b0e8c478-7802-dc22-ec1b-3435ebd40d92"
              data-motion="aboutTeam-element-5"
            >
              <div data-wf--tag--variant="base" className="tag">
                <div className="icon-1x1-extrasmall bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.teams}
                </div>
              </div>
            </div>
            <div className="spacer-huge"></div>
            <h2
              data-w-id="843e9ae5-ece6-5cb2-f095-0eda0c587bd2"
              className="h2-large"
              data-motion="aboutTeam-element-10"
            >
              {content.teams}
            </h2>
          </div>
          <div className="spacer">
            <div style={{ height: "7.5rem" }} className="spacer-desktop"></div>
            <div style={{ height: "4rem" }} className="spacer-tablet"></div>
            <div style={{ height: "2rem" }} className="spacer-mobile"></div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="team_grid w-dyn-items">
              {content.items.map((item, index) => (
                <div
                  data-w-id="d95589ae-5f9c-c8d5-d218-f9bf3b3422bc"
                  role="listitem"
                  className="w-dyn-item"
                  data-motion="aboutTeam-element-57"
                  key={index}
                >
                  <a
                    data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"
                    href={item.href}
                    className="team_card w-inline-block"
                    data-motion="aboutTeam-element-58"
                  >
                    <div className="team_img">
                      <Image
                        src={item.image}
                        alt={content.Alt}
                        className="img secondary-3"
                        width={100}
                        height={100}
                        sizes="100px"
                        unoptimized
                      />
                    </div>
                    <div className="blog_description">
                      <div className="blog_text">
                        <div className="text-2xl">{item.label}</div>
                        <div className="text-color-secondary">
                          {item.label2}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-medium"></div>
    </section>
  );
}
