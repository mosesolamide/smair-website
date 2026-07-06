import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { Link, useParams } from "react-router";
import { ContactBand } from "../components/ContactBand";
import { CourseCard } from "../components/CourseCard";
import { Hero } from "../components/Hero";
import { Reveal, cardVariants, staggerVariants, viewport } from "../components/motion";
import { courses } from "../data/siteData";
import type { Course } from "../types";

const coursesHeroBanner =
  "https://static.wixstatic.com/media/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg/v1/fill/w_1920,h_600,al_c,q_85,enc_avif,quality_auto/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg";

export function Courses() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Banner image (no text) ───────────────── */}
      <div className="pt-15">
        <img
          src={coursesHeroBanner}
          alt=""
          className="h-[40vh] w-full object-cover sm:h-[50vh]"
          loading="eager"
        />
      </div>

      {/* ── "Our Courses" heading ────────────────── */}
      <div className="bg-white py-10 text-center">
        <h1 className="text-4xl font-black text-brand-blue sm:text-5xl">Our Courses</h1>
      </div>

      {/* ── Intro paragraph ─────────────────────── */}
      <div className="mx-auto max-w-3xl px-5 pb-12 text-center sm:px-8">
        <p className="text-base leading-8 text-zinc-600">
          Through a strategic partnership with EdTech company{" "}
          <span className="font-semibold text-brand-blue underline">AIRobotics</span>, SMAIR
          Foundation sponsors and provides access to cutting-edge technology courses for people
          in underserved locations. This initiative supports our mission to democratize access
          to 21st-century skills.
        </p>
      </div>

      {/* ── Course grid (2 columns) ──────────────── */}
      <div className="mx-auto grid max-w-5xl gap-x-8 gap-y-2 px-5 pb-20 sm:grid-cols-2 sm:px-8">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>

      <SponsorshipBand />
    </div>
  );
}

/* ─── Sponsor a Child: CTA band ──────────────────────────────────── */
function SponsorshipBand() {
  return (
    <section className="surface-grid-dark bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="brand-card flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-5">
            <span className="hidden shrink-0 h-14 w-14 place-items-center rounded-xl bg-white/10 text-brand-cyan sm:grid">
              <HeartHandshake className="h-7 w-7" />
            </span>
            <div>
              <p className="section-kicker">Sponsorship</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Sponsor a child's AI and robotics education.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/60">
                Your sponsorship covers course fees, robotics kits, and mentorship for a student
                who couldn't otherwise afford it, turning curiosity into real, hands-on skill.
              </p>
            </div>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Sponsor a Child
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Project({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <>
      <Hero title={course.title} text={course.intro} image={course.image} />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <span className="icon-tile">
              <Icon className="h-5 w-5" />
            </span>
            <p className="section-kicker mt-5">Outcomes</p>
            <h2 className="section-title">What students learn in {course.title}.</h2>
            <Link to="/courses" className="mt-8 inline-flex btn-outline">
              &lt;- Back to Courses
            </Link>
          </Reveal>
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerVariants}
          >
            {course.outcomes.map((outcome, index) => (
              <motion.article
                key={outcome}
                className="feature-card"
                variants={cardVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="badge">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-4 font-semibold leading-7 text-zinc-900">{outcome}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="surface-grid bg-brand-surface py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="section-kicker">About This Course</p>
            <h2 className="section-title">Hands-on, mentor-guided, and built for real progress.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-500">
              {course.intro} Sessions blend demonstrations with extended build time, so every student
              leaves with a working project.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-500">
              Instructors from the AIR Innovation Tech guide small groups through each module, and students
              can carry this course into ongoing practice and showcases.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-primary">
              Get in Touch
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="soft-card p-8">
            <p className="section-kicker">Reach SMAIR</p>
            <h3 className="mt-3 text-2xl font-bold text-zinc-900">Questions about this course?</h3>
            <div className="mt-5 grid gap-2.5 text-sm text-zinc-500">
              <p>Email: info@smairfoundation.com</p>
              <p>Phone: +234 916-177-1271</p>
              <p>1B Ibitayo Street, Magodo GRA II, Lagos</p>
            </div>
            <Link to="/contact" className="mt-6 inline-flex btn-dark">
              Contact SMAIR
            </Link>
          </Reveal>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function ProjectRoute() {
  const { slug } = useParams();
  const course = courses.find((item) => item.slug === slug);
  if (!course) return null;
  return <Project course={course} />;
}
