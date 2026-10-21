import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function mountVistalInteractions(root: HTMLElement) {
  const cleanups: (() => void)[] = [];
  let disposed = false;
  const media = gsap.matchMedia();
  const listen = (
    element: EventTarget,
    type: string,
    handler: EventListener,
  ) => {
    element.addEventListener(type, handler);
    cleanups.push(() => element.removeEventListener(type, handler));
  };
  root.querySelectorAll<HTMLElement>(".faq_item").forEach((item, i) => {
    const question = item.querySelector<HTMLButtonElement>(".question")!;
    const answer = item.querySelector<HTMLElement>(".answer")!;
    question.id = `vistal-question-${i}`;
    answer.id = `vistal-answer-${i}`;
    question.setAttribute("aria-controls", answer.id);
    question.setAttribute("aria-expanded", "false");
    answer.setAttribute("role", "region");
    answer.setAttribute("aria-labelledby", question.id);
    answer.setAttribute("aria-hidden", "true");
    listen(question, "click", () => {
      const open = question.getAttribute("aria-expanded") !== "true";
      question.setAttribute("aria-expanded", String(open));
      answer.setAttribute("aria-hidden", String(!open));
      item.dispatchEvent(new Event(open ? "vistal:open" : "vistal:close"));
    });
  });

  root.querySelectorAll<HTMLElement>(".w-tabs").forEach((tabs, tabGroup) => {
    const links = Array.from(
      tabs.querySelectorAll<HTMLAnchorElement>(".w-tab-link"),
    );
    const panes = Array.from(tabs.querySelectorAll<HTMLElement>(".w-tab-pane"));
    const menu = tabs.querySelector(".w-tab-menu")!;
    menu.setAttribute("role", "tablist");
    let active = Math.max(
      0,
      links.findIndex((link) => link.classList.contains("w--current")),
    );
    let displayed = active;
    let transition: gsap.core.Timeline | undefined;
    const select = (index: number, animate = true) => {
      if (animate && index === active) return;
      active = index;
      links.forEach((link, i) => {
        link.classList.toggle("w--current", i === index);
        link.setAttribute("aria-selected", String(i === index));
        link.tabIndex = i === index ? 0 : -1;
      });
      transition?.kill();
      const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const show = () => {
        if (disposed) return;
        panes.forEach((pane, i) => {
          pane.classList.toggle("w--tab-active", i === index);
          pane.setAttribute("aria-hidden", String(i !== index));
          pane.inert = i !== index;
        });
        displayed = index;
        panes[index].dispatchEvent(new Event("vistal:tab-visible"));
        ScrollTrigger.refresh();
      };
      if (!animate || reduced) {
        show();
        gsap.set(panes[index], { opacity: 1 });
        return;
      }
      transition = gsap.timeline();
      transition.to(panes[displayed], {
        opacity: 0,
        duration: Number(tabs.dataset.durationOut || 100) / 1000,
        ease: "power1.inOut",
      });
      transition.call(show);
      transition.fromTo(
        panes[index],
        { opacity: 0 },
        {
          opacity: 1,
          duration: Number(tabs.dataset.durationIn || 300) / 1000,
          ease: "power1.inOut",
          immediateRender: false,
        },
      );
    };
    links.forEach((link, i) => {
      link.id = `vistal-tab-${tabGroup}-${i}`;
      link.setAttribute("role", "tab");
      link.setAttribute("aria-controls", `vistal-pane-${tabGroup}-${i}`);
      link.href = `#vistal-pane-${tabGroup}-${i}`;
      panes[i].id = `vistal-pane-${tabGroup}-${i}`;
      panes[i].setAttribute("role", "tabpanel");
      panes[i].setAttribute("aria-labelledby", link.id);
      listen(link, "click", (event) => {
        event.preventDefault();
        select(i);
      });
      listen(link, "keydown", (event) => {
        const key = (event as KeyboardEvent).key;
        const index =
          key === "Home"
            ? 0
            : key === "End"
              ? links.length - 1
              : ["ArrowRight", "ArrowDown"].includes(key)
                ? (active + 1) % links.length
                : ["ArrowLeft", "ArrowUp"].includes(key)
                  ? (active - 1 + links.length) % links.length
                  : -1;
        if (index < 0) return;
        event.preventDefault();
        select(index);
        links[index].focus();
      });
    });
    select(active, false);
    cleanups.push(() => transition?.kill());
  });

  root.querySelectorAll<HTMLElement>(".w-slider").forEach((slider) => {
    const mask = slider.querySelector<HTMLElement>(".w-slider-mask")!;
    const slides = Array.from(mask.querySelectorAll<HTMLElement>(".w-slide"));
    let active = 0;
    let pointerX: number | null = null;
    const move = (direction: number) => {
      const step =
        slides[0].offsetWidth +
        parseFloat(getComputedStyle(slides[0]).marginRight);
      const visible = Math.max(1, Math.floor(slider.clientWidth / step));
      const maximum = Math.max(0, slides.length - visible);
      active =
        active + direction > maximum
          ? 0
          : active + direction < 0
            ? maximum
            : active + direction;
      gsap.to(slides, {
        x: -step * active,
        duration: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? 0
          : Number(slider.dataset.duration || 500) / 1000,
        ease: "power1.inOut",
        overwrite: true,
      });
      slides.forEach((slide, i) => {
        const visibleSlide = i >= active && i < active + visible;
        slide.inert = !visibleSlide;
        slide.setAttribute("aria-hidden", String(!visibleSlide));
      });
    };
    slider.setAttribute("role", "region");
    slider.setAttribute("aria-label", "Featured articles");
    listen(slider.querySelector(".w-slider-arrow-left")!, "click", () =>
      move(-1),
    );
    listen(slider.querySelector(".w-slider-arrow-right")!, "click", () =>
      move(1),
    );
    listen(mask, "pointerdown", (event) => {
      pointerX = (event as PointerEvent).clientX;
    });
    listen(mask, "pointerup", (event) => {
      if (pointerX === null) return;
      const difference = (event as PointerEvent).clientX - pointerX;
      pointerX = null;
      if (Math.abs(difference) > 40) move(difference < 0 ? 1 : -1);
    });
    listen(mask, "pointercancel", () => {
      pointerX = null;
    });
    listen(window, "resize", () => move(0));
    move(0);
  });

  const navbar = root.querySelector<HTMLElement>(".navbar")!;
  const menuButton = navbar.querySelector<HTMLElement>(".menu-button")!;
  const nav = navbar.querySelector<HTMLElement>(".nav_mobile")!;
  const dropdown = navbar.querySelector<HTMLElement>(".nav_dropdown");
  const dropdownButton =
    dropdown?.querySelector<HTMLElement>(".w-dropdown-toggle");
  const dropdownList = dropdown?.querySelector<HTMLElement>(".w-dropdown-list");
  menuButton.setAttribute("role", "button");
  menuButton.tabIndex = 0;
  menuButton.setAttribute("aria-label", "Open navigation");
  menuButton.setAttribute("aria-expanded", "false");
  nav.id = "vistal-navigation";
  menuButton.setAttribute("aria-controls", nav.id);
  if (dropdownButton && dropdownList) {
    dropdownButton.setAttribute("role", "button");
    dropdownButton.tabIndex = 0;
    dropdownButton.setAttribute("aria-expanded", "false");
    dropdownList.id = "vistal-pages";
    dropdownButton.setAttribute("aria-controls", dropdownList.id);
  }
  const setDropdown = (open: boolean) => {
    if (!dropdown || !dropdownButton || !dropdownList) return;
    dropdownButton.setAttribute("aria-expanded", String(open));
    dropdownList.classList.toggle("w--open", open);
    dropdownList.inert = !open;
    dropdown.dispatchEvent(
      new Event(`vistal:dropdown_${open ? "open" : "close"}`),
    );
  };
  const setMenu = (open: boolean) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
    navbar.classList.toggle("vistal-menu-open", open);
    nav.classList.toggle("w--open", open);
    navbar.dispatchEvent(new Event(`vistal:navbar_${open ? "open" : "close"}`));
    if (!open) setDropdown(false);
  };
  const buttonKeys = (el: HTMLElement) =>
    listen(el, "keydown", (event) => {
      if (!["Enter", " "].includes((event as KeyboardEvent).key)) return;
      event.preventDefault();
      el.click();
    });
  listen(menuButton, "click", () =>
    setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
  );
  buttonKeys(menuButton);
  if (dropdownButton && dropdownList) {
    listen(dropdownButton, "click", () =>
      setDropdown(dropdownButton.getAttribute("aria-expanded") !== "true"),
    );
    buttonKeys(dropdownButton);
    dropdownList.inert = true;
  }
  listen(document, "click", (event) => {
    const target = event.target as Node;
    if (dropdown && !dropdown.contains(target)) setDropdown(false);
    if (
      !navbar.contains(target) &&
      menuButton.getAttribute("aria-expanded") === "true"
    )
      setMenu(false);
  });
  listen(nav, "click", (event) => {
    if ((event.target as HTMLElement).closest("a")) setMenu(false);
  });
  listen(document, "keydown", (event) => {
    if (
      (event as KeyboardEvent).key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      setMenu(false);
      menuButton.focus();
    }
  });
  const onScroll = () =>
    navbar.classList.toggle("vistal-nav-solid", window.scrollY > 80);
  listen(window, "scroll", onScroll);
  onScroll();
  const refresh = () => {
    if (!disposed) ScrollTrigger.refresh();
  };
  root.querySelectorAll("img").forEach((img) => {
    if (!img.complete) listen(img, "load", refresh);
  });
  document.fonts.ready.then(refresh);
  refresh();
  return () => {
    disposed = true;
    cleanups.forEach((cleanup) => cleanup());
    media.revert();
    gsap.killTweensOf(root.querySelectorAll(".w-tab-pane,.w-slide"));
  };
}
