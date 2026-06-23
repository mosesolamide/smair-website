import { motion } from "framer-motion";
import { Award, Compass, Hammer, ListChecks, Users, Wallet } from "lucide-react";
import { Link, useParams } from "react-router";
import { ContactBand } from "../components/ContactBand";
import { CourseCard } from "../components/CourseCard";
import { Hero } from "../components/Hero";
import { Reveal, cardVariants, staggerVariants, viewport } from "../components/motion";
import { courses } from "../data/siteData";
import type { Course } from "../types";

const clubBenefits = [
  {
    icon: Wallet,
    title: "Affordable Access",
    text: "Subsidized membership keeps robotics, AI, and coding education within reach for all students and families.",
  },
  {
    icon: Hammer,
    title: "Project-Based Learning",
    text: "Students build real circuits, robots, and code projects, turning ideas into working prototypes.",
  },
  {
    icon: ListChecks,
    title: "Structured Learning Tracks",
    text: "A clear progression from electronics basics through automation and AI, paced for steady growth.",
  },
  {
    icon: Compass,
    title: "Expert Guidance",
    text: "Mentors and instructors from the AIR Innovation Hub guide every session, build, and presentation.",
  },
  {
    icon: Users,
    title: "Innovative Community",
    text: "Members collaborate, share ideas, and present projects alongside peers from partner schools.",
  },
  {
    icon: Award,
    title: "Recognition & Growth",
    text: "Certificates, showcases, and mentor recommendations celebrate progress and open new opportunities.",
  },
];

export function Courses() {
  return (
    <>
      <Hero
        title="Powered by AI & Robotics Innovation Hub."
        text="SMAIR Foundation sponsors access to practical technology education and helps democratize 21st-century skills."
      />
      <section className="bg-zinc-50 py-20 sm:py-24">
        <motion.div
          className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerVariants}
        >
          {courses.map((course, index) => (
            <CourseCard key={course.slug} course={course} index={index} />
          ))}
        </motion.div>
      </section>
    </>
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
              ← Back to Courses
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
      <section className="bg-zinc-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="section-kicker">About This Course</p>
            <h2 className="section-title">Hands-on, mentor-guided, and built for real progress.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-500">
              {course.intro} Sessions blend demonstrations with extended build time, so every student
              leaves with a working project.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-500">
              Instructors from the AIR Innovation Hub guide small groups through each module, and students
              can carry this course into SMAIR Club for ongoing practice and showcases.
            </p>
            <Link to="/smair-club" className="mt-8 inline-flex btn-primary">
              Join SMAIR Club
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="rounded-xl border border-zinc-100 bg-white p-8 shadow-sm">
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

export function Club() {
  return (
    <>
      <Hero
        title="A school-friendly AI and robotics club experience."
        text="Students aged 8 and above meet consistently, build projects, present their ideas, and develop confidence through collaborative STEM learning."
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="section-kicker">Why Join SMAIR Club</p>
            <h2 className="section-title">Six reasons families and schools choose SMAIR.</h2>
          </Reveal>
          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerVariants}
          >
            {clubBenefits.map(({ icon: Icon, title, text }) => (
              <motion.article
                key={title}
                className="feature-card"
                variants={cardVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="icon-tile">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-zinc-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-500">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-zinc-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="section-kicker">Get Involved</p>
            <h2 className="section-title">Two ways to join SMAIR Club.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-500">
              SMAIR Club welcomes students aged 8 and above, either as individual members or through a
              school partnership delivered with the AIR Innovation Hub.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal className="feature-card">
              <p className="section-kicker">Individual</p>
              <h3 className="mt-3 text-2xl font-bold text-zinc-900">Register a Student</h3>
              <p className="mt-3 text-zinc-500">
                Families can enroll a student (age 8+) directly into SMAIR Club sessions, with flexible
                scheduling and subsidized membership fees.
              </p>
              <Link to="/contact" className="mt-6 inline-flex btn-dark">
                Enroll a Student
              </Link>
            </Reveal>
            <Reveal delay={0.08} className="feature-card">
              <p className="section-kicker">Institutional</p>
              <h3 className="mt-3 text-2xl font-bold text-zinc-900">Partner Your School</h3>
              <p className="mt-3 text-zinc-500">
                Schools can bring SMAIR Club to their students through a structured partnership, with
                curriculum, mentors, and equipment support from the AIR Innovation Hub.
              </p>
              <Link to="/contact" className="mt-6 inline-flex btn-dark">
                Start a Partnership
              </Link>
            </Reveal>
          </div>
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
