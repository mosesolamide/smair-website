import type React from "react";
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { revealVariants } from "./motion";

/* Three.js background canvas — lazy so it doesn't block paint */
const HeroCanvas = lazy(() => import("./HeroCanvas").then((m) => ({ default: m.HeroCanvas })));

type HeroProps = {
  title: string;
  text: string;
  kicker?: string;
  image?: string;
  leftImage?: string;
  rightImage?: string;
  children?: React.ReactNode;
};

export function Hero({ title, text, kicker, image, leftImage, rightImage, children }: HeroProps) {
  const isHome = !!children;

  return (
    <section className={`relative overflow-hidden pt-[70px] ${isHome ? "surface-grid-dark bg-brand-navy text-white" : "surface-grid bg-white"}`}>
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {isHome ? (
          <div className="grid min-h-[calc(100vh-70px)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {kicker && (
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-cyan">
                  {kicker}
                </span>
              )}
              <h1 className="mt-6 text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-[5.35rem]">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                {text}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {children}
              </div> 
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr] lg:min-h-[560px] lg:items-end">
              <motion.div
                className="hidden sm:block"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              >
                <div className="hero-float image-frame" style={{ animationDelay: "0s" }}>
                  {leftImage ? (
                    <img
                      src={leftImage}
                      alt="SMAIR students in action"
                      className="h-full w-full object-cover"
                      style={{ aspectRatio: "4/5" }}
                    />
                  ) : (
                    <div className="img-slot w-full" style={{ aspectRatio: "4/5" }} />
                  )}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              >
                <div className="hero-float image-frame w-full" style={{ animationDelay: "1.2s" }}>
                  {rightImage ? (
                    <img
                      src={rightImage}
                      alt="SMAIR robotics programme"
                      className="h-full w-full object-cover"
                      style={{ aspectRatio: "4/5" }}
                    />
                  ) : (
                    <div className="img-slot w-full" style={{ aspectRatio: "4/5" }} />
                  )}
                </div>
                <div className="brand-card absolute -bottom-5 left-5 right-5 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">Learning by building</p>
                  <p className="mt-1 text-sm leading-6 text-white/75">Robotics kits, AI projects, clubs, and mentor-led workshops.</p>
                </div>
              </motion.div>
            </div>

          </div>
        ) : (
          /* Inner page hero */
          <div className="py-16 text-center sm:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              {image && (
                <img
                  src={image}
                  alt=""
                  className="mx-auto mt-8 w-full max-w-2xl rounded-lg border border-zinc-200 object-cover shadow-md"
                  style={{ aspectRatio: "16/7" }}
                />
              )}
              <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-zinc-500">
                {text}
              </p>
            </motion.div>
          </div>
        )}
      </div>

    </section>
  );
}
