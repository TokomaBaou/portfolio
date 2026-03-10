import FadeUp from "../FadeUp";
import { PROFILE, SOCIAL_LINKS } from "@/data/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="mb-24">
      <div className="text-center py-8 pb-16">
        <FadeUp>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-text-bright mb-4">
            Get In Touch
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="text-muted max-w-[500px] mx-auto mb-8 text-[0.92rem]">
            新しいプロジェクトやお仕事のご相談など、お気軽にご連絡ください。
          </p>
        </FadeUp>
        <FadeUp>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-block border border-accent text-accent px-8 py-[0.8rem] rounded-md font-mono text-[0.88rem] transition-all duration-300 hover:bg-accent/10 hover:-translate-y-0.5"
          >
            Say Hello →
          </a>
        </FadeUp>
        <FadeUp>
          <div className="flex gap-8 justify-center mt-6 flex-wrap">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                aria-label={link.label}
                className="font-mono text-[0.8rem] text-dark-muted transition-colors duration-300 hover:text-accent"
              >
                {link.external ? link.label : PROFILE.email}
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
