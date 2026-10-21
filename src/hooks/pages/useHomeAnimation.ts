"use client";
import type { RefObject } from "react";
import { gsap } from "gsap";
import {
  useSectionAnimation,
  elements,
  matchesAny,
  bindReveal,
  bindHover,
  bindScrollTimeline,
  bindControlEvent,
  type AnimationSetup,
} from "@/hooks/useSectionAnimation";
const setup: AnimationSetup = (section, reduced, cleanup) => {
  // Navbar - menu opens
  for (const element of elements(
    section,
    '[data-w-id="9edf84aa-1c78-d247-2c17-fa546717f184"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".nav-button_line.is-first"), {
      yPercent: -350,
    });
    gsap.set(elements(element, ".nav-button_line.is-third"), { yPercent: 350 });
    timeline.to(
      elements(element, ".nav-button_line.is-first"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 0.25, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-third"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 0.25, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-second"),
      { ...{ scaleX: 0 }, duration: reduced ? 0 : 0, ease: "none" },
      0.25,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-first"),
      {
        ...{ rotation: -45 },
        duration: reduced ? 0 : 0.25,
        ease: "power1.out",
      },
      0.25,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-third"),
      { ...{ rotation: 45 }, duration: reduced ? 0 : 0.25, ease: "power1.out" },
      0.25,
    );
    cleanup.push(bindControlEvent(element, timeline, "vistal:navbar_open"));
  }

  // Navbar - menu closes
  for (const element of elements(
    section,
    '[data-w-id="9edf84aa-1c78-d247-2c17-fa546717f184"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      elements(element, ".nav-button_line.is-first"),
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0.25, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-third"),
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0.25, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-second"),
      { ...{ scaleX: 1 }, duration: reduced ? 0 : 0, ease: "none" },
      0.25,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-first"),
      {
        ...{ yPercent: -350 },
        duration: reduced ? 0 : 0.25,
        ease: "power1.out",
      },
      0.25,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-third"),
      {
        ...{ yPercent: 350 },
        duration: reduced ? 0 : 0.25,
        ease: "power1.out",
      },
      0.25,
    );
    cleanup.push(bindControlEvent(element, timeline, "vistal:navbar_close"));
  }

  // Accordion Open
  for (const element of elements(
    section,
    '[data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".answer"), { height: "0px" });
    gsap.set(elements(element, ".line-vertical"), { display: "block" });
    gsap.set(elements(element, ".line-vertical"), { scaleX: 1, scaleY: 1 });
    timeline.to(
      elements(element, ".answer"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".line-vertical"),
      { ...{ display: "none" }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".line-vertical"),
      {
        ...{ scaleX: 0, scaleY: 0 },
        duration: reduced ? 0 : 0.5,
        ease: "power3.out",
      },
      0,
    );
    cleanup.push(bindControlEvent(element, timeline, "vistal:open"));
  }

  // Accordion Close
  for (const element of elements(
    section,
    '[data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      elements(element, ".answer"),
      { ...{ height: "0px" }, duration: reduced ? 0 : 0.5, ease: "power3.out" },
      0,
    );
    timeline.to(
      elements(element, ".line-vertical"),
      { ...{ display: "block" }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".line-vertical"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "power3.out",
      },
      0,
    );
    cleanup.push(bindControlEvent(element, timeline, "vistal:close"));
  }

  // Hover In
  for (const element of elements(
    section,
    '[data-w-id="e30e864d-afff-f669-f173-2338d03612a1"], [data-w-id="e30e864d-afff-f669-f173-2338d03612a1"], [data-w-id="e30e864d-afff-f669-f173-2338d03612a1"]',
  )) {
    if (!matchesAny(["(min-width: 992px)"])) continue;
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".service_img-wrap"), { opacity: 0 });
    gsap.set(elements(element, ".service_img"), { opacity: 0 });
    gsap.set(elements(element, ".service_img-wrap"), {
      xPercent: -8,
      yPercent: 0,
    });
    gsap.set(elements(element, ".service_img-wrap"), { rotation: -7.465 });
    gsap.set(elements(element, ".service_left"), { xPercent: 0 });
    gsap.set(elements(element, ".service_description"), { xPercent: 0 });
    gsap.set(elements(element, ".service_card"), {
      backgroundColor: "rgba(0,0,0,1)",
    });
    gsap.set(elements(element, ".service_card"), {
      color: "rgba(255,255,255,1)",
    });
    timeline.to(
      elements(element, ".service_img-wrap"),
      { ...{ display: "block" }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".service_img"),
      { ...{ display: "block" }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".service_img-wrap"),
      { ...{ rotation: -7.465 }, duration: reduced ? 0 : 0.2, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".service_img-wrap"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 0.2, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".service_img"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 0.2, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".service_img-wrap"),
      {
        ...{ xPercent: -8, yPercent: -25 },
        duration: reduced ? 0 : 0.2,
        ease: "none",
      },
      0,
    );
    timeline.to(
      elements(element, ".service_left"),
      { ...{ xPercent: 5 }, duration: reduced ? 0 : 0.2, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".service_description"),
      { ...{ xPercent: 5 }, duration: reduced ? 0 : 0.2, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".service_card"),
      {
        ...{ backgroundColor: "rgba(255,255,255,1)" },
        duration: reduced ? 0 : 0.2,
        ease: "none",
      },
      0,
    );
    timeline.to(
      elements(element, ".service_card"),
      {
        ...{ color: "rgba(0,0,0,1)" },
        duration: reduced ? 0 : 0.2,
        ease: "none",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Hover Out
  for (const element of elements(
    section,
    '[data-w-id="e30e864d-afff-f669-f173-2338d03612a1"], [data-w-id="e30e864d-afff-f669-f173-2338d03612a1"], [data-w-id="e30e864d-afff-f669-f173-2338d03612a1"]',
  )) {
    if (!matchesAny(["(min-width: 992px)"])) continue;
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      elements(element, ".service_img-wrap"),
      {
        ...{ rotation: -7.465 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.out",
      },
      0,
    );
    timeline.to(
      elements(element, ".service_img-wrap"),
      {
        ...{ xPercent: -8, yPercent: 0 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.out",
      },
      0,
    );
    timeline.to(
      elements(element, ".service_img-wrap"),
      { ...{ opacity: 0 }, duration: reduced ? 0 : 0.5, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".service_img"),
      { ...{ opacity: 0 }, duration: reduced ? 0 : 0.5, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".service_card"),
      {
        ...{ backgroundColor: "rgba(0,0,0,1)" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.out",
      },
      0,
    );
    timeline.to(
      elements(element, ".service_left"),
      { ...{ xPercent: 0 }, duration: reduced ? 0 : 0.5, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".service_description"),
      { ...{ xPercent: 0 }, duration: reduced ? 0 : 0.5, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".service_card"),
      {
        ...{ color: "rgba(255,255,255,1)" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.out",
      },
      0,
    );
    timeline.to(
      elements(element, ".service_img-wrap"),
      { ...{ display: "none" }, duration: reduced ? 0 : 0, ease: "none" },
      0.5,
    );
    timeline.to(
      elements(element, ".service_img"),
      { ...{ display: "none" }, duration: reduced ? 0 : 0, ease: "none" },
      0.5,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // slideInTop
  for (const element of elements(
    section,
    '[data-w-id="9edf84aa-1c78-d247-2c17-fa546717f184"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: 0, y: -100 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 0,
          unit: "%",
          delay: 0,
          loop: false,
        }),
      );
  }

  // growIn
  for (const element of elements(
    section,
    '[data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6bbb"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      {
        ...{ scaleX: 0.7500000000000001, scaleY: 0.7500000000000001 },
        duration: reduced ? 0 : 0,
        ease: "none",
      },
      0,
    );
    timeline.to(
      [element],
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 1,
        ease: "power3.out",
      },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 10,
          unit: "%",
          delay: 0,
          loop: false,
        }),
      );
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-w-id="23bd34e3-8659-c796-cb56-cec0b7f41115"], [data-w-id="23bd34e3-8659-c796-cb56-cec0b7f41119"], [data-w-id="81af6003-d648-ddc1-44fa-ea622737b89a"], [data-w-id="23bd34e3-8659-c796-cb56-cec0b7f41125"], [data-w-id="23bd34e3-8659-c796-cb56-cec0b7f41125"], [data-w-id="23bd34e3-8659-c796-cb56-cec0b7f41125"], [data-w-id="9a0336c4-01ce-8792-d4e0-15670227d5de"], [data-w-id="12725902-ec9f-de87-a0f5-e3e0d32cb427"], [data-w-id="12725902-ec9f-de87-a0f5-e3e0d32cb429"], [data-w-id="b65fb2c5-1d51-2882-83fd-de7a556a59ab"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc75"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc78"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc7b"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a464a"], [data-w-id="b17d349c-e135-835c-b2a6-fc529f7bd4f6"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a464e"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a4659"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b83"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b86"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b88"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6bb4"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6bb7"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c00"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c04"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c07"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: -100, y: 0 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 0,
          unit: "%",
          delay: 0.1,
          loop: false,
        }),
      );
  }

  // Card Hover In
  for (const element of elements(
    section,
    '[data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"], [data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"], [data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"], [data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"], [data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"], [data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { backgroundColor: "rgba(255,255,255,1)" });
    gsap.set(elements(element, ".img"), { scaleX: 1, scaleY: 1 });
    timeline.to(
      elements(element, ".img"),
      {
        ...{ scaleX: 1.1, scaleY: 1.1 },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      0,
    );
    timeline.to(
      [element],
      {
        ...{ backgroundColor: "rgba(239,213,86,1)" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Card Hover Off
  for (const element of elements(
    section,
    '[data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"], [data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"], [data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"], [data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"], [data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"], [data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      [element],
      {
        ...{ backgroundColor: "rgba(255,255,255,1)" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      0,
    );
    timeline.to(
      elements(element, ".img"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b90"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b96"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b9a"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b9d"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c13"], [data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c17"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: 0, y: 100 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 0,
          unit: "%",
          delay: 0.1,
          loop: false,
        }),
      );
  }

  // Button icon - hover on 2
  for (const element of elements(
    section,
    '[data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      elements(element, ".icon-1x1-small"),
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".icon-1x1-small"),
      { ...{ rotation: -15 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0.5,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Button icon - hover off 2
  for (const element of elements(
    section,
    '[data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      [element],
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // Floating Image
  for (const element of elements(
    section,
    '[data-w-id="832b69d1-ce38-c7e9-7963-e6f5ad9bfec0"], [data-w-id="832b69d1-ce38-c7e9-7963-e6f5ad9bfec0"], [data-w-id="832b69d1-ce38-c7e9-7963-e6f5ad9bfec0"], [data-w-id="832b69d1-ce38-c7e9-7963-e6f5ad9bfec0"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set([element], { yPercent: 0 });
    timeline.fromTo(
      [element],
      { yPercent: 0 },
      { yPercent: 10, duration: 1, ease: "none", immediateRender: false },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindScrollTimeline(element, timeline, {
          page: false,
          smoothing: 0.5,
          startsEntering: true,
          startsExiting: false,
          startOffset: 0,
          endOffset: 0,
        }),
      );
  }

  // Button - hover on
  for (const element of elements(
    section,
    '[data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { scaleX: 1, scaleY: 1 });
    gsap.set(elements(element, ".icon-1x1-small"), { x: 0 });
    gsap.set(elements(element, ".icon-1x1-small.is-hide"), { x: 0 });
    timeline.to(
      [element],
      {
        ...{ scaleX: 0.93, scaleY: 0.93 },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      0,
    );
    timeline.to(
      elements(element, ".icon-1x1-small.is-hide"),
      { ...{ x: 30 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".icon-1x1-small"),
      { ...{ x: 30 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Button - Hover Off
  for (const element of elements(
    section,
    '[data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      [element],
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "power3.out",
      },
      0,
    );
    timeline.to(
      elements(element, ".icon-1x1-small"),
      { ...{ x: 0 }, duration: reduced ? 0 : 0.5, ease: "power3.out" },
      0,
    );
    timeline.to(
      elements(element, ".icon-1x1-small.is-hide"),
      { ...{ x: 0 }, duration: reduced ? 0 : 0.5, ease: "power3.out" },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // Hero Word
  for (const element of elements(
    section,
    '[data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6b76"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set(elements(element, ".hero_bg"), { opacity: 1 });
    timeline.fromTo(
      elements(element, ".hero_bg"),
      { opacity: 1 },
      { opacity: 0, duration: 0.5, ease: "none", immediateRender: false },
      0,
    );
    gsap.set(elements(element, ".hero_img-overlay"), { opacity: 1 });
    timeline.fromTo(
      elements(element, ".hero_img-overlay"),
      { opacity: 1 },
      { opacity: 0, duration: 0.05, ease: "none", immediateRender: false },
      0,
    );
    gsap.set(elements(element, ".hero_content-bottom"), { opacity: 1 });
    timeline.fromTo(
      elements(element, ".hero_content-bottom"),
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.04999999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.25,
    );
    gsap.set(elements(element, ".hero_content-bottom"), { yPercent: 0 });
    timeline.fromTo(
      elements(element, ".hero_content-bottom"),
      { yPercent: 0 },
      {
        yPercent: 20,
        duration: 0.15000000000000002,
        ease: "none",
        immediateRender: false,
      },
      0.25,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindScrollTimeline(element, timeline, {
          page: false,
          smoothing: 0.5,
          startsEntering: false,
          startsExiting: false,
          startOffset: 0,
          endOffset: 0,
        }),
      );
  }

  // Cards Up Animation Mobile
  for (const element of elements(
    section,
    '[data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6ba0"]',
  )) {
    if (!matchesAny(["(max-width: 479px)"])) continue;
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set(elements(section, ".card_center"), { y: "0svh" });
    timeline.fromTo(
      elements(section, ".card_center"),
      { y: "0svh" },
      { y: "-100svh", duration: 0.16, ease: "none", immediateRender: false },
      0,
    );
    gsap.set(elements(element, ".card_center"), { rotation: 0 });
    timeline.fromTo(
      elements(element, ".card_center"),
      { rotation: 0 },
      { rotation: -10, duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    gsap.set(elements(element, ".card_left"), { rotation: -9 });
    timeline.fromTo(
      elements(element, ".card_left"),
      { rotation: -9 },
      { rotation: 0, duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".card_left"),
      { rotation: 0 },
      { rotation: 0, duration: 0.08, ease: "none", immediateRender: false },
      0.08,
    );
    timeline.fromTo(
      elements(element, ".card_left"),
      { rotation: 0 },
      { rotation: 10, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    gsap.set(elements(section, ".card_left"), { xPercent: 0 });
    timeline.fromTo(
      elements(section, ".card_left"),
      { xPercent: 0 },
      { xPercent: 15, duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { xPercent: 15 },
      { xPercent: 15, duration: 0.08, ease: "none", immediateRender: false },
      0.08,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { xPercent: 15 },
      { xPercent: 15, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    gsap.set(elements(section, ".card_left"), { y: "0svh" });
    timeline.fromTo(
      elements(section, ".card_left"),
      { y: "0svh" },
      { y: "0svh", duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { y: "0svh" },
      { y: "0svh", duration: 0.08, ease: "none", immediateRender: false },
      0.08,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { y: "0svh" },
      { y: "-100svh", duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    gsap.set(elements(element, ".card_right"), { rotation: 9 });
    timeline.fromTo(
      elements(element, ".card_right"),
      { rotation: 9 },
      { rotation: 0, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    timeline.fromTo(
      elements(element, ".card_right"),
      { rotation: 0 },
      { rotation: 0, duration: 0, ease: "none", immediateRender: false },
      0.32,
    );
    timeline.fromTo(
      elements(element, ".card_right"),
      { rotation: 0 },
      {
        rotation: -10,
        duration: 0.48000000000000004,
        ease: "none",
        immediateRender: false,
      },
      0.32,
    );
    gsap.set(elements(section, ".card_right"), { xPercent: 0 });
    timeline.fromTo(
      elements(section, ".card_right"),
      { xPercent: 0 },
      { xPercent: -15, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindScrollTimeline(element, timeline, {
          page: false,
          smoothing: 0.5,
          startsEntering: false,
          startsExiting: false,
          startOffset: 0,
          endOffset: 0,
        }),
      );
  }

  // Cards Up Animation Landscape
  for (const element of elements(
    section,
    '[data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6ba0"]',
  )) {
    if (!matchesAny(["(min-width: 480px) and (max-width: 767px)"])) continue;
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set(elements(section, ".card_center"), { y: "0svh" });
    timeline.fromTo(
      elements(section, ".card_center"),
      { y: "0svh" },
      { y: "-100svh", duration: 0.16, ease: "none", immediateRender: false },
      0,
    );
    gsap.set(elements(element, ".card_center"), { rotation: 0 });
    timeline.fromTo(
      elements(element, ".card_center"),
      { rotation: 0 },
      { rotation: -10, duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    gsap.set(elements(element, ".card_left"), { rotation: -9 });
    timeline.fromTo(
      elements(element, ".card_left"),
      { rotation: -9 },
      { rotation: 0, duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".card_left"),
      { rotation: 0 },
      { rotation: 0, duration: 0.08, ease: "none", immediateRender: false },
      0.08,
    );
    timeline.fromTo(
      elements(element, ".card_left"),
      { rotation: 0 },
      { rotation: 10, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    gsap.set(elements(section, ".card_left"), { xPercent: 0 });
    timeline.fromTo(
      elements(section, ".card_left"),
      { xPercent: 0 },
      { xPercent: 25, duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { xPercent: 25 },
      { xPercent: 25, duration: 0.08, ease: "none", immediateRender: false },
      0.08,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { xPercent: 25 },
      { xPercent: 25, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    gsap.set(elements(section, ".card_left"), { y: "0svh" });
    timeline.fromTo(
      elements(section, ".card_left"),
      { y: "0svh" },
      { y: "0svh", duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { y: "0svh" },
      { y: "0svh", duration: 0.08, ease: "none", immediateRender: false },
      0.08,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { y: "0svh" },
      { y: "-100svh", duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    gsap.set(elements(element, ".card_right"), { rotation: 9 });
    timeline.fromTo(
      elements(element, ".card_right"),
      { rotation: 9 },
      { rotation: 0, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    timeline.fromTo(
      elements(element, ".card_right"),
      { rotation: 0 },
      { rotation: 0, duration: 0, ease: "none", immediateRender: false },
      0.32,
    );
    timeline.fromTo(
      elements(element, ".card_right"),
      { rotation: 0 },
      {
        rotation: -10,
        duration: 0.48000000000000004,
        ease: "none",
        immediateRender: false,
      },
      0.32,
    );
    gsap.set(elements(section, ".card_right"), { xPercent: 0 });
    timeline.fromTo(
      elements(section, ".card_right"),
      { xPercent: 0 },
      { xPercent: -25, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindScrollTimeline(element, timeline, {
          page: false,
          smoothing: 0.5,
          startsEntering: false,
          startsExiting: false,
          startOffset: 0,
          endOffset: 0,
        }),
      );
  }

  // Cards Up Animation
  for (const element of elements(
    section,
    '[data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6ba0"]',
  )) {
    if (
      !matchesAny([
        "(min-width: 992px)",
        "(min-width: 768px) and (max-width: 991px)",
      ])
    )
      continue;
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set(elements(section, ".card_center"), { y: "0svh" });
    timeline.fromTo(
      elements(section, ".card_center"),
      { y: "0svh" },
      { y: "-100svh", duration: 0.16, ease: "none", immediateRender: false },
      0,
    );
    gsap.set(elements(element, ".card_center"), { rotation: 0 });
    timeline.fromTo(
      elements(element, ".card_center"),
      { rotation: 0 },
      { rotation: -10, duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    gsap.set(elements(element, ".card_left"), { rotation: -9 });
    timeline.fromTo(
      elements(element, ".card_left"),
      { rotation: -9 },
      { rotation: 0, duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".card_left"),
      { rotation: 0 },
      { rotation: 0, duration: 0.08, ease: "none", immediateRender: false },
      0.08,
    );
    timeline.fromTo(
      elements(element, ".card_left"),
      { rotation: 0 },
      { rotation: 10, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    gsap.set(elements(section, ".card_left"), { xPercent: 0 });
    timeline.fromTo(
      elements(section, ".card_left"),
      { xPercent: 0 },
      { xPercent: 40, duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { xPercent: 40 },
      { xPercent: 40, duration: 0.08, ease: "none", immediateRender: false },
      0.08,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { xPercent: 40 },
      { xPercent: 40, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    gsap.set(elements(section, ".card_left"), { y: "0svh" });
    timeline.fromTo(
      elements(section, ".card_left"),
      { y: "0svh" },
      { y: "0svh", duration: 0.08, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { y: "0svh" },
      { y: "0svh", duration: 0.08, ease: "none", immediateRender: false },
      0.08,
    );
    timeline.fromTo(
      elements(section, ".card_left"),
      { y: "0svh" },
      { y: "-100svh", duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    gsap.set(elements(element, ".card_right"), { rotation: 9 });
    timeline.fromTo(
      elements(element, ".card_right"),
      { rotation: 9 },
      { rotation: 0, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    timeline.fromTo(
      elements(element, ".card_right"),
      { rotation: 0 },
      { rotation: 0, duration: 0, ease: "none", immediateRender: false },
      0.32,
    );
    timeline.fromTo(
      elements(element, ".card_right"),
      { rotation: 0 },
      {
        rotation: -10,
        duration: 0.48000000000000004,
        ease: "none",
        immediateRender: false,
      },
      0.32,
    );
    gsap.set(elements(section, ".card_right"), { xPercent: 0 });
    timeline.fromTo(
      elements(section, ".card_right"),
      { xPercent: 0 },
      { xPercent: -40, duration: 0.16, ease: "none", immediateRender: false },
      0.16,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindScrollTimeline(element, timeline, {
          page: false,
          smoothing: 0.8,
          startsEntering: false,
          startsExiting: false,
          startOffset: 0,
          endOffset: 0,
        }),
      );
  }

  // Image Reveal
  for (const element of elements(
    section,
    '[data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c0a"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".img-wrapper"), {
      xPercent: 0,
      yPercent: -100,
    });
    gsap.set(elements(element, ".img"), { yPercent: 100 });
    gsap.set(elements(element, ".img"), { scaleX: 1.5, scaleY: 1.5 });
    gsap.set(elements(element, ".img"), { filter: "blur(10px)" });
    timeline.to(
      elements(element, ".img-wrapper"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 1.6, ease: "power3.out" },
      0,
    );
    timeline.to(
      elements(element, ".img"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 1.6, ease: "power3.out" },
      0,
    );
    timeline.to(
      elements(element, ".img"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 1.6,
        ease: "power3.out",
      },
      0,
    );
    timeline.to(
      elements(element, ".img"),
      {
        ...{ filter: "blur(0px)" },
        duration: reduced ? 0 : 1.6,
        ease: "power3.out",
      },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 0,
          unit: "%",
          delay: 0,
          loop: false,
        }),
      );
  }
};
export function useHomeAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}
