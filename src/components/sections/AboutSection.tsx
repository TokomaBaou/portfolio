import FadeUp from "../FadeUp";
import SectionLabel from "../SectionLabel";

const highlights = [
  { num: "9+", label: "Projects" },
  { num: "5", label: "Years Exp" },
  { num: "15+", label: "Technologies" },
];

export default function AboutSection() {
  return (
    <section id="about" className="mb-24">
      <SectionLabel>About</SectionLabel>

      <div>
        <FadeUp>
          <p className="text-muted mb-[1.2rem] text-[0.93rem]">
            Webアプリケーション・ECの
            <strong className="text-text-bright font-semibold">
              フロントエンド開発
            </strong>
            を中心に、直近では
            <strong className="text-text-bright font-semibold">
              NestJS / GraphQL / LAMP環境
            </strong>
            のバックエンドも含めたフルスタック開発に携わっています。
          </p>
        </FadeUp>
        <FadeUp>
          <p className="text-muted mb-[1.2rem] text-[0.93rem]">
            案件では
            <strong className="text-text-bright font-semibold">基本設計</strong>
            から携わり、アーキテクチャ設計、共通コンポーネント設計、チケット管理まで幅広い工程に対応。
            <strong className="text-text-bright font-semibold">
              AIコーディングツール
            </strong>
            を活用した効率的な開発手法にも取り組んでいます。
          </p>
        </FadeUp>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {highlights.map((h, i) => (
          <FadeUp key={h.label} delay={i}>
            <div className="highlight-card bg-glass border border-glass-border rounded-xl p-[1.3rem] text-center transition-all duration-[400ms] relative overflow-hidden hover:border-accent/20 hover:-translate-y-0.5">
              <div className="text-[2rem] font-extrabold text-accent font-mono relative">
                {h.num}
              </div>
              <div className="text-[0.72rem] text-dark-muted mt-[0.2rem] uppercase tracking-[1px] relative">
                {h.label}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
