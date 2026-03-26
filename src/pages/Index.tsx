import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ClassesGrid from "@/components/ClassesGrid";
import TeamSection from "@/components/TeamSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ClassesGrid />
      <TeamSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
