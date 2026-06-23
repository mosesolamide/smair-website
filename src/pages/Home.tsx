import { motion } from "framer-motion";
import { GraduationCap, School, Sparkles, Target, Users, Youtube, Zap } from "lucide-react";
import { Link } from "react-router";
import { ContactBand } from "../components/ContactBand";
import { CourseCard } from "../components/CourseCard";
import { Hero } from "../components/Hero";
import { MediaGallery } from "../components/MediaGallery";
import { Reveal, cardVariants, staggerVariants, viewport } from "../components/motion";
import { courses, events } from "../data/siteData";

const MotionLink = motion.create(Link);

export function Home() {
  return (
    <>
      <Hero
        title="Your AI & Robotics Learning Solution."
        text="SMAIR helps students build real confidence in AI, robotics, and programming through hands-on, guided learning that matters."
      >
        <Link to="/courses" className="btn-primary">Explore Courses</Link>
        <Link to="/contact" className="btn-outline">Partner With SMAIR</Link>
      </Hero>

      <Programs />
      <Vision />
      <MediaGallery />
      <Events />
      <Impact />
      <Testimonials />
      <Partners />
      <ContactBand />
    </>
  );
}

function Programs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Programs</p>
            <h2 className="section-title">A structured path from curiosity to working prototypes.</h2>
          </div>
          <Link to="/courses" className="btn-outline shrink-0">View All Courses</Link>
        </Reveal>
        <motion.div
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerVariants}
        >
          {courses.slice(0, 4).map((course, index) => (
            <CourseCard key={course.slug} course={course} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Vision() {
  const goals = [
    { icon: Zap, label: "Empower students through technology" },
    { icon: Sparkles, label: "Foster a passion for innovation" },
    { icon: Target, label: "Prepare students for future challenges" },
  ];

  return (
    <section className="bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="img-slot-dark aspect-4/3 w-full">
            <p className="font-mono text-sm text-white/20">Photo coming soon</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-kicker">Vision</p>
          <h2 className="section-title-dark">Technology education that feels useful, guided, and real.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            SMAIR prepares students to solve problems with modern tools while developing teamwork,
            communication, and confidence that lasts beyond the classroom.
          </p>
          <div className="mt-8 grid gap-3">
            {goals.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/5 px-5 py-4">
                <span className="icon-tile-dark shrink-0">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-semibold text-white">{label}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex btn-secondary">
            Learn More About SMAIR
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Events</p>
            <h2 className="section-title">Workshops, bootcamps, and community programs.</h2>
          </div>
          <Link to="/news" className="btn-outline shrink-0">Explore News</Link>
        </Reveal>
        <motion.div
          className="mt-10 grid gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerVariants}
        >
          {events.map((event) => (
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
                <h3 className="mt-3 text-xl font-bold text-zinc-900">{event.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{event.summary}</p>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { icon: Users, value: "25+", label: "Students Impacted" },
    { icon: GraduationCap, value: "45+", label: "Recommendations" },
    { icon: School, value: "5+", label: "School Partnerships" },
  ];

  return (
    <section className="bg-brand-navy py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker">Impact</p>
          <h2 className="section-title-dark">Building momentum, one student at a time.</h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 md:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <Reveal key={label} className="flex flex-col items-center gap-3 bg-brand-navy p-10 text-center">
              <span className="icon-tile-dark">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-5xl font-bold text-white">{value}</p>
              <p className="text-sm font-semibold text-zinc-500">{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="section-kicker">Testimonial</p>
        <blockquote className="mt-5 text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
          "SMAIR has ignited my passion for robotics and coding. The interactive classes and
          hands-on projects have been truly inspiring."
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-10 w-10 rounded-full bg-zinc-100" />
          <div className="text-left">
            <p className="font-bold text-zinc-900">Faithful Ajah</p>
            <p className="text-sm text-zinc-500">Educator, SMAIR Foundation</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Partners() {
  return (
    <section className="bg-zinc-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="section-kicker">Collaborators</p>
            <h2 className="section-title">Working alongside hubs, schools, and mentors.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-500">
              SMAIR partners with the AIR Innovation Hub and a growing network of schools to bring
              hands-on robotics and AI learning directly to students and classrooms.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["AIR Innovation Hub", "Partner Schools", "Community Mentors", "Families & Sponsors"].map(
                (partner) => (
                  <div
                    key={partner}
                    className="rounded-xl border border-zinc-200 bg-white px-5 py-4 text-center text-sm font-semibold text-zinc-700"
                  >
                    {partner}
                  </div>
                )
              )}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl bg-brand-navy p-8 text-white">
              <span className="icon-tile-dark">
                <Youtube className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-2xl font-bold">Watch SMAIR in action</h3>
              <p className="mt-3 text-zinc-400">
                See bootcamps, club projects, and student builds on the SMAIR YouTube channel.
              </p>
              <a
                href="https://www.youtube.com/@smairfoundation"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex btn-primary"
              >
                Subscribe on YouTube
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
