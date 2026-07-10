import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bvcLogo from "@/assets/bvc-logo.png";



const links = [
  { label: "About", to: "/", hash: "about" },
  { label: "Events", to: "/events" },
  { label: "Gitanushilanam", to: "/gitanushilanam" },
  { label: "Team", to: "/team" },
  { label: "Alumni", to: "/alumni" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isDarkNavbar = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={bvcLogo}
            alt="BVC IIT Kanpur"
            className="h-11 w-11 shrink-0 rounded-full bg-white object-contain shadow-glow ring-1 ring-saffron/30"
          />

          <span className={`font-display text-lg font-bold tracking-tight transition-colors ${
            isDarkNavbar ? "text-cream" : "text-foreground"
          }`}>
            BVC <span className="text-saffron">IITK</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={"hash" in l ? l.hash : undefined}
                className={`px-3 py-2 text-sm font-medium transition-colors relative after:absolute after:left-3 after:right-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-saffron after:transition-transform hover:after:scale-x-100 ${
                  isDarkNavbar
                    ? "text-cream/90 hover:text-saffron"
                    : "text-foreground/80 hover:text-saffron"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-saffron to-saffron-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition"
          >
            Join the Club
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
            isDarkNavbar
              ? "bg-transparent border-cream/20 text-cream hover:bg-cream/10"
              : "bg-background/80 backdrop-blur border-border text-foreground hover:bg-accent"
          }`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden px-4 pb-4"
          >
            <ul className="glass-card rounded-2xl p-2 flex flex-col">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    hash={"hash" in l ? l.hash : undefined}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-saffron/10 hover:text-saffron transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="p-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-xl bg-gradient-to-r from-saffron to-saffron-deep px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
                >
                  Join the Club
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
