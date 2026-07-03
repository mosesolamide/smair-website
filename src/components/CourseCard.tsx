import { motion } from "framer-motion";
import { Link } from "react-router";
import type { Course } from "../types";
import { cardVariants } from "./motion";

const MotionLink = motion.create(Link);

export function CourseCard({ course }: { course: Course }) {
  return (
    <MotionLink
      to={`/our-projects/${course.slug}`}
      className="group block"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={cardVariants}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="overflow-hidden">
        {course.image ? (
          <img
            src={course.image}
            alt={course.title}
            className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="img-slot aspect-4/3 w-full" />
        )}
      </div>

      {/* Title strip — white bg, blue top border */}
      <div className="border-t-[3px] border-brand-blue bg-white px-4 py-4 text-center">
        <h2 className="text-lg font-black text-brand-blue">{course.title}</h2>
      </div>

      {/* Description below card */}
      <div className="px-4 pt-4 pb-6 text-center">
        <p className="text-sm leading-6 text-brand-blue/80 italic">{course.intro}</p>
      </div>
    </MotionLink>
  );
}
