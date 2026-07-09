import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Clock, Send } from "lucide-react";
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

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — we'll get back to you soon!");
              }}
              className="rounded-3xl bg-card border border-border p-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Name</label>
                  <input required className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron" placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Roll no. / Batch</label>
                  <input className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron" placeholder="e.g. 240xxx / Y1" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</label>
                <input type="email" required className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron" placeholder="you@iitk.ac.in" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Message</label>
                <textarea rows={5} required className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron resize-none" placeholder="How can we help? Are you interested in Japa, Gita class, or events?" />
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-saffron-deep px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition">
                Send Message
                <Send size={14} />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4">
              <div className="rounded-2xl bg-card border border-border p-6 flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron/15 text-saffron">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Visit us</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Students' Activity Centre (SAC), IIT Kanpur, Kalyanpur, Uttar Pradesh 208016
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-card border border-border p-6 flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron/15 text-saffron">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Weekly session</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Every Sunday · 6:30 PM · Japa · Gita class · Kirtan · Prasadam
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-card border border-border p-6 flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron/15 text-saffron">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:bvc@iitk.ac.in" className="mt-1 text-sm text-saffron hover:underline block">
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
