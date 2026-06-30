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
        image="https://static.wixstatic.com/media/3b80ec_0d67ecbbd8b74b66aa6e820cbc90a7da~mv2.jpg/v1/fill/w_980,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3b80ec_0d67ecbbd8b74b66aa6e820cbc90a7da~mv2.jpg"
      />
      <section className="bg-zinc-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="section-kicker">Our Team</p>
            <h2 className="section-title">The people behind SMAIR.</h2>
          </Reveal>
          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerVariants}
          >
            {team.map(({ name, role, email, image }) => (
              <motion.article
                key={name}
                className="overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-sm"
                variants={cardVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="aspect-4/3 w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="img-slot aspect-4/3 w-full" />
                )}
                <div className="p-5">
                  <h2 className="text-xl font-bold text-zinc-900">{name}</h2>
                  <p className="mt-1 text-sm font-semibold text-brand-cyan">{role}</p>
                  <p className="mt-3 text-sm text-zinc-500">{email}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <Reveal className="mt-16">
            <p className="section-kicker">Volunteers</p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-900">Other staff & volunteers</h2>
          </Reveal>
          <motion.div
            className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerVariants}
          >
            {volunteers.map((name) => (
              <motion.div
                key={name}
                className="rounded-xl border border-zinc-100 bg-white p-5 shadow-sm"
                variants={cardVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="font-bold text-zinc-900">{name}</p>
                <p className="mt-1.5 text-sm text-zinc-500">
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
