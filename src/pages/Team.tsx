import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { cardVariants, Reveal, staggerVariants, viewport } from "../components/motion";
import { team, volunteers } from "../data/siteData";

export function Team() {
  return (
    <>
      <Hero
        title="Professionals focused on AI and robotics education."
        text="The SMAIR team creates engaging learning experiences for students, schools, and community partners."
        image="https://static.wixstatic.com/media/42289d_5d70f9ecde904eddaa26616d1f60abd4~mv2.jpg"
      />
      <section className="bg-brand-mist/80 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerVariants}>
            {team.map(({ name, role, email, image }) => (
              <motion.article key={name} className="feature-card overflow-hidden p-0" variants={cardVariants} transition={{ duration: 0.45, ease: "easeOut" }}>
                <img src={image} alt={name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h2 className="text-2xl font-medium text-brand-blue">{name}</h2>
                  <p className="mt-2 font-medium text-brand-blue">{role}</p>
                  <p className="mt-4 text-sm text-slate-600">{email}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <Reveal>
            <h2 className="mt-16 text-3xl font-medium text-brand-blue">Other Staff / Volunteers</h2>
          </Reveal>
          <motion.div className="mt-6 grid gap-4 md:grid-cols-4" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerVariants}>
            {volunteers.map((name) => (
              <motion.div key={name} className="rounded-md border border-brand-blue/10 bg-white p-5 font-medium text-brand-blue shadow-lift" variants={cardVariants} transition={{ duration: 0.45, ease: "easeOut" }}>
                {name}
                <p className="mt-2 text-sm font-normal leading-6 text-slate-600">
                  Brings passion and dedication to the SMAIR mission.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
