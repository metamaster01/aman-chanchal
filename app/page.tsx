"use client";
import { useState } from "react";
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
import { Preloader } from "@/components/ui/preloader";
import { WorkShowcase } from "@/components/WorkShowcase";
// import { Preloader } from "@/components/PreloaderDebug";

export default function Home() {
  const [revealed , setRevealed] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Preloader onComplete={() => setRevealed(true)} />
      <Navbar transparentAtTop />
      <Hero />
      <About />
      {/* <AboutStats /> */}
      <Venture />
      {/* <WorkShowcase /> */}
      <Testimonials />
      <Gallery />
      <ContactBanner />
      <ContactForm />
      <Footer />
    </main>
  );
}
