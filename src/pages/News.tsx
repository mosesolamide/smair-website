import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { Hero } from "../components/Hero";
import { cardVariants, staggerVariants, viewport } from "../components/motion";
import { events } from "../data/siteData";
import type { EventItem } from "../types";

const MotionLink = motion.create(Link);

const legacyNews = [
  ["Oct 2023", "The Role of Sports in the Education System"],
  ["30 Sept 2023", "Protecting Our Children's Privacy"],
  ["30 Apr 2023", "Spring 2023 High School Curriculum"],
  ["31 Jul 2023", "Recent Classrooms Renovations"],
  ["30 Jun 2023", "New Auditorium Launched in Luanda"],
];

export function News() {
  return (
    <>
      <Hero
        title="Updates from the SMAIR learning community."
        text="Explore events, student milestones, and developments shaping the future of AI and robotics education."
        image="https://static.wixstatic.com/media/42289d_e064ed7cacb8489797ebab15c64dbe9d~mv2.jpg"
      />
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div className="grid gap-5 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerVariants}>
            {events.map((event) => (
              <MotionLink key={event.slug} to={`/event-details/${event.slug}`} className="feature-card" variants={cardVariants} transition={{ duration: 0.45, ease: "easeOut" }}>
                <img src={event.image} alt="" className="mb-5 aspect-video w-full rounded-md object-cover" />
                <p className="section-kicker">{event.date}</p>
                <h2 className="mt-3 text-2xl font-medium text-brand-blue">{event.title}</h2>
                <p className="mt-3 text-slate-600">{event.summary}</p>
              </MotionLink>
            ))}
          </motion.div>
          <motion.div className="mt-14 grid gap-4" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerVariants}>
            {legacyNews.map(([date, title]) => (
              <motion.article key={title} className="rounded-md border border-brand-blue/15 bg-white p-5 md:flex md:items-center md:justify-between" variants={cardVariants} transition={{ duration: 0.45, ease: "easeOut" }}>
                <div>
                  <p className="font-medium text-brand-blue">{date}</p>
                  <h3 className="mt-1 text-xl font-medium text-brand-blue">{title}</h3>
                </div>
                <Link to="/blog" className="mt-4 inline-flex font-medium text-brand-blue md:mt-0">
                  Explore More
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export function EventPage({ event }: { event: EventItem }) {
  return (
    <>
      <Hero title={event.title} text={event.summary} image={event.image} />
      <section className="bg-brand-mist/80 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="feature-card">
            <p className="section-kicker">{event.date}</p>
            <h2 className="mt-4 text-3xl font-medium text-brand-blue">{event.venue}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Join SMAIR for a focused learning and community experience with a clear path for attendance, partnerships,
              or student registration.
            </p>
          </div>
          <div className="rounded-md border border-brand-blue/15 bg-white p-8 text-brand-blue shadow-lift">
            <h3 className="text-2xl font-medium">Reserve Interest</h3>
            <p className="mt-3 text-brand-blue/75">
              Send SMAIR a message to ask about attendance, partnerships, or student registration.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-secondary">
              Contact SMAIR
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function EventRoute() {
  const { slug } = useParams();
  const event = events.find((item) => item.slug === slug);

  if (!event) return null;
  return <EventPage event={event} />;
}
