import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { LanternCursor } from './components/LanternCursor';
import { GhostFallsBackground } from './components/GhostFallsBackground';
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
    <div className="relative min-h-screen bg-blueprint text-slate-900 dark:text-[#F4F0FF] transition-colors duration-400 selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-cyan-400 overflow-x-hidden">
      {/* Interactive Cursor Follower Lantern Glow */}
      <LanternCursor />

      {/* Atmospheric Ghost-Light Falls & Rising Wisps */}
      <GhostFallsBackground />

      {/* Ambient Lighting Spheres in Deep Night Violet, Cyan & Amber */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[550px] bg-gradient-to-b from-[#2E1065]/40 via-[#70E0FF]/15 to-transparent blur-[140px] rounded-full dark:opacity-90 opacity-40 animate-glow" />
        <div className="absolute top-[35%] -left-[15%] w-[650px] h-[650px] bg-[#70E0FF]/12 blur-[150px] rounded-full dark:opacity-70 opacity-30" />
        <div className="absolute top-[65%] -right-[15%] w-[650px] h-[650px] bg-[#FF9A3C]/10 blur-[150px] rounded-full dark:opacity-60 opacity-25" />
      </div>

      {/* Futuristic AI Telemetry Bar */}
      <AITelemetryBar />

      {/* Sticky Navigation */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Global Interactive Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      <main id="main-content" className="relative z-10 flex flex-col gap-20 sm:gap-28 pb-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
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
