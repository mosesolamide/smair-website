import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { Hero } from "../components/Hero";
import { cardVariants, staggerVariants, viewport } from "../components/motion";
import { cmsNews, type NewsItem } from "../data/news";
import { events } from "../data/siteData";

const MotionLink = motion.create(Link);
const allNews: NewsItem[] = [...cmsNews, ...events];

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
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            className="grid gap-5 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerVariants}
          >
            {allNews.map((event) => (
              <MotionLink
                key={event.slug}
                to={`/event-details/${event.slug}`}
                className="group overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                variants={cardVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {event.image ? (
                  <img src={event.image} alt="" className="aspect-video w-full object-cover" />
                ) : (
                  <div className="img-slot aspect-video w-full" />
                )}
                <div className="p-5">
                  <p className="section-kicker">{event.date}</p>
                  <h2 className="mt-3 text-xl font-bold text-zinc-900">{event.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{event.summary}</p>
                </div>
              </MotionLink>
            ))}
          </motion.div>

          <motion.div
            className="mt-14 grid gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerVariants}
          >
            {legacyNews.map(([date, title]) => (
              <motion.article
                key={title}
                className="flex flex-col gap-3 rounded-xl border border-zinc-100 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between"
                variants={cardVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-cyan">{date}</p>
                  <h3 className="mt-1 text-lg font-bold text-zinc-900">{title}</h3>
                </div>
                <Link to="/blog" className="shrink-0 text-sm font-semibold text-brand-cyan hover:underline">
                  Read more →
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export function EventPage({ event }: { event: NewsItem }) {
  return (
    <>
      <Hero title={event.title} text={event.summary} image={event.image} />
      <section className="bg-zinc-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.75fr]">
          <div className="feature-card">
            <p className="section-kicker">{event.date}</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900">{event.venue}</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-500">
              {event.body || "Join SMAIR for a focused learning and community experience with a clear path for attendance, partnerships, or student registration."}
            </p>
          </div>
          <div className="rounded-xl border border-zinc-100 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-zinc-900">Reserve Interest</h3>
            <p className="mt-3 text-zinc-500">
              Send SMAIR a message to ask about attendance, partnerships, or student registration.
            </p>
            <Link to="/contact" className="mt-7 inline-flex btn-primary">
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
  const event = allNews.find((item) => item.slug === slug);
  if (!event) return null;
  return <EventPage event={event} />;
}
