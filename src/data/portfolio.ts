export type PillColor = "cyan" | "purple" | "blue" | "orange";

export interface SkillGroup {
  title: string;
  pills: { name: string; exp?: string; color: PillColor }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    pills: [
      { name: "JavaScript", exp: "4年", color: "cyan" },
      { name: "TypeScript", exp: "4年", color: "cyan" },
      { name: "HTML5", exp: "4年", color: "cyan" },
      { name: "CSS3", exp: "4年", color: "cyan" },
      { name: "Python", exp: "1年", color: "cyan" },
      { name: "PHP", exp: "2年", color: "cyan" },
    ],
  },
  {
    title: "Frameworks",
    pills: [
      { name: "React", exp: "4年", color: "purple" },
      { name: "Next.js", exp: "3年", color: "purple" },
      { name: "NestJS", exp: "1年", color: "purple" },
      { name: "Nuxt.js", exp: "2年", color: "purple" },
      { name: "Laravel", exp: "2年", color: "purple" },
      { name: "Material UI", exp: "3年", color: "purple" },
      { name: "Tailwind CSS", exp: "1年", color: "purple" },
      { name: "GraphQL", exp: "1年", color: "purple" },
      { name: "Prisma", color: "purple" },
    ],
  },
  {
    title: "Database / BaaS",
    pills: [
      { name: "MySQL", exp: "2年", color: "blue" },
      { name: "PostgreSQL", exp: "10ヶ月", color: "blue" },
      { name: "Supabase", exp: "10ヶ月", color: "blue" },
      { name: "Firebase", exp: "2年", color: "blue" },
      { name: "DynamoDB", color: "blue" },
      { name: "MariaDB", color: "blue" },
    ],
  },
  {
    title: "Infrastructure & Tools",
    pills: [
      { name: "AWS (ECS, EKS)", color: "orange" },
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
    badge: "Leader — Solo Dev",
    title: "社内学習コミュニティ管理プラットフォーム",
    period: "2025/5 — Present",
    desc: "要件定義〜アーキテクチャ設計〜開発〜運用まで1人で完遂。AIコーディングツールを活用し、本業と並行して2025年10月にリリース。現在社内で運用中。",
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
    badge: "Frontend Lead",
    title: "大手企業向け 社内RAGシステム開発（副業）",
    period: "2025/3 — 2026/3",
    desc: "大手企業の社内ナレッジ検索を効率化するRAG（検索拡張生成）システムのフロントエンド開発を担当。LLMとの連携UI、検索結果表示、ストリーミングレスポンス表示を実装。",
    details: [
      "RAGチャットUIの設計・実装（ストリーミング対応）",
      "検索ウィザード・フィルター検索モードの構築",
      "検索履歴・ブックマーク機能の実装",
      "レスポンシブ対応・PWA対応",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "LLM API連携"],
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
    badge: "Frontend + Backend",
    title: "ヘルスケアアプリ開発（副業）",
    period: "2023/3 — 2025/5",
    desc: "ヘルスケア関連Webアプリケーションのフロントエンド開発を中心に、バックエンドAPI開発も担当。複数サービス（本体・FC向け・アシスタント機能）を並行開発。",
    details: [
      "Nuxt.js + TypeScript によるフロントエンド開発",
      "Laravel によるバックエンドAPI開発・保守",
      "Firebase連携（認証・データベース）",
      "Docker環境でのローカル開発・テスト",
    ],
    tech: ["Nuxt.js", "TypeScript", "Laravel", "PHP", "Firebase", "Docker", "MySQL"],
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
];

export interface PersonalProject {
  emoji: string;
  title: string;
  desc: string;
  pills: { name: string; color: PillColor }[];
  link?: string;
}

export const personalProjects: PersonalProject[] = [
  {
    emoji: "🤖",
    title: "マルチモデル音声AIエージェント開発",
    desc: "複数のLLM（Gemini / Claude）を統合した音声操作AIアシスタントを個人開発。音声でSlack・Notion・GitHubを操作可能。ウェイクワード検出、話者認証、リアルタイム音声処理、MCP連携によるツール統合を実装。",
    pills: [
      { name: "Python", color: "cyan" },
      { name: "Gemini API", color: "purple" },
      { name: "Claude API", color: "purple" },
      { name: "MCP", color: "orange" },
      { name: "ChromaDB", color: "blue" },
    ],
  },
  {
    emoji: "🔥",
    title: "テックトレンド自動収集・ラジオ配信",
    desc: "はてなブックマーク、Hacker News、Reddit、MCP Registryからテックトレンドを毎日自動収集。Gemini APIでラジオ原稿を生成し、Edge TTSで音声配信も実装。GitHub Actions で完全自動運用中。",
    pills: [
      { name: "Python", color: "cyan" },
      { name: "Gemini API", color: "purple" },
      { name: "GitHub Actions", color: "orange" },
      { name: "Vercel", color: "orange" },
    ],
    link: "https://neta-trend-daily-github.vercel.app/",
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
];
