import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import PublicationsSection from "@/components/PublicationsSection";
import ResearchImpactSection from "@/components/ResearchImpactSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <section id="about">
      <SkillsSection />
    </section>
    <ExperienceSection />
    <EducationSection />
    <PublicationsSection />
    <ResearchImpactSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
