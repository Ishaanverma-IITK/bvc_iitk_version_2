import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  BookOpen,
  Heart,
  Sprout,
  Music,
  Award,
  ArrowRight,
  ChevronRight,
  Users,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BVC IIT Kanpur — Bridging Science and Spirituality" },
      {
        name: "description",
        content:
          "The Bhaktivedanta Club at IIT Kanpur unites scientific inquiry with the timeless wisdom of the Bhagavad Gita. Join mantra meditation, Gita study, and Janmashtami.",
      },
      { property: "og:title", content: "BVC IIT Kanpur — Where Science Meets Spirituality" },
      {
        property: "og:description",
        content: "Discover inner peace, holistic living, and Vedic wisdom at IIT Kanpur.",
      },
      { property: "og:image", content: "https://bvciitk.com/images/cover.jpg" },
    ],
  }),
  component: Home,
});

const HERO_BG = "https://bvciitk.com/images/hero-bg.jpg";
const HERO_FALLBACK =
  "https://bvciitk.com/images/gallery/janmashtami/1.jpg";

const philosophyItems = [
  {
    icon: Brain,
    title: "Stress Management",
    body: "Evidence-based techniques rooted in ancient practice for a resilient student mind.",
  },
  {
    icon: Sparkles,
    title: "Mantra Meditation",
    body: "Daily Japa sessions to cultivate focus, clarity, and inner stillness.",
  },
  {
    icon: Heart,
    title: "Character Building",
    body: "Selfless service, ethics, and leadership grounded in Vedic values.",
  },
  {
    icon: BookOpen,
    title: "Philosophy",
    body: "Weekly Bhagavad Gita seminars that decode life's deepest questions.",
  },
];

const events = [
  {
    title: "Janmashtami Festival",
    tag: "Annual Flagship",
    image: "https://bvciitk.com/images/gallery/janmashtami/1.jpg",
    body: "1000+ visitors, cultural performances, kirtan, interschool competitions, and free prasadam dinner across the campus.",
    href: "/events",
    icon: Music,
  },
  {
    title: "Gitanushilanam",
    tag: "Gita Competition",
    image: "https://bvciitk.com/images/gallery/gita/1.jpg",
    body: "Annual Bhagavad Gita competition — quizzes, shloka recitations, essays, and awards for students across India.",
    href: "/gitanushilanam",
    icon: BookOpen,
  },
  {
    title: "Gita Jayanti & Radhastami",
    tag: "Signature Festivals",
    image: "https://bvciitk.com/images/gallery/radhastami/1.jpg",
    body: "Special festival celebrations — mass Gita recitation, abhishek, kirtan, and community feast.",
    href: "/events",
    icon: Award,
  },
];

const teamMembers = [
  { name: "Aarav Sharma", year: "B.Tech Y4", dept: "Computer Science", role: "President" },
  { name: "Priya Verma", year: "M.Tech Y2", dept: "Electrical Engg", role: "Vice President" },
  { name: "Rohan Iyer", year: "B.Tech Y3", dept: "Mechanical Engg", role: "Events Head" },
  { name: "Ananya Gupta", year: "B.Tech Y2", dept: "Chemical Engg", role: "Outreach" },
  { name: "Karthik Rao", year: "B.Tech Y4", dept: "Aerospace", role: "Gitanushilanam Lead" },
  { name: "Meera Nair", year: "Ph.D Y2", dept: "HSS", role: "Content Head" },
  { name: "Siddharth Jain", year: "B.Tech Y3", dept: "Physics", role: "Design Lead" },
  { name: "Divya Menon", year: "M.Tech Y1", dept: "CSE", role: "Kirtan Coordinator" },
];

const alumni = [
  {
    name: "Harikeshwar Kushwaha",
    degree: "B.Tech, EE (1999–2003)",
    now: "Ex-Goldman Sachs, USA & Singapore",
    photo: "https://bvciitk.com/images/profile/Harikeshwar%20Kushwaha.jpg",
  },
  {
    name: "Dr. Pawan Goyal",
    degree: "B.Tech, EE (2003–07)",
    now: "Associate Professor, CSE, IIT Kharagpur",
    photo: "https://bvciitk.com/images/profile/pawan.jpg",
  },
  {
    name: "Dr. Ranjan Behera",
    degree: "M.Tech, Ph.D, EE (2001–09)",
    now: "Associate Professor, EE, IIT Patna",
    photo: "https://bvciitk.com/images/profile/ranjan.png",
  },
  {
    name: "Dr. Akhaya Nayak",
    degree: "Ph.D, HSS Sociology (2007–13)",
    now: "Assistant Professor, HSS, IIM Indore",
    photo: "https://bvciitk.com/images/profile/akahaya.jpg",
  },
  {
    name: "Dr. Tharun Reddy",
    degree: "B.Tech, M.Tech, Ph.D, EE (2009–20)",
    now: "Assistant Professor, EE, IIT Roorkee",
    photo: "https://bvciitk.com/images/profile/tharun.jpg",
  },
  {
    name: "Dr. Jayant Mohanta",
    degree: "Postdoc, EE (2018–20)",
    now: "Assistant Professor, ME, IIT Jodhpur",
    photo: "https://bvciitk.com/images/profile/jayanta.jpg",
  },
  {
    name: "Radhakant Das",
    degree: "B.Tech AE + M.Tech IME (2001–09)",
    now: "Chief Administrative Officer, BGIS, Vrindavan",
    photo: "https://bvciitk.com/images/profile/radhakant.jpg",
  },
  {
    name: "Venkat Buddhiraju",
    degree: "Ph.D, Chem. Engg (2012–16)",
    now: "Senior Research Scientist, TCS",
    photo: "https://bvciitk.com/images/profile/venkat.png",
  },
  {
    name: "Dr. Suvendu Samanta",
    degree: "M.Tech, EE (2011–13)",
    now: "Assistant Professor, EE, IIT Kanpur",
    photo: "https://bvciitk.com/images/profile/Dr.%20Suvendu%20Samanta.jpg",
  },
];

function Home() {
  const [tab, setTab] = useState<"team" | "alumni">("team");

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            onError={(e) => ((e.target as HTMLImageElement).src = HERO_FALLBACK)}
            alt="Kirtan at IIT Kanpur"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-navy/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,153,51,0.25),transparent_50%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-cream">
              <Sparkles size={14} className="text-saffron" />
              Where Science Meets Spirituality
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-cream leading-[1.05]">
              Bridging <span className="text-gradient-saffron">Science</span>
              <br />
              and <span className="text-gradient-saffron">Spirituality</span>
              <br />
              at IIT Kanpur.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/80 leading-relaxed">
              Discover inner peace, holistic living, and the timeless wisdom of the
              Bhagavad Gita with the Bhaktivedanta Club.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/events"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-saffron-deep px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition"
              >
                Explore Events
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/"
                hash="japa"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition"
              >
                Learn About Japa
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-10 w-6 rounded-full border-2 border-cream/40 flex justify-center pt-2"
          >
            <span className="h-2 w-1 rounded-full bg-cream/70" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY */}
      <section id="about" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
              About Us
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
              A modern club with an <span className="text-gradient-saffron">ancient soul.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              BVC IIT Kanpur bridges the gap between science and spirituality through a
              scientific presentation of ancient Vedic scriptures. We promote holistic
              living amongst students through cleanliness habits, nutritious diets,
              regular mantra meditation, Bhagavad Gita seminars, selfless service — and
              a life centered around Lord Krishna.
            </p>
            <blockquote className="mt-8 border-l-4 border-saffron pl-5 py-1 italic text-foreground/80">
              "This knowledge is the king of education, the most secret of all secrets.
              It is the purest, and gives direct perception of the self."
              <footer className="mt-2 not-italic text-sm text-muted-foreground">
                — Bhagavad Gita 9.2
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.15}>
            <div id="japa" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {philosophyItems.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="hover-lift group relative overflow-hidden rounded-2xl bg-card border border-border p-6"
                >
                  <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-saffron/10 group-hover:bg-saffron/20 transition" />
                  <div className="relative">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-saffron to-saffron-deep text-primary-foreground">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-24 sm:py-32 bg-gradient-to-b from-background to-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
              What We Do
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
              Flagship <span className="text-gradient-saffron">Events</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A year of celebrations, contemplations, and community — hosted by students,
              open to everyone on campus.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((ev, i) => (
              <Reveal key={ev.title} delay={i * 0.1}>
                <article className="hover-lift group h-full overflow-hidden rounded-3xl bg-card border border-border flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src = HERO_FALLBACK)
                      }
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-saffron/95 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                      {ev.tag}
                    </span>
                    <div className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center rounded-full glass-dark text-cream">
                      <ev.icon size={16} />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold">{ev.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {ev.body}
                    </p>
                    <Link
                      to={ev.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron group/link"
                    >
                      Read more
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
              Our People
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
              The <span className="text-gradient-saffron">BVC Community</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Twenty years of students, scholars, and seekers — carrying the same flame
              through their journeys.
            </p>
          </Reveal>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full bg-muted p-1 border border-border">
              <button
                onClick={() => setTab("team")}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  tab === "team"
                    ? "bg-gradient-to-r from-saffron to-saffron-deep text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Users size={16} />
                Current Team
              </button>
              <button
                onClick={() => setTab("alumni")}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  tab === "alumni"
                    ? "bg-gradient-to-r from-saffron to-saffron-deep text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <GraduationCap size={16} />
                Alumni Network
              </button>
            </div>
          </div>

          <div className="mt-14">
            {tab === "team" ? (
              <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {teamMembers.map((m, i) => (
                  <Reveal key={m.name} delay={i * 0.04}>
                    <div className="hover-lift group text-center rounded-2xl bg-card border border-border p-6">
                      <div className="relative mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-saffron to-saffron-deep grid place-items-center">
                        <span className="font-display text-2xl font-bold text-primary-foreground">
                          {m.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                        <span className="absolute -bottom-1 -right-1 rounded-full bg-navy text-cream text-[10px] font-semibold px-2 py-0.5 border-2 border-background">
                          {m.year.split(" ")[1]}
                        </span>
                      </div>
                      <h3 className="mt-4 font-semibold text-foreground">{m.name}</h3>
                      <p className="text-xs text-saffron font-semibold mt-1">{m.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {m.dept} · {m.year}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {alumni.map((a, i) => (
                  <Reveal key={a.name} delay={i * 0.04}>
                    <div className="hover-lift flex gap-4 rounded-2xl bg-card border border-border p-5">
                      <img
                        src={a.photo}
                        alt={a.name}
                        onError={(e) => {
                          const t = e.target as HTMLImageElement;
                          t.style.display = "none";
                        }}
                        className="h-16 w-16 shrink-0 rounded-full object-cover bg-muted"
                      />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground truncate">{a.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{a.degree}</p>
                        <p className="text-xs text-saffron font-semibold mt-1.5">{a.now}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          <div className="mt-10 text-center">
            <Link
              to={tab === "team" ? "/team" : "/alumni"}
              className="inline-flex items-center gap-2 text-sm font-semibold text-saffron hover:gap-3 transition-all"
            >
              See all {tab === "team" ? "team members" : "alumni"}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-soft to-navy px-8 py-16 sm:px-16 sm:py-20">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-saffron/25 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-saffron/15 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.5fr_auto] lg:items-center">
              <div>
                <Sprout size={28} className="text-saffron" />
                <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-cream max-w-2xl">
                  Ready to walk the path of holistic living?
                </h2>
                <p className="mt-4 text-cream/70 max-w-xl">
                  Join weekly Japa sessions, Gita discussions, and campus events. All are
                  welcome — no prior background required.
                </p>
              </div>
              <Link
                to="/contact"
                className="justify-self-start lg:justify-self-end inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-saffron-deep px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition"
              >
                Join the Club
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
