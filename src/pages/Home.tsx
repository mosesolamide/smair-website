import { motion } from "framer-motion";
import { CalendarDays, ChevronRight, Lightbulb, MapPin, Youtube } from "lucide-react";
import { Link } from "react-router";
import { ContactBand } from "../components/ContactBand";
import { ContactForm } from "../components/ContactForm";
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
      <ContactBand />
      <SmairClubSection />
      <YouTubeSection />
      <WorkshopsSection />
      <StatsSection />
      <TestimonialsSection />
      <CollaboratorsSection />
      <HomeContactSection />
    </>
  );
}

/* ─── Hero — full-width background image, centred overlay text ── */
const heroVideo =
  "https://video.wixstatic.com/video/3b80ec_419e4f9f64fb4df0b336ccd6cc6b51a0/720p/mp4/file.mp4";
const heroPoster =
  "https://static.wixstatic.com/media/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg";

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-[70px]">
      <video
        className="absolute inset-0 -z-30 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 text-center text-white sm:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-6 text-base font-bold uppercase tracking-[0.24em] text-white sm:text-lg">
            Discover the world of AI and robotics
          </p>
          <h1 className="mx-auto max-w-6xl text-6xl font-black uppercase leading-[0.9] text-white sm:text-8xl lg:text-[7.5rem]">
            Learn, Build,<br /><span className="text-brand-blue">Create</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-white/85 sm:text-2xl">
            Join us in shaping the future of technology.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/courses" className="btn-primary px-8 py-4 text-base">
              Explore Courses
            </Link>
            <Link to="/about" className="btn-secondary px-8 py-4 text-base">
              Discover SMAIR
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
  "Expert guidance — mentors and engineers from the AIR Innovation Tech",
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
            A membership-based learning program powered by AIR Innovation Tech.
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
            Subscribe — It's Free!
          </a>
        </div>
      </div>
    </section>
  );
}

function WorkshopsSection() {
  return (
    <section className="surface-grid bg-brand-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker justify-center">Upcoming Workshops & Seminars</p>
          <h2 className="section-title mx-auto max-w-3xl">Learn, connect, and build with us.</h2>
        </Reveal>
        <Reveal className="mx-auto mt-12 max-w-3xl rounded-3xl border border-dashed border-brand-blue/25 bg-white px-6 py-14 text-center shadow-sm">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue"><CalendarDays className="h-8 w-8" /></span>
          <h3 className="mt-6 text-2xl font-black text-brand-navy">No events at the moment</h3>
          <p className="mx-auto mt-3 max-w-lg leading-7 text-zinc-500">New sessions are being planned. Contact us to bring a SMAIR workshop to your school.</p>
          <Link to="/contact" className="btn-outline mt-7">Register your interest</Link>
        </Reveal>
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

function HomeContactSection() {
  return (
    <section className="surface-grid bg-brand-surface py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="section-kicker">Contact Us</p>
          <h2 className="section-title">Let's build the future together.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">Whether you are a learner, educator, school, innovator, or partner, we would like to hear from you.</p>
          <div className="mt-8 flex gap-4 text-sm leading-6 text-zinc-600"><MapPin className="h-5 w-5 shrink-0 text-brand-blue" /><p>1B Ibitayo Street, Off Adekunle Banjo Avenue,<br />Magodo GRA II, Lagos</p></div>
          <div className="mt-6 grid gap-3 text-sm font-bold"><a href="tel:+2349161771271" className="text-brand-navy">+234 916-177-1271</a><a href="mailto:info@smairfoundation.com" className="text-brand-blue">info@smairfoundation.com</a></div>
        </Reveal>
        <Reveal delay={0.08}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
