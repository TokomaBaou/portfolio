import FadeUp from "../FadeUp";
import Pill from "../Pill";
import SectionLabel from "../SectionLabel";
import { personalProjects } from "@/data/portfolio";

export default function PersonalSection() {
  return (
    <section id="personal" className="mb-24">
      <SectionLabel>Personal Development</SectionLabel>

      {personalProjects.map((p) => (
        <FadeUp key={p.title}>
          <div className="bg-glass border border-glass-border rounded-[14px] p-[1.6rem] mb-4 transition-all duration-[400ms] relative hover:border-accent2/25 hover:bg-surface2 hover:-translate-y-0.5">
            <h4 className="text-[1rem] text-text-bright mb-[0.4rem] font-semibold">
              {p.emoji} {p.title}
            </h4>
            <p className="text-muted text-[0.85rem] mb-[0.8rem]">{p.desc}</p>
            <div className="flex flex-wrap gap-[0.4rem] mb-3">
              {p.pills.map((pill) => (
                <Pill key={pill.name} name={pill.name} color={pill.color} />
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-[0.78rem] text-accent transition-colors duration-300 hover:text-text-bright"
              >
                View Project →
              </a>
            )}
          </div>
        </FadeUp>
      ))}
    </section>
  );
}
