import { useEffect, useRef, useState } from "react";

interface HeroFramePlayerProps {
  overlayOpacity?: number;
}

export function HeroFramePlayer({ overlayOpacity = 0 }: HeroFramePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastIndexRef = useRef<number>(-1);

  // Preload all 200 frames
  useEffect(() => {
    const totalFrames = 200;
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/hero-frames/ezgif-frame-${frameNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / totalFrames) * 100));
        // Start rendering as soon as the first frame is ready to avoid long loading times
        if (i === 1 || loadedCount > 10) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / totalFrames) * 100));
        if (i === 1 || loadedCount > 10) {
          setLoaded(true);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Update canvas frames on window scroll
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const totalFrames = 200;

    const drawFrame = (frameIndex: number) => {
      if (frameIndex === lastIndexRef.current) return;
      lastIndexRef.current = frameIndex;

      const img = imagesRef.current[frameIndex];
      if (!img || !ctx) return;

      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      if (imgWidth === 0 || imgHeight === 0 || canvasWidth === 0 || canvasHeight === 0) return;

      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;

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
          // Centered book cover at frame 0 (focusPoint 0.5), smooth transition to Left page (focusPoint 0.1) by frame 120
          const t = Math.min(1, frameIndex / 120);
          focusPoint = 0.5 - (0.5 - 0.1) * t;

          // Scale image so that the page fits within the screen width with safety padding
          const bookWidthRatio = 0.35;
          const fitScale = canvasWidth / (drawWidth * bookWidthRatio);
          if (fitScale < 1) {
            scale = fitScale;
          }
        }

        drawWidth = drawWidth * scale;
        drawHeight = drawHeight * scale;
        offsetX = (canvasWidth - drawWidth) * focusPoint;
        offsetY = (canvasHeight - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight; // Scrub over 2 full viewport heights (0.5x speed)
      const ratio = Math.max(0, Math.min(1, scrollY / (height * 2)));
      const frameIndex = Math.min(totalFrames - 1, Math.floor(ratio * (totalFrames - 1)));
      drawFrame(frameIndex);
    };

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      handleScroll();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial paint
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
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
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
      {/* Left-to-right gradient overlay to keep text readable on the left and video clear on the right */}
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
