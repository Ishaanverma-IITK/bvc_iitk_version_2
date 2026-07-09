import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — BVC IIT Kanpur" },
      {
        name: "description",
        content:
          "Janmashtami, Gita Jayanti, Radhastami, kirtan nights, retreats and lecture series — flagship events by BVC IIT Kanpur.",
      },
      { property: "og:title", content: "Events — BVC IIT Kanpur" },
      {
        property: "og:description",
        content: "Explore flagship festivals and programs by the Bhaktivedanta Club at IIT Kanpur.",
      },
    ],
  }),
  component: EventsPage,
});

const events = [
  {
    title: "Janmashtami Festival",
    date: "Aug – Sep · Annual",
    image: "https://bvciitk.com/images/portfolio/Janmashtami%20(1).jpg",
    body: "The flagship celebration of BVC — cultural performances, dance, drama, kirtan, dioramas, and free prasadam dinner for 1000+ visitors.",
  },
  {
    title: "Gitanushilanam",
    date: "Yearly · National",
    image: "https://bvciitk.com/images/portfolio/Bhagavad%20Gita%20Lecture%20Series%20(1).jpg",
    body: "Pan-India Bhagavad Gita competition — quiz rounds, shloka recitation, essays, and awards for participating students.",
  },
  {
    title: "Radhastami",
    date: "September",
    image: "https://bvciitk.com/img/Garland.jpg",
    body: "Appearance day of Srimati Radharani — Abhishek ceremony, melodious kirtan, and a community feast.",
  },
  {
    title: "Gita Jayanti",
    date: "December",
    image: "https://bvciitk.com/images/portfolio/Leading%20Edge%20Research.jpg",
    body: "Mass Bhagavad Gita recitation, book distribution, and lectures decoding Krishna's message to Arjuna.",
  },
  {
    title: "Winter Bootcamp",
    date: "December – January",
    image: "https://bvciitk.com/images/portfolio/Personality%20Development%20(1).jpg",
    body: "A residential Vedic bootcamp — intensive study, meditation, kirtan, and mentorship over the winter break.",
  },
  {
    title: "Weekly Japa & Gita Class",
    date: "Every Sunday · SAC",
    image: "https://bvciitk.com/images/portfolio/Spiritual%20Retreats%20(1)%20(1)%20(1).jpg",
    body: "Weekly mantra meditation, Bhagavad Gita lecture, and community prasadam — open to the entire campus.",
  },
];

function EventsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
            Programs & Festivals
          </span>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">
            A year of <span className="text-gradient-saffron">celebrations</span> and contemplations.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            From packed Janmashtami nights to quiet Sunday kirtans — here's everything
            BVC hosts on campus.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((ev, i) => (
            <Reveal key={ev.title} delay={i * 0.06}>
              <article className="hover-lift group h-full overflow-hidden rounded-3xl bg-card border border-border flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    onError={(e) =>
                      ((e.target as HTMLImageElement).src =
                        "https://bvciitk.com/images/cover.jpg")
                    }
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-saffron font-semibold">
                    <Calendar size={13} />
                    {ev.date}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold">{ev.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {ev.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 rounded-3xl bg-gradient-to-br from-navy to-navy-soft p-10 sm:p-14 text-cream flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-saffron mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-2xl font-bold">Come visit us</h3>
                <p className="mt-1 text-cream/70">
                  Students' Activity Centre (SAC), IIT Kanpur — Sundays at 6:30 PM.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-saffron-deep px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Get in touch
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
