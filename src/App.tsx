import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { OrbitHeroBackground } from './components/OrbitHeroBackground';
import { AITelemetryBar } from './components/AITelemetryBar';
import { CommandPalette } from './components/CommandPalette';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';

function PortfolioApp() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global keydown listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    /*
     * ORBIT DESIGN SYSTEM
     * ─────────────────────────────────────────────────────
     * The space video is pinned fixed behind everything.
     * All sections scroll over it with glassmorphism panels.
     * No HOLLOWMERE halloween overlay — clean space aesthetic.
     */
    <div className="orbit-root">

      {/* ── Fixed space video background (always visible behind every section) ── */}
      <OrbitHeroBackground />

      {/* ── Global darkening gradient: stronger on lower sections ── */}
      <div className="orbit-page-veil" />

      {/* ── Sticky Navigation ── */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* ── AI Telemetry Bar ── */}
      <AITelemetryBar />

      {/* ── Command Palette ── */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* ── Scrollable content sits above fixed video ── */}
      <div className="orbit-scroll-body">

        {/* ════════════════════════════════════════════════
            HERO  — video visible at full opacity
            ════════════════════════════════════════════════ */}
        <section id="hero" className="orbit-section orbit-section-hero">
          <HeroSection />
        </section>

        {/* ════════════════════════════════════════════════
            ABOUT ME  — glass panel over space
            ════════════════════════════════════════════════ */}
        <section id="about" className="orbit-section">
          <div className="orbit-glass-section">
            <AboutSection />
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            SKILLS  — glass panel over space
            ════════════════════════════════════════════════ */}
        <section id="skills" className="orbit-section">
          <div className="orbit-glass-section">
            <SkillsSection />
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            PROJECTS  — glass panel over space
            ════════════════════════════════════════════════ */}
        <section id="projects" className="orbit-section">
          <div className="orbit-glass-section">
            <ProjectsSection />
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            EDUCATION  — glass panel over space
            ════════════════════════════════════════════════ */}
        <section id="education" className="orbit-section">
          <div className="orbit-glass-section">
            <EducationSection />
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            CONTACT  — glass panel over space
            ════════════════════════════════════════════════ */}
        <section id="contact" className="orbit-section">
          <div className="orbit-glass-section">
            <ContactSection />
          </div>
        </section>

        {/* ── Footer ── */}
        <Footer />
      </div>

      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
