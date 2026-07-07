import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Testimonial } from "../data/testimonials";

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 24 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -24 }),
};

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  function go(next: number) {
    setDirection(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-brand-blue px-6 py-16 text-center sm:px-16 sm:py-20">
      {testimonials.length > 1 && (
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(index - 1)}
          className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      <div className="relative mx-auto min-h-56 max-w-2xl sm:min-h-48">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.slug}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Testimonials</p>
            <blockquote className="mt-6 text-2xl font-black leading-snug text-white sm:text-3xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-semibold text-white/80">
              {current.name}, {current.role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {testimonials.length > 1 && (
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(index + 1)}
          className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white sm:right-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      {testimonials.length > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.slug}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2 cursor-pointer rounded-full transition-all duration-200 ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
