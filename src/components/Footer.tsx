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

const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...p}>
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.885v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
            <a
              href="https://www.facebook.com/bvciitkanpur"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-saffron hover:border-saffron transition"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://chat.whatsapp.com/bvciitkanpur"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Community"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-saffron hover:border-saffron transition"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-saffron">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" hash="events" className="hover:text-saffron transition-colors">Gallery</Link></li>
            <li><Link to="/gitanushilanam" className="hover:text-saffron transition-colors">Gitanushilanam</Link></li>
            <li><Link to="/team" className="hover:text-saffron transition-colors">Team</Link></li>
            <li><Link to="/alumni" className="hover:text-saffron transition-colors">Alumni</Link></li>
            <li><Link to="/contact" className="hover:text-saffron transition-colors">Contact</Link></li>
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
              <a href="mailto:bvc@iitk.ac.in" className="hover:text-saffron transition-colors">bvc@iitk.ac.in</a>
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
