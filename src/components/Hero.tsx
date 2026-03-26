import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dance.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Young ballet dancers at the barre"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-primary font-body text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Ballet · Tap · Modern · Street · Musical Theatre
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] text-primary-foreground mb-6">
            A Big Emphasis{" "}
            <span className="italic font-medium">on Fun</span>
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Step Ahead is a school that takes pride in teaching dance and aims to produce high quality dancers. The classes are designed to be as enjoyable as possible with a big emphasis on fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body text-sm font-semibold uppercase tracking-wide hover:bg-accent transition-colors"
            >
              Enquire Today
            </Link>
            <Link
              to="/timetable"
              className="inline-flex items-center justify-center border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-body text-sm font-semibold uppercase tracking-wide hover:border-primary-foreground/60 transition-colors"
            >
              View Timetable
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
