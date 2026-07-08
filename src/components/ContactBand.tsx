import { Link } from "react-router";

export function ContactBand() {
  return (
    <section className="surface-grid-dark  py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="bg-brand-navy brand-card flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="section-kicker">Get Involved</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Learners, educators, innovators, schools, and partners all belong here.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/60">
              Join a community making AI, robotics, and creative technology education
              accessible to every young mind.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  );
}
