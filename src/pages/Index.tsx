import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import WorkSection from "@/components/WorkSection";
import Experiences from "@/components/Experiences";
import ProjectCarousel from "@/components/ProjectCarousel";
import Playground from "@/components/Playground";
import EDI from "@/components/EDI";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <Marquee />
      <About />
      <Experiences />
      <ProjectCarousel />
      <WorkSection />
      <Playground />
      <EDI />
      <Contact />
      <footer className="px-6 md:px-16 py-8 border-t border-border/40 flex justify-between text-xs text-muted-foreground tracking-widest uppercase">
        <span>© 2026 Amélie Savard</span>
        <span>Portfolio</span>
      </footer>
    </main>
  );
};

export default Index;
