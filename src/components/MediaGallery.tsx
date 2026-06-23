import { motion } from "framer-motion";
import { sampleImages } from "../data/siteData";
import { cardVariants, Reveal, staggerVariants, viewport } from "./motion";

export function MediaGallery() {
  return (
    <section className="surface-grid bg-zinc-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-kicker">Gallery</p>
          <h2 className="section-title">SMAIR in pictures.</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-500">
            Real moments from bootcamps, club sessions, and student showcases.
          </p>
        </Reveal>
        <motion.div
          className="mt-10 grid auto-rows-[200px] gap-3 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerVariants}
        >
          {sampleImages.map((image, index) => (
            <motion.figure
              key={image.label}
              className={`group relative overflow-hidden rounded-xl bg-zinc-200 ${
                index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              variants={cardVariants}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {image.src ? (
                <img
                  src={image.src}
                  alt={image.label}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <p className="font-mono text-xs text-zinc-400">Photo coming soon</p>
                </div>
              )}
              <figcaption className="absolute inset-x-0 bottom-0 bg-zinc-900/70 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-sm">
                {image.label}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
