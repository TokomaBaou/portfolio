import type { PillColor } from "@/data/portfolio";

const colorClasses: Record<PillColor, string> = {
  cyan: "bg-accent/[0.08] text-accent border border-accent/[0.12] hover:bg-accent/[0.15] hover:border-accent/30",
  purple:
    "bg-accent2/[0.08] text-[#a78bfa] border border-accent2/[0.12] hover:bg-accent2/[0.15] hover:border-accent2/30",
  blue: "bg-accent3/[0.08] text-accent3 border border-accent3/[0.12] hover:bg-accent3/[0.15] hover:border-accent3/30",
  orange:
    "bg-[#fb923c]/[0.08] text-[#fb923c] border border-[#fb923c]/[0.12] hover:bg-[#fb923c]/[0.15] hover:border-[#fb923c]/30",
};

export default function Pill({
  name,
  exp,
  color,
}: {
  name: string;
  exp?: string;
  color: PillColor;
}) {
  return (
    <span
      className={`inline-block px-[0.8rem] py-[0.35rem] rounded-[20px] text-[0.75rem] font-medium transition-all duration-300 cursor-default ${colorClasses[color]}`}
    >
      {name}
      {exp && (
        <span className="text-[0.65rem] opacity-60 ml-[0.3rem]">{exp}</span>
      )}
    </span>
  );
}
