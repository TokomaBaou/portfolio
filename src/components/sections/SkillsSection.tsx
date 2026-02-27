import FadeUp from "../FadeUp";
import Pill from "../Pill";
import SectionLabel from "../SectionLabel";
import { skillGroups } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-24">
      <SectionLabel>Skills &amp; Tech</SectionLabel>

      {skillGroups.map((group) => (
        <FadeUp key={group.title} className="mb-8">
          <div className="text-[0.82rem] font-semibold text-text-bright mb-[0.8rem] flex items-center gap-2">
            <span className="w-[6px] h-[6px] rounded-full bg-accent" />
            {group.title}
          </div>
          <div className="flex flex-wrap gap-[0.4rem]">
            {group.pills.map((p) => (
              <Pill key={p.name} name={p.name} exp={p.exp} color={p.color} />
            ))}
          </div>
        </FadeUp>
      ))}
    </section>
  );
}
