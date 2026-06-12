import { Hero } from "../components/Hero";
import { Link } from "react-router";

export function Policy({ title }: { title: string }) {
  return (
    <>
      <Hero
        title={title}
        text="This page keeps the original site's policy area available in the redesigned experience."
        image="https://static.wixstatic.com/media/42289d_1ae131c8d7b14223a601e0b08817b02b~mv2.png"
      />
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-lg leading-8 text-slate-700 sm:px-8">
          <p>
            SMAIR is committed to clear communication, respectful learning experiences, and responsible handling of
            information shared through the website.
          </p>
          <p className="mt-6">
            Replace this placeholder with the organization's final legal copy when ready. The route, page structure,
            and footer links are already in place.
          </p>
        </div>
      </section>
    </>
  );
}

export function Thanks() {
  return (
    <section className="grid min-h-screen place-items-center bg-brand-mist px-5 pt-20">
      <div className="max-w-2xl rounded-md bg-white p-8 text-center shadow-lift">
        <p className="section-kicker">Thank You</p>
        <h1 className="mt-4 text-4xl font-medium text-brand-blue">Your support helps students build the future.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          SMAIR appreciates every contribution toward accessible AI, robotics, and programming education.
        </p>
        <Link to="/" className="mt-8 inline-flex btn-dark">
          Back Home
        </Link>
      </div>
    </section>
  );
}

export function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-brand-mist px-5 pt-20">
      <div className="max-w-xl text-center">
        <p className="section-kicker">404</p>
        <h1 className="mt-4 text-5xl font-medium text-brand-blue">Page not found</h1>
        <Link to="/" className="mt-8 inline-flex btn-dark">
          Back Home
        </Link>
      </div>
    </section>
  );
}
