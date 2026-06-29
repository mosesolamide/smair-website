import { Link } from "react-router";

export function ContactBand() {
  return (
    <section className="surface-grid-dark bg-brand-navy py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="brand-card flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="section-kicker">Get Involved</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Join the community.
            </h2>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  );
}
