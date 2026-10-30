import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { LanternCursor } from './components/LanternCursor';
import { HollowmereOverlays } from './components/HollowmereOverlays';
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
    <div className="relative min-h-screen bg-[#110A2A] text-slate-100 transition-colors duration-400 selection:bg-cyan-500/20 selection:text-cyan-400 overflow-x-hidden font-body">
      {/* Interactive Cursor Follower Lantern Glow */}
      <LanternCursor />

      {/* Global Interactive Overlays Manager (Falls, Wisps, Sprites, Bats) */}
      <HollowmereOverlays />

      {/* Sticky Navigation */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Futuristic AI Telemetry Bar */}
      <AITelemetryBar />

      {/* Global Interactive Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* ====================================================================
          SCENE 1: HERO CANYON & CASTLE ON THE MOON (#hero)
          ==================================================================== */}
      <section id="hero" className="hollow-scene">
        {/* Full-bleed Painted Vector Scene Background */}
        <div
          className="hollow-art-bg"
          style={{
            backgroundImage:
              "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_023809_d6836117-c958-4680-aa43-1e1973fbc17c.png&w=2400&q=85')",
          }}
        />

        {/* Scene 1 Overlays */}
        <div className="moonglow" style={{ left: '50.2%', top: '25.6%', width: '21%', height: '21%' }} />
        <canvas className="hollow-fall" data-kind="ghost" data-speed="1" style={{ left: '47.4%', top: '51%', width: '5.6%', height: '22%' }} />
        <div className="mist" style={{ left: '50%', top: '73%', width: '22%', height: '9%' }} />
        <canvas className="hollow-fall" data-kind="ghost" data-speed="1.15" style={{ left: '44%', top: '80%', width: '12.4%', height: '34%' }} />

        {/* 12 Jack-o'-lantern Warm Glows */}
        <div className="glow" style={{ left: '4.8%', top: '54.4%', width: '4.6%', height: '4.6%' }} />
        <div className="glow" style={{ left: '18.5%', top: '50.6%', width: '3.6%', height: '3.6%' }} />
        <div className="glow" style={{ left: '17.5%', top: '69.4%', width: '3.8%', height: '3.8%' }} />
        <div className="glow" style={{ left: '25.9%', top: '38.3%', width: '2.6%', height: '2.6%' }} />
        <div className="glow" style={{ left: '31.6%', top: '42%', width: '2.4%', height: '2.4%' }} />
        <div className="glow" style={{ left: '30.4%', top: '63%', width: '2.4%', height: '2.4%' }} />
        <div className="glow" style={{ left: '80%', top: '36.7%', width: '3%', height: '3%' }} />
        <div className="glow" style={{ left: '85%', top: '45.3%', width: '3%', height: '3%' }} />
        <div className="glow" style={{ left: '93.8%', top: '53%', width: '4.6%', height: '4.6%' }} />
        <div className="glow" style={{ left: '87.8%', top: '73%', width: '3.8%', height: '3.8%' }} />
        <div className="glow" style={{ left: '74.5%', top: '61%', width: '2.6%', height: '2.6%' }} />
        <div className="glow" style={{ left: '67.2%', top: '64.8%', width: '2.6%', height: '2.6%' }} />

        {/* Rising Wisp Particles Canvas */}
        <canvas className="hollow-dust" data-kind="wisp" data-count="70" />

        {/* Sprites: Ghosts & Bats */}
        <div className="hollow-sprite hollow-ghost ghost1" data-gx="21" data-gy="30" style={{ width: '4.2%' }} />
        <div className="hollow-sprite hollow-ghost ghost2" data-gx="78" data-gy="21" style={{ width: '3.4%' }} />
        <div className="hollow-sprite hollow-ghost ghost4" data-gx="64" data-gy="44" style={{ width: '2.8%' }} />
        <div className="hollow-sprite hollow-ghost ghost3" data-gx="36" data-gy="46" style={{ width: '2.4%' }} />

        <div className="hollow-sprite hollow-bat" data-y0="14" data-speed="12" data-scale="2.4" style={{ width: '2.4%' }} />
        <div className="hollow-sprite hollow-bat" data-y0="22" data-speed="15" data-scale="1.8" style={{ width: '1.8%' }} />
        <div className="hollow-sprite hollow-bat" data-y0="28" data-speed="10" data-scale="2.8" style={{ width: '2.8%' }} />

        {/* Hero Portfolio Content */}
        <div className="relative z-10 pt-4 pb-12">
          <HeroSection />
        </div>
      </section>

      {/* ====================================================================
          SEAM 1: Canyon floor rock strata over crypt ceiling with waterfall
          ==================================================================== */}
      <div className="hollow-seam">
        <div className="hollow-seam-band">
          <canvas className="hollow-fall" data-kind="ghost" data-speed="1" data-seam="1" style={{ left: '44.8%', top: '2%', width: '10.4%', height: '90%' }} />
          <img
            className="hollow-seam-img"
            src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_025938_e54c50c3-9748-4d00-af68-886bef6e65e7.png&w=2400&q=85"
            alt="Canyon floor strata"
          />
        </div>
      </div>

      {/* ====================================================================
          SCENE 2: CRYPT LABORATORY & GHOST TOWER (#about)
          ==================================================================== */}
      <section id="about" className="hollow-scene">
        <div
          className="hollow-art-bg"
          style={{
            backgroundImage:
              "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_023812_40e3f5f5-a613-4a33-9c78-4cab8b04a992.png&w=2400&q=85')",
          }}
        />

        {/* Crypt Falls Canvas */}
        <canvas className="hollow-fall" data-kind="ghost" data-speed="0.9" style={{ left: '40.6%', top: '0%', width: '17.2%', height: '90%' }} />
        <div className="mist" style={{ left: '49%', top: '84%', width: '34%', height: '14%' }} />

        {/* Cold Cyan Glows (Ghost jars & Crystal ball) */}
        <div className="glow cold" style={{ left: '20.3%', top: '69.8%', width: '7%', height: '7%' }} />
        <div className="glow cold" style={{ left: '72.5%', top: '19%', width: '5%', height: '5%' }} />
        <div className="glow cold" style={{ left: '80.4%', top: '18.1%', width: '4.4%', height: '4.4%' }} />
        <div className="glow cold" style={{ left: '76%', top: '41.6%', width: '5.6%', height: '5.6%' }} />
        <div className="glow cold" style={{ left: '85%', top: '43.3%', width: '4%', height: '4%' }} />

        {/* Warm Glows */}
        <div className="glow" style={{ left: '7.6%', top: '85%', width: '4.4%', height: '4.4%' }} />
        <div className="glow" style={{ left: '13.2%', top: '87%', width: '3.2%', height: '3.2%' }} />
        <div className="glow" style={{ left: '92.2%', top: '84%', width: '3.6%', height: '3.6%' }} />

        {/* Mote Particles Canvas */}
        <canvas className="hollow-dust" data-kind="mote" data-count="50" />

        {/* Sprite: Ghost4 */}
        <div className="hollow-sprite hollow-ghost ghost4" data-gx="30" data-gy="22" style={{ width: '2.6%' }} />

        {/* About Section Content */}
        <div className="relative z-10 py-16">
          <AboutSection />
        </div>
      </section>

      {/* ====================================================================
          SEAM 2: Crypt flagstones over mill ceiling with waterfall opening
          ==================================================================== */}
      <div className="hollow-seam">
        <div className="hollow-seam-band">
          <canvas className="hollow-fall" data-kind="ghost" data-speed="1" data-seam="1" style={{ left: '21.4%', top: '22%', width: '10.6%', height: '74%' }} />
          <img
            className="hollow-seam-img"
            src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_030022_7a86d576-94d5-4069-b515-62547af3b50c.png&w=2400&q=85"
            alt="Crypt flagstone strata"
          />
        </div>
      </div>

      {/* ====================================================================
          SCENE 3: MILL WHEEL CHAMBER (#skills)
          ==================================================================== */}
      <section id="skills" className="hollow-scene">
        <div
          className="hollow-art-bg"
          style={{
            backgroundImage:
              "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_023814_b2c8f33a-3c90-4aa1-bb91-cce7f0deb878.png&w=2400&q=85')",
          }}
        />

        {/* Falls Above Wheel Canvas */}
        <canvas className="hollow-fall" data-kind="ghost" data-speed="1.05" style={{ left: '19.5%', top: '0%', width: '18%', height: '38%' }} />
        <div className="mist" style={{ left: '31%', top: '33%', width: '22%', height: '10%' }} />

        {/* Warm Wheel-Pumpkin Glows */}
        <div className="glow" style={{ left: '12%', top: '34%', width: '4.2%', height: '4.2%' }} />
        <div className="glow" style={{ left: '37.5%', top: '47.7%', width: '4.2%', height: '4.2%' }} />
        <div className="glow" style={{ left: '32.3%', top: '52.6%', width: '4.2%', height: '4.2%' }} />
        <div className="glow" style={{ left: '11.7%', top: '62.3%', width: '4.2%', height: '4.2%' }} />
        <div className="glow" style={{ left: '39%', top: '78.2%', width: '4.2%', height: '4.2%' }} />

        {/* Cold Spellbook & Candle Glows */}
        <div className="glow cold" style={{ left: '64.5%', top: '70.3%', width: '9%', height: '9%' }} />
        <div className="glow cold" style={{ left: '88.5%', top: '70.7%', width: '9%', height: '9%' }} />
        <div className="glow" style={{ left: '61.4%', top: '75%', width: '2.4%', height: '2.4%' }} />
        <div className="glow" style={{ left: '72.6%', top: '75.4%', width: '2.4%', height: '2.4%' }} />
        <div className="glow" style={{ left: '91.5%', top: '75.4%', width: '2.4%', height: '2.4%' }} />

        {/* Water Spray Particles Canvas */}
        <canvas className="hollow-dust" data-kind="spray" data-count="60" data-x="20" data-y="30" data-w="20" data-h="18" />

        {/* Skills Section Content */}
        <div className="relative z-10 py-16">
          <SkillsSection />
        </div>
      </section>

      {/* ====================================================================
          SEAM 3: Mill floor over foundry ceiling with pipe collar waterfall
          ==================================================================== */}
      <div className="hollow-seam">
        <div className="hollow-seam-band">
          <canvas className="hollow-fall" data-kind="ghost" data-speed="1" data-seam="1" style={{ left: '60.8%', top: '46%', width: '13.6%', height: '50%' }} />
          <img
            className="hollow-seam-img"
            src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_025940_a85237c9-d7e3-4c28-b1d9-71ad7d8cbca4.png&w=2400&q=85"
            alt="Mill floor strata"
          />
        </div>
      </div>

      {/* ====================================================================
          SCENE 4: CAULDRON FOUNDRY (#projects)
          ==================================================================== */}
      <section id="projects" className="hollow-scene">
        <div
          className="hollow-art-bg"
          style={{
            backgroundImage:
              "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_023817_3e21faea-ad1c-4723-be92-9b22692094e1.png&w=2400&q=85')",
          }}
        />

        {/* Falls pouring into Cauldron */}
        <canvas className="hollow-fall" data-kind="ghost" data-speed="1" style={{ left: '67.4%', top: '0%', width: '11.8%', height: '37%' }} />

        {/* 3 Molten Lava Canvases */}
        <canvas className="hollow-fall" data-kind="lava" data-speed="0.55" style={{ left: '62.3%', top: '66.5%', width: '1.8%', height: '25%' }} />
        <canvas className="hollow-fall" data-kind="lava" data-speed="0.6" style={{ left: '69.4%', top: '66.5%', width: '1.8%', height: '25%' }} />
        <canvas className="hollow-fall" data-kind="lava" data-speed="0.5" style={{ left: '76.5%', top: '66.5%', width: '1.8%', height: '25%' }} />

        {/* Floor Glows & Collision Glow */}
        <div className="glow" style={{ left: '70%', top: '93%', width: '26%', height: '26%' }} />
        <div className="glow" style={{ left: '16.8%', top: '78.2%', width: '6%', height: '6%' }} />
        <div className="glow" style={{ left: '27.8%', top: '85.3%', width: '4%', height: '4%' }} />
        <div className="glow" style={{ left: '18%', top: '66.3%', width: '8%', height: '8%' }} />
        <div className="glow cold" style={{ left: '73%', top: '33%', width: '14%', height: '14%' }} />

        {/* Cauldron Bubbles Particles Canvas */}
        <canvas className="hollow-dust" data-kind="bubble" data-count="22" data-x="60" data-y="8" data-w="24" data-h="28" />

        {/* Featured Projects Content */}
        <div className="relative z-10 py-16">
          <ProjectsSection />
        </div>
      </section>

      {/* ====================================================================
          SEAM 4: Foundry floor over sea-cave ceiling (No Opening)
          ==================================================================== */}
      <div className="hollow-seam">
        <div className="hollow-seam-band">
          <img
            className="hollow-seam-img"
            src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_025942_debc2172-5187-4ad4-af0d-307c5e0277b5.png&w=2400&q=85"
            alt="Foundry floor strata"
          />
        </div>
      </div>

      {/* ====================================================================
          SCENE 5: FINALE MOONLIT LANTERN LAKE (#education & #contact)
          ==================================================================== */}
      <section id="education" className="hollow-scene">
        <div
          className="hollow-art-bg"
          style={{
            backgroundImage:
              "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_023819_5b21be3d-159e-4d1d-a3b3-80339bc5d5f1.png&w=2400&q=85')",
          }}
        />

        {/* Moon Ring Halo */}
        <div className="moonglow" style={{ left: '39.1%', top: '56.6%', width: '19%', height: '19%' }} />

        {/* Shimmer Moonlight Particles Canvas on water */}
        <canvas className="hollow-dust" data-kind="shimmer" data-count="90" data-x="34" data-y="69" data-w="10" data-h="22" />

        {/* 15 Warm Lantern Glows */}
        <div className="glow" style={{ left: '29.9%', top: '76.7%', width: '3.4%', height: '3.4%' }} />
        <div className="glow" style={{ left: '32.9%', top: '72.7%', width: '2.4%', height: '2.4%' }} />
        <div className="glow" style={{ left: '45.9%', top: '72.7%', width: '2.4%', height: '2.4%' }} />
        <div className="glow" style={{ left: '48.3%', top: '77.4%', width: '3.6%', height: '3.6%' }} />
        <div className="glow" style={{ left: '55.4%', top: '81.8%', width: '4%', height: '4%' }} />
        <div className="glow" style={{ left: '58.1%', top: '75.6%', width: '3.2%', height: '3.2%' }} />
        <div className="glow" style={{ left: '53.9%', top: '72.2%', width: '2.2%', height: '2.2%' }} />
        <div className="glow" style={{ left: '62.5%', top: '72.5%', width: '2.2%', height: '2.2%' }} />
        <div className="glow" style={{ left: '69.9%', top: '80.9%', width: '4%', height: '4%' }} />
        <div className="glow" style={{ left: '74.9%', top: '75.9%', width: '3.2%', height: '3.2%' }} />
        <div className="glow" style={{ left: '24.8%', top: '72.1%', width: '2.2%', height: '2.2%' }} />
        <div className="glow" style={{ left: '7.8%', top: '65.4%', width: '5%', height: '5%' }} />
        <div className="glow" style={{ left: '89.8%', top: '76.9%', width: '5%', height: '5%' }} />

        {/* Sprites: Ghost & Bats */}
        <div className="hollow-sprite hollow-ghost ghost2" data-gx="66" data-gy="26" style={{ width: '3%' }} />
        <div className="hollow-sprite hollow-ghost ghost1" data-gx="27" data-gy="38" style={{ width: '2.6%' }} />
        <div className="hollow-sprite hollow-bat" data-y0="24" data-speed="11" data-scale="2.6" style={{ width: '2.6%' }} />
        <div className="hollow-sprite hollow-bat" data-y0="32" data-speed="14" data-scale="2.0" style={{ width: '2.0%' }} />

        {/* Education & Contact Content */}
        <div className="relative z-10 py-16 space-y-20">
          <EducationSection />
          <ContactSection />
        </div>
      </section>

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
