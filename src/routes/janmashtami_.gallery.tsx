import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Image from "../components/janmashtami/Image";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/janmashtami_/gallery")({
  head: () => ({
    meta: [
      { title: "Janmashtami Gallery — BVC IIT Kanpur" },
      {
        name: "description",
        content: "Photo memories and divine moments from Janmashtami celebrations at IIT Kanpur.",
      },
    ],
  }),
  component: JanmashtamiGalleryPage,
});

interface GalleryPhoto {
  id: string;
  src: string;
  category: "altar" | "kirtan" | "cultural" | "festivities";
  objectPosition?: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  // ── Deity Altar & Abhishek ──
  { id: "p1", src: "/Janmashtami/images/gallery/imp1.webp", category: "altar" },
  { id: "p2", src: "/Janmashtami/images/gallery/IMG_0482.webp", category: "altar" },
  { id: "p3", src: "/Janmashtami/images/gallery/IMG_0483.webp", category: "altar" },
  { id: "p4", src: "/Janmashtami/images/gallery/IMG_0490.webp", category: "altar" },
  { id: "p5", src: "/Janmashtami/images/gallery/IMG_0493.webp", category: "altar" },
  { id: "p6", src: "/Janmashtami/images/gallery/IMG_0494.webp", category: "altar" },
  { id: "p7", src: "/Janmashtami/images/gallery/IMG_0511.webp", category: "altar" },
  { id: "p8", src: "/Janmashtami/images/gallery/IMG_0532.webp", category: "altar" },
  { id: "p9", src: "/Janmashtami/images/gallery/IMG_20250816_141311.webp", category: "altar" },
  { id: "p10", src: "/Janmashtami/images/gallery/IMG_20250816_153456_465_AI.webp", category: "altar" },

  // ── Kirtan & Bhajan ──
  { id: "p11", src: "/Janmashtami/images/gallery/IMG20220819194931_01.webp", category: "kirtan" },
  { id: "p12", src: "/Janmashtami/images/gallery/IMG_9906.webp", category: "kirtan", objectPosition: "object-top" },
  { id: "p13", src: "/Janmashtami/images/gallery/IMG_9925.webp", category: "kirtan" },
  { id: "p14", src: "/Janmashtami/images/gallery/DSCN6763.webp", category: "kirtan" },
  { id: "p15", src: "/Janmashtami/images/gallery/DSCN6785.webp", category: "kirtan" },
  { id: "p16", src: "/Janmashtami/images/gallery/DSC_0032.webp", category: "kirtan" },
  { id: "p17", src: "/Janmashtami/images/gallery/DSC_0078.webp", category: "kirtan" },
  { id: "p18", src: "/Janmashtami/images/gallery/DSC_0097.webp", category: "kirtan" },
  { id: "p19", src: "/Janmashtami/images/gallery/DSC_0105.webp", category: "kirtan" },
  { id: "p20", src: "/Janmashtami/images/gallery/DSC_0123.webp", category: "kirtan" },

  // ── Cultural Performances ──
  { id: "p21", src: "/Janmashtami/images/gallery/IMG_9853.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p22", src: "/Janmashtami/images/gallery/IMG_9876.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p23", src: "/Janmashtami/images/gallery/IMG_9887.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p24", src: "/Janmashtami/images/gallery/IMG_9899.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p25", src: "/Janmashtami/images/gallery/DSC_0126.webp", category: "cultural" },
  { id: "p26", src: "/Janmashtami/images/gallery/DSC_0182.webp", category: "cultural" },
  { id: "p27", src: "/Janmashtami/images/gallery/DSC_0217.webp", category: "cultural" },
  { id: "p28", src: "/Janmashtami/images/gallery/DSC_0221.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p29", src: "/Janmashtami/images/gallery/DSC_0252.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p30", src: "/Janmashtami/images/gallery/DSC_0273.webp", category: "cultural" },

  // ── Festivities & Exhibits ──
  { id: "p31", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM.webp", category: "festivities" },
  { id: "p32", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.20 PM.webp", category: "festivities" },
  { id: "p33", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (1).webp", category: "festivities" },
  { id: "p34", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (2).webp", category: "festivities" },
  { id: "p35", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (3).webp", category: "festivities" },
  { id: "p36", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (5).webp", category: "festivities" },
  { id: "p37", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 1.31.05 PM.webp", category: "festivities" },
  { id: "p38", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 1.31.06 PM.webp", category: "festivities" },
  { id: "p39", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 1.31.07 PM.webp", category: "festivities" },
];

const CATEGORIES = [
  { id: "all", label: "All Memories" },
  { id: "altar", label: "Altar & Abhishek" },
  { id: "kirtan", label: "Kirtan & Bhajan" },
  { id: "cultural", label: "Cultural" },
  { id: "festivities", label: "Festivities" },
] as const;

function JanmashtamiGalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : 0
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
            : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <main className="min-h-screen bg-[#050208] text-white selection:bg-[#d4a857]/30 pb-20">
      {/* ═══ TOP NAVBAR ═══ */}
      <nav className="sticky top-0 z-50 border-b border-[#d4a857]/20 bg-[#050208]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <Link to="/janmashtami" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="relative h-12 w-16 sm:h-14 sm:w-20 filter drop-shadow-[0_0_12px_rgba(255,232,173,0.7)]">
              <Image src="/Janmashtami/images/logo.png" alt="Janmashtami Logo" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <span className="block text-xs font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffe8ad] to-[#d4a857]">
                Janmashtami '26 · IITK
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/janmashtami"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d4a857]/40 bg-[#d4a857]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f0d68a] transition-all hover:bg-[#d4a857]/20 hover:border-[#ffe8ad]"
            >
              <ArrowLeft size={14} />
              <span>Experience Canvas</span>
            </Link>
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-white/80 hover:text-[#f0d68a] transition-colors"
            >
              BVC Home ↗
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══ HERO HEADER ═══ */}
      <section className="relative px-4 pt-12 pb-8 text-center md:pt-16 md:pb-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a857]/40 bg-[#d4a857]/10 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles size={14} className="text-[#f0d68a]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#f0d68a]">
              ✦ Divine Memories & Celebrations ✦
            </span>
          </div>

          <h1
            className="mb-4 text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f0d68a] to-[#d4a857] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Janmashtami Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-neutral-300 sm:text-base">
            Glimpses of sacred bliss, majestic Abhishek, soul-stirring kirtans, and vibrant campus festivities.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#f0d68a] to-[#d4a857] text-black shadow-[0_0_15px_rgba(212,168,87,0.5)] font-bold"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MASONRY PHOTO GRID ═══ */}
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#d4a857]/40 bg-[#0c051a]/40 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:border-[#ffe8ad] hover:shadow-[0_0_30px_rgba(212,168,87,0.4)] aspect-[4/3]"
            >
              <Image
                src={photo.src}
                alt="Janmashtami Celebration Memory"
                fill
                className={`transition-transform duration-500 group-hover:scale-110 ${photo.objectPosition || "object-center"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f0d68a]">
                  Click to Expand
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ LIGHTBOX MODAL ═══ */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % filteredPhotos.length : 0
              );
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl border border-[#d4a857]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[lightboxIndex].src}
              alt="Janmashtami Celebration Full View"
              className="max-h-[85vh] max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
