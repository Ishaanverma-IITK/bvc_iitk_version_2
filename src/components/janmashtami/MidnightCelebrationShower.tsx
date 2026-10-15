import React, { useRef, useEffect, useState } from "react";

interface MidnightCelebrationShowerProps {
  scrollProgress: number;
  reducedMotion?: boolean;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  color: string;
  type: "lotus" | "marigold" | "jasmine" | "spark";
  opacity: number;
  swingOffset: number;
  swingSpeed: number;
}

const PETAL_COLORS = {
  lotus: ["#fbcfe8", "#f472b6", "#fda4af", "#ffe4e6"],
  marigold: ["#f59e0b", "#fbbf24", "#d97706", "#fde047"],
  jasmine: ["#ffffff", "#fef9c3", "#fef08a", "#fffbeb"],
  spark: ["#f0d68a", "#ffe8ad", "#ffffff", "#ffd700"],
};

export default function MidnightCelebrationShower({
  scrollProgress,
  reducedMotion = false,
}: MidnightCelebrationShowerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animFrameRef = useRef<number | null>(null);
  // Active at the starting of the page (Hero Section: scroll 0.0 -> 0.16)
  // Fully active at 0.0 -> 0.08, then smoothly fades out by 0.16 as Events section approaches
  const isTriggered = scrollProgress <= 0.16;
  const intensity =
    scrollProgress <= 0.08
      ? 1
      : scrollProgress >= 0.16
      ? 0
      : 1 - (scrollProgress - 0.08) / (0.16 - 0.08);

  const [celebrationActive, setCelebrationActive] = useState(true);
  const intensityRef = useRef(intensity);

  useEffect(() => {
    intensityRef.current = intensity;
  }, [intensity]);

  useEffect(() => {
    if (isTriggered && !celebrationActive) {
      setCelebrationActive(true);
    } else if (!isTriggered && celebrationActive) {
      setCelebrationActive(false);
    }
  }, [isTriggered, celebrationActive]);

  useEffect(() => {
    if (reducedMotion || !celebrationActive) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize petals pool
    const isMobile = window.innerWidth < 768;
    const petalCount = isMobile ? 38 : 80;

    const spawnPetal = (startY?: number): Petal => {
      const types: ("lotus" | "marigold" | "jasmine" | "spark")[] = [
        "lotus",
        "marigold",
        "jasmine",
        "spark",
      ];
      const type = types[Math.floor(Math.random() * types.length)];
      const colorList = PETAL_COLORS[type];
      const color = colorList[Math.floor(Math.random() * colorList.length)];

      const isPhone = window.innerWidth < 768;
      // Refined smaller petal dimensions on phones to look delicate and prevent obscuring mobile content
      const size = isPhone
        ? type === "spark"
          ? 1.5 + Math.random() * 2.0
          : 3.5 + Math.random() * 4.0
        : type === "spark"
          ? 2.0 + Math.random() * 3.5
          : 7.0 + Math.random() * 9.0;

      return {
        x: Math.random() * width,
        y: startY !== undefined ? startY : Math.random() * -height,
        size,
        vx: (Math.random() - 0.5) * (isPhone ? 0.9 : 1.4),
        vy:
          type === "spark"
            ? (isPhone ? 0.6 + Math.random() * 1.0 : 0.8 + Math.random() * 1.5)
            : (isPhone ? 0.8 + Math.random() * 1.4 : 1.2 + Math.random() * 2.2),
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.05,
        color,
        type,
        opacity: 0.7 + Math.random() * 0.3,
        swingOffset: Math.random() * Math.PI * 2,
        swingSpeed: 0.02 + Math.random() * 0.03,
      };
    };

    // Pre-populate so they are already descending
    if (petalsRef.current.length === 0) {
      for (let i = 0; i < petalCount; i++) {
        petalsRef.current.push(spawnPetal(Math.random() * height));
      }
    }

    // Interactive celebration burst on pointer tap/click anywhere
    const handlePointerDown = (e: PointerEvent) => {
      // Don't burst if pointer event is on form inputs
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const clientX = e.clientX;
      const clientY = e.clientY;
      const isPhone = window.innerWidth < 768;
      const burstCount = isPhone ? 14 : 22;

      for (let i = 0; i < burstCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isPhone ? 1.5 + Math.random() * 4.0 : 2.0 + Math.random() * 5.5;
        const types: ("lotus" | "marigold" | "spark")[] = ["lotus", "marigold", "spark"];
        const t = types[Math.floor(Math.random() * types.length)];
        const colors = PETAL_COLORS[t];
        const size = isPhone
          ? t === "spark"
            ? 1.8 + Math.random() * 2.0
            : 3.5 + Math.random() * 3.5
          : t === "spark"
            ? 2.5 + Math.random() * 3.5
            : 6.5 + Math.random() * 8.0;

        petalsRef.current.push({
          x: clientX,
          y: clientY,
          size,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (isPhone ? 1.2 : 1.8),
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: t,
          opacity: 1,
          swingOffset: Math.random() * Math.PI * 2,
          swingSpeed: 0.03,
        });
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const petals = petalsRef.current;
      const isPhone = window.innerWidth < 768;
      const maxDownwardSpeed = isPhone ? 1.1 : 1.4;
      const swayAmplitude = isPhone ? 0.7 : 1.1;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // Air resistance on burst petals & smooth downward drift
        p.vx *= 0.98;
        if (p.vy < maxDownwardSpeed) p.vy += 0.04;

        // Physics update
        p.rotation += p.vRot;
        p.swingOffset += p.swingSpeed;
        p.x += p.vx + Math.sin(p.swingOffset) * swayAmplitude;
        p.y += p.vy;

        // Reset if past bottom
        if (p.y > height + 20) {
          if (petals.length > petalCount) {
            petals.splice(i, 1);
            i--;
            continue;
          }
          Object.assign(p, spawnPetal(-20));
        }

        // Draw Petal / Spark
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.type === "spark") {
          // Celestial Golden Sparkle
          ctx.fillStyle = p.color;
          ctx.shadowColor = "#f0d68a";
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();

          // Star cross
          ctx.strokeStyle = "rgba(255,255,255,0.75)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(-p.size, 0);
          ctx.lineTo(p.size, 0);
          ctx.moveTo(0, -p.size);
          ctx.lineTo(0, p.size);
          ctx.stroke();
        } else {
          // Curved Lotus/Marigold Petal
          ctx.fillStyle = p.color;
          ctx.shadowColor = "rgba(0,0,0,0.35)";
          ctx.shadowBlur = 4;

          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.quadraticCurveTo(p.size * 0.7, -p.size * 0.3, p.size * 0.4, p.size);
          ctx.quadraticCurveTo(0, p.size * 1.2, -p.size * 0.4, p.size);
          ctx.quadraticCurveTo(-p.size * 0.7, -p.size * 0.3, 0, -p.size);
          ctx.closePath();
          ctx.fill();

          // Subtle central vein highlight
          ctx.strokeStyle = "rgba(255,255,255,0.4)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.7);
          ctx.lineTo(0, p.size * 0.7);
          ctx.stroke();
        }

        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [celebrationActive, reducedMotion]);

  if (!celebrationActive || reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-700"
      style={{ opacity: intensity }}
      aria-hidden="true"
    >
      {/* ═══ CELEBRATORY PETALS & CELESTIAL SPARKS CANVAS ═══ */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* ═══ DIVINE WARM GOLDEN AMBIENT AURORA AT BOTTOM ═══ */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[#d4a857]/20 via-[#d4a857]/5 to-transparent blur-2xl"
        style={{ transform: "translateZ(0)" }}
      />
    </div>
  );
}
