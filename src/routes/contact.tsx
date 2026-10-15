import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  MessageCircle,
  Copy,
  Check,
  UserCheck,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Join — BVC IIT Kanpur" },
      {
        name: "description",
        content:
          "Get in touch with Bhaktivedanta Club, IIT Kanpur — join our weekly sessions, register interest, or connect on WhatsApp.",
      },
      { property: "og:title", content: "Join BVC IIT Kanpur" },
      {
        property: "og:description",
        content: "Contact and join the Bhaktivedanta Club at IIT Kanpur.",
      },
    ],
  }),
  component: ContactPage,
});

const INTEREST_OPTIONS = [
  "🧘 Mantra Meditation / Japa",
  "📖 Bhagavad Gita Discussions",
  "🎶 Kirtan & Musical Instruments",
  "🍲 Prasadam & Cooking Seva",
  "💻 Web, Media & Design Team",
  "🌱 Event Organizing & Festivals",
];

const HALL_OPTIONS = [
  "Select Hall of Residence",
  "Hall 1",
  "Hall 2",
  "Hall 3",
  "Hall 4",
  "Hall 5",
  "Hall 6",
  "Hall 7",
  "Hall 8",
  "Hall 9",
  "Hall 10",
  "Hall 11",
  "Hall 12",
  "Hall 13",
  "Hall 14",
  "GH-1 (Girls Hostel)",
  "RA Tower / SBRA",
  "Off-Campus / Faculty / Staff",
];

const FAQS = [
  {
    q: "Do I need any prior background in spirituality or Sanskrit?",
    a: "Not at all! Everyone starts fresh. Our sessions present timeless Vedic wisdom through rational scientific inquiry, logic, neuroscience, and everyday student experiences in English and Hindi.",
  },
  {
    q: "Where and when are the weekly sessions held?",
    a: "We meet every Sunday at 6:30 PM at the Students' Activity Centre (SAC), IIT Kanpur. Each session includes peaceful mantra meditation (Japa), a thoughtful Gita discussion, melodious kirtan, and a delicious hot prasadam dinner.",
  },
  {
    q: "Are postgraduates, PhD scholars, and faculty members welcome?",
    a: "Absolutely! BVC is a diverse community of B.Tech, B.S., M.Tech, and Ph.D. scholars, as well as alumni and institute faculty who practice together.",
  },
  {
    q: "Is there any membership fee or registration cost?",
    a: "None whatsoever. All regular BVC sessions, seminars, meditation workshops, and Sunday prasadam dinners are completely free of charge.",
  },
  {
    q: "How can I get involved in Janmashtami or Gitanushilanam?",
    a: "Simply select 'Event Organizing' in the form above or send a message to our coordinators. We welcome students enthusiastic about stage coordination, design, prasadam, or competitions.",
  },
];

function ContactPage() {
  const [name, setName] = useState("");
  const [emailOrRoll, setEmailOrRoll] = useState("");
  const [programDept, setProgramDept] = useState("");
  const [hall, setHall] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !emailOrRoll.trim()) {
      toast.error("Please enter your name and email or roll number.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Hare Krishna! Your response has been received. Our team will reach out soon!", {
        duration: 5000,
      });
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bvc@iitk.ac.in");
    setCopiedEmail(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
            Contact & Community
          </span>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">
            Come say <span className="text-gradient-saffron">Haribol.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Whether you are a fresher curious about meditation, a scholar seeking
            philosophical clarity, or preparing for placements — our doors are always open.
          </p>
        </Reveal>

        {/* Quick Info Cards */}
        <div className="mt-14">
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-card border border-border p-6 flex gap-4 h-full shadow-sm">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron/15 text-saffron">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Visit Us</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Students' Activity Centre (SAC), IIT Kanpur, Kalyanpur, Uttar Pradesh 208016
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-card border border-border p-6 flex gap-4 h-full shadow-sm">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron/15 text-saffron">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Weekly Session</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Every Sunday · 6:30 PM · Japa · Gita class · Kirtan · Free Prasadam
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-card border border-border p-6 flex gap-4 h-full shadow-sm">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron/15 text-saffron">
                  <Mail size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <a
                      href="mailto:bvc@iitk.ac.in"
                      className="text-sm text-saffron hover:underline font-medium truncate"
                    >
                      bvc@iitk.ac.in
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      title="Copy email"
                      className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition"
                    >
                      {copiedEmail ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Main Grid: Form + WhatsApp / FAQ */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Join / Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 bg-saffron/10 rounded-full blur-3xl -z-10" />

                <div className="flex items-center gap-2 text-saffron">
                  <Sparkles size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Connect With Us
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mt-2 text-foreground">
                  Join the Club or Drop a Message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill in your details to receive session reminders, study circles, and event updates.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl bg-saffron/10 border border-saffron/30 p-8 text-center animate-in fade-in duration-300">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-saffron text-primary-foreground shadow-glow">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                      Haribol! You're all set.
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                      Thank you for connecting with us, <strong>{name}</strong>. Our student coordinators will reach out to you with details on upcoming sessions.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setEmailOrRoll("");
                        setProgramDept("");
                        setHall("");
                        setSelectedInterests([]);
                        setMessage("");
                      }}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-accent transition"
                    >
                      Submit Another Response
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-saffron"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          IITK Email or Roll No *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 230891 or rahul@iitk.ac.in"
                          value={emailOrRoll}
                          onChange={(e) => setEmailOrRoll(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-saffron"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Program & Department
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. B.Tech ME Y24 or PhD EE"
                          value={programDept}
                          onChange={(e) => setProgramDept(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-saffron"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Hall of Residence
                        </label>
                        <select
                          value={hall}
                          onChange={(e) => setHall(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-saffron font-medium"
                        >
                          {HALL_OPTIONS.map((opt, i) => (
                            <option key={opt} value={i === 0 ? "" : opt} disabled={i === 0}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        What areas are you interested in?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {INTEREST_OPTIONS.map((interest) => {
                          const isSelected = selectedInterests.includes(interest);
                          return (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => toggleInterest(interest)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isSelected
                                  ? "bg-saffron text-primary-foreground shadow-sm ring-1 ring-saffron"
                                  : "bg-background border border-border text-foreground hover:border-saffron/50"
                              }`}
                            >
                              {interest}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Any Questions or Thoughts? (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Ask about Sunday sessions, meditation techniques, or volunteer opportunities..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-saffron resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-saffron to-saffron-deep px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>Submitting...</>
                      ) : (
                        <>
                          Submit Details <Send size={15} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Column: WhatsApp Community Card & FAQs */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Community Card */}
            <Reveal delay={0.2}>
              <div className="rounded-3xl bg-gradient-to-br from-[#128C7E]/15 via-card to-card border border-[#25D366]/30 p-6 sm:p-8 shadow-md relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366] text-white shadow-md">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#128C7E] dark:text-[#25D366]">
                      Instant Campus Updates
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      BVC WhatsApp Community
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Join our official IIT Kanpur student WhatsApp group for Sunday session announcements, weekly slides, motivational quotes, and festival notices.
                </p>

                <div className="mt-6">
                  <a
                    href="https://chat.whatsapp.com/bvciitkanpur"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 text-sm font-semibold shadow-md transition hover:scale-105"
                  >
                    <MessageCircle size={16} /> Join WhatsApp Group
                  </a>
                </div>
              </div>
            </Reveal>

            {/* FAQs Accordion */}
            <Reveal delay={0.25}>
              <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h3>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={faq.q}
                        className="rounded-xl border border-border overflow-hidden bg-background/60"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm text-foreground hover:text-saffron transition"
                        >
                          <span className="pr-2">{faq.q}</span>
                          <ChevronDown
                            size={16}
                            className={`shrink-0 transition-transform duration-200 text-muted-foreground ${
                              isOpen ? "rotate-180 text-saffron" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3 animate-in fade-in duration-150">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
