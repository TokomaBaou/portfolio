import FadeUp from "../FadeUp";
import SectionLabel from "../SectionLabel";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-24">
      <SectionLabel>Projects</SectionLabel>

      {projects.map((p) => (
        <FadeUp key={p.title}>
          <div className="project-card bg-glass border border-glass-border rounded-[14px] p-[1.8rem] mb-[1.2rem] transition-all duration-[400ms] relative overflow-hidden cursor-default hover:bg-surface2 hover:border-accent/[0.15] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.4)]">
            <div className="flex justify-between items-start gap-4 mb-[0.6rem] flex-wrap">
              <div>
                {p.badge && (
                  <span className="inline-block text-[0.65rem] font-semibold text-accent bg-accent/10 px-2 py-[0.15rem] rounded font-mono uppercase tracking-[0.5px] mb-2">
                    {p.badge}
                  </span>
                )}
                <h3 className="text-[1.05rem] font-semibold text-text-bright mb-[0.3rem] transition-colors duration-300 group-hover:text-accent">
                  {p.title}
                </h3>
              </div>
              <span className="font-mono text-[0.72rem] text-dark-muted whitespace-nowrap mt-[0.2rem]">
                {p.period}
              </span>
            </div>

            <p className="text-muted text-[0.85rem] mb-[0.8rem]">{p.desc}</p>

            {p.details && (
              <ul className="list-none mb-4">
                {p.details.map((d) => (
                  <li
                    key={d}
                    className="project-detail text-dark-muted text-[0.82rem] py-[0.15rem] pl-4 relative"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-[0.35rem]">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.68rem] text-muted bg-white/5 px-2 py-[0.2rem] rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.scale && (
              <div className="text-[0.72rem] text-dark-muted mt-[0.7rem] font-mono opacity-70">
                {p.scale}
              </div>
            )}
          </div>
        </FadeUp>
      ))}
    </section>
  );
}
