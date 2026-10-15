import { useState, useEffect } from "react";
import { BookOpen, Sparkles, ChevronLeft, ChevronRight, Copy, Check, Share2, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

export interface Verse {
  chapter: number;
  verse: number;
  theme: string;
  sanskrit: string;
  transliteration: string;
  translation: string;
  reflection: string;
}

const VERSES: Verse[] = [
  {
    chapter: 2,
    verse: 47,
    theme: "Duty & Detachment",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
    translation:
      "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.",
    reflection:
      "Essential wisdom for students facing exams, placements, and deadlines. When anxiety about results is dissolved, your focus on current effort reaches peak efficiency.",
  },
  {
    chapter: 6,
    verse: 5,
    theme: "Mind Mastery",
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥",
    transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
    translation:
      "One must deliver oneself with the help of the mind, and not degrade oneself. The mind is the friend of the conditioned soul, and his enemy as well.",
    reflection:
      "Your mind can either be your strongest ally or your greatest distraction. Through daily mantra meditation and self-reflection, we train the mind to be our greatest supporter.",
  },
  {
    chapter: 2,
    verse: 14,
    theme: "Emotional Equanimity",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदु:खदा: ।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥",
    transliteration: "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ\nāgamāpāyino 'nityās tāṁs titikṣasva bhārata",
    translation:
      "The nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. One must learn to tolerate them without being disturbed.",
    reflection:
      "Both highs and lows during college life are transient. Developing patience and internal grounding keeps you resilient through changing circumstances.",
  },
  {
    chapter: 4,
    verse: 38,
    theme: "Sublime Knowledge",
    sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते ।\nतत्स्वयं योगसंसिद्ध: कालेनात्मनि विन्दति ॥",
    transliteration: "na hi jñānena sadṛśaṁ pavitram iha vidyate\ntat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati",
    translation:
      "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all devotion, realized within oneself in due course of time.",
    reflection:
      "Beyond technical formulas, code, and laboratory tools lies self-realization — the highest pursuit of an inquiring intellect.",
  },
  {
    chapter: 9,
    verse: 22,
    theme: "Divine Protection",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जना: पर्युपासते ।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥",
    transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham",
    translation:
      "To those who are constantly devoted and who meditate on Me with love, I provide what they lack and preserve what they have.",
    reflection:
      "A comforting reminder that sincere, dedicated service never goes in vain. True mental security comes from alignment with the supreme source.",
  },
];

export function VerseOfTheDay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Deterministic daily index based on day of the year
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    setCurrentIndex(dayOfYear % VERSES.length);
  }, []);

  const verse = VERSES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % VERSES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + VERSES.length) % VERSES.length);
  };

  const handleCopy = () => {
    const textToCopy = `Bhagavad Gita ${verse.chapter}.${verse.verse}\n\n${verse.sanskrit}\n\n${verse.transliteration}\n\n"${verse.translation}"\n\n— via BVC IIT Kanpur (bvciitk.com)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    toast.success(`Gita ${verse.chapter}.${verse.verse} copied to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const shareData = {
      title: `Bhagavad Gita ${verse.chapter}.${verse.verse} — BVC IIT Kanpur`,
      text: `${verse.sanskrit}\n\n"${verse.translation}"`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Ignored if cancelled
      }
    } else {
      handleCopy();
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-background via-accent/20 to-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-saffron/15 text-saffron px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <Sparkles size={14} /> Shloka of the Day · दैनिक श्लोक
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Timeless Wisdom from the <span className="text-gradient-saffron">Bhagavad Gita</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Practical Vedic insights decoded for modern student life, research temper, and inner tranquility.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-3xl bg-card border border-border p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden backdrop-blur-sm">
            {/* Background Decorative Accents */}
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-saffron/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-saffron/5 blur-3xl pointer-events-none" />
            <Quote
              className="absolute top-6 right-8 h-20 w-20 text-saffron/10 pointer-events-none select-none"
              strokeWidth={1}
            />

            {/* Top Bar: Verse ID, Theme & Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
              <div className="flex items-center gap-3">
                <span className="font-display text-lg font-bold text-saffron">
                  BG {verse.chapter}.{verse.verse}
                </span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <span className="rounded-full bg-saffron/10 px-3 py-1 text-xs font-semibold text-saffron">
                  {verse.theme}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous verse"
                  className="h-9 w-9 rounded-full border border-border bg-background hover:bg-accent flex items-center justify-center text-foreground transition"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next verse"
                  className="h-9 w-9 rounded-full border border-border bg-background hover:bg-accent flex items-center justify-center text-foreground transition"
                >
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={handleCopy}
                  title="Copy verse"
                  className="h-9 w-9 rounded-full border border-border bg-background hover:bg-accent flex items-center justify-center text-foreground transition ml-1"
                >
                  {copied ? <Check size={15} className="text-green-500" /> : <Copy size={15} />}
                </button>
                <button
                  onClick={handleShare}
                  title="Share verse"
                  className="h-9 w-9 rounded-full border border-border bg-background hover:bg-accent flex items-center justify-center text-foreground transition"
                >
                  <Share2 size={15} />
                </button>
              </div>
            </div>

            {/* Verse Content with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${verse.chapter}.${verse.verse}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="mt-8 space-y-6"
              >
                {/* Sanskrit Verse */}
                <div className="text-center sm:text-left">
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground leading-relaxed whitespace-pre-line tracking-wide drop-shadow-sm">
                    {verse.sanskrit}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-saffron/90 italic font-mono leading-relaxed whitespace-pre-line">
                    {verse.transliteration}
                  </p>
                </div>

                {/* English Translation */}
                <div className="rounded-2xl bg-accent/40 border border-border/50 p-5 sm:p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                    Translation
                  </span>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed font-medium">
                    "{verse.translation}"
                  </p>
                </div>

                {/* Practical Reflection */}
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-saffron/15 text-saffron mt-0.5">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-saffron">
                      Student Reflection
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {verse.reflection}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Indicator */}
            <div className="mt-8 pt-5 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
              <span>
                Verse {currentIndex + 1} of {VERSES.length}
              </span>
              <span className="italic">
                "Where Science Meets Spirituality" · BVC IIT Kanpur
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
