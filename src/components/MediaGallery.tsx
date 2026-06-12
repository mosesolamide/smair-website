import { motion } from "framer-motion";
import { sampleImages } from "../data/siteData";
import { cardVariants, Reveal, staggerVariants, viewport } from "./motion";

export function MediaGallery() {
  return (
    <section className="surface-grid bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="section-kicker">SMAIR in Pictures</p>
          <h2 className="section-title">Real program moments, organized with a cleaner technology feel.</h2>
        </Reveal>
        <motion.div
          className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerVariants}
        >
          {sampleImages.map((image, index) => (
            <motion.figure
              key={image.src}
              className={`group relative overflow-hidden rounded-md border border-brand-blue/10 bg-brand-mist shadow-lift ${
                index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              variants={cardVariants}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <img
                src={image.src}
                alt={image.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-white/90 px-4 py-3 text-sm font-medium text-brand-blue backdrop-blur">
                {image.label}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
