"use client";

import { useEffect, useRef } from "react";
import { NAV_ITEMS, SITE, PROFILE, SOCIAL_LINKS } from "@/data/constants";

export default function LeftColumn() {
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger fade-up animations for left column elements
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const fadeEls = container.querySelectorAll<HTMLElement>(".fade-up");
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeEls.forEach((el) => fadeObserver.observe(el));
    return () => fadeObserver.disconnect();
  }, []);

  // Active section highlight for left nav
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinksRef.current.forEach((l) => l?.classList.remove("active"));
            const idx = NAV_ITEMS.findIndex(
              (n) => n.id === entry.target.id
            );
            if (idx >= 0) navLinksRef.current[idx]?.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="sticky top-0 h-screen flex flex-col justify-between py-24 pb-16 max-md:relative max-md:h-auto max-md:py-24 max-md:pb-8 max-md:min-h-0">
      <div>
        <h1 className="text-[clamp(2.4rem,4vw,3.2rem)] font-extrabold text-text-bright tracking-[-1.5px] leading-[1.1] mb-2 fade-up">
          {SITE.name}
        </h1>
        <p className="text-[clamp(1rem,2vw,1.3rem)] font-medium text-muted mb-[1.2rem] tracking-[-0.3px] fade-up stagger-1">
          {PROFILE.role} —{" "}
          <span className="text-accent">{PROFILE.tagline}</span>
        </p>
        <p className="text-dark-muted text-[0.92rem] max-w-[380px] leading-[1.7] mb-8 fade-up stagger-2">
          {PROFILE.bio}
        </p>
        <ul className="left-nav list-none mb-10 fade-up stagger-3 max-md:hidden">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.id} className="mb-[0.2rem]">
              <a
                ref={(el) => { navLinksRef.current[i] = el; }}
                href={`#${item.id}`}
                data-section={item.id}
                className={`flex items-center gap-[0.8rem] py-2 text-dark-muted text-[0.75rem] font-semibold uppercase tracking-[2px] transition-all duration-300 font-mono hover:text-text-bright ${i === 0 ? "active" : ""}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-[1.2rem] items-center fade-up stagger-4">
        {SOCIAL_LINKS.map((link, i) => (
          <span key={link.label} className="contents">
            {i > 0 && <span className="text-dark-muted">·</span>}
            <a
              href={link.href}
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              aria-label={link.label}
              className="text-dark-muted text-[0.85rem] font-mono transition-all duration-300 hover:text-accent hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}
