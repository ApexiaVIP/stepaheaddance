import { motion } from "framer-motion";

const team = [
  {
    name: "Natalie Hume",
    role: "Principal",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2019/01/Natalie_Hume.jpg",
  },
  {
    name: "Paolina Saulino",
    role: "Student Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2023/10/17c1aae4-3c65-444b-aab3-f9a67a7f6406.jpeg.webp",
  },
  {
    name: "Caitlin Goman",
    role: "Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2023/10/7912af3f-7cee-44c8-8f09-0594f2fa7337.jpeg.webp",
  },
  {
    name: "Danielle McPeake",
    role: "Student Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2019/02/image.jpg",
  },
  {
    name: "Emily Carson",
    role: "Student Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2019/02/EC.jpeg",
  },
  {
    name: "Essy Purslow",
    role: "Student Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2019/02/EP.jpeg",
  },
  {
    name: "Connie Maguire",
    role: "Student Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2019/02/image.jpg",
  },
  {
    name: "Libby Mcmillan",
    role: "Student Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2019/02/LM.jpeg",
  },
  {
    name: "Holly Durban",
    role: "Student Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2019/02/HD.jpeg",
  },
  {
    name: "Elizabeth Peskir",
    role: "Student Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2019/02/image.jpg",
  },
  {
    name: "Georgia McGlone",
    role: "Student Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2019/02/GM.jpeg",
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-charcoal">{member.name}</h3>
                <p className="text-primary font-body text-xs font-semibold uppercase tracking-wide">
                  {member.role}
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
