import { Navbar } from "@/components/navbar";
import ContactHead from "@/components/contact-header";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactHead /> 
      <ContactForm />
      <Footer />
    </main>
  );
}
