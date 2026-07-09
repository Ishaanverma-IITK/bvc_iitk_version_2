import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — BVC IIT Kanpur" },
      { name: "description", content: "Meet the current student team leading BVC at IIT Kanpur." },
      { property: "og:title", content: "The BVC IIT Kanpur Team" },
      { property: "og:description", content: "The students behind BVC IIT Kanpur." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Aarav Sharma", role: "President", dept: "Computer Science", year: "B.Tech Y4" },
  { name: "Priya Verma", role: "Vice President", dept: "Electrical Engg", year: "M.Tech Y2" },
  { name: "Rohan Iyer", role: "Events Head", dept: "Mechanical Engg", year: "B.Tech Y3" },
  { name: "Ananya Gupta", role: "Outreach Lead", dept: "Chemical Engg", year: "B.Tech Y2" },
  { name: "Karthik Rao", role: "Gitanushilanam Lead", dept: "Aerospace", year: "B.Tech Y4" },
  { name: "Meera Nair", role: "Content Head", dept: "HSS", year: "Ph.D Y2" },
  { name: "Siddharth Jain", role: "Design Lead", dept: "Physics", year: "B.Tech Y3" },
  { name: "Divya Menon", role: "Kirtan Coordinator", dept: "CSE", year: "M.Tech Y1" },
  { name: "Arjun Pillai", role: "Treasurer", dept: "IME", year: "B.Tech Y3" },
  { name: "Ishita Roy", role: "Social Media", dept: "MSE", year: "B.Tech Y2" },
  { name: "Nikhil Bansal", role: "Logistics", dept: "Civil Engg", year: "B.Tech Y3" },
  { name: "Sanya Kapoor", role: "Photography", dept: "Biological Sci", year: "B.Tech Y2" },
];

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
            A rotating team of undergrads, postgrads, and research scholars — building
            programs by students, for students.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.03}>
              <div className="hover-lift text-center rounded-2xl bg-card border border-border p-6">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-saffron to-saffron-deep grid place-items-center">
                  <span className="font-display text-2xl font-bold text-primary-foreground">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{m.name}</h3>
                <p className="text-xs text-saffron font-semibold mt-1">{m.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.dept} · {m.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
