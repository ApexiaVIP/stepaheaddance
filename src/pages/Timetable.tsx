import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import TimetableView from "@/components/TimetableView";
import Footer from "@/components/Footer";

const Timetable = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Page header */}
        <section className="py-16 bg-warm-cream">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-primary font-body text-sm font-semibold uppercase tracking-[0.15em] mb-3">
                Plan Your Week
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-charcoal">
                Class Timetable
              </h1>
              <p className="text-muted-foreground font-body text-lg mt-4 max-w-lg mx-auto">
                Find the perfect class for you across our locations in Poynton, Heald Green and beyond.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timetable */}
        <section className="py-16 bg-background">
          <div className="container max-w-5xl">
            <TimetableView />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Timetable;
