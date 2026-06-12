import { Link } from "react-router";

export function ContactBand() {
  return (
    <section className="surface-grid-dark relative overflow-hidden bg-brand-navy py-16 text-white">
      <div className="glow-orb -right-20 -top-20 h-72 w-72 bg-brand-cyan/20" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 border-y border-white/10 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="section-kicker-dark">Get Involved</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Join our community of learners, educators, and innovators.
          </h2>
        </div>
        <Link to="/contact" className="btn-primary shrink-0">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
