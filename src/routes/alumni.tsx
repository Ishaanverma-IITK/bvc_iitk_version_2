import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { Search, X, Briefcase, GraduationCap, Building2, Sparkles } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { TiltCard3D } from "../components/ui/TiltCard3D";
import { AlumniAvatar } from "../components/AlumniAvatar";
import { alumniData, type Alumnus } from "../data/alumni";

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

const CATEGORIES = [
  "All",
  "Academia & Research",
  "Tech & Engineering",
  "Leadership & Seva",
  "Industry & Management",
] as const;

type CategoryType = (typeof CATEGORIES)[number];

function AlumniPage() {
  const [selectedAlumnus, setSelectedAlumnus] = useState<Alumnus | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");

  useEffect(() => {
    if (selectedAlumnus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedAlumnus]);

  const graduationYears = useMemo(() => {
    const years = alumniData
      .map((a) => a.gradyr)
      .filter((yr): yr is number => typeof yr === "number");
    return Array.from(new Set(years)).sort((a, b) => b - a);
  }, []);

  const filteredAlumni = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return alumniData.filter((a) => {
      const matchesSearch =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.degree.toLowerCase().includes(q) ||
        a.now.toLowerCase().includes(q) ||
        (a.dept && a.dept.toLowerCase().includes(q)) ||
        (a.about && a.about.toLowerCase().includes(q));

      const matchesYear =
        selectedYear === "all" || a.gradyr?.toString() === selectedYear;

      const matchesCategory =
        selectedCategory === "All" || a.category === selectedCategory;

      return matchesSearch && matchesYear && matchesCategory;
    });
  }, [searchQuery, selectedYear, selectedCategory]);

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
            Apple, Siemens, TCS, SAP, Shell, Goldman Sachs, and DRDO. BVC alumni carry the same fire wherever
            they go. Click on any profile to learn more about their journey and BVC days.
          </p>
          <blockquote className="mt-8 max-w-2xl border-l-4 border-saffron pl-5 italic text-foreground/80">
            "Whatever standards a great man sets by exemplary acts, all the world pursues."
            <footer className="mt-1 not-italic text-sm text-muted-foreground">— Bhagavad Gita 3.21</footer>
          </blockquote>
        </Reveal>

        {/* Category Pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-saffron to-saffron-deep text-primary-foreground shadow-glow"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-saffron/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-between items-center bg-card border border-border p-4 rounded-2xl">
          <div className="relative w-full sm:max-w-xs">
            <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground pointer-events-none">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search by name, role, department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-saffron text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="w-full sm:w-auto">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-saffron text-foreground font-medium"
            >
              <option value="all">All Graduation Years</option>
              {graduationYears.map((yr) => (
                <option key={yr} value={yr.toString()}>
                  Class of {yr}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="mt-6 text-sm text-muted-foreground flex items-center justify-between">
          <span>
            Showing <strong className="text-foreground">{filteredAlumni.length}</strong> of{" "}
            {alumniData.length} alumni
          </span>
          {(searchQuery || selectedYear !== "all" || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("all");
                setSelectedCategory("All");
              }}
              className="text-xs text-saffron hover:underline font-semibold"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAlumni.map((a, i) => (
            <Reveal key={`${a.name}-${i}`} delay={Math.min(i * 0.015, 0.3)}>
              <TiltCard3D className="h-full">
                <div
                  onClick={() => setSelectedAlumnus(a)}
                  className="flex gap-4 rounded-2xl bg-card border border-border p-5 h-full cursor-pointer hover:border-saffron/40 hover:shadow-saffron/10 shadow-sm transition-all duration-300 bg-background/50 backdrop-blur-sm group"
                >
                  <AlumniAvatar
                    src={a.photo}
                    name={a.name}
                    className="h-20 w-20 rounded-full border border-border"
                    textClassName="text-xl font-bold"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground leading-snug group-hover:text-saffron transition-colors">
                      {a.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{a.degree}</p>
                    <p className="text-xs text-saffron font-semibold mt-1.5 leading-relaxed">{a.now}</p>
                    {a.dept && (
                      <span className="inline-block mt-2 rounded bg-accent/60 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                        {a.dept}
                      </span>
                    )}
                  </div>
                </div>
              </TiltCard3D>
            </Reveal>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground py-12 rounded-2xl border border-dashed border-border">
            <p className="text-base font-medium">No alumni match your search filters.</p>
            <p className="text-sm mt-1 text-muted-foreground/80">Try clearing your search query or selecting a different year or category.</p>
          </div>
        )}
      </div>

      {/* Modal Detail Overlay */}
      {selectedAlumnus && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedAlumnus(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAlumnus(null)}
              className="absolute top-4 right-4 p-2 rounded-full border border-border bg-background text-muted-foreground hover:text-foreground transition hover:bg-accent cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <AlumniAvatar
              src={selectedAlumnus.photo}
              name={selectedAlumnus.name}
              className="h-32 w-32 md:h-40 md:w-40 rounded-2xl border border-border self-center md:self-start"
              textClassName="text-4xl font-bold"
            />

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron bg-saffron/10 px-2.5 py-1 rounded-full">
                  {selectedAlumnus.category || "Alumnus Detail"}
                </span>
                {selectedAlumnus.gradyr && (
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground bg-accent px-2.5 py-1 rounded-full">
                    Class of {selectedAlumnus.gradyr}
                  </span>
                )}
              </div>
              <h2 className="font-display text-3xl font-bold mt-3 text-foreground leading-snug">
                {selectedAlumnus.name}
              </h2>
              <p className="text-sm font-medium text-muted-foreground mt-2">
                {selectedAlumnus.degree}
              </p>
              <p className="text-sm font-semibold text-saffron mt-1.5">
                {selectedAlumnus.now}
              </p>

              <div className="border-t border-border mt-5 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  About & BVC Days
                </h4>
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                  {selectedAlumnus.about || "No detailed description available."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
