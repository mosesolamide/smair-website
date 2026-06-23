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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-100 bg-white">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5" aria-label="SMAIR home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-blue font-mono text-base font-black text-white">
            S
          </span>
          <span>
            <span className="block text-lg font-black leading-none tracking-tight text-zinc-900">SMAIR</span>
            <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-brand-cyan">Foundation</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `cursor-pointer text-sm font-semibold transition-colors duration-200 hover:text-brand-blue ${isActive ? "text-brand-blue" : "text-zinc-500"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/courses" className="hidden cursor-pointer rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-brand-blue/85 active:scale-[0.98] lg:inline-flex">
          Explore Courses
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-lg border border-zinc-100 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-[2px] w-5 bg-zinc-900 transition-all duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-5 bg-zinc-900 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-5 bg-zinc-900 transition-all duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-zinc-100 bg-white px-5 py-3 sm:px-8 lg:hidden">
          <div className="mx-auto max-w-7xl grid gap-0.5">
            {navItems.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-brand-blue"
              >
                {label}
              </NavLink>
            ))}
            <Link to="/courses" onClick={() => setMenuOpen(false)} className="mt-2 rounded-lg bg-brand-blue px-4 py-3 text-center text-sm font-bold text-white">
              Explore Courses
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="surface-grid-dark border-t border-white/8 bg-brand-navy px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-blue font-mono text-base font-black text-white">S</span>
            <span className="text-lg font-black text-white">SMAIR Foundation</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
            AI and robotics education for young innovators, schools, families, and future builders.
          </p>
          <div className="mt-5 flex gap-2.5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors duration-200 hover:text-brand-cyan">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/30">Navigation</p>
          <div className="grid gap-2.5 text-sm font-medium">
            {navItems.map(([label, href]) => (
              <Link key={href} to={href} className="cursor-pointer text-white/60 transition-colors duration-200 hover:text-white">{label}</Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/30">Contact</p>
          <div className="grid gap-2.5 text-sm text-white/60">
            <p>1B Ibitayo Street, Magodo GRA II, Lagos</p>
            <p>+234 916-177-1271</p>
            <p>info@smairfoundation.com</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/8 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 SMAIR Foundation. All rights reserved.</p>
        <div className="flex gap-5">
          {["terms-and-conditions", "privacy-policy", "refund-policy"].map((slug) => (
            <Link key={slug} to={`/${slug}`} className="cursor-pointer transition-colors duration-200 hover:text-white">
              {slug.split("-").map((p) => p[0].toUpperCase() + p.slice(1)).join(" ")}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
}
