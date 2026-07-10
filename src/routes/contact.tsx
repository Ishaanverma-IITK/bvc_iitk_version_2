import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Clock } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Join — BVC IIT Kanpur" },
      { name: "description", content: "Get in touch with Bhaktivedanta Club, IIT Kanpur — visit us, message us, or join the club." },
      { property: "og:title", content: "Join BVC IIT Kanpur" },
      { property: "og:description", content: "Contact and join the Bhaktivedanta Club at IIT Kanpur." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
            Contact & Join
          </span>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">
            Come say <span className="text-gradient-saffron">Haribol.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Whether you're a first-year exploring or a senior finding stillness before
            placements — we'd love to have you.
          </p>
        </Reveal>

        <div className="mt-16">
          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-card border border-border p-6 flex gap-4 h-full">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron/15 text-saffron">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Visit us</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Students' Activity Centre (SAC), IIT Kanpur, Kalyanpur, Uttar Pradesh 208016
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-card border border-border p-6 flex gap-4 h-full">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron/15 text-saffron">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Weekly session</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Every Sunday · 6:30 PM · Japa · Gita class · Kirtan · Prasadam
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-card border border-border p-6 flex gap-4 h-full">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron/15 text-saffron">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:bvc@iitk.ac.in" className="mt-2 text-sm text-saffron hover:underline block font-medium">
                    bvc@iitk.ac.in
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
