import { Link } from "@tanstack/react-router";
import { MapPin, Mail } from "lucide-react";
import bvcLogo from "@/assets/bvc-logo.png";


const YoutubeIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...p}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/>
  </svg>
);
const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src={bvcLogo}
              alt="BVC IIT Kanpur"
              className="h-11 w-11 rounded-full bg-white object-contain ring-1 ring-saffron/30"
            />

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
              <YoutubeIcon />
            </a>
            <a
              href="https://www.instagram.com/bvciitkanpur/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-saffron hover:border-saffron transition"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-saffron">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" hash="events" className="hover:text-saffron">Gallery</Link></li>
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
