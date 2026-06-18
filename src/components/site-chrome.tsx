"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Client-side visual chrome shared across every page:
 *  - custom green cursor (dot + ring that expands over interactive elements)
 *  - reveal-on-scroll via IntersectionObserver for any `.reveal` element
 *  - adds `.js-loaded` so reveal styling only hides content when JS is active
 *
 * Renders the fixed noise overlay + cursor nodes; everything is pointer-events:none.
 */
export default function SiteChrome() {
  const pathname = usePathname();

  // ---- Reveal on scroll ----
  // Re-runs on every route change. SiteChrome lives in the root layout and does
  // NOT remount on client-side navigation, so this MUST depend on `pathname` —
  // otherwise a navigated-to page's `.reveal` elements stay hidden (blank page).
  useEffect(() => {
    document.documentElement.classList.add("js-loaded");

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reveal = (el: Element) => el.classList.add("is-visible");

    if (typeof IntersectionObserver === "undefined") {
      revealEls.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    // Reveal anything already at/above the fold immediately (covers first paint
    // and scroll-restored reloads); observe the rest as they scroll into view.
    revealEls.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        reveal(el);
      } else {
        observer.observe(el);
      }
    });

    // Safety net: never leave content hidden if the observer misbehaves.
    const failsafe = window.setTimeout(() => revealEls.forEach(reveal), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  // ---- Custom cursor (fine pointers only) — set up once ----
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const root = document.documentElement;
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    let rafId = 0;
    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (dot) dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      root.classList.add("cursor-ready");
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button'], select, input, .lift-card",
      );
      root.classList.toggle("cursor-hover", Boolean(interactive));
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
      root.classList.remove("cursor-ready", "cursor-hover");
    };
  }, []);

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
    </>
  );
}
