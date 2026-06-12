import { ContactBand } from "../components/ContactBand";
import { Hero } from "../components/Hero";
import { MediaGallery } from "../components/MediaGallery";

export function About() {
  return (
    <>
      <Hero
        title="A non-profit AI and robotics organization for young builders."
        text="SMAIR Foundation gives students aged 8 and above a supportive place to build robots, learn programming, and develop practical skills for the future."
        image="https://static.wixstatic.com/media/b05d35_c6ca386f76ff4604914dfbfc054c0907~mv2.jpg"
      />
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">Our Goals</p>
            <h2 className="section-title">Hands-on learning, practical creativity, and future readiness.</h2>
          </div>
          <div className="grid gap-5">
            {["Empower Students through Technology", "Foster a Passion for Innovation", "Prepare Students for Future Challenges"].map((goal) => (
              <article key={goal} className="rounded-md border border-brand-blue/10 bg-white p-6 shadow-lift">
                <h3 className="text-2xl font-medium text-brand-blue">{goal}</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Students work with mentors, practical tools, and thoughtful challenges designed to turn curiosity
                  into skill.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <MediaGallery />
      <ContactBand />
    </>
  );
}
