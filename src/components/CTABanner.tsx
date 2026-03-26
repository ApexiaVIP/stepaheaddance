import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Book a Free Trial Now
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-md mx-auto">
            Come and experience what makes Step Ahead special. Your first class is on us!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-primary-foreground text-primary px-10 py-4 rounded-full font-body text-sm font-bold uppercase tracking-wide hover:bg-primary-foreground/90 transition-colors"
          >
            Enquire Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
