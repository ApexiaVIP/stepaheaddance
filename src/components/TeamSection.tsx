import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const team = [
  {
    name: "Natalie Hume",
    role: "Founder & Principal",
    bio: "I am the principal of the school, I started dancing at Step Ahead when I was four, I was trained by the original owner Ms Yvonne Gilmore. I started my teaching career at 17 passing my fellowships in tap, ballet and modern, I then went onto become an examiner for the NATD. I then took over ownership of the school in 2005. I believe that dancing should be fun as well as a challenging discipline. To me, Step Ahead is more than a business, for which I have great ambitions.",
  },
  {
    name: "Paolina Saulino",
    role: "Assistant Teacher",
    bio: "My name is Nina, I have been with Step Ahead for over 25 years. I was trained by Mrs Gilmore for many years and then in my late teens I was trained by our now principal, Natalie Hume. My teaching career started around 16 years ago when our Poynton branch opened. I started off as a student teacher on a Saturday along side attending my graded classes during the week in Tap, Ballet, Modern and Street dance. Then in 2013 I gained my teachers qualification and since then I haven't looked back. Step Ahead has been an incredible part of my life, I am so grateful for it and there is nothing like giving the gift of dance to a child.",
  },
  {
    name: "Caitlin Goman",
    role: "Teacher",
    bio: "Has trained with Step Ahead since she was 3 years old, it's her 2nd home. At the age of 19 she flew the nest and carried on her training in London, at Mountview Academy of Theatre Arts in Musical Theatre. While still striving in her acting career, she's come back home again to teach her skills in Tap, Ballet, Modern, Street and Musical Theatre.",
  },
  { name: "Danielle McPeake", role: "Student Teacher" },
  { name: "Emily Carson", role: "Student Teacher" },
  { name: "Essy Purslow", role: "Student Teacher" },
  { name: "Connie Maguire", role: "Student Teacher" },
  { name: "Libby Mcmillan", role: "Student Teacher" },
  { name: "Holly Durban", role: "Student Teacher" },
  { name: "Elizabeth Peskir", role: "Student Teacher" },
  { name: "Georgia McGlone", role: "Student Teacher" },
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase();

const avatarColors = [
  "from-primary to-accent",
  "from-accent to-primary",
  "from-primary/80 to-rose-light",
  "from-rose-light to-primary",
  "from-primary to-primary/60",
  "from-accent/80 to-primary",
  "from-primary/70 to-accent/90",
  "from-rose-light to-accent",
  "from-primary to-rose-light",
  "from-accent to-rose-light",
  "from-primary/90 to-accent/70",
];

const TeamSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 bg-warm-cream">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-body text-sm font-semibold uppercase tracking-[0.15em] mb-3">
            Meet The Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
            Our Instructors
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {team.map((member, i) => {
            const hasBio = !!member.bio;
            return (
              <motion.button
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => hasBio && setSelected(i)}
                className={`bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 text-left ${hasBio ? "cursor-pointer hover:-translate-y-1" : "cursor-default"}`}
              >
                <div className={`aspect-square overflow-hidden flex items-center justify-center bg-gradient-to-br ${avatarColors[i % avatarColors.length]}`}>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground">
                    {getInitials(member.name)}
                  </span>
                </div>
                <div className="p-2.5">
                  <h3 className="font-display text-xs sm:text-sm font-bold text-charcoal leading-tight">{member.name}</h3>
                  <p className="text-primary font-body text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className={`w-full aspect-[4/3] flex items-center justify-center bg-gradient-to-br ${avatarColors[selected % avatarColors.length]}`}>
                  <span className="font-display text-7xl font-bold text-primary-foreground">
                    {getInitials(team[selected].name)}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-8 h-8 bg-foreground/50 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-foreground/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-charcoal">{team[selected].name}</h3>
                <p className="text-primary font-body text-sm font-semibold uppercase tracking-wide mb-4">
                  {team[selected].role}
                </p>
                {team[selected].bio && (
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {team[selected].bio}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
