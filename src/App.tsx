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
        <div className="relative min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-cyan-500/20 selection:text-cyan-400 overflow-x-hidden">
          {/* Subtle Ambient Background Gradients */}
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-indigo-600/15 via-cyan-500/10 to-transparent blur-[120px] rounded-full dark:opacity-80 opacity-40 animate-glow" />
            <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[130px] rounded-full dark:opacity-60 opacity-30" />
            <div className="absolute top-[75%] -right-[10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[130px] rounded-full dark:opacity-60 opacity-30" />
          </div>

          <Navbar />
          <main id="main-content" className="relative z-10 flex flex-col gap-16 sm:gap-24">
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
