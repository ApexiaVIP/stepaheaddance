import { motion } from "framer-motion";

const team = [
  {
    name: "Natalie Hume",
    role: "Principal",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2019/01/Natalie_Hume.jpg.webp",
    bio: "I am the principal of the school, I started dancing at Step Ahead when I was four, I was trained by the original owner Ms Yvonne Gilmore. I started my teaching career at 17 passing my fellowships in tap, ballet and modern, I then went onto become an examiner for the NATD. I then took over ownership of the school in 2005. I believe that dancing should be fun as well as a challenging discipline. To me, Step Ahead is more than a business, for which I have great ambitions.",
  },
  {
    name: "Paolina Saulino",
    role: "Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2023/10/17c1aae4-3c65-444b-aab3-f9a67a7f6406.jpeg.webp",
    bio: "My name is Nina, I have been with Step Ahead for over 25 years. I was trained by Mrs Gilmore for many years and then in my late teens I was trained by our now principal, Natalie Hume. My teaching career started around 16 years ago when our Poynton branch opened. I started off as a student teacher on a Saturday along side attending my graded classes during the week in Tap, Ballet, Modern and Street dance. Then in 2013 I gained my teachers qualification and since then I haven't looked back. Step Ahead has been an incredible part of my life, I am so grateful for it and there is nothing like giving the gift of dance to a child.",
  },
  {
    name: "Caitlin Goman",
    role: "Teacher",
    image: "https://www.stepaheaddance.co.uk/wp-content/uploads/2023/10/7912af3f-7cee-44c8-8f09-0594f2fa7337.jpeg.webp",
    bio: "Has trained with Step Ahead since she was 3 years old, it's her 2nd home. At the age of 19 she flew the nest and carried on her training in London, at Mountview Academy of Theatre Arts in Musical Theatre. While still striving in her acting career, she's come back home again to teach her skills in Tap, Ballet, Modern, Street and Musical Theatre.",
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
