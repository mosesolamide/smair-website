import { motion } from "framer-motion";
import { CalendarDays, Download, Lightbulb, MapPin, Youtube } from "lucide-react";
import { Link } from "react-router";
import { ContactForm } from "../components/ContactForm";
import { Reveal, cardVariants, revealVariants, staggerVariants, viewport } from "../components/motion";
import { collaborators, sampleImages } from "../data/siteData";

export function Home() {
  return (
    <>
      <HeroSection />
      <ProgramsVisionSection />
      <UpdatesGetInvolvedSection />
      <SmairClubSection />
      <DocumentarySection />
      <YouTubeSection />
      <WorkshopsSection />
      <StatsSection />
      <TestimonialsSection />
      <CollaboratorsSection />
      <HomeContactSection />
    </>
  );
}

/* ─── Hero: full-width background image, centred overlay text ── */
const heroVideo =
  "https://video.wixstatic.com/video/3b80ec_419e4f9f64fb4df0b336ccd6cc6b51a0/720p/mp4/file.mp4";
const heroPoster =
  "https://static.wixstatic.com/media/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg";

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-15">
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

/* ─── Tinted photo panel with overlapping white card (Wix style) ── */
const wixPanel = (id: string, ext = "jpg") =>
  `https://static.wixstatic.com/media/${id}~mv2.${ext}/v1/fill/w_960,h_1200,al_c,q_85,enc_avif,quality_auto/${id}~mv2.${ext}`;

const panelImages = {
  programs: wixPanel("3b80ec_5c03e3726146499f88c6dc43df9f6d14"),
  vision: wixPanel("3b80ec_661f0679626143de9354b4b52e00f0b3"),
  updates: wixPanel("3b80ec_309b3d8c1cc8494b950b15d11c22a0cd"),
  getInvolved: wixPanel("11062b_8d47d1c047904478a0cf81b25f044d11", "jpeg"),
};

type PhotoPanelProps = {
  image: string;
  alt: string;
  title: string;
  text: string;
  linkLabel: string;
  to: string;
  placement: "left-low" | "center-high" | "right-low";
  delay?: number;
};

function PhotoPanel({ image, alt, title, text, linkLabel, to, placement, delay = 0 }: PhotoPanelProps) {
  const cardPos =
    placement === "left-low"
      ? "ml-6 pb-16 pt-24 sm:ml-10"
      : placement === "right-low"
      ? "ml-auto mr-6 pb-16 pt-56 sm:mr-10"
      : "mx-auto pb-40 pt-8";
  const barSide = placement === "right-low" ? "right-0" : "left-0";

  return (
    <div className="relative overflow-hidden">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-brand-blue/55" aria-hidden="true" />
      <Reveal delay={delay} className={`relative max-w-sm ${cardPos}`}>
        <div className="relative bg-white p-8 sm:p-10">
          <span aria-hidden="true" className={`absolute -top-2 h-2 w-full bg-brand-blue ${barSide}`} />
          <h2 className="text-3xl font-black text-brand-blue sm:text-4xl">{title}</h2>
          <p className="mt-5 text-sm leading-7 text-brand-blue">{text}</p>
          <Link
            to={to}
            className="mt-6 inline-block text-sm font-black uppercase tracking-[0.08em] text-brand-blue hover:underline"
          >
            {linkLabel}
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

/* ─── Our Programs & Our Vision ─────────────────────────────────── */
function ProgramsVisionSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
        <PhotoPanel
          image={panelImages.programs}
          alt="SMAIR robotics kits ready for students"
          title="Our Programs"
          text="At SMAIR, we offer an immersive learning experience where students aged 8 and above can explore the realms of robotics and programming. Our courses are designed to inspire creativity and innovation, empowering the next generation of tech leaders."
          linkLabel="View Course Catalog"
          to="/courses"
          placement="left-low"
        />
        <PhotoPanel
          image={panelImages.vision}
          alt="SMAIR students at the AI Robotics Innovation Tech"
          title="Our Vision"
          text="To create a future where AI and robotics drive progress, inclusivity, and equal access to technology education for all, empowering the next generation of innovators."
          linkLabel="Learn More"
          to="/about"
          placement="center-high"
          delay={0.08}
        />
      </div>
    </section>
  );
}

/* ─── Latest Updates & Get Involved ─────────────────────────────── */
function UpdatesGetInvolvedSection() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
        <PhotoPanel
          image={panelImages.updates}
          alt="SMAIR student speaking at a presentation"
          title="Latest Updates"
          text="Stay updated with our latest events, student achievements, and industry news. Our commitment to excellence and progress ensures a dynamic learning environment for all."
          linkLabel="Explore News"
          to="/blog"
          placement="right-low"
        />
        <PhotoPanel
          image={panelImages.getInvolved}
          alt="Robotic machinery in an assembly lab"
          title="Get Involved"
          text="Join our community of learners, educators, and innovators. Discover the endless possibilities that await and be a part of our mission to revolutionize education through technology."
          linkLabel="Join the Community"
          to="/contact"
          placement="center-high"
          delay={0.08}
        />
      </div>
    </section>
  );
}

/* ─── SMAIR Club ────────────────────────────────────────────────── */
const clubFeatures = [
  "Affordable access: subsidized membership for all students and families",
  "Project-based learning: real circuits, robots, and code projects",
  "Structured learning tracks: from electronics basics through AI",
  "Expert guidance: mentors and engineers from the AIR Innovation Tech",
  "Innovative community: collaborate with peers from partner schools",
  "Recognition & growth: certificates, showcases, and awards",
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
            Subsidized by SMAIR Foundation, a discounted, high-value opportunity for students
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
            <Link to="/contact" className="btn-primary">Join SMAIR Club</Link>
            <Link to="/contact" className="btn-outline">Partner Your School</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Documentary: Watch Our Story ─────────────────────────────── */
function DocumentarySection() {
  return (
    <section className="surface-grid-dark bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker justify-center">SMAIR Documentary</p>
          <h2 className="section-title-dark mx-auto max-w-2xl">Watch our story.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/60">
            Step inside our bootcamps, classrooms, and clubs, and see how young innovators
            across Lagos learn, build, and create with SMAIR.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <video
            controls
            preload="none"
            poster={heroPoster}
            className="aspect-video w-full rounded-xl border border-white/10 object-cover shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
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
                Free AI and robotics tutorials: bootcamps, club projects, and student builds, all on YouTube.
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@smairfoundation"
            target="_blank"
            rel="noreferrer"
            className="btn-primary shrink-0"
          >
            Subscribe, It's Free!
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
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-outline">Register your interest</Link>
            <a
              href="https://22be33b4-62e6-4cf4-ace3-1e2489118037.filesusr.com/ugd/42289d_a8b6dfa83b3347898b806b1a09cdaf6f.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Empowering Future Innovators: Stats ──────────────────────── */
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
    text: "The curriculum is well-structured and engaging. My students look forward to every session. SMAIR makes technology feel accessible and fun.",
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
