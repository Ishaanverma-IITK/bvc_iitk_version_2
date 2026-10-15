import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { TiltCard3D } from "../components/ui/TiltCard3D";
import { AlumniAvatar } from "../components/AlumniAvatar";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — BVC IIT Kanpur" },
      {
        name: "description",
        content:
          "Meet the students of the Bhaktivedanta Club, IIT Kanpur — undergrads across departments building programs by students, for students.",
      },
      { property: "og:title", content: "The BVC IIT Kanpur Team" },
      {
        property: "og:description",
        content:
          "Undergraduates leading the Bhaktivedanta Club at IIT Kanpur.",
      },
    ],
  }),
  component: TeamPage,
});

type Member = {
  name: string;
  degree: string;
  dept: string;
  year: string;
  roll: string;
  photo: string;
};

const photo = (file: string) =>
  `/images/team/${encodeURIComponent(file)}`;

const team: Member[] = [
  // Y21
  {
    name: "Chitresh Meena",
    degree: "BS",
    dept: "Economics",
    year: "Y21",
    roll: "210291",
    photo: photo("Chitresh Meena.jpg"),
  },
  // Y23
  {
    name: "Divyansh Asthana",
    degree: "BS",
    dept: "Earth Science",
    year: "Y23",
    roll: "230380",
    photo: photo("Divyansh Asthana.jpg"),
  },
  {
    name: "Avula Ajay",
    degree: "BTech",
    dept: "Electrical Engineering",
    year: "Y23",
    roll: "230248",
    photo: photo("Avula Ajay.jpg"),
  },
  {
    name: "Aditya Nitin Patil",
    degree: "BTech",
    dept: "Chemical Engineering",
    year: "Y23",
    roll: "230074",
    photo: photo("Aditya Nitin Patil.jpg"),
  },
  {
    name: "Sachin Kumhar",
    degree: "BTech",
    dept: "Aerospace Engineering",
    year: "Y23",
    roll: "230891",
    photo: photo("Sachin kumhar.jpg"),
  },
  {
    name: "Anurag Sharma",
    degree: "BTech",
    dept: "Civil Engineering",
    year: "Y23",
    roll: "230174",
    photo: photo("Anurag Sharma.jpg"),
  },
];

const batches = ["Y21", "Y23"] as const;
const batchLabels: Record<(typeof batches)[number], string> = {
  Y21: "Batch of 2021",
  Y23: "Batch of 2023",
};

function MemberCard({ m, i }: { m: Member; i: number }) {
  return (
    <Reveal delay={i * 0.03}>
      <TiltCard3D className="h-full">
        <div className="group h-full rounded-2xl bg-card border border-border overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-saffron/20 bg-background/50 backdrop-blur-sm">
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-saffron/15 to-navy/10">
            <AlumniAvatar
              src={m.photo}
              name={m.name}
              className="h-full w-full rounded-none transition-transform duration-500 group-hover:scale-105"
              textClassName="text-4xl font-bold font-display"
            />
            <span className="absolute top-3 left-3 rounded-full bg-background/85 backdrop-blur px-2.5 py-1 text-[10px] font-semibold tracking-wider text-saffron">
              {m.year}
            </span>
          </div>
          <div className="p-4 relative">
            <h3 className="font-semibold text-foreground leading-tight drop-shadow-sm">{m.name}</h3>
            <p className="text-xs text-muted-foreground mt-1.5">{m.degree} · {m.dept}</p>
            <p className="text-[11px] text-muted-foreground mt-1 font-mono">
              Roll {m.roll}
            </p>
          </div>
        </div>
      </TiltCard3D>
    </Reveal>
  );
}

function TeamPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
            Meet the Team
          </span>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">
            Students, at the <span className="text-gradient-saffron">heart</span> of BVC.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            A rotating team of undergraduates from across departments and years at
            IIT Kanpur — building programs by students, for students.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-border bg-card px-3 py-1 font-semibold text-foreground/80">
              {team.length} members
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 font-semibold text-foreground/80">
              {new Set(team.map((m) => m.year)).size} batches
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 font-semibold text-foreground/80">
              {new Set(team.map((m) => m.dept)).size} departments
            </span>
          </div>
        </Reveal>

        {batches.map((batch) => {
          const members = team.filter((m) => m.year === batch);
          if (!members.length) return null;
          return (
            <section key={batch} className="mt-16">
              <Reveal>
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {batchLabels[batch]}
                  </h2>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {members.length} member{members.length > 1 ? "s" : ""}
                  </span>
                </div>
              </Reveal>
              <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {members.map((m, i) => (
                  <MemberCard key={m.roll} m={m} i={i} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
