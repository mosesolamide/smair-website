import { Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { navItems } from "../data/siteData";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/smairfoundation", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@smairfoundation", icon: Youtube },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/smair-foundation", icon: Linkedin },
];

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-navy/85 text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3" aria-label="SMAIR home">
          <span className="grid h-11 w-11 place-items-center rounded-md border border-brand-cyan/30 bg-linear-to-br from-brand-blue to-brand-violet font-mono text-xl font-semibold text-white shadow-[0_0_24px_rgba(47,227,200,0.35)]">
            S
          </span>
          <span>
            <span className="block text-2xl font-semibold leading-none tracking-wide">SMAIR</span>
            <span className="block font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-cyan/80">Foundation</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `transition hover:text-brand-cyan ${isActive ? "text-brand-cyan" : "text-white/80"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/courses" className="hidden btn-primary px-5! py-3! text-sm! lg:inline-flex">
          Explore Courses
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-white/15 font-mono text-xl font-medium text-white lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? "x" : "="}
        </button>
      </div>

      {menuOpen && (
        <nav className="mx-auto grid max-w-7xl gap-2 border-t border-white/10 px-5 py-5 text-sm font-medium sm:px-8 lg:hidden">
          {navItems.map(([label, href]) => (
            <NavLink key={href} to={href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-white/80 hover:bg-white/5 hover:text-brand-cyan">
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="surface-grid-dark relative overflow-hidden border-t border-white/10 bg-brand-navy px-5 py-12 text-white sm:px-8">
      <div className="glow-orb -bottom-32 left-1/3 h-72 w-72 bg-brand-blue/20" />
      <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr_1fr]">
        <div>
          <p className="font-mono text-3xl font-semibold">SMAIR</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-brand-sky/70">
            AI and robotics education for young innovators, schools, families, and future builders.
          </p>
        </div>
        <div className="grid gap-2 text-sm font-medium text-white/75">
          {navItems.slice(0, 6).map(([label, href]) => (
            <Link key={href} to={href} className="transition hover:text-brand-cyan">
              {label}
            </Link>
          ))}
        </div>
        <div className="grid content-start gap-2 font-mono text-sm text-brand-sky/70">
          <p>1B Ibitayo Street, Magodo GRA II, Lagos</p>
          <p>+234 916-177-1271</p>
          <p>info@smairfoundation.com</p>
          <div className="mt-3 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="icon-tile-dark transition hover:border-brand-cyan/60 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">(c) 2025 SMAIR.</p>
        <div className="flex flex-wrap gap-4">
          {["terms-and-conditions", "privacy-policy", "refund-policy"].map((slug) => (
            <Link key={slug} to={`/${slug}`} className="transition hover:text-brand-cyan">
              {slug.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ")}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-white text-brand-blue">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
