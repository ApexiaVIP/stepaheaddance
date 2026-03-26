import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
        <section className="py-16 bg-warm-cream">
          <div className="container max-w-xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-primary font-body text-sm font-semibold uppercase tracking-[0.15em] mb-3">
                Send Us A Message
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">
                Contact Form
              </h2>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
