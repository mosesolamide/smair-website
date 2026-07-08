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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white shadow-[0_10px_30px_rgba(9,13,31,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center" aria-label="SMAIR home">
          <img src="/smair-logo.png" alt="SMAIR Foundation" className="h-14 w-auto" />
        </Link>

        <nav className="hidden items-center rounded-lg border border-zinc-200/70 bg-zinc-50/80 p-1 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `cursor-pointer rounded-md px-4 py-2.5 text-base font-semibold transition-all duration-200 hover:bg-white hover:text-brand-blue ${isActive ? "bg-white text-brand-blue shadow-sm" : "text-zinc-500"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/sponsorship" className="hidden cursor-pointer rounded-lg bg-brand-blue px-6 py-3 text-base font-bold text-white shadow-[0_12px_28px_rgba(2,37,196,0.2)] transition-all duration-200 hover:bg-brand-blue/85 active:scale-[0.98] lg:inline-flex">
          Sponsor a Child
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.25 rounded-lg border border-zinc-200 bg-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-[2px] w-5 bg-zinc-900 transition-all duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-5 bg-zinc-900 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-5 bg-zinc-900 transition-all duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="border-t border-zinc-100 bg-white/95 px-5 py-3 shadow-lg backdrop-blur sm:px-8 lg:hidden">
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
            <Link to="/sponsorship" onClick={() => setMenuOpen(false)} className="mt-2 rounded-lg bg-brand-blue px-4 py-3 text-center text-sm font-bold text-white">
              Sponsor a Child
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
            <span className="rounded-lg bg-white px-3 py-2">
              <img src="/smair-logo.png" alt="SMAIR Foundation" className="h-10 w-auto" />
            </span>
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
