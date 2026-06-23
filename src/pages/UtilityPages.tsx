import { Hero } from "../components/Hero";
import { Link } from "react-router";

export function Policy({ title }: { title: string }) {
  return (
    <>
      <Hero
        title={title}
        text="This page keeps the original site's policy area available in the redesigned experience."
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-lg leading-8 text-zinc-500 sm:px-8">
          <p>
            SMAIR is committed to clear communication, respectful learning experiences, and responsible
            handling of information shared through the website.
          </p>
          <p className="mt-6">
            Replace this placeholder with the organization's final legal copy when ready. The route, page
            structure, and footer links are already in place.
          </p>
        </div>
      </section>
    </>
  );
}

export function Thanks() {
  return (
    <section className="grid min-h-screen place-items-center bg-zinc-50 px-5 pt-20">
      <div className="max-w-xl rounded-2xl border border-zinc-100 bg-white p-10 text-center shadow-sm">
        <p className="section-kicker">Thank You</p>
        <h1 className="mt-4 text-4xl font-bold text-zinc-900">Your support helps students build the future.</h1>
        <p className="mt-5 text-lg leading-8 text-zinc-500">
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
    <section className="grid min-h-screen place-items-center bg-zinc-50 px-5 pt-20">
      <div className="max-w-md text-center">
        <p className="font-mono text-sm font-bold uppercase tracking-widest text-brand-cyan">404</p>
        <h1 className="mt-4 text-5xl font-bold text-zinc-900">Page not found</h1>
        <p className="mt-4 text-zinc-500">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-8 inline-flex btn-dark">
          Back Home
        </Link>
      </div>
    </section>
  );
}
