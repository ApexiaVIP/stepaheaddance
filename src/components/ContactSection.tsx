import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-semibold uppercase tracking-[0.15em] mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
            Want to Dance Today?
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-4 max-w-md mx-auto">
            Then let's chat! Reach out and we'll get you started on your dance journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: MapPin,
              title: "Heald Green",
              content: "Sylvia Roberts, Guide Hall, Cross RD, Heald Green, SK8 3LW",
              href: "https://maps.google.com/?q=Sylvia+Roberts+Guide+Hall+Cross+Rd+Heald+Green+SK8+3LW",
            },
            {
              icon: MapPin,
              title: "Poynton",
              content: "The Hockley Centre, 307 Park Lane, Poynton, SK12 1RJ",
              href: "https://maps.google.com/?q=The+Hockley+Centre+307+Park+Lane+Poynton+SK12+1RJ",
            },
            {
              icon: Phone,
              title: "Call Us",
              content: "07799 614 260",
              href: "tel:07799614260",
            },
            {
              icon: Mail,
              title: "Email Us",
              content: "info@stepaheaddance.co.uk",
              href: "mailto:info@stepaheaddance.co.uk",
            },
          ].map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.title === "Visit Us" ? "_blank" : undefined}
              rel={item.title === "Visit Us" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-rose-light rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{item.content}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
