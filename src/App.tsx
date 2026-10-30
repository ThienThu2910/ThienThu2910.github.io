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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="orbit-root">

      {/* ── Layer 0: Fixed space video behind everything ── */}
      <OrbitHeroBackground />

      {/* ── Layer 1: Fixed page veil (darkens lower sections) ── */}
      <div className="orbit-page-veil" />

      {/* ── Layer 100: Fixed header = Navbar stacked above AITelemetryBar ──
           Both components live inside one fixed container so they never
           overlap each other, and orbit-scroll-body pads for their total height. */}
      <div className={`orbit-header-fixed orbit-navbar-inner${isScrolled ? ' scrolled' : ''}`}>        <Navbar
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />
        <AITelemetryBar />
      </div>

      {/* ── Command Palette ── */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* ── Scrollable content: padding-top = navbar-h + telebar-h ── */}
      <div className="orbit-scroll-body">

        {/* HERO */}
        <section id="hero" className="orbit-section orbit-section-hero">
          <HeroSection />
        </section>

        {/* ABOUT ME */}
        <section id="about" className="orbit-section">
          <div className="orbit-glass-section">
            <AboutSection />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="orbit-section">
          <div className="orbit-glass-section">
            <SkillsSection />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="orbit-section">
          <div className="orbit-glass-section">
            <ProjectsSection />
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="orbit-section">
          <div className="orbit-glass-section">
            <EducationSection />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="orbit-section">
          <div className="orbit-glass-section">
            <ContactSection />
          </div>
        </section>

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
