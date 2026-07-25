import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  GraduationCap,
  X,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import { HeroFramePlayer } from "../components/HeroFramePlayer";
import { TiltCard3D } from "../components/ui/TiltCard3D";
import { ParallaxBackground } from "../components/ParallaxBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "test_project" },
      {
        name: "description",
        content:
          "BVCIITK Website Insights analyzes the bvciitk.github.io repository and its live website.",
      },
      { property: "og:title", content: "test_project" },
      {
        property: "og:description",
        content: "BVCIITK Website Insights analyzes the bvciitk.github.io repository and its live website.",
      },
      { property: "og:image", content: "https://bvciitk.com/images/cover.jpg" },
    ],
  }),
  component: Home,
});


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
    image: "/images/portfolio/Janmashtami (1).jpg",
    body: "1000+ visitors, cultural performances, kirtan, interschool competitions, and free prasadam dinner across the campus.",
    href: "/events",
    icon: Music,
  },
  {
    title: "Gitanushilanam",
    tag: "Gita Competition",
    image: "/images/portfolio/Bhagavad Gita Lecture Series (1).jpg",
    body: "Annual Bhagavad Gita competition — quizzes, shloka recitations, essays, and awards for students across India.",
    href: "/gitanushilanam",
    icon: BookOpen,
  },
  {
    title: "Spiritual Retreats",
    tag: "Signature Festivals",
    image: "/images/portfolio/Spiritual Retreats (1) (1) (1).jpg",
    body: "Special festival celebrations, mass Gita recitations, abhishek, kirtan, and community retreats to holy places.",
    href: "/events",
    icon: Award,
  },
  {
    title: "Welfare Work & Prasadam",
    tag: "Social Service",
    image: "/images/portfolio/Welfarework.jpeg",
    body: "Selfless community service, including extensive prasadam distribution and running community kitchens during critical times.",
    href: "/events",
    icon: Heart,
  },
  {
    title: "Personality Development",
    tag: "Seminars",
    image: "/images/portfolio/Personality Development (1).jpg",
    body: "Seminars and workshops focusing on life skills, mind control, and developing a balanced lifestyle for students.",
    href: "/events",
    icon: Brain,
  },
  {
    title: "Leading Edge Research",
    tag: "Robotics & AI",
    image: "/images/portfolio/Leading Edge Research.jpg",
    body: "Cutting-edge research in robotics and AI presented at international conferences like ICRA, exploring the science of consciousness.",
    href: "/events",
    icon: Sparkles,
  },
];


const alumni = [
  {
    name: "Harikeshwar Kushwaha",
    degree: "B.Tech, EE (1999–2003)",
    now: "Ex-Goldman Sachs, USA & Singapore",
    photo: "https://bvciitk.com/images/profile/Harikeshwar%20Kushwaha.jpg",
    about: "Harikeshwar Kushwaha is B-Tech (Department of Electrical Engineering, 1999-2003) from IIT Kanpur. He came in contact with Bhaktivedanta Club, IIT Kanpur in first year itself and has been practicing the path of Devotional Service since his days in IIT Kanpur. He has worked for Goldman Sachs in USA and Singapore for almost 9 years . He later left his lucrative job to serve full time to The Bhaktivedanta Gurukula and International School(BGIS) - a boarding school for boys as Principal for five years. Currently he runs a centre called ISKCON PEACE (Prayag Eternal Abode of Culture & Education) in Prayagraj where many people come to learn the art of devotional service to Krishna and make their lives joyful with spiritual culture and education"
  },
  {
    name: "Dr. Pawan Goyal",
    degree: "B.Tech, EE (2003–07)",
    now: "Associate Professor, CSE, IIT Kharagpur",
    photo: "https://bvciitk.com/images/profile/pawan.jpg",
    about: "Dr. Pawan Goyal did his B-Tech from IIT Kanpur in 2003 in department of Electrical Engineering and was one of the toppers in his batch. He was connected to Bhaktivedanta Club from first year itself and took part in all the club activities. He did his Ph.D in Computational Linguistics at University of Ulster, under supervision of Professor Laxmidhar Behera and Prof. T. M. McGinnity. Now he is the youngest associate professor in CSE Department at IIT Kharagpur working in the field of Text Mining, Natural Language Processing, Information Retrieval and Sanskrit Computational Linguistics. He is one of the best researchers of India and has received many prestigious awards such as Google India AI/ML Research Awards 2020, INAE Young Engineer Awards 2020, Facebook AI and Ethics Research Award India, 2019. Besides all these achivements, he practices spirituality very seriously and is a very humble and generous person."
  },
  {
    name: "Dr. Ranjan Behera",
    degree: "M.Tech, Ph.D, EE (2001–09)",
    now: "Associate Professor, EE, IIT Patna",
    photo: "https://bvciitk.com/images/profile/ranjan.png",
    about: "Dr. Ranjan Kumar Behera is an Associate Professor, Department of Electrical Engineering, IIT Patna, working since May 2009. He received the M. Tech. and Ph.D. degrees from IIT Kanpur, in 2003, and 2009, respectively. He has published 45 papers/articles in international journal and conferences and is a senior IEEE member. He got young scientist award by Department of Science and Technology, Government of India in 2011. In 2014, he was selected for prestigious Bhaskar Advanced Solar Energy (BASE-2014) fellowship award by Department of Science and Technology, Govt. of India and Indo-US science and technology Forum for doing advanced research on Solar Grid Integration in Smart Grid at Tennessee Technological University, Cookeville, TN, USA. Besides all these professional achievements Since 2008, he is leading a student community in IIT Patna for social and spiritual welfare for institute fraternity named as Bhaktivedanta club. Through this club, many students got their way for leading a successful life while serving the society. Not only students but the many people from outside the college got benefitted by the welfare activity like food distribution program, free education program, and old age care program. Recently grain distribution program in villages during pandemic had supported many families. Currently he is helping the village School students by providing them free computer education program. He is often invited by many national reputed engineering institute for delivering the motivational talks on spirituality and Bhagavad Gita . He is a practitioner of Bhakti yoga based on teachings of Bhagavad Gita since last 20 years and having a vast experience of counseling the students for their psychological and life problems."
  },
  {
    name: "Dr. Akhaya Nayak",
    degree: "Ph.D, HSS Sociology (2007–13)",
    now: "Assistant Professor, HSS, IIM Indore",
    photo: "https://bvciitk.com/images/profile/akahaya.jpg",
    about: "Dr. Akhaya Kumar Nayak did his PhD in Sociology from IIT Kanpur in 2013. He is currently a faculty member at IIM Indore."
  },
  {
    name: "Dr. Tharun Reddy",
    degree: "B.Tech, M.Tech, Ph.D, EE (2009–20)",
    now: "Assistant Professor, EE, IIT Roorkee",
    photo: "https://bvciitk.com/images/profile/tharun.jpg",
    about: "Dr. Tharun Reddy completed his B.tech + M.tech dual degree, and Ph.D. from EE department at IIT Kanpur. Currently, he is working as an Assistant Professor in the Electrical Engineering Department at IIT Roorkee. He is a devotee of the club."
  },
  {
    name: "Dr. Jayant Mohanta",
    degree: "Postdoc, EE (2018–20)",
    now: "Assistant Professor, ME, IIT Jodhpur",
    photo: "https://bvciitk.com/images/profile/jayanta.jpg",
    about: "Dr. Jayant Kumar Mohanta did his B-Tech in department of Mechanical Engineering at IIT Indore from 2010-14 and later completed his P.h.D in just 4 years from IIT Indore. He than came to IIT Kanpur for Post-doc in Robotics under Prof. Laxmidhar Behera and worked on various interesting projects . He is currently an assistant professor at IIT Jodhpur in the ME Department. He got connected to the teachings of Bhagavad during his undergraduate days and is now very expert to teach that science in a very interesting and thoughtful manner."
  },
  {
    name: "Radhakant Das",
    degree: "B.Tech AE + M.Tech IME (2001–09)",
    now: "Chief Administrative Officer, BGIS, Vrindavan",
    photo: "https://bvciitk.com/images/profile/radhakant.jpg",
    about: "Rohit Dasrapuria aka Radhakant Das is a motivational speaker and B-Tech and M-Tech (Department of Aerospace Engineering, 2001 batch) from IIT Kanpur. He was exceptional in his academic life ending up being a Silver Medalist at IIT Kanpur and working with leading organizations such as National Instruments. He left the lucrative job in 2009 to serve full time to The Bhaktivedanta Gurukula and International School(BGIS) - a boarding school for boys . He is currently the Chief Administrative Officer (CAO) of BGIS and has played a key role in establishing the new campus covering over 100 acres and equipped with all modern amenities, located in the beautiful holy land of Sri Vrindavan Dham, the abode of Lord Sri Krishna.. It offers the best of both worlds - traditional alongside modern education. He is a visiting faculty at IMS, Noida, and gives talks on Bhagavad Gita in ISKCON centers across the world."
  },
  {
    name: "Venkat Buddhiraju",
    degree: "Ph.D, Chem. Engg (2012–16)",
    now: "Senior Research Scientist, TCS",
    photo: "https://bvciitk.com/images/profile/venkat.png",
    about: "Dr. Venkata Buddhiraju completed his PhD in Chemical Engineering from IIT Kanpur. He works as a Senior Research Scientist at TCS."
  },
  {
    name: "Dr. Suvendu Samanta",
    degree: "M.Tech, EE (2011–13)",
    now: "Assistant Professor, EE, IIT Kanpur",
    photo: "https://bvciitk.com/images/profile/Dr.%20Suvendu%20Samanta.jpg",
    about: "Dr. Suvendu Samanta completed his M.Tech in Electrical Engineering at IIT Kanpur and later joined the institute as an Assistant Professor in the EE department."
  },
];

function Home() {
  const [selectedAlumnus, setSelectedAlumnus] = useState<typeof alumni[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [videoRatio, setVideoRatio] = useState(0);
  const [aboutRatio, setAboutRatio] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0.7);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const vRatio = Math.max(0, Math.min(1, scrollY / (height * 2)));
      setVideoRatio(vRatio);
      const aRatio = Math.max(0, Math.min(1, (scrollY - height * 2.5) / height));
      setAboutRatio(aRatio);

      // Video slowly brightens (overlay goes from 0.7 to 0) during scroll,
      // and dims back down as the About overlay fades in.
      if (scrollY < height * 2) {
        setOverlayOpacity((1 - vRatio) * 0.7);
      } else {
        setOverlayOpacity(aRatio * 0.9);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (

    <>
      {/* HERO SCROLL PINNING CONTAINER */}
      <div id="hero" className="relative h-[450vh] bg-black">

        {/* HERO */}
        <section className="sticky top-0 h-screen flex items-center overflow-hidden w-full">
          <HeroFramePlayer overlayOpacity={overlayOpacity} />

          <div 
            className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: videoRatio > 0.5 ? 0 : 1, 
                y: videoRatio > 0.5 ? -20 : 0 
              }}
              transition={{ duration: 0.4 }}
              style={{ pointerEvents: videoRatio > 0.5 ? "none" : "auto" }}
              className="max-w-xl lg:max-w-[48%]"
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
                  to="/"
                  hash="events"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-saffron-deep px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition"
                >
                  Explore Gallery
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ABOUT US OVERLAY */}
          <div 
            className="absolute inset-0 z-20 flex items-center w-full h-full pointer-events-none"
            style={{ 
              opacity: aboutRatio,
              pointerEvents: aboutRatio > 0.15 ? "auto" : "none"
            }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-2 lg:items-center w-full">
              <motion.div
                animate={{ 
                  y: aboutRatio > 0.1 ? 0 : 30
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
                  About Us
                </span>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight text-cream drop-shadow-md">
                  A modern club with an <span className="text-gradient-saffron">ancient soul.</span>
                </h2>
                <p className="mt-6 text-cream/80 leading-relaxed">
                  BVC IIT Kanpur bridges the gap between science and spirituality through a
                  scientific presentation of ancient Vedic scriptures. We promote holistic
                  living amongst students through cleanliness habits, nutritious diets,
                  regular mantra meditation, Bhagavad Gita seminars, selfless service — and
                  a life centered around Lord Krishna.
                </p>
                <blockquote className="mt-8 border-l-4 border-saffron pl-5 py-1 italic text-cream/95">
                  "This knowledge is the king of education, the most secret of all secrets.
                  It is the purest, and gives direct perception of the self."
                  <footer className="mt-2 not-italic text-sm text-cream/60">
                    — Bhagavad Gita 9.2
                  </footer>
                </blockquote>
              </motion.div>

              <motion.div
                animate={{ 
                  y: aboutRatio > 0.1 ? 0 : 30
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                className="grid grid-cols-2 gap-3 sm:gap-6"
              >
                {philosophyItems.map(({ icon: Icon, title, body }) => (
                  <TiltCard3D key={title} className="group">
                    <div className="w-full h-full relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border p-3 sm:p-6 shadow-lg hover:shadow-saffron/20 transition-shadow duration-300 bg-background/95 backdrop-blur-md">
                      <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-saffron/10 group-hover:bg-saffron/30 transition duration-500" />
                      <div className="relative">
                        <div className="grid h-8 w-8 sm:h-11 sm:w-11 place-items-center rounded-lg sm:rounded-xl bg-gradient-to-br from-saffron to-saffron-deep text-primary-foreground shadow-md">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <h3 className="mt-2 sm:mt-4 font-display text-[13px] sm:text-xl font-bold tracking-tight drop-shadow-sm text-foreground leading-snug">{title}</h3>
                        <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm text-muted-foreground leading-relaxed">
                          {body}
                        </p>
                      </div>
                    </div>
                  </TiltCard3D>
                ))}
              </motion.div>
            </div>
          </div>

          <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block transition-opacity duration-300"
            style={{ opacity: Math.max(0, 1 - videoRatio * 4) }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-10 w-6 rounded-full border-2 border-cream/40 flex justify-center pt-2"
            >
              <span className="h-2 w-1 rounded-full bg-cream/70" />
            </motion.div>
          </div>
        </section>
      </div>

      {/* EVENTS */}
      <section id="events" className="py-24 sm:py-32 bg-gradient-to-b from-background to-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
              What We Do
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
              Our <span className="text-gradient-saffron">Gallery</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              BVC organises a variety of events throughout the year to promote spiritual wisdom in and around the campus.
              Our annual Festival - Janmashtami witnesses huge footfall from the campus as well as visitors from outside.
              BVC also conducts Institute level lecture series on Bhagavad Gita and daily Mantra Meditation Classes.
              Our Melodious Kirtans, delicious prasadam and divinely intoxicating retreats are loved by all.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((ev, i) => (
              <Reveal key={ev.title} delay={i * 0.1}>
                <TiltCard3D className="group h-full">
                  <article className="h-full overflow-hidden rounded-3xl bg-card border border-border flex flex-col shadow-sm transition-shadow duration-300 group-hover:shadow-saffron/20">
                    <div 
                      className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImageIndex(i)}
                    >
                      <img
                        src={ev.image}
                        alt={ev.title}
                        onError={(e) =>
                          ((e.target as HTMLImageElement).src = HERO_FALLBACK)
                        }
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center rounded-full glass-dark text-cream">
                        <ev.icon size={16} />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-xl font-bold">{ev.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                        {ev.body}
                      </p>
                      {ev.href !== "/events" && (
                        <Link
                          to={ev.href}
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron group/link"
                        >
                          Read more
                          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </article>
                </TiltCard3D>
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
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-5 py-2.5 border border-border text-sm font-semibold text-foreground">
              <GraduationCap size={16} className="text-saffron" />
              Alumni Network
            </div>
          </div>

          <div className="mt-14">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {alumni.map((a, i) => (
                <Reveal key={a.name} delay={i * 0.04}>
                  <TiltCard3D className="h-full">
                    <div
                      onClick={() => setSelectedAlumnus(a)}
                      className="flex gap-4 rounded-2xl bg-card border border-border p-5 cursor-pointer hover:border-saffron/40 hover:shadow-saffron/10 shadow-sm transition-all duration-300 h-full"
                    >
                      <img
                        src={a.photo}
                        alt={a.name}
                        onError={(e) => {
                          const t = e.target as HTMLImageElement;
                          t.style.display = "none";
                        }}
                        className="h-16 w-16 shrink-0 rounded-full object-cover bg-muted"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-foreground truncate">{a.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{a.degree}</p>
                        <p className="text-xs text-saffron font-semibold mt-1.5">{a.now}</p>
                      </div>
                    </div>
                  </TiltCard3D>
                </Reveal>
              ))}
            </div>
          </div>


          <div className="mt-10 text-center">
            <Link
              to="/alumni"
              className="inline-flex items-center gap-2 text-sm font-semibold text-saffron hover:gap-3 transition-all"
            >
              See all alumni
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

            <img
              src={selectedAlumnus.photo}
              alt={selectedAlumnus.name}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
              className="h-32 w-32 md:h-40 md:w-40 rounded-2xl object-cover bg-muted border border-border shrink-0 self-center md:self-start"
            />

            <div className="flex-1 min-w-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron bg-saffron/10 px-2.5 py-1 rounded-full">
                Alumnus Detail
              </span>
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">About & BVC Days</h4>
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                  {selectedAlumnus.about || "No detailed description available."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            {/* Clickable backdrop */}
            <div 
              className="absolute inset-0 z-10" 
              onClick={() => setSelectedImageIndex(null)} 
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 z-25 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors pointer-events-auto"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => 
                  prev !== null ? (prev === 0 ? events.length - 1 : prev - 1) : null
                );
              }}
              className="absolute left-6 z-25 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors pointer-events-auto"
              aria-label="Previous image"
            >
              <ChevronRight className="rotate-180" size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => 
                  prev !== null ? (prev === events.length - 1 ? 0 : prev + 1) : null
                );
              }}
              className="absolute right-6 z-25 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors pointer-events-auto"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Content Container */}
            <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center p-4 z-20 pointer-events-none">
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={events[selectedImageIndex].image}
                alt={events[selectedImageIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl pointer-events-auto"
              />
              <div className="mt-6 text-center text-white max-w-2xl px-4 pointer-events-auto">
                <span className="text-xs font-semibold uppercase tracking-widest text-saffron">
                  {events[selectedImageIndex].tag}
                </span>
                <h3 className="font-display text-2xl font-bold mt-1 text-cream">
                  {events[selectedImageIndex].title}
                </h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">
                  {events[selectedImageIndex].body}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
