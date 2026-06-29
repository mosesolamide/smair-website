import { motion } from "framer-motion";
import { ChevronRight, Lightbulb, Youtube } from "lucide-react";
import { Link } from "react-router";
import { ContactBand } from "../components/ContactBand";
import { Reveal, cardVariants, revealVariants, staggerVariants, viewport } from "../components/motion";
import { collaborators, events, sampleImages } from "../data/siteData";

const MotionLink = motion.create(Link);

export function Home() {
  return (
    <>
      <HeroSection />
      <OurProgramsSection />
      <OurVisionSection />
      <LatestUpdatesSection />
      <SmairClubSection />
      <YouTubeSection />
      <StatsSection />
      <TestimonialsSection />
      <CollaboratorsSection />
      <ContactBand />
    </>
  );
}

/* ─── Hero — full-width background image, centred overlay text ── */
const heroBg =
  "https://static.wixstatic.com/media/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg";

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-[70px]">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-brand-navy/65" />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center text-white sm:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Discover the World of<br className="hidden sm:block" /> AI and Robotics
          </h1>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.3em] text-white/75">
            Learn &nbsp;&middot;&nbsp; Build &nbsp;&middot;&nbsp; Create
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
            Join us in shaping the future of technology.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/courses" className="btn-primary px-8 py-4 text-base">
              Explore Courses
            </Link>
            <Link to="/contact" className="btn-secondary px-8 py-4 text-base">
              Get Involved
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Our Programs ──────────────────────────────────────────────── */
function OurProgramsSection() {
  return (
    <section className="surface-grid bg-brand-surface py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="section-kicker">Our Programs</p>
          <h2 className="section-title">
            Robotics and programming for ages 8 and above.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-500">
            SMAIR Foundation provides immersive learning experiences in robotics and
            programming, with emphasis on creativity and innovation. Students work
            hands-on with hardware, code, and real projects in a supportive environment.
          </p>
          <Link to="/courses" className="btn-primary mt-8 inline-flex">
            View Course Catalog
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src={sampleImages[1].src}
              alt="SMAIR robotics programme"
              className="aspect-4/3 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Our Vision ────────────────────────────────────────────────── */
function OurVisionSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src={sampleImages[2].src}
              alt="SMAIR students and mentors"
              className="aspect-4/3 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="section-kicker">Our Vision</p>
          <h2 className="section-title">
            Creating futures where AI and robotics drive progress, inclusivity, and equal access.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-500">
            We envision a world where every young person, regardless of background,
            has access to the technology skills and knowledge needed to lead and
            innovate in an AI-driven future.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Latest Updates ────────────────────────────────────────────── */
function LatestUpdatesSection() {
  return (
    <section className="surface-grid bg-brand-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Latest Updates</p>
            <h2 className="section-title">
              Events, student achievements, and industry news.
            </h2>
          </div>
          <Link to="/news" className="btn-outline shrink-0">See All</Link>
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
              className="group overflow-hidden rounded-xl border border-white bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              variants={cardVariants}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {event.image && (
                <img src={event.image} alt="" className="aspect-video w-full object-cover" />
              )}
              <div className="p-6">
                <p className="section-kicker">{event.date}</p>
                <h3 className="mt-3 text-xl font-black text-zinc-900 transition-colors duration-200 group-hover:text-brand-blue">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{event.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-blue">
                  Read more <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SMAIR Club ────────────────────────────────────────────────── */
const clubFeatures = [
  "Affordable access — subsidized membership for all students and families",
  "Project-based learning — real circuits, robots, and code projects",
  "Structured learning tracks — from electronics basics through AI",
  "Expert guidance — mentors and engineers from the AIR Innovation Hub",
  "Innovative community — collaborate with peers from partner schools",
  "Recognition & growth — certificates, showcases, and awards",
];

function SmairClubSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src={sampleImages[3].src}
              alt="SMAIR Club students"
              className="aspect-4/3 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/8 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-blue">
            SMAIR Club Initiative
          </span>
          <h2 className="section-title mt-4">
            A membership-based learning program powered by AIR Innovation Hub.
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-500">
            Subsidized by SMAIR Foundation — a discounted, high-value opportunity for students
            aged 8 and above to access robotics, coding, AI, design thinking, and digital literacy.
          </p>
          <ul className="mt-6 grid gap-3">
            {clubFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-zinc-600">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/smair-club" className="btn-primary">Join SMAIR Club</Link>
            <Link to="/contact" className="btn-outline">Partner Your School</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── YouTube Tutorials ─────────────────────────────────────────── */
function YouTubeSection() {
  return (
    <section className="surface-grid-dark bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-white/10">
              <Youtube className="h-8 w-8" />
            </span>
            <div>
              <h2 className="text-2xl font-black">YouTube Tutorials</h2>
              <p className="mt-1 max-w-lg text-sm leading-6 text-white/60">
                Free AI and robotics tutorials — bootcamps, club projects, and student builds, all on YouTube.
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@smairfoundation"
            target="_blank"
            rel="noreferrer"
            className="btn-primary shrink-0"
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Empowering Future Innovators — Stats ──────────────────────── */
const stats = [
  { value: "25+", label: "Students Impacted" },
  { value: "45+", label: "Recommendations" },
  { value: "5+",  label: "School Partnerships" },
];

function StatsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker justify-center">Empowering Future Innovators</p>
          <h2 className="section-title mx-auto max-w-2xl">
            Building momentum, one student at a time.
          </h2>
        </Reveal>

        <div className="mt-12 grid divide-y divide-zinc-100 overflow-hidden rounded-xl border border-zinc-100 shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map(({ value, label }) => (
            <Reveal key={label} className="flex flex-col items-center gap-3 bg-white p-12 text-center">
              <p className="text-5xl font-black text-brand-blue">{value}</p>
              <p className="text-sm font-semibold text-zinc-500">{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────────────────── */
const quotes = [
  {
    text: "SMAIR has ignited my passion for robotics and coding. The interactive classes and hands-on projects have been truly inspiring.",
    name: "Faithful Ajah",
    role: "Educator, SMAIR Foundation",
  },
  {
    text: "The curriculum is well-structured and engaging. My students look forward to every session — SMAIR makes technology feel accessible and fun.",
    name: "Michael Okafor",
    role: "School Partner Teacher",
  },
  {
    text: "Watching students build and program their own robots in just a few weeks is incredible. SMAIR's approach is exceptional.",
    name: "Adaeze Nwosu",
    role: "Parent & Community Advocate",
  },
];

function TestimonialsSection() {
  return (
    <section className="surface-grid bg-brand-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker justify-center">Testimonials</p>
          <h2 className="section-title mx-auto max-w-2xl">
            Hear from educators, parents, and students.
          </h2>
        </Reveal>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerVariants}
        >
          {quotes.map(({ text, name, role }) => (
            <motion.div
              key={name}
              className="flex flex-col gap-5 rounded-xl border border-white bg-white/90 p-7 shadow-sm"
              variants={cardVariants}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Lightbulb className="h-6 w-6 text-brand-blue" />
              <blockquote className="flex-1 text-base font-medium leading-7 text-zinc-700">
                "{text}"
              </blockquote>
              <div className="flex items-center gap-3 border-t border-zinc-100 pt-5">
                <div className="h-10 w-10 rounded-full bg-zinc-100" />
                <div>
                  <p className="text-sm font-black text-zinc-900">{name}</p>
                  <p className="text-xs text-zinc-500">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Our Collaborators ─────────────────────────────────────────── */
function CollaboratorsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker justify-center">Our Collaborators</p>
          <h2 className="section-title mx-auto max-w-2xl">
            Working alongside hubs, schools, and media partners.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-500">
            SMAIR partners with leading organisations to bring robotics and AI education to every student.
          </p>
        </Reveal>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerVariants}
        >
          {collaborators.map(({ name, tagline, logo, href }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-4 rounded-xl border border-zinc-100 bg-white p-8 shadow-sm"
              variants={cardVariants}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="flex h-24 items-center justify-center">
                <img
                  src={logo}
                  alt={name}
                  className="max-h-16 w-auto max-w-45 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-black text-zinc-900">{name}</p>
                <p className="text-xs text-zinc-400">{tagline}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
