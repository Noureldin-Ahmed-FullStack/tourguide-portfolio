import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxBackgroundProps {
  children: ReactNode;
  imageUrl: string;
  className?: string;
  overlayOpacity?: number;
  parallaxStrength?: number;
}

export default function ParallaxBackground({
  children,
  imageUrl,
  className = '',
  overlayOpacity = 0.6,
  parallaxStrength = 0.3,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${parallaxStrength * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax background image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-[20%] h-[140%]"
      >
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(10, 10, 10, ${overlayOpacity * 0.8}) 0%,
            rgba(10, 10, 10, ${overlayOpacity * 0.4}) 30%,
            rgba(10, 10, 10, ${overlayOpacity * 0.4}) 70%,
            rgba(10, 10, 10, 1) 100%
          )`,
        }}
      />

      {/* Golden accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10">
        {children}
      </motion.div>
    </div>
  );
}

export function GlowingOrb({
  className = '',
  size = 300,
  color = 'primary',
}: {
  className?: string;
  size?: number;
  color?: 'primary' | 'accent';
}) {
  const colorMap = {
    primary: 'rgba(201, 169, 98, 0.15)',
    accent: 'rgba(201, 169, 98, 0.2)',
  };

  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
      }}
    />
  );
}
