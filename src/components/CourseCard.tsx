import { motion } from "framer-motion";
import { Link } from "react-router";
import type { Course } from "../types";
import { cardVariants } from "./motion";

const MotionLink = motion.create(Link);

export function CourseCard({ course, index }: { course: Course; index: number }) {
  const Icon = course.icon;

  return (
    <MotionLink
      to={`/our-projects/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200/70 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand-sky/70 hover:shadow-md"
      variants={cardVariants}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {course.image ? (
        <img src={course.image} alt="" className="aspect-video w-full object-cover" loading="lazy" />
      ) : (
        <div className="img-slot aspect-video w-full" />
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="icon-tile h-9 w-9">
            <Icon className="h-4 w-4" />
          </span>
          <span className="badge">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h2 className="mt-4 text-lg font-bold text-zinc-900">{course.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-500">{course.intro}</p>
        <p className="mt-5 text-sm font-semibold text-brand-cyan">Explore course -&gt;</p>
      </div>
    </MotionLink>
  );
}
