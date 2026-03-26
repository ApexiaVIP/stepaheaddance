import { motion } from "framer-motion";
import { Music, Star, Footprints, Theater } from "lucide-react";

const classes = [
  {
    icon: Star,
    title: "Ballet",
    description: "Classical ballet training from beginner to advanced, including RAD graded and vocational exams.",
  },
  {
    icon: Footprints,
    title: "Tap",
    description: "Develop rhythm and coordination through NATD graded tap classes for all ages and levels.",
  },
  {
    icon: Music,
    title: "Modern & Street",
    description: "Express yourself through contemporary modern dance and energetic street styles.",
  },
  {
    icon: Theater,
    title: "Musical Theatre",
    description: "Combine acting, singing and dance in our popular musical theatre classes.",
  },
];

const ClassesGrid = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-semibold uppercase tracking-[0.15em] mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
            Our Dance Styles
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-rose-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <cls.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-3">{cls.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{cls.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesGrid;
