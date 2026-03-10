/** Site-wide constants — single source of truth for personal info & navigation */

export const SITE = {
  name: "M.O",
  title: "M.O | Portfolio",
  description:
    "M.O - Fullstack Engineer specializing in Next.js, React, NestJS, and modern web technologies.",
  locale: "ja",
  url: "https://github.com/TokomaBaou",
} as const;

export const PROFILE = {
  role: "Fullstack Engineer",
  tagline: "Next.js / React",
  bio: "フロントエンドからバックエンドまで。toB / toC問わず基本設計から開発・運用まで対応するフルスタックエンジニアです。AI / LLMを活用した開発にも精通しています。",
  email: "mac.kageyama@gmail.com",
} as const;

export interface SocialLink {
  label: string;
  href: string;
  external: boolean;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/TokomaBaou", external: true },
  { label: "Qiita", href: "https://qiita.com/TokomaBaou", external: true },
  { label: "Email", href: "mailto:mac.kageyama@gmail.com", external: false },
] as const;

export interface NavItem {
  id: string;
  num: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "about", num: "01", label: "About" },
  { id: "skills", num: "02", label: "Skills" },
  { id: "projects", num: "03", label: "Projects" },
  { id: "personal", num: "04", label: "Personal" },
  { id: "contact", num: "05", label: "Contact" },
] as const;
