import type React from "react";
import { motion } from "framer-motion";
import { revealVariants } from "./motion";

type HeroProps = {
  title: string;
  text: string;
  image?: string;
  children?: React.ReactNode;
};

export function Hero({ title, text, image, children }: HeroProps) {
  const isHome = !!children;

  return (
    <section className="relative overflow-hidden bg-white pt-[70px]">
      {/* Geometric decorative shapes — resolute.education style */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute -left-16 top-16 h-72 w-72 rounded-full border-[3px] border-brand-cyan/20" />
        <div className="absolute -right-10 top-8 h-56 w-56 rotate-12 rounded-3xl border-[3px] border-brand-violet/15" />
        <div className="absolute bottom-16 left-1/4 h-24 w-24 rotate-45 border-[3px] border-brand-blue/15" />
        <div className="absolute right-1/4 top-1/2 h-36 w-36 rounded-full border-[2px] border-brand-cyan/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {isHome ? (
          <div className="grid min-h-[90vh] items-center py-12">
            <div className="grid items-end gap-8 lg:grid-cols-[200px_1fr_200px]">
              {/* Left image slot */}
              <motion.div
                className="hidden lg:flex lg:items-end"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              >
                <div className="img-slot w-full rounded-2xl" style={{ aspectRatio: "3/4" }} />
              </motion.div>

              {/* Center — massive headline */}
              <motion.div
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={revealVariants}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-brand-blue">
                  SMAIR Foundation
                </span>
                <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-tight text-zinc-900 sm:text-6xl lg:text-[5.5rem]">
                  {title}
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-500">
                  {text}
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  {children}
                </div>
              </motion.div>

              {/* Right image slot */}
              <motion.div
                className="hidden lg:flex lg:items-end lg:justify-end"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              >
                <div className="img-slot w-full rounded-2xl" style={{ aspectRatio: "3/4" }} />
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="mt-10 flex justify-center">
              <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-zinc-200 pt-1.5">
                <motion.div
                  className="h-1.5 w-1 rounded-full bg-zinc-400"
                  animate={{ y: [0, 7, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Inner page hero — compact, centered */
          <div className="py-16 text-center sm:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-brand-blue">
                SMAIR Foundation
              </span>
              <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-zinc-500">
                {text}
              </p>
            </motion.div>
          </div>
        )}
      </div>

      {/* Thin gradient accent bar at bottom */}
      <div className="h-[3px] w-full bg-linear-to-r from-brand-blue via-brand-cyan to-brand-violet" />
    </section>
  );
}
