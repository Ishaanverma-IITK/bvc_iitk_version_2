import { useEffect, useRef, useState } from "react";
import bvcLogo from "@/assets/bvc-logo.png";

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
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedIndicesRef = useRef<Set<number>>(new Set());

  // Lerp state — currentFrame floats between frames for sub-frame smoothness
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const isRunningRef = useRef<boolean>(false);

  // Progressive Priority Loading (Optimized for bandwidth and instant paint)
  useEffect(() => {
    let isCancelled = false;
    const isMobile = window.innerWidth < 1024;
    const totalFrames = 200;
    // Mobile loads every 2nd frame (100 frames), desktop loads all 200
    const step = isMobile ? 2 : 1;
    const frameIndices: number[] = [];

    for (let i = 1; i <= totalFrames; i += step) {
      frameIndices.push(i);
    }

    const totalImages = frameIndices.length;
    const images: (HTMLImageElement | null)[] = new Array(totalImages).fill(null);
    imagesRef.current = images;

    let loadedCount = 0;

    const loadSingleFrame = (indexInArray: number, frameNumber: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        const frameNum = String(frameNumber).padStart(3, "0");
        img.src = `/hero-frames/ezgif-frame-${frameNum}.jpg`;

        const onDone = () => {
          if (isCancelled) return;
          images[indexInArray] = img;
          loadedIndicesRef.current.add(indexInArray);
          loadedCount++;
          setProgress(Math.floor((loadedCount / totalImages) * 100));

          // Allow interaction early once initial critical frames are ready
          if (loadedCount >= Math.min(6, totalImages)) {
            setLoaded(true);
          }
          resolve();
        };

        img.onload = onDone;
        img.onerror = onDone;
      });
    };

    // Priority 1: Load initial 15 frames immediately
    const priorityCount = Math.min(15, totalImages);
    const priorityPromises: Promise<void>[] = [];

    for (let i = 0; i < priorityCount; i++) {
      priorityPromises.push(loadSingleFrame(i, frameIndices[i]));
    }

    // Priority 2: Incrementally stream remaining frames in batches of 10
    Promise.all(priorityPromises).then(() => {
      if (isCancelled) return;
      let nextIndex = priorityCount;

      const loadNextBatch = () => {
        if (isCancelled || nextIndex >= totalImages) return;
        const batchEnd = Math.min(nextIndex + 10, totalImages);
        const batchPromises: Promise<void>[] = [];

        for (let i = nextIndex; i < batchEnd; i++) {
          batchPromises.push(loadSingleFrame(i, frameIndices[i]));
        }

        nextIndex = batchEnd;

        Promise.all(batchPromises).then(() => {
          if (!isCancelled && nextIndex < totalImages) {
            // Use idle callback or short timeout to preserve UI responsiveness
            if ("requestIdleCallback" in window) {
              window.requestIdleCallback(() => loadNextBatch(), { timeout: 300 });
            } else {
              setTimeout(loadNextBatch, 50);
            }
          }
        });
      };

      loadNextBatch();
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const totalImages = imagesRef.current.length;

    // Helper: Find nearest loaded image to prevent empty flicker
    const getNearestLoadedImage = (targetIndex: number): HTMLImageElement | null => {
      if (imagesRef.current[targetIndex]) return imagesRef.current[targetIndex];

      // Search backward first, then forward
      for (let offset = 1; offset < totalImages; offset++) {
        const back = targetIndex - offset;
        if (back >= 0 && imagesRef.current[back]) return imagesRef.current[back];
        const fwd = targetIndex + offset;
        if (fwd < totalImages && imagesRef.current[fwd]) return imagesRef.current[fwd];
      }
      return null;
    };

    // ---------- draw ----------
    const drawFrame = (frameFloat: number) => {
      const frameIndex = Math.max(0, Math.min(totalImages - 1, Math.round(frameFloat)));
      const img = getNearestLoadedImage(frameIndex);
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

        const isMobile = window.innerWidth < 1024;
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
    const LERP_SPEED = 0.10;
    const STOP_THRESHOLD = 0.02;

    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) < STOP_THRESHOLD) {
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

    // ---------- scroll handler ----------
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const scrollMultiplier = window.innerWidth < 1024 ? 2 / 1.3 : 2;
      const rawRatio = Math.max(0, Math.min(1, scrollY / (height * scrollMultiplier)));
      const ratio = easeInOutCubic(rawRatio);
      targetFrameRef.current = ratio * (totalImages - 1);
      startLoop();
    };

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

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
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-navy gap-6">
          <div className="relative flex items-center justify-center">
            <span
              className="absolute h-24 w-24 rounded-full bg-saffron/20 animate-ping"
              style={{ animationDuration: "1.8s" }}
            />
            <span className="absolute h-20 w-20 rounded-full bg-saffron/10 blur-md" />
            <img
              src={bvcLogo}
              alt="BVC IIT Kanpur"
              className="relative h-20 w-20 rounded-full bg-white/10 object-contain ring-2 ring-saffron/40 shadow-glow"
            />
          </div>

          <div className="flex flex-col items-center gap-2 w-48">
            <div className="w-full h-1 rounded-full bg-cream/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-saffron to-saffron-deep transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cream/50">
              Loading · {progress}%
            </p>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
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
