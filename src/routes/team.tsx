import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";

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
          "Undergraduates from Y20, Y21, Y22 and Y23 leading the Bhaktivedanta Club at IIT Kanpur.",
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
  `https://bvciitk.com/team/photos/${encodeURIComponent(file)}`;

const team: Member[] = [
  // Y20 — Seniors
  {
    name: "Jayesh Omprakash Lakade",
    degree: "BS",
    dept: "Economics",
    year: "Y20",
    roll: "200475",
    photo: photo("Jayesh Omprakash Lakade.jpg"),
  },
  {
    name: "Ayush Agrawal",
    degree: "BTech",
    dept: "Aerospace Engineering",
    year: "Y20",
    roll: "200237",
    photo: photo("ayush  agrawall.jpg"),
  },
  // Y21
  {
    name: "Ankit Khandelwal",
    degree: "BTech",
    dept: "Electrical Engineering",
    year: "Y21",
    roll: "210149",
    photo: photo("Ankit Khandelwal.jpg"),
  },
  {
    name: "Chirayush Mohanty",
    degree: "BTech",
    dept: "Computer Science and Engineering",
    year: "Y21",
    roll: "210289",
    photo: photo("Chirayush Mohanty.jpg"),
  },
  {
    name: "Sabyasachi Mohanta",
    degree: "BS",
    dept: "Statistics and Data Science",
    year: "Y21",
    roll: "210887",
    photo: photo("Sabyasachi Mohanta.jpg"),
  },
  {
    name: "Chandaka Hemanth Kumar",
    degree: "BTech",
    dept: "Computer Science and Engineering",
    year: "Y21",
    roll: "210277",
    photo: photo("Chandaka Hemanth Kumar.jpg"),
  },
  {
    name: "Anu Pal",
    degree: "BTech",
    dept: "Mechanical Engineering",
    year: "Y21",
    roll: "210160",
    photo: photo("Anu Pal.jpg"),
  },
  {
    name: "Chitresh Meena",
    degree: "BS",
    dept: "Economics",
    year: "Y21",
    roll: "210291",
    photo: photo("Chitresh Meena.jpg"),
  },
  // Y22
  {
    name: "Saagar K V",
    degree: "BTech",
    dept: "Electrical Engineering",
    year: "Y22",
    roll: "220927",
    photo: photo("Saagar K V.jpg"),
  },
  {
    name: "Saraswat",
    degree: "BTech",
    dept: "Mechanical Engineering",
    year: "Y22",
    roll: "220974",
    photo: photo("Saraswat.jpg"),
  },
  {
    name: "Bhavya Garg",
    degree: "BTech",
    dept: "Biological Sciences and Bioengineering",
    year: "Y22",
    roll: "220296",
    photo: photo("Bhavya Garg.jpg"),
  },
  // Y23
  {
    name: "Archil Mogra",
    degree: "BTech",
    dept: "Chemical Engineering",
    year: "Y23",
    roll: "230185",
    photo: photo("Archil Mogra.jpg"),
  },
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
    name: "Aaditya Raj",
    degree: "BTech",
    dept: "Materials Science and Engineering",
    year: "Y23",
    roll: "230005",
    photo: photo("Aaditya Raj.jpg"),
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

const batches = ["Y20", "Y21", "Y22", "Y23"] as const;
const batchLabels: Record<(typeof batches)[number], string> = {
  Y20: "Batch of 2020",
  Y21: "Batch of 2021",
  Y22: "Batch of 2022",
  Y23: "Batch of 2023",
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function MemberCard({ m, i }: { m: Member; i: number }) {
  return (
    <Reveal delay={i * 0.03}>
      <div className="group hover-lift rounded-2xl bg-card border border-border overflow-hidden">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-saffron/15 to-navy/10">
          <img
            src={m.photo}
            alt={m.name}
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;
              img.style.display = "none";
              const fallback = img.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "grid";
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            style={{ display: "none" }}
            className="absolute inset-0 place-items-center bg-gradient-to-br from-saffron to-saffron-deep"
          >
            <span className="font-display text-4xl font-bold text-primary-foreground">
              {initials(m.name)}
            </span>
          </div>
          <span className="absolute top-3 left-3 rounded-full bg-background/85 backdrop-blur px-2.5 py-1 text-[10px] font-semibold tracking-wider text-saffron">
            {m.year}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-foreground leading-tight">{m.name}</h3>
          <p className="text-xs text-saffron font-semibold mt-1">
            {m.degree} · {m.dept}
          </p>
          <p className="text-[11px] text-muted-foreground mt-1 font-mono">
            Roll {m.roll}
          </p>
        </div>
      </div>
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
              4 batches
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 font-semibold text-foreground/80">
              12+ departments
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
