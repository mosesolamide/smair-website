import { motion } from "framer-motion";
import { Award, CircuitBoard, GraduationCap, Wallet } from "lucide-react";
import { Link } from "react-router";
import { ContactBand } from "../components/ContactBand";
import { Hero } from "../components/Hero";
import { Reveal, cardVariants, staggerVariants, viewport } from "../components/motion";
import { sampleImages } from "../data/siteData";

const coverage = [
  {
    icon: Wallet,
    title: "Course Fees Covered",
    text: "Your sponsorship pays for a student's full course fees, from electronics basics through advanced robotics and AI.",
  },
  {
    icon: CircuitBoard,
    title: "Robotics Kits Provided",
    text: "Every sponsored student receives the hardware they need: breadboards, sensors, motors, and microcontrollers.",
  },
  {
    icon: GraduationCap,
    title: "Mentor-Led Support",
    text: "Instructors and engineers from the AIR Innovation Tech guide each student through every module and build.",
  },
  {
    icon: Award,
    title: "Certificates & Showcases",
    text: "Sponsored students graduate with real projects, certificates, and the confidence to keep building.",
  },
];

export function Sponsorship() {
  return (
    <>
      <Hero
        title="Sponsor a child's AI and robotics education."
        text="Your support gives a student access to robotics kits, expert mentorship, and hands-on courses they couldn't otherwise afford."
        image={sampleImages[0].src}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="section-kicker justify-center">Sponsorship</p>
          <h2 className="section-title">Every sponsorship builds a future innovator.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-500">
            SMAIR Foundation sponsors underserved students aged 8 and above through the AIR
            Innovation Tech partnership. Your sponsorship turns a student's curiosity into real,
            hands-on skill in robotics, coding, and AI.
          </p>
        </div>
      </section>

      <section className="surface-grid bg-brand-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="section-kicker justify-center">What Your Sponsorship Covers</p>
            <h2 className="section-title mx-auto max-w-2xl">Where the support goes.</h2>
          </Reveal>
          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerVariants}
          >
            {coverage.map(({ icon: Icon, title, text }) => (
              <motion.article
                key={title}
                className="feature-card"
                variants={cardVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="icon-tile">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-zinc-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-500">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="surface-grid-dark bg-brand-navy py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="brand-card mx-auto flex max-w-4xl flex-col items-center gap-6 p-8 text-center sm:p-10">
            <p className="section-kicker justify-center">Ready to Sponsor?</p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Give a student their first robot, their first line of code, their future.
            </h2>
            <p className="max-w-xl leading-7 text-white/60">
              Reach out and our team will walk you through the sponsorship options, from a
              single course to a full year of mentorship.
            </p>
            <Link to="/contact" className="btn-primary shrink-0">
              Sponsor a Child
            </Link>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
