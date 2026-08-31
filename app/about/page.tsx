import { Navbar } from "@/components/navbar";
import { AboutHeader } from "@/components/about-header";
import { AboutSkills, AboutStats } from "@/components/about-stats";
import { AboutStory } from "@/components/about-story";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHeader />
      <AboutStats />
      <AboutSkills />
      <AboutStory />
      <Footer />
    </main>
  );
}
