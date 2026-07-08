import { motion } from "framer-motion";
import { CalendarDays, Download, MapPin, Play, Youtube } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { ContactForm } from "../components/ContactForm";
import { Reveal, cardVariants, revealVariants, staggerVariants, viewport } from "../components/motion";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { collaborators } from "../data/siteData";
import { getYoutubeId, stories } from "../data/stories";
import { testimonials } from "../data/testimonials";
import { upcomingEvents } from "../data/upcoming";

export function Home() {
  return (
    <>
      <HeroSection />
      <ProgramsVisionSection />
      <UpdatesGetInvolvedSection />
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
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
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
          <p className="mb-6 text-lg font-bold uppercase tracking-[0.22em] text-white sm:text-2xl lg:text-3xl">
            Discover the world of AI and robotics
          </p>
          <h1 className="mx-auto max-w-7xl text-7xl font-black uppercase leading-[0.9] text-white sm:text-9xl lg:text-[8.5rem]">
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

/* ─── Documentary: Watch Our Story ─────────────────────────────── */
function DocumentarySection() {
  const [playingSlug, setPlayingSlug] = useState<string | null>(null);

  return (
    <section className="surface-grid-dark bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker justify-center">SMAIR Documentary</p>
          <h2 className="section-title-dark mx-auto max-w-2xl">Watch our story.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/60">
            Step inside our bootcamps, classrooms, and clubs, and see how young innovators
            across Lagos learn, build, and create with SMAIR.
          </p>
        </Reveal>

        {stories.length === 0 ? (
          <Reveal delay={0.08} className="mx-auto mt-10 max-w-2xl rounded-3xl border border-dashed border-white/20 bg-white/5 px-6 py-14 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-white"><Youtube className="h-8 w-8" /></span>
            <h3 className="mt-6 text-2xl font-black text-white">More stories coming soon</h3>
            <p className="mx-auto mt-3 max-w-md leading-7 text-white/60">
              Videos from our bootcamps, clubs, and events will appear here.
            </p>
          </Reveal>
        ) : (
          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerVariants}
          >
            {stories.map((story) => {
              const youtubeId = getYoutubeId(story.youtubeUrl);
              const isPlaying = playingSlug === story.slug;
              return (
                <motion.div
                  key={story.slug}
                  className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
                  variants={cardVariants}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="relative aspect-video w-full">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                        title={story.title}
                        className="h-full w-full"
                        allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingSlug(story.slug)}
                        className="group relative block h-full w-full cursor-pointer"
                        aria-label={`Play ${story.title}`}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <span className="absolute inset-0 bg-black/30 transition-colors duration-200 group-hover:bg-black/20" />
                        <span className="absolute inset-0 grid place-items-center">
                          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-brand-blue shadow-lg transition-transform duration-200 group-hover:scale-110">
                            <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
                          </span>
                        </span>
                      </button>
                    )}
                  </div>
                  <div className="p-5 bg-white h-full">
                    <h3 className="text-lg font-bold text-zinc-900 hover:text-brand-blue">{story.title}</h3>
                    {story.description && (
                      <p className="mt-2 text-sm leading-6 text-white/60">{story.description}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
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

        {upcomingEvents.length === 0 ? (
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
        ) : (
          <>
            <motion.div
              className="mt-12 grid gap-5 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerVariants}
            >
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.slug}
                  className="overflow-hidden rounded-xl border border-white bg-white shadow-sm"
                  variants={cardVariants}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {event.image && (
                    <img src={event.image} alt="" className="aspect-video w-full object-cover" />
                  )}
                  <div className="p-6">
                    <p className="section-kicker">{event.date}</p>
                    <h3 className="mt-3 text-xl font-black text-zinc-900">{event.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-blue">{event.venue}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{event.summary}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
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
            </Reveal>
          </>
        )}
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
function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <TestimonialSlider testimonials={testimonials} />
        </Reveal>
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
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
              <div className="flex h-32 items-center justify-center">
                <img
                  src={logo}
                  alt={name}
                  className="max-h-24 w-auto max-w-56 object-contain"
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
