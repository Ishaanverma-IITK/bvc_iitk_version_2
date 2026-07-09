import { Link } from "@tanstack/react-router";
import { Youtube, Instagram, Github, MapPin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-saffron to-saffron-deep font-display text-lg font-bold text-primary-foreground">
              ॐ
            </span>
            <span className="font-display text-xl font-bold">
              Bhaktivedanta Club <span className="text-saffron">IITK</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-cream/70 leading-relaxed">
            Where Science Meets Spirituality. Bridging the timeless wisdom of the Bhagavad Gita
            with the scientific temper of IIT Kanpur.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.youtube.com/channel/UCq8UYtAGntL6YkFXa-vjbhw"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-saffron hover:border-saffron transition"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://www.instagram.com/bvc_iitk/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-saffron hover:border-saffron transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://github.com/bvciitk"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-saffron hover:border-saffron transition"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-saffron">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/events" className="hover:text-saffron">Events</Link></li>
            <li><Link to="/gitanushilanam" className="hover:text-saffron">Gitanushilanam</Link></li>
            <li><Link to="/team" className="hover:text-saffron">Team</Link></li>
            <li><Link to="/alumni" className="hover:text-saffron">Alumni</Link></li>
            <li><Link to="/contact" className="hover:text-saffron">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-saffron">Reach Us</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-saffron" />
              <span>Students' Activity Centre, IIT Kanpur, Kalyanpur, UP 208016</span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-saffron" />
              <a href="mailto:bvc@iitk.ac.in" className="hover:text-saffron">bvc@iitk.ac.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-center text-xs text-cream/60">
          © {year} Bhaktivedanta Club IIT Kanpur. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
