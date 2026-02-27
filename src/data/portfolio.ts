export type PillColor = "cyan" | "purple" | "blue" | "orange";

export interface SkillGroup {
  title: string;
  pills: { name: string; exp?: string; color: PillColor }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    pills: [
      { name: "JavaScript", exp: "5年", color: "cyan" },
      { name: "TypeScript", exp: "4.5年", color: "cyan" },
      { name: "HTML5", exp: "5年", color: "cyan" },
      { name: "CSS3", exp: "5年", color: "cyan" },
      { name: "PHP", color: "cyan" },
      { name: "GAS", color: "cyan" },
    ],
  },
  {
    title: "Frameworks",
    pills: [
      { name: "React", exp: "4.5年", color: "purple" },
      { name: "Next.js", exp: "2.5年", color: "purple" },
      { name: "NestJS", exp: "1.5年", color: "purple" },
      { name: "Material UI", exp: "2.5年", color: "purple" },
      { name: "Tailwind CSS", exp: "1.9年", color: "purple" },
      { name: "GraphQL", exp: "1.4年", color: "purple" },
      { name: "Prisma", color: "purple" },
      { name: "Sass", color: "purple" },
    ],
  },
  {
    title: "Database / BaaS",
    pills: [
      { name: "MySQL", exp: "1.8年", color: "blue" },
      { name: "PostgreSQL", exp: "10ヶ月", color: "blue" },
      { name: "Supabase", exp: "10ヶ月", color: "blue" },
      { name: "Firebase", exp: "1.5年", color: "blue" },
      { name: "DynamoDB", color: "blue" },
      { name: "MariaDB", color: "blue" },
    ],
  },
  {
    title: "Infrastructure & Tools",
    pills: [
      { name: "AWS (ECS, EKS, Lambda)", color: "orange" },
      { name: "Vercel", color: "orange" },
      { name: "Cloud Run", color: "orange" },
      { name: "Docker", color: "orange" },
      { name: "GitHub Actions", color: "orange" },
      { name: "Playwright", color: "orange" },
      { name: "Jest", color: "orange" },
      { name: "Storybook", color: "orange" },
      { name: "Figma", color: "orange" },
    ],
  },
];

export interface Project {
  badge?: string;
  title: string;
  period: string;
  desc: string;
  details?: string[];
  tech: string[];
  scale?: string;
}

export const projects: Project[] = [
  {
    badge: "Leader",
    title: "ウエディング関連 WEBサイトリニューアル",
    period: "2025/4 — Present",
    desc: "既存システムの仕様把握・ドキュメント化からリプレイス設計、Next.js + NestJS + GraphQLによるフルスタック開発を担当。",
    details: [
      "システムリプレイスに伴う基本設計・詳細設計",
      "TypeScript + Next.js によるフロントエンド開発",
      "NestJS + GraphQL によるバックエンドAPI開発",
      "自動テストの構築・実施",
    ],
    tech: ["Next.js", "NestJS", "TypeScript", "GraphQL", "MySQL", "AWS (ECS/EKS)"],
  },
  {
    badge: "Leader — Solo Dev",
    title: "学習コミュニティ管理プラットフォーム",
    period: "2025/5 — Present",
    desc: "要件定義〜アーキテクチャ設計〜開発〜運用まで1人で完遂。AIコーディングツールを活用し、本業と並行して2025年10月にリリース。",
    details: [
      "Next.js 15 + NestJS 11 のモノレポ構成を設計",
      "Google Meet録画 → YouTube自動アップ → Gemini AI文字起こし・要約パイプライン",
      "Mattermost Webhook連携による自動セッション作成",
      "PWA対応、Jest + Playwright でテスト自動化",
    ],
    tech: [
      "Next.js 15", "React 19", "NestJS 11", "Tailwind", "Prisma",
      "Supabase", "Vercel", "Cloud Run", "Gemini API",
    ],
  },
  {
    badge: "Leader",
    title: "製造業向け開発支援",
    period: "2024/4 — 2025/3",
    desc: "フロントエンドのアーキテクチャ設計・共通コンポーネント設計を担当。Storybook活用のUIカタログ作成、設計書の作成、進捗管理まで幅広く対応。",
    details: [
      "ディレクトリ構成の決定・共通コンポーネント設計・実装",
      "基本設計書・詳細設計書の作成",
      "CRUD機能、バリデーション、ステータス変更の実装",
    ],
    tech: ["React", "TypeScript", "Material UI", "Jest", "Testing Library", "Storybook"],
    scale: "PM1 + PL1 + テスター10 + 開発20 ｜ 80画面",
  },
  {
    title: "開発保守環境向けサイト構築",
    period: "2023/8 — 2024/3",
    desc: "NextAuth認証フローのカスタマイズ、Next API Routes によるAPI作成、パフォーマンス最適化を担当。",
    tech: ["Next.js", "React", "TypeScript", "Material UI", "PostgreSQL", "AWS", "NextAuth"],
  },
  {
    title: "マーケティングプラットフォーム開発",
    period: "2022/9 — 2023/7",
    desc: "基本設計・詳細設計から、管理者・利用者向け画面のCRUD機能まで一貫して開発。",
    tech: ["Next.js", "React", "TypeScript", "Material UI", "MariaDB"],
  },
  {
    title: "ワークフローシステム開発",
    period: "2022/5 — 2022/8",
    desc: "管理者画面の成果一覧管理、利用者向け資料一覧・入力画面を実装。",
    tech: ["React", "TypeScript", "Material UI", "DynamoDB"],
  },
  {
    title: "スポーツ系ECサイト",
    period: "2022/2 — 2022/4",
    desc: "画面UI実装（8画面）、モックAPI作成、結合テスト・シナリオテストのドキュメント作成。",
    tech: ["React", "TypeScript", "Material UI", "AWS"],
  },
  {
    title: "電子コミックス配信サービス",
    period: "2021/8 — 2022/1",
    desc: "ログ出力処理の全体実装、フリーワード検索、ユーザー別詳細画面のUUID検索・更新機能を開発。",
    tech: ["React", "TypeScript", "Material UI", "AWS"],
  },
  {
    title: "ECサイト WebアプリケーションUI実装",
    period: "2021/2 — 2021/7",
    desc: "画面遷移図・画面定義書の作成、管理者画面（受注一覧管理・顧客一覧）のモック画面作成。",
    tech: ["JavaScript", "HTML5", "CSS3", "jQuery", "MySQL"],
  },
];

export interface PersonalProject {
  emoji: string;
  title: string;
  desc: string;
  pills: { name: string; color: PillColor }[];
}

export const personalProjects: PersonalProject[] = [
  {
    emoji: "🎓",
    title: "学習コミュニティプラットフォーム",
    desc: "AIコーディングツール活用で、本業と並行して設計〜リリースまで完遂。Next.js 15 + NestJS 11のモノレポ構成、Google Meet録画自動処理パイプライン、PWA対応など先進的な機能を実装。",
    pills: [
      { name: "Next.js 15", color: "purple" },
      { name: "NestJS 11", color: "purple" },
      { name: "Supabase", color: "blue" },
      { name: "Gemini API", color: "cyan" },
    ],
  },
  {
    emoji: "📱",
    title: "Swift / iOS 開発",
    desc: "個人学習としてSwiftによるiOSアプリ開発に挑戦中。モバイル領域への技術幅の拡大を目指しています。",
    pills: [
      { name: "Swift", color: "cyan" },
      { name: "Xcode", color: "cyan" },
    ],
  },
  {
    emoji: "🤖",
    title: "AI活用開発",
    desc: "AIコーディングツールを活用した効率的な開発手法を研究・実践。実務でもAIツールを積極的に導入し、開発スピードと品質を向上させています。",
    pills: [
      { name: "AIコーディング", color: "orange" },
      { name: "Gemini API", color: "orange" },
      { name: "LLM活用", color: "orange" },
    ],
  },
];
