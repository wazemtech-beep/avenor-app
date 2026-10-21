"use client";
import { useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
export default function HomeFaq() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeFaq;
  return (
    <section id="faq" className="section_faq" ref={sectionRef}>
      <div className="padding-section-small"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="grid_two-columns">
            <div
              data-w-id="9a0336c4-01ce-8792-d4e0-15670227d5de"
              data-motion="homeFaq-element-5"
            >
              <div data-wf--tag--variant="base" className="tag">
                <div className="icon-1x1-extrasmall bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.aboutVistal}
                </div>
              </div>
            </div>
            <div className="faq_list">
              <h4
                data-w-id="12725902-ec9f-de87-a0f5-e3e0d32cb427"
                data-motion="homeFaq-element-10"
              >
                {content.heading}
              </h4>
              <div
                data-w-id="12725902-ec9f-de87-a0f5-e3e0d32cb429"
                className="faq_items"
                data-motion="homeFaq-element-11"
              >
                <div
                  data-w-id="24780478-fc31-77bc-db2c-936db5928959"
                  className="faq_item"
                  data-motion="homeFaq-element-48"
                >
                  <button type="button" className="question">
                    <div className="text-2xl">
                      {content.howDoIStartTheProcessOfBuyingAHome}
                    </div>
                    <div className="faq_icon">
                      <div className="line-horizontal"></div>
                      <div className="line-vertical"></div>
                    </div>
                  </button>
                  <div className="answer">
                    <div className="text-color-secondary">
                      {
                        content.theFirstStepIsToDetermineYourBudgetAndFinancingOptionsIfYouNeedAM
                      }
                    </div>
                    <div className="spacer-xlarge"></div>
                  </div>
                </div>
                <div
                  data-w-id="24780478-fc31-77bc-db2c-936db5928959"
                  className="faq_item"
                  data-motion="homeFaq-element-48"
                >
                  <button type="button" className="question">
                    <div className="text-2xl">
                      {content.howCanIStartAProjectWithArchitect}
                    </div>
                    <div className="faq_icon">
                      <div className="line-horizontal"></div>
                      <div className="line-vertical"></div>
                    </div>
                  </button>
                  <div className="answer">
                    <div className="text-color-secondary">
                      {
                        content.theProcessBeginsWithAConsultationWhereWeDiscussYourVisionGoalsAnd
                      }
                    </div>
                    <div className="spacer-xlarge"></div>
                  </div>
                </div>
                <div
                  data-w-id="24780478-fc31-77bc-db2c-936db5928959"
                  className="faq_item"
                  data-motion="homeFaq-element-48"
                >
                  <button type="button" className="question">
                    <div className="text-2xl">
                      {content.whatServicesDoesTheStudioOffer}
                    </div>
                    <div className="faq_icon">
                      <div className="line-horizontal"></div>
                      <div className="line-vertical"></div>
                    </div>
                  </button>
                  <div className="answer">
                    <div className="text-color-secondary">
                      {
                        content.weProvideAFullRangeOfArchitecturalAndDesignServicesFromConceptDev
                      }
                    </div>
                    <div className="spacer-xlarge"></div>
                  </div>
                </div>
                <div
                  data-w-id="24780478-fc31-77bc-db2c-936db5928959"
                  className="faq_item"
                  data-motion="homeFaq-element-48"
                >
                  <button type="button" className="question">
                    <div className="text-2xl">
                      {content.howLongDoesItTakeToCompleteAProject}
                    </div>
                    <div className="faq_icon">
                      <div className="line-horizontal"></div>
                      <div className="line-vertical"></div>
                    </div>
                  </button>
                  <div className="answer">
                    <div className="text-color-secondary">
                      {
                        content.projectTimelinesVaryDependingOnScaleAndComplexitySmallerResidenti
                      }
                    </div>
                    <div className="spacer-xlarge"></div>
                  </div>
                </div>
                <div
                  data-w-id="24780478-fc31-77bc-db2c-936db5928959"
                  className="faq_item"
                  data-motion="homeFaq-element-48"
                >
                  <button type="button" className="question">
                    <div className="text-2xl">
                      {content.doYouOfferAdviceOnSustainableDesign}
                    </div>
                    <div className="faq_icon">
                      <div className="line-horizontal"></div>
                      <div className="line-vertical"></div>
                    </div>
                  </button>
                  <div className="answer">
                    <div className="text-color-secondary">
                      {
                        content.absolutelyWeIntegrateEcoFriendlyMaterialsEnergyEfficientSystemsAn
                      }
                    </div>
                    <div className="spacer-xlarge"></div>
                  </div>
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
