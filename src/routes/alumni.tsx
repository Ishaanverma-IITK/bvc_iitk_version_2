import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni — BVC IIT Kanpur" },
      {
        name: "description",
        content:
          "20+ years of alumni: professors at IITs and IIMs, scientists, engineers, and leaders across the world.",
      },
      { property: "og:title", content: "Alumni Network — BVC IIT Kanpur" },
      { property: "og:description", content: "Meet the alumni of BVC IIT Kanpur." },
    ],
  }),
  component: AlumniPage,
});

const alumni = [
  { name: "Harikeshwar Kushwaha", degree: "B.Tech, EE (1999–2003)", now: "Ex-Goldman Sachs, USA & Singapore", photo: "https://bvciitk.com/images/profile/Harikeshwar%20Kushwaha.jpg" },
  { name: "Dr. Pawan Goyal", degree: "B.Tech, EE (2003–07)", now: "Associate Professor, CSE, IIT Kharagpur", photo: "https://bvciitk.com/images/profile/pawan.jpg" },
  { name: "Dr. Ranjan Behera", degree: "M.Tech, Ph.D, EE (2001–09)", now: "Associate Professor, EE, IIT Patna", photo: "https://bvciitk.com/images/profile/ranjan.png" },
  { name: "Dr. Akhaya Nayak", degree: "Ph.D, HSS Sociology (2007–13)", now: "Assistant Professor, HSS, IIM Indore", photo: "https://bvciitk.com/images/profile/akahaya.jpg" },
  { name: "Dr. Tharun Reddy", degree: "B.Tech, M.Tech, Ph.D, EE (2009–20)", now: "Assistant Professor, EE, IIT Roorkee", photo: "https://bvciitk.com/images/profile/tharun.jpg" },
  { name: "Dr. Jayant Mohanta", degree: "Postdoc, EE (2018–20)", now: "Assistant Professor, ME, IIT Jodhpur", photo: "https://bvciitk.com/images/profile/jayanta.jpg" },
  { name: "Radhakant Das", degree: "B.Tech AE + M.Tech IME (2001–09)", now: "Chief Administrative Officer, BGIS, Vrindavan", photo: "https://bvciitk.com/images/profile/radhakant.jpg" },
  { name: "Venkat Buddhiraju", degree: "Ph.D, Chem. Engg (2012–16)", now: "Senior Research Scientist, TCS", photo: "https://bvciitk.com/images/profile/venkat.png" },
  { name: "Ram Bahadur Singh", degree: "B.Tech, ME (2000–04)", now: "Head, Gas Turbine Design — Siemens India", photo: "https://bvciitk.com/images/profile/ram.png" },
  { name: "Vinayak Goyal", degree: "B.Tech, EE (2012–16)", now: "Senior Software Engineer, Samsung R&D Bangalore", photo: "https://bvciitk.com/images/profile/vinayak.png" },
  { name: "Shrikant Awate", degree: "M.Tech, CSE (2012–14)", now: "Senior Software Developer, SAP Pune", photo: "https://bvciitk.com/images/profile/Shrikant%20Awate.jpg" },
  { name: "Lila Govind Das", degree: "M.Tech, EE (2009–11)", now: "Vice Principal, BGIS Vrindavan", photo: "https://bvciitk.com/images/profile/Mr.%20Lila%20Govind%20Das.jpg" },
  { name: "Dr. Suvendu Samanta", degree: "M.Tech, EE (2011–13)", now: "Assistant Professor, EE, IIT Kanpur", photo: "https://bvciitk.com/images/profile/Dr.%20Suvendu%20Samanta.jpg" },
  { name: "Dr. Meher Preetam", degree: "M.Tech–Ph.D, EE (2012–20)", now: "Postdoctoral Researcher, Paris-Saclay University", photo: "https://bvciitk.com/images/profile/Dr.%20Meher%20Preetam%20Korukonda.jpg" },
  { name: "Dr. Ravi Prakash", degree: "M.Tech, Ph.D, EE (2014–20)", now: "Postdoctoral Researcher, TU Delft", photo: "https://bvciitk.com/images/profile/Dr.%20Ravi%20Prakash.jpg" },
  { name: "Dr. Chahat Upreti", degree: "B.Tech-M.Tech (2011–16)", now: "Ph.D Scholar, University of Texas, Dallas", photo: "https://bvciitk.com/images/profile/Dr.%20Chahat%20Upreti.jpeg" },
];

function AlumniPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
            Alumni Network
          </span>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">
            Twenty years of <span className="text-gradient-saffron">seekers</span>, still walking the path.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Professors at IITs and IIMs. Scientists at leading research labs. Engineers at
            Samsung, Siemens, TCS, SAP, Goldman Sachs. BVC alumni carry the same fire wherever
            they go.
          </p>
          <blockquote className="mt-8 max-w-2xl border-l-4 border-saffron pl-5 italic text-foreground/80">
            "Whatever standards a great man sets by exemplary acts, all the world pursues."
            <footer className="mt-1 not-italic text-sm text-muted-foreground">— Bhagavad Gita 3.21</footer>
          </blockquote>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {alumni.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.03}>
              <div className="hover-lift flex gap-4 rounded-2xl bg-card border border-border p-5">
                <img
                  src={a.photo}
                  alt={a.name}
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                  className="h-20 w-20 shrink-0 rounded-full object-cover bg-muted"
                />
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground">{a.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{a.degree}</p>
                  <p className="text-xs text-saffron font-semibold mt-1.5">{a.now}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground italic">
          And many more…
        </p>
      </div>
    </div>
  );
}
