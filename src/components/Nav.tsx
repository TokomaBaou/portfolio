"use client";

import { useEffect, useRef } from "react";

const links = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Skills", href: "#skills" },
  { num: "03", label: "Projects", href: "#projects" },
  { num: "04", label: "Contact", href: "#contact" },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => {
      navRef.current?.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-[100] px-8 transition-all duration-[400ms]"
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-[1.2rem]">
        <div className="font-mono font-semibold text-[1.1rem] text-accent tracking-[-0.5px]">
          M.O <span className="text-muted font-normal">/ portfolio</span>
        </div>
        <ul className="hidden sm:flex gap-[0.3rem] list-none">
          {links.map((l) => (
            <li key={l.num}>
              <a
                href={l.href}
                className="text-muted text-[0.82rem] font-medium px-4 py-2 rounded-md transition-all duration-300 font-mono tracking-[0.5px] hover:text-accent hover:bg-accent/[0.06]"
              >
                <span className="text-accent text-[0.72rem] mr-[0.3rem]">
                  {l.num}.
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
