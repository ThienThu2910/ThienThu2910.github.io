import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-blueprint text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-cyan-400 overflow-x-hidden">
          {/* Ambient Lighting Spheres */}
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[500px] bg-gradient-to-b from-indigo-500/15 via-cyan-500/10 to-transparent blur-[120px] rounded-full dark:opacity-75 opacity-35 animate-glow" />
            <div className="absolute top-[35%] -left-[15%] w-[600px] h-[600px] bg-cyan-600/10 blur-[130px] rounded-full dark:opacity-50 opacity-25" />
            <div className="absolute top-[70%] -right-[15%] w-[600px] h-[600px] bg-indigo-600/10 blur-[130px] rounded-full dark:opacity-50 opacity-25" />
          </div>

          <Navbar />
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
      </LanguageProvider>
    </ThemeProvider>
  );
}
