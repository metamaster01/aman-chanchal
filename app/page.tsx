import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Venture } from "@/components/venture";
import { Testimonials } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";
import { ContactBanner } from "@/components/contact-banner";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { AboutStats } from "@/components/about-stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <AboutStats />
      <Venture />
      <Testimonials />
      <Gallery />
      <ContactBanner />
      <ContactForm />
      <Footer />
    </main>
  );
}
