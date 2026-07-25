import { useEffect, useRef, useState } from "react";

interface HeroFramePlayerProps {
  overlayOpacity?: number;
}

// Cubic ease-in-out — same curve used by Apple's scroll scrubber pages
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function HeroFramePlayer({ overlayOpacity = 0 }: HeroFramePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Lerp state — currentFrame floats between frames for sub-frame smoothness
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const isRunningRef = useRef<boolean>(false);

  // Preload frames — on mobile load every 2nd frame to save memory & speed up loading
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const totalFrames = 200;
    const step = isMobile ? 2 : 1;
    const framesToLoad = Math.ceil(totalFrames / step);
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i += step) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/hero-frames/ezgif-frame-${frameNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / framesToLoad) * 100));
        if (loadedCount > 5) setLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / framesToLoad) * 100));
        if (loadedCount > 5) setLoaded(true);
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const totalImages = imagesRef.current.length;

    // ---------- draw ----------
    const drawFrame = (frameFloat: number) => {
      // Round to nearest integer frame
      const frameIndex = Math.max(0, Math.min(totalImages - 1, Math.round(frameFloat)));
      const img = imagesRef.current[frameIndex];
      if (!img) return;

      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      if (!imgWidth || !imgHeight || !canvasWidth || !canvasHeight) return;

      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth: number, drawHeight: number, offsetX = 0, offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        drawWidth = canvasHeight * imgRatio;
        drawHeight = canvasHeight;

        const isMobile = window.innerWidth < 768;
        let scale = 1.0;
        let focusPoint = 0.5;

        if (isMobile) {
          // Eased pan from book cover (0.5) to left Sanskrit page (0.12)
          const transitionEnd = Math.floor(totalImages * 0.6);
          const rawT = Math.min(1, frameFloat / transitionEnd);
          const t = easeInOutCubic(rawT);
          focusPoint = 0.5 - (0.5 - 0.12) * t;

          const bookWidthRatio = 0.35;
          const fitScale = canvasWidth / (drawWidth * bookWidthRatio);
          if (fitScale < 1) scale = fitScale;
        }

        drawWidth *= scale;
        drawHeight *= scale;
        offsetX = (canvasWidth - drawWidth) * focusPoint;
        offsetY = (canvasHeight - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // ---------- Apple-style continuous lerp loop ----------
    // Lerp speed: 0.08 = slow/cinematic, 0.14 = snappy. 0.10 is sweet spot.
    const LERP_SPEED = 0.10;
    const STOP_THRESHOLD = 0.02; // stop loop when close enough

    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) < STOP_THRESHOLD) {
        // Snap to target and stop looping to save CPU
        currentFrameRef.current = targetFrameRef.current;
        drawFrame(currentFrameRef.current);
        isRunningRef.current = false;
        return;
      }

      currentFrameRef.current += diff * LERP_SPEED;
      drawFrame(currentFrameRef.current);
      rafRef.current = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (!isRunningRef.current) {
        isRunningRef.current = true;
        rafRef.current = requestAnimationFrame(loop);
      }
    };

    // ---------- scroll handler (only updates target, loop does the drawing) ----------
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      // Mobile scrubs 1.3x faster (shorter scroll distance to complete the sequence)
      const scrollMultiplier = window.innerWidth < 768 ? 2 / 1.3 : 2;
      const rawRatio = Math.max(0, Math.min(1, scrollY / (height * scrollMultiplier)));
      // Apply ease to the scroll ratio for a more organic feel
      const ratio = easeInOutCubic(rawRatio);
      targetFrameRef.current = ratio * (totalImages - 1);
      startLoop();
    };

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      // Force redraw at current frame after resize
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial paint
    handleResize();
    drawFrame(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
      isRunningRef.current = false;
    };
  }, [loaded]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black pointer-events-none z-0">
      {!loaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black gap-4 text-cream">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-saffron/20 border-t-saffron animate-spin" />
            <span className="text-xs font-semibold text-saffron">{progress}%</span>
          </div>
          <p className="text-sm font-semibold tracking-wider uppercase text-cream/70 animate-pulse">
            Loading background...
          </p>
        </div>
      )}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Gradient overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/60 to-transparent pointer-events-none"
        style={{ opacity: overlayOpacity * 0.9 }}
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,153,51,0.18),transparent_50%)] pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}
