import { motion } from "framer-motion";
import { GraduationCap, School, Sparkles, Target, Users, Youtube, Zap } from "lucide-react";
import { Link } from "react-router";
import { ContactBand } from "../components/ContactBand";
import { CourseCard } from "../components/CourseCard";
import { Hero } from "../components/Hero";
import { MediaGallery } from "../components/MediaGallery";
import { Reveal, cardVariants, staggerVariants, viewport } from "../components/motion";
import { courses, events } from "../data/siteData";

const MotionLink = motion.create(Link)

export function Home() {
  return (
    <>
      <Hero
        title="Practical technology learning for young innovators."
        text="SMAIR helps students build confidence in robotics, programming, and artificial intelligence through guided, hands-on learning."
        image="https://static.wixstatic.com/media/b05d35_da624ea3d2084b7a8527eb0e11c0ca27~mv2.png"
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/courses" className="btn-primary">
            Explore Courses
          </Link>
          <Link to="/contact" className="btn-secondary">
            Partner With SMAIR
          </Link>
        </div>
      </Hero>
      <Programs />
      <Vision />
      <MediaGallery />
      <Events />
      <Partners />
      <Impact />
      <Testimonials />
      <ContactBand />
    </>
  );
}

function Programs() {
  return (
    <section className="bg-brand-mist/80 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="section-kicker">Programs</p>
            <h2 className="section-title">A structured path from curiosity to working prototypes.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Students learn by building: circuits, microcontrollers, sensors, logic, automation, and product thinking.
            </p>
            <Link to="/courses" className="mt-8 inline-flex btn-dark">
              View Course Catalog
            </Link>
          </Reveal>
          <motion.div className="grid gap-5 md:grid-cols-2" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerVariants}>
            {courses.slice(0, 4).map((course, index) => (
              <CourseCard key={course.slug} course={course} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <img
            src="https://static.wixstatic.com/media/42289d_f501f8022f354a79b96a329fcf8ea3ae~mv2.png"
            alt="SMAIR robotics bootcamp highlight"
            className="aspect-[5/4] w-full rounded-md object-cover shadow-lift"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-kicker">Vision</p>
          <h2 className="section-title">Technology education that feels useful, guided, and real.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            SMAIR prepares students to solve problems with modern tools while developing teamwork, communication, and
            confidence.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              { icon: Zap, label: "Empower students through technology" },
              { icon: Sparkles, label: "Foster a passion for innovation" },
              { icon: Target, label: "Prepare students for future challenges" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 rounded-md border border-brand-blue/15 bg-white p-4 font-medium text-brand-blue">
                <span className="icon-tile">
                  <Icon className="h-5 w-5" />
                </span>
                {label}
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex btn-dark">
            Learn More
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="bg-white py-20 text-brand-blue sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Events</p>
            <h2 className="mt-4 text-4xl font-medium sm:text-5xl">Workshops, bootcamps, and community programs.</h2>
          </div>
          <Link to="/news" className="btn-secondary shrink-0">
            Explore News
          </Link>
        </Reveal>
        <motion.div className="mt-10 grid gap-5 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerVariants}>
          {events.map((event) => (
            <MotionLink
              key={event.slug}
              to={`/event-details/${event.slug}`}
              className="feature-card"
              variants={cardVariants}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <img src={event.image} alt="" className="mb-5 aspect-video w-full rounded-md object-cover" />
              <p className="section-kicker">{event.date}</p>
              <h3 className="mt-4 text-2xl font-medium">{event.title}</h3>
              <p className="mt-3 text-slate-600">{event.summary}</p>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="section-kicker">Collaborators</p>
            <h2 className="section-title">Working alongside hubs, schools, and mentors.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              SMAIR partners with the AIR Innovation Hub and a growing network of schools to bring hands-on robotics
              and AI learning directly to students and classrooms.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["AIR Innovation Hub", "Partner Schools", "Community Mentors", "Families & Sponsors"].map((partner) => (
                <div key={partner} className="rounded-md border border-brand-blue/15 bg-brand-mist/60 px-5 py-4 text-center font-mono text-sm font-medium text-brand-blue">
                  {partner}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="surface-grid-dark relative overflow-hidden rounded-md border border-white/10 bg-brand-navy p-8 text-white shadow-lift">
              <div className="glow-orb -right-16 -top-16 h-48 w-48 bg-brand-cyan/25" />
              <span className="icon-tile-dark relative">
                <Youtube className="h-5 w-5" />
              </span>
              <h3 className="relative mt-5 text-2xl font-medium">Watch SMAIR in action</h3>
              <p className="relative mt-3 text-brand-sky/75">
                See bootcamps, club projects, and student builds on the SMAIR Foundation YouTube channel.
              </p>
              <a
                href="https://www.youtube.com/@smairfoundation"
                target="_blank"
                rel="noreferrer"
                className="relative mt-6 inline-flex btn-primary"
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

function Impact() {
  return (
    <section className="surface-grid-dark relative overflow-hidden bg-brand-navy py-16">
      <div className="glow-orb left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-brand-violet/20" />
      <div className="relative mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-3">
        {[
          { icon: Users, value: "25+", label: "Students Impacted" },
          { icon: GraduationCap, value: "45+", label: "Recommendations" },
          { icon: School, value: "5+", label: "School Partnerships" },
        ].map(({ icon: Icon, value, label }) => (
          <Reveal key={label} className="rounded-md border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
            <span className="icon-tile-dark mx-auto">
              <Icon className="h-5 w-5" />
            </span>
            <p className="mt-4 gradient-text font-mono text-5xl font-bold">{value}</p>
            <p className="mt-3 font-medium text-white/70">{label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-brand-mist/80 py-20 sm:py-24">
      <Reveal className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="section-kicker">Testimonial</p>
        <blockquote className="mt-5 text-3xl font-medium leading-tight text-brand-blue sm:text-5xl">
          "SMAIR has ignited my passion for robotics and coding. The interactive classes and hands-on projects have
          been truly inspiring."
        </blockquote>
        <p className="mt-6 text-lg font-medium text-brand-blue">Faithful Ajah, Educator</p>
      </Reveal>
    </section>
  );
}
