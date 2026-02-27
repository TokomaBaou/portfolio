import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import LeftColumn from "@/components/LeftColumn";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PersonalSection from "@/components/sections/PersonalSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Nav />

      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 min-h-screen max-md:px-[1.2rem]">
        {/* Left Column (sticky) */}
        <LeftColumn />

        {/* Right Column (scrollable) */}
        <div className="py-24 pb-16 max-md:py-8 max-md:pb-16">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <PersonalSection />
          <ContactSection />
        </div>
      </div>

      <footer className="text-center p-8 text-dark-muted text-[0.75rem] font-mono">
        <p>
          Designed &amp; Built by{" "}
          <a
            href="#"
            className="text-dark-muted transition-colors duration-300 hover:text-accent"
          >
            M.O
          </a>
        </p>
      </footer>
    </>
  );
}
