import { ContactBand } from "../components/ContactBand";
import { Hero } from "../components/Hero";
import { MediaGallery } from "../components/MediaGallery";
import { Reveal } from "../components/motion";

const goals = [
  {
    title: "Empower Students through Technology",
    text: "Students work with mentors, practical tools, and thoughtful challenges designed to turn curiosity into skill.",
  },
  {
    title: "Foster a Passion for Innovation",
    text: "Every session encourages experimentation, creative thinking, and building without fear of failure.",
  },
  {
    title: "Prepare Students for Future Challenges",
    text: "From electronics to AI, our programs connect learning to real-world problems and career paths.",
  },
];

export function About() {
  return (
    <>
      <Hero
        title="A non-profit AI and Robotics organization for students aged 8 and above."
        text="At SMAIR Foundation, students learn how to build robots and explore programming in a supportive, hands-on environment that nurtures creativity and innovation."
      />

      {/* Our Vision */}
      <section className="surface-grid-dark bg-brand-navy py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <p className="section-kicker justify-center text-white/60">Our Vision</p>
            <h2 className="section-title-dark mt-3">
              Creating futures where AI and robotics drive progress, inclusivity, and equal access to technology.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Our Goals */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <p className="section-kicker">Our Goals</p>
              <h2 className="section-title">Hands-on learning, practical creativity, and future readiness.</h2>
            </Reveal>
            <Reveal delay={0.08} className="grid gap-5">
              {goals.map(({ title, text }) => (
                <article key={title} className="feature-card">
                  <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-500">{text}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
      <MediaGallery />
      <ContactBand />
    </>
  );
}
