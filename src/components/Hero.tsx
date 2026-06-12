import type React from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, SquareCode, Workflow } from "lucide-react";
import { revealVariants } from "./motion";

type HeroProps = {
  title: string;
  text: string;
  image: string;
  children?: React.ReactNode;
};

const chips = [
  { label: "AI", icon: Cpu },
  { label: "Robotics", icon: Bot },
  { label: "Coding", icon: SquareCode },
  { label: "Automation", icon: Workflow },
];

const buildLog = [
  { prompt: "$", text: "smair --load-track robotics-ai", color: "text-white" },
  { prompt: ">", text: "Initializing learning modules...", color: "text-brand-sky/70" },
  { prompt: "✓", text: "Electronics & Circuits", color: "text-brand-cyan" },
  { prompt: "✓", text: "Microcontrollers & Coding", color: "text-brand-cyan" },
  { prompt: "✓", text: "Sensors & Automation", color: "text-brand-cyan" },
  { prompt: "✓", text: "AI & Robotics Applications", color: "text-brand-cyan" },
  { prompt: ">", text: "status: ready_for_lab", color: "text-brand-violet" },
];

export function Hero({ title, text, image, children }: HeroProps) {
  return (
    <section className="hero-shell relative overflow-hidden pt-20 text-white">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.16] mix-blend-luminosity" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,13,31,0.55),rgba(9,13,31,0.88)_55%,rgba(9,13,31,0.98))]" />
      <div className="glow-orb -right-24 -top-24 h-80 w-80 bg-brand-cyan/25" />
      <div className="glow-orb -left-24 bottom-0 h-72 w-72 bg-brand-violet/25" />
      <div className="absolute right-10 top-28 hidden h-44 w-44 rounded-full border border-brand-cyan/15 lg:block" />
      <div className="absolute bottom-16 right-24 hidden h-20 w-20 rounded-md border border-brand-cyan/30 lg:block" />
      <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="max-w-4xl bg-linear-to-r from-white via-white to-brand-cyan bg-clip-text text-5xl font-semibold leading-[1.03] tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-sky/85 sm:text-xl">{text}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {chips.map(({ label, icon: Icon }) => (
              <span key={label} className="pill-dark inline-flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            ))}
          </div>
          {children}
        </motion.div>
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: 28, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot bg-red-400/70" />
              <span className="terminal-dot bg-amber-400/70" />
              <span className="terminal-dot bg-emerald-400/70" />
              <span className="ml-2 font-mono text-xs text-white/40">smair-lab.sh</span>
            </div>
            <div className="space-y-2.5 px-5 py-6 font-mono text-sm leading-6">
              {buildLog.map((line) => (
                <p key={line.text} className={line.color}>
                  <span className="mr-2 text-white/35">{line.prompt}</span>
                  {line.text}
                </p>
              ))}
              <p className="text-white/35">
                <span className="mr-2">$</span>
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
