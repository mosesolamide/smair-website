import { motion } from "framer-motion";
import { Link } from "react-router";
import { cardVariants } from "./motion";
import type { Course } from "../types";

const MotionLink = motion.create(Link);

export function CourseCard({ course, index }: { course: Course; index: number }) {
  const Icon = course.icon;
  return (
    <MotionLink
      to={`/our-projects/${course.slug}`}
      className="feature-card"
      variants={cardVariants}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <img src={course.image} alt="" className="mb-5 aspect-4/3 w-full rounded-md object-cover" loading="lazy" />
      <div className="flex items-center justify-between">
        <span className="icon-tile">
          <Icon className="h-5 w-5" />
        </span>
        <span className="badge">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h2 className="mt-5 text-2xl font-medium text-brand-blue">{course.title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{course.intro}</p>
      <p className="mt-6 font-medium text-brand-blue">Read More</p>
    </MotionLink>
  );
}
