"use client";
import { useRef } from "react";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/data/siteConfig";
export default function ContactContact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.contactContact;
  return (
    <section id="contact" className="section_contact" ref={sectionRef}>
      <div className="blog_img-container">
        <div className="padding-section-medium"></div>
        <div className="padding-global">
          <div className="container-small">
            <div
              data-w-id="7cd64e5a-5661-56c1-988b-e937bd2026ec"
              className="form_component w-form"
              data-motion="contactContact-element-5"
            >
              <div className="w-layout-vflex form_title">
                <div data-wf--tag--variant="base" className="tag">
                  <div className="icon-1x1-extrasmall bg-secondary"></div>
                  <div className="text-sm text-style-allcaps">
                    {content.contact}
                  </div>
                </div>
                <h2 className="h6">{content.heading}</h2>
                <div>{content.shareYourVisionWithUs}</div>
              </div>
              <ContactForm
                id="wf-form-Email"
                name="wf-form-Email"
                data-name="Email"
                method="get"
                className="form_form"
                data-wf-page-id="68f12cb6900f6edbb94d9b02"
                data-wf-element-id="6d80eafe-62a0-6441-a917-c791d14bc7b7"
              >
                <div className="form_field-wrapper">
                  <label
                    {...{ htmlFor: "First-Name-3" }}
                    className="form_label"
                  >
                    {content.fullName}
                  </label>
                  <input
                    className="form_input w-input"
                    maxLength={256}
                    name="First-Name"
                    data-name="First Name"
                    placeholder={content.firstNamePlaceholder}
                    type="text"
                    id="First-Name-3"
                    required={true}
                  />
                </div>
                <div className="form_field-wrapper">
                  <label
                    {...{ htmlFor: "Email-address" }}
                    className="form_label"
                  >
                    {content.emailAddress}
                  </label>
                  <input
                    className="form_input w-input"
                    maxLength={256}
                    name="Email-address"
                    data-name="Email address"
                    placeholder={content.emailPlaceholder}
                    type="email"
                    id="Email-address"
                    required={true}
                  />
                </div>
                <div className="form_field-wrapper">
                  <label {...{ htmlFor: "Company" }} className="form_label">
                    {content.companyName}
                  </label>
                  <input
                    className="form_input w-input"
                    maxLength={256}
                    name="Company"
                    data-name="Company"
                    placeholder={content.companyName}
                    type="text"
                    id="Company"
                    required={true}
                  />
                </div>
                <div className="form_field-wrapper">
                  <label
                    {...{ htmlFor: "Project-Message" }}
                    className="form_label"
                  >
                    {content.projectInformation}
                  </label>
                  <textarea
                    id="Project-Message"
                    name="Project-Message"
                    maxLength={5000}
                    data-name="Project Message"
                    placeholder={content.projectInformation}
                    required={true}
                    className="form_input is-text-area w-input"
                  ></textarea>
                </div>
                <div className="w-layout-vflex">
                  <button
                    data-w-id="47cd453f-ba4b-5f0c-6f12-51fdf852f0b3"
                    type="submit"
                    className="button is-form-submit"
                    data-motion="contactContact-element-26"
                  >
                    <div>{content.submit}</div>
                    <div className="icon_button is-footer">
                      <div className="icon_wrapper">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="icon_button-hover"
                        >
                          <path
                            d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </ContactForm>
              <div className="form_message-success w-form-done">
                <div>{content.thankYouYourSubmissionHasBeenReceived}</div>
              </div>
              <div className="form_message-error w-form-fail">
                <div>
                  {content.oopsSomethingWentWrongWhileSubmittingTheForm}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-section-medium"></div>
      </div>
    </section>
  );
}
