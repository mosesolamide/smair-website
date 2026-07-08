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

const goalStyles = [
  "border-sky-200 bg-sky-50",
  "border-amber-200 bg-amber-50",
  "border-violet-200 bg-violet-50",
];

export function About() {
  return (
    <>
      <Hero
        title={<span className="text-brand-blue">About SMAIR</span>}
        text="SMAIR Foundation is a non-profit AI and Robotics organization where students aged 8 and above can learn how to build robots and also programming. Our programs are designed to provide a hands-on learning experience, allowing students to explore the exciting world of robotics and programming. With a focus on practical skills and creativity, we aim to inspire the next generation of innovators and problem solvers. Our team is dedicated to creating a supportive environment where students can unleash their potential and develop valuable skills for the future."
        image="https://static.wixstatic.com/media/3b80ec_3094fceb0ec0437293cd00225a1d63d9~mv2.jpg/v1/fill/w_1592,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3b80ec_3094fceb0ec0437293cd00225a1d63d9~mv2.jpg"
      />

      {/* Our Goals */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <p className="section-kicker">Our Goals</p>
              <h2 className="section-title">Hands-on learning, practical creativity, and future readiness.</h2>
            </Reveal>
            <Reveal delay={0.08} className="grid gap-5">
              {goals.map(({ title, text }, index) => (
                <article key={title} className={`feature-card ${goalStyles[index]}`}>
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
