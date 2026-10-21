"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface ScrollOptions {
  start?: string;
  end?: string;
  clamp?: boolean;
  scrub?: number | boolean | null;
  enter?: string;
  leave?: string;
  enterBack?: string;
  leaveBack?: string;
}
export interface AnimationScope {
  root: HTMLElement;
  reduced: boolean;
  query: (
    selector: string,
    root?: HTMLElement,
    first?: boolean,
  ) => HTMLElement[];
  split: (
    elements: HTMLElement[],
    type: string,
    mask: string | null,
  ) => HTMLElement[];
  pose: (
    target: HTMLElement,
    values: Record<string, unknown>,
  ) => gsap.TweenVars;
  initial: (target: HTMLElement, values: gsap.TweenVars) => void;
  excluded: (breakpoints: string[]) => boolean;
  preserveClasses: (elements: HTMLElement[]) => void;
  scroll: (
    trigger: HTMLElement,
    timeline: gsap.core.Timeline,
    options: ScrollOptions,
    reduced: boolean,
  ) => void;
  hover: (
    trigger: HTMLElement,
    timeline: gsap.core.Timeline,
    leaving: boolean,
    reverse: boolean,
  ) => void;
}
export type PageAnimation = (scope: AnimationScope) => void;
export type PageEnhancements = (root: HTMLElement) => (() => void) | undefined;

export function usePageAnimation(
  ref: RefObject<HTMLDivElement | null>,
  setup: PageAnimation,
  enhance?: PageEnhancements,
) {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    let disposed = false;
    let context: gsap.Context | undefined;
    let extra: (() => void) | undefined;
    const pending: (() => void)[] = [];
    const mount = () => {
      if (disposed) return;
      extra?.();
      pending
        .splice(0)
        .reverse()
        .forEach((dispose) => dispose());
      context?.revert();
      context = gsap.context(() => {
        const media = gsap.matchMedia();
        media.add(
          {
            desktop: "(min-width: 992px)",
            tablet: "(min-width: 768px) and (max-width: 991px)",
            small: "(min-width: 480px) and (max-width: 767px)",
            tiny: "(max-width: 479px)",
            reduced: "(prefers-reduced-motion: reduce)",
          },
          (mediaContext) => {
            const listeners: (() => void)[] = [];
            const splits = new Map<HTMLElement, SplitText>();
            const poses = new Map<HTMLElement, Set<string>>();
            const defaults = new Map<HTMLElement, Map<string, unknown>>();
            const on = (
              element: HTMLElement,
              type: string,
              callback: EventListener,
            ) => {
              const handler: EventListener = (event) =>
                mediaContext.add(() => callback(event));
              element.addEventListener(type, handler);
              listeners.push(() => element.removeEventListener(type, handler));
            };
            const scope: AnimationScope = {
              root,
              reduced: Boolean(mediaContext.conditions?.reduced),
              query: (selector, area = root, first = false) => {
                if (!selector) return [];
                const items = [
                  ...(area.matches(selector) ? [area] : []),
                  ...Array.from(area.querySelectorAll<HTMLElement>(selector)),
                ];
                return first ? items.slice(0, 1) : items;
              },
              split: (elements, type, mask) =>
                elements.flatMap((element) => {
                  let instance = splits.get(element);
                  if (!instance) {
                    instance = SplitText.create(element, {
                      type,
                      ...(mask
                        ? { mask: mask as "lines" | "chars" | "words" }
                        : {}),
                      aria: "auto",
                    });
                    splits.set(element, instance);
                  }
                  return (
                    type === "lines"
                      ? instance.lines
                      : type === "words"
                        ? instance.words
                        : instance.chars
                  ) as HTMLElement[];
                }),
              pose: (target, values) => {
                let original = defaults.get(target);
                if (!original) {
                  original = new Map();
                  defaults.set(target, original);
                }
                return Object.fromEntries(
                  Object.entries(values).map(([key, value]) => {
                    if (!original!.has(key))
                      original!.set(key, gsap.getProperty(target, key));
                    return [key, value == null ? original!.get(key) : value];
                  }),
                );
              },
              initial: (target, values) => {
                const seen = poses.get(target) || new Set<string>();
                const initial = Object.fromEntries(
                  Object.entries(values).filter(([key]) => !seen.has(key)),
                );
                Object.keys(values).forEach((key) => seen.add(key));
                poses.set(target, seen);
                if (Object.keys(initial).length) gsap.set(target, initial);
              },
              excluded: (breakpoints) =>
                breakpoints.includes(
                  mediaContext.conditions?.desktop
                    ? "main"
                    : mediaContext.conditions?.tablet
                      ? "medium"
                      : mediaContext.conditions?.small
                        ? "small"
                        : "tiny",
                ),
              preserveClasses: (elements) =>
                elements.forEach((element) => {
                  const saved = element.className;
                  listeners.push(() => {
                    element.className = saved;
                  });
                }),
              scroll: (trigger, timeline, options, reduced) => {
                if (reduced) {
                  timeline.totalProgress(1);
                  return;
                }
                let mounted = false;
                const pane = trigger.closest<HTMLElement>(".w-tab-pane");
                const attach = () => {
                  if (
                    mounted ||
                    (pane && !pane.classList.contains("w--tab-active"))
                  )
                    return;
                  mounted = true;
                  mediaContext.add(() =>
                    ScrollTrigger.create({
                      trigger,
                      animation: timeline,
                      start: options.clamp
                        ? `clamp(${options.start})`
                        : options.start,
                      end: options.clamp
                        ? `clamp(${options.end})`
                        : options.end,
                      scrub: options.scrub ?? false,
                      toggleActions: "play none none none",
                      once: !options.scrub,
                    }),
                  );
                };
                if (pane) on(pane, "template:tab-visible", attach);
                attach();
              },
              hover: (trigger, timeline, leaving, reverse) => {
                const play = () => {
                  timeline.restart();
                };
                on(trigger, leaving ? "mouseleave" : "mouseenter", play);
                on(trigger, leaving ? "focusout" : "focusin", play);
                if (reverse) {
                  on(trigger, "mouseleave", () => {
                    timeline.reverse();
                  });
                  on(trigger, "focusout", () => {
                    timeline.reverse();
                  });
                }
              },
            };
            setup(scope);
            return () => {
              listeners.reverse().forEach((dispose) => dispose());
              splits.forEach((instance) => instance.revert());
            };
          },
        );
      }, root);
      extra = enhance?.(root);
      ScrollTrigger.refresh();
    };
    const refresh = () => {
      if (!disposed) ScrollTrigger.refresh();
    };
    void document.fonts.ready.then(mount);
    root.addEventListener("load", refresh, true);
    window.addEventListener("resize", refresh);
    return () => {
      disposed = true;
      root.removeEventListener("load", refresh, true);
      window.removeEventListener("resize", refresh);
      extra?.();
      pending.reverse().forEach((dispose) => dispose());
      context?.revert();
    };
  }, [ref, setup, enhance]);
}
