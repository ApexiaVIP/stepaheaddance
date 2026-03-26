import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const classesImage = "https://www.stepaheaddance.co.uk/wp-content/uploads/2023/10/MG_2432-683x1024.jpg.webp";

const AboutSection = () => {
  return (
    <section className="py-24 bg-warm-cream">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-body text-sm font-semibold uppercase tracking-[0.15em] mb-3">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              Classes for{" "}
              <span className="italic font-medium text-primary">Everyone</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Here at Step Ahead we have something for everyone. We give children the opportunity to take graded exams and we also do shows and competitions. We pride ourselves in producing a very high standard of work whilst enjoying ourselves along the way!
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              We are very fortunate that all our teachers have trained within the school. We all share the same ethos and pride ourselves in teaching dance to the highest level whilst bringing out the best in all our students. We really are one big family, building friendships that last a lifetime!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body text-sm font-semibold uppercase tracking-wide hover:bg-accent transition-colors"
            >
              Book a Free Trial
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={classesImage}
                alt="Children enjoying dance class"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-light rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
