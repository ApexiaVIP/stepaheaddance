import { motion } from "framer-motion";

const team = [
  {
    name: "Natalie Hume",
    role: "Principal",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2019/01/Natalie_Hume.jpg.webp",
    bio: "I am the principal of the school, I started dancing at Step Ahead when I was four, trained by the original owner Ms Yvonne Gilmore. I started teaching at 17, passing my fellowships in tap, ballet and modern, then became an examiner for the NATD. I took over ownership in 2005.",
  },
  {
    name: "Paolina Saulino",
    role: "Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2023/10/17c1aae4-3c65-444b-aab3-f9a67a7f6406.jpeg.webp",
    bio: "I have been with Step Ahead for over 25 years. I was trained by Mrs Gilmore and then by our principal, Natalie Hume. I gained my teachers qualification in 2013 and there is nothing like giving the gift of dance to a child.",
  },
  {
    name: "Caitlin Goman",
    role: "Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2023/10/7912af3f-7cee-44c8-8f09-0594f2fa7337.jpeg.webp",
    bio: "A dedicated instructor bringing passion and creativity to every class, trained within the Step Ahead family.",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-warm-cream">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-semibold uppercase tracking-[0.15em] mb-3">
            Meet The Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
            Our Instructors
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-charcoal">{member.name}</h3>
                <p className="text-primary font-body text-sm font-semibold uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
