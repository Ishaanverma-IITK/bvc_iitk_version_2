import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function ParallaxBackground({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-30px", "30px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-30px", "30px"]);

  const translateX2 = useTransform(mouseXSpring, [-0.5, 0.5], ["40px", "-40px"]);
  const translateY2 = useTransform(mouseYSpring, [-0.5, 0.5], ["40px", "-40px"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const xPct = e.clientX / width - 0.5;
      const yPct = e.clientY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Background Orbs */}
      <motion.div 
        style={{ x: translateX, y: translateY }}
        className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-saffron/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        style={{ x: translateX2, y: translateY2 }}
        className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-navy/20 rounded-full blur-[120px] pointer-events-none"
      />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
