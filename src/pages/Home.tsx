import { motion } from "framer-motion";
import {
  BookOpen, Bot, Brain, ChevronRight,
  GraduationCap, Lightbulb, Play,
  Rocket, School, Star, Users, Youtube, Zap,
} from "lucide-react";
import { Link } from "react-router";
import { ContactBand } from "../components/ContactBand";
import { Hero } from "../components/Hero";
import { Reveal, cardVariants, staggerVariants, viewport } from "../components/motion";
import { events } from "../data/siteData";

const MotionLink = motion.create(Link);

export function Home() {
  return (
    <>
      <Hero
        title="Your AI & Robotics Learning Solution."
        text="Every lesson, robot, and line of code we deliver unlocks a learner's power to imagine, create, and lead in a world that's changing faster than ever."
      >
        <Link to="/courses" className="btn-primary gap-2 px-7 py-4 text-base">
          Explore Courses
        </Link>
        <Link to="/contact" className="btn-outline gap-2 px-7 py-4 text-base">
          <Play className="h-4 w-4" />
          Connect with SMAIR
        </Link>
      </Hero>

      <FourPillars />
      <ProgramLevels />
      <Testimonials />
      <Training />
      <ImpactStrip />
      <Events />
      <Partners />
      <ContactBand />
    </>
  );
}

/* ─── 1. Four Pillars ──────────────────────────────────────── */
const pillars = [
  {
    icon: Bot,
    color: "text-brand-blue bg-brand-blue/10",
    title: "Robotics & Hardware",
    desc: "Hands-on kits that students build, program, and race — bridging physical and digital worlds.",
    badge: "15+ kits delivered",
  },
  {
    icon: Brain,
    color: "text-brand-violet bg-brand-violet/10",
    title: "Coding & AI",
    desc: "From Scratch blocks to Python and machine learning — guided projects at every confidence level.",
    badge: "90%+ student satisfaction",
  },
  {
    icon: BookOpen,
    color: "text-brand-cyan bg-brand-cyan/10",
    title: "Curriculum & Projects",
    desc: "Structured learning pathways with lesson plans, assessments, and real-world project briefs.",
    badge: "Competency-led learning",
  },
  {
    icon: Zap,
    color: "text-brand-blue bg-brand-blue/10",
    title: "Training & Events",
    desc: "Bootcamps, clubs, and educator workshops that turn theory into confident action.",
    badge: "50+ workshops held",
  },
];

function FourPillars() {
  return (
    <section className="bg-brand-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker justify-center">Our Solution</p>
          <h2 className="section-title mx-auto max-w-2xl">
            Everything young innovators need in one place.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-500">
            Locally built, globally recognised — four pillars of hands-on technology learning.
          </p>
        </Reveal>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerVariants}
        >
          {pillars.map(({ icon: Icon, color, title, desc, badge }) => (
            <motion.div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              variants={cardVariants}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span className={`grid h-12 w-12 place-items-center rounded-xl ${color}`}>
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-black text-zinc-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{desc}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 rounded-full bg-brand-blue/8 px-3 py-1.5 text-xs font-bold text-brand-blue">
                <Star className="h-3 w-3" />
                {badge}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 2. Program Levels ─────────────────────────────────────── */
const levels = [
  {
    tag: "Juniors",
    ages: "Ages 8 – 10",
    tagline: "Spark Curiosity",
    desc: "Introduction to computational thinking, block coding, and simple robotics through play and guided projects.",
    tools: ["Scratch", "Lego Robotics", "Block Coding"],
    accent: "border-brand-cyan",
    tagBg: "bg-brand-cyan/10 text-brand-cyan",
    badgeBg: "bg-brand-cyan text-white",
    cta: "/courses",
  },
  {
    tag: "Explorers",
    ages: "Ages 11 – 13",
    tagline: "Build & Experiment",
    desc: "Students progress to text-based coding, micro:bit projects, and intermediate robotics challenges.",
    tools: ["Python", "Micro:bit", "Arduino basics"],
    accent: "border-brand-violet",
    tagBg: "bg-brand-violet/10 text-brand-violet",
    badgeBg: "bg-brand-violet text-white",
    cta: "/courses",
  },
  {
    tag: "Pioneers",
    ages: "Ages 14+",
    tagline: "Design & Innovate",
    desc: "Advanced robotics, machine learning, and project-based learning that prepares students for the real world.",
    tools: ["Advanced Python", "AI & ML", "Autonomous Robots"],
    accent: "border-brand-blue",
    tagBg: "bg-brand-blue/10 text-brand-blue",
    badgeBg: "bg-brand-blue text-white",
    cta: "/courses",
  },
];

function ProgramLevels() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker justify-center">Curriculum</p>
          <h2 className="section-title mx-auto max-w-2xl">
            A clear path from curious to capable.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-500">
            Three structured tiers grow with every student — wherever they start.
          </p>
        </Reveal>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerVariants}
        >
          {levels.map(({ tag, ages, tagline, desc, tools, accent, tagBg, badgeBg, cta }) => (
            <motion.div
              key={tag}
              className={`flex flex-col rounded-2xl border-2 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${accent}`}
              variants={cardVariants}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest ${tagBg}`}>
                  {tag}
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500">
                  {ages}
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-black text-zinc-900">{tagline}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className={`rounded-lg px-3 py-1.5 text-xs font-bold text-white ${badgeBg}`}>
                    {tool}
                  </span>
                ))}
              </div>

              <Link
                to={cta}
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-zinc-900 hover:gap-2 transition-all duration-200"
              >
                See courses <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 3. Testimonials ───────────────────────────────────────── */
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

function Testimonials() {
  return (
    <section className="bg-brand-surface py-20 sm:py-24">
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
              className="flex flex-col gap-5 rounded-2xl border border-zinc-100 bg-white p-7 shadow-sm"
              variants={cardVariants}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Lightbulb className="h-6 w-6 text-brand-cyan" />
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

/* ─── 4. Training section (resolute "Turn Every Educator") ─── */
const trainingFeatures = [
  "Hands-on, project-driven learning",
  "In-school and bootcamp formats",
  "Mentor support and peer forums",
  "Accredited educator workshops",
];

function Training() {
  return (
    <section className="bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="img-slot-dark aspect-4/3 w-full">
            <p className="font-mono text-sm text-white/20">Photo coming soon</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-cyan">
            Educator Support
          </span>
          <h2 className="section-title-dark mt-5">
            Turn every school into a tech hub.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            SMAIR partners with schools, hubs, and community organisations to bring
            robotics and AI education directly into classrooms — with full support for educators.
          </p>
          <ul className="mt-7 grid gap-3">
            {trainingFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm font-semibold text-white">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-cyan/20">
                  <GraduationCap className="h-3.5 w-3.5 text-brand-cyan" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-secondary mt-8 inline-flex">
            Partner with SMAIR
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 5. Impact strip ───────────────────────────────────────── */
const stats = [
  { icon: Users,         value: "25+",  label: "Students Impacted",    color: "text-brand-cyan" },
  { icon: School,        value: "5+",   label: "School Partnerships",   color: "text-brand-violet" },
  { icon: Rocket,        value: "50+",  label: "Workshops Delivered",   color: "text-brand-cyan" },
  { icon: GraduationCap, value: "45+",  label: "Educator Endorsements", color: "text-brand-violet" },
];

function ImpactStrip() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker justify-center">Impact</p>
          <h2 className="section-title mx-auto max-w-xl">
            Building momentum, one student at a time.
          </h2>
        </Reveal>

        <div className="mt-12 grid divide-y divide-zinc-100 overflow-hidden rounded-2xl border border-zinc-100 shadow-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <Reveal key={label} className="flex flex-col items-center gap-2 bg-white p-10 text-center">
              <Icon className={`h-7 w-7 ${color}`} />
              <p className="mt-1 text-5xl font-black text-zinc-900">{value}</p>
              <p className="text-sm font-semibold text-zinc-500">{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 6. Events ─────────────────────────────────────────────── */
function Events() {
  return (
    <section className="bg-brand-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Events</p>
            <h2 className="section-title">Workshops, bootcamps & community programmes.</h2>
          </div>
          <Link to="/news" className="btn-outline shrink-0">See All Events</Link>
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
              className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              variants={cardVariants}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {event.image ? (
                <img src={event.image} alt="" className="aspect-video w-full object-cover" />
              ) : (
                <div className="img-slot aspect-video w-full rounded-none" />
              )}
              <div className="p-6">
                <p className="section-kicker">{event.date}</p>
                <h3 className="mt-3 text-xl font-black text-zinc-900 group-hover:text-brand-blue transition-colors duration-200">
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

/* ─── 7. Partners / YouTube CTA ─────────────────────────────── */
function Partners() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="section-kicker">Collaborators</p>
            <h2 className="section-title">
              Working alongside hubs, schools, and mentors.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-500">
              SMAIR partners with the AIR Innovation Hub and a growing network of schools
              to bring hands-on robotics and AI learning directly to students and classrooms.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["AIR Innovation Hub", "Partner Schools", "Community Mentors", "Families & Sponsors"].map(
                (p) => (
                  <div key={p} className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm font-semibold text-zinc-700">
                    <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                    {p}
                  </div>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl bg-brand-navy p-8 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10">
                <Youtube className="h-6 w-6 text-white" />
              </span>
              <h3 className="mt-5 text-2xl font-black">Watch SMAIR in action</h3>
              <p className="mt-3 text-zinc-400">
                See bootcamps, club projects, and student builds on the SMAIR YouTube channel.
              </p>
              <a
                href="https://www.youtube.com/@smairfoundation"
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 inline-flex"
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
