import FadeUp from "./FadeUp";

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <FadeUp className="section-label font-mono text-[0.72rem] font-semibold uppercase tracking-[3px] text-accent mb-8 flex items-center gap-[0.8rem]">
      {children}
    </FadeUp>
  );
}
