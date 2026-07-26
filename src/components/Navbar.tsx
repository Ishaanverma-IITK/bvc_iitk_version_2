import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bvcLogo from "@/assets/bvc-logo.png";
import { useTheme } from "../hooks/useTheme";

const links = [
  { label: "About", to: "/", hash: "hero" },
  { label: "Gallery", to: "/", hash: "events" },
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
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const threshold = isHome ? window.innerHeight * 4.0 : 24;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, l: typeof links[number]) => {
    if (l.to === "/" && "hash" in l) {
      if (location.pathname === "/") {
        e.preventDefault();
        const hash = l.hash;
        if (hash === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
    setOpen(false);
  };

  const themeButtonClass = isDarkNavbar
    ? "border-cream/20 text-cream hover:bg-cream/10"
    : "border-border text-foreground hover:bg-accent";

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
                onClick={(e) => handleLinkClick(e, l)}
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

        <div className="hidden lg:flex items-center gap-2">
          {/* Dark / Light mode toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`h-9 w-9 flex items-center justify-center rounded-full border transition-all duration-300 ${themeButtonClass}`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

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
                    onClick={(e) => handleLinkClick(e, l)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-saffron/10 hover:text-saffron transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {/* Theme toggle row in mobile menu */}
              <li>
                <button
                  onClick={() => { toggleTheme(); setOpen(false); }}
                  className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-saffron/10 hover:text-saffron transition"
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                  {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
              </li>
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
