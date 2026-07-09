import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Trophy, Users, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/gitanushilanam")({
  head: () => ({
    meta: [
      { title: "Gitanushilanam — BVC IIT Kanpur" },
      {
        name: "description",
        content:
          "Gitanushilanam is BVC IIT Kanpur's annual Bhagavad Gita competition — quiz, shloka recitation, essay writing, and awards.",
      },
      { property: "og:title", content: "Gitanushilanam — Bhagavad Gita Competition" },
      {
        property: "og:description",
        content: "Annual Bhagavad Gita competition at IIT Kanpur — quizzes, recitations, essays.",
      },
    ],
  }),
  component: GitanushilanamPage,
});

const rounds = [
  { icon: BookOpen, title: "Shloka Recitation", body: "Chant selected verses with correct pronunciation and meaning." },
  { icon: Trophy, title: "Gita Quiz", body: "Test your knowledge of philosophy, characters, and events." },
  { icon: Users, title: "Essay & Speech", body: "Reflect on how Gita's wisdom applies to modern student life." },
];

function GitanushilanamPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-saffron/10 text-saffron px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
            <Sparkles size={13} /> Annual · Nationwide
          </span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">
            <span className="text-gradient-saffron">Gitanushilanam</span> — a celebration of the Gita.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            An annual Bhagavad Gita competition hosted by BVC IIT Kanpur, drawing students
            from across India to study, recite, and internalize Krishna's timeless message.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {rounds.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="hover-lift rounded-3xl bg-card border border-border p-8 h-full">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-saffron to-saffron-deep text-primary-foreground">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center rounded-3xl bg-accent/50 p-10 sm:p-14">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Why participate?</h2>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                <li className="flex gap-3"><span className="text-saffron">✦</span> Deepen your understanding of the Bhagavad Gita.</li>
                <li className="flex gap-3"><span className="text-saffron">✦</span> Compete alongside students from IITs, IIMs, and top colleges.</li>
                <li className="flex gap-3"><span className="text-saffron">✦</span> Win awards, certificates, and mentorship from senior devotees.</li>
                <li className="flex gap-3"><span className="text-saffron">✦</span> Build friendships across a national spiritual community.</li>
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-saffron-deep px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
              >
                Register interest <ArrowRight size={14} />
              </Link>
            </div>
            <blockquote className="rounded-2xl bg-card border border-border p-8">
              <p className="font-display text-xl leading-relaxed italic text-foreground/80">
                "Whatever standards a great man sets by exemplary acts, all the world pursues."
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">— Bhagavad Gita 3.21</footer>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
