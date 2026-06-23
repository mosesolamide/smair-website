import { Link } from "react-router";

export function ContactBand() {
  return (
    <section className="bg-brand-navy py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 rounded-2xl border border-white/8 bg-white/5 p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="section-kicker">Get Involved</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Join our community of learners, educators, and innovators.
            </h2>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
