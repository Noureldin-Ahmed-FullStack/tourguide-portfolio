import { useState } from 'react'
import '../css/mainBG.css'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import ParallaxBackground, { GlowingOrb } from './ui/ParallaxBackground';
import AnimatedSection from './ui/AnimatedSection';
import GoldenButton from './ui/GoldenButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function BigBG() {
  const [loaded, setLoaded] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <ParallaxBackground
      imageUrl="https://ssniper.sirv.com/TourguideProject/bg2.jpg"
      className="min-h-screen flex items-center justify-center"
      overlayOpacity={0.5}
    >
      {/* Decorative orbs */}
      <GlowingOrb className="top-20 -left-32" size={400} />
      <GlowingOrb className="bottom-40 -right-32" size={350} color="accent" />

      {/* Main content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Decorative label */}
          <AnimatedSection delay={0.1}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
                {i18n.language === 'en' ? 'Discover Egypt' : 'Откройте Египет'}
              </span>
            </motion.div>
          </AnimatedSection>

          {/* Main heading with typing animation */}
          <AnimatedSection delay={0.2}>
            <div className="mb-8 min-h-[10rem] md:min-h-[12rem]">
              {i18n.language === 'en' ? (
                <TypeAnimation
                  className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
                  sequence={[
                    "Explore Egypt!",
                    2000,
                    "Visit the Pyramids!",
                    1000,
                    "Great Selection of Tours",
                    1000,
                    "Local Insights",
                    1000,
                    "Personalized Tours",
                    1000,
                    "Unforgettable Memories",
                    1000,
                  ]}
                  wrapper="h1"
                  speed={50}
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #E5D4A1 0%, #C9A962 50%, #A68B4B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  repeat={Infinity}
                />
              ) : (
                <TypeAnimation
                  className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
                  sequence={[
                    "Исследуй Египет!",
                    2000,
                    "Посети пирамиды!",
                    1000,
                    "Большой выбор туров",
                    1000,
                    "Местные знания",
                    1000,
                    "Индивидуальные туры",
                    1000,
                    "Незабываемые впечатления",
                    1000,
                  ]}
                  wrapper="h1"
                  speed={50}
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #E5D4A1 0%, #C9A962 50%, #A68B4B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  repeat={Infinity}
                />
              )}
            </div>
          </AnimatedSection>

          {/* Subtext */}
          <AnimatedSection delay={0.4} direction="up">
            <p className="text-xl md:text-2xl text-white/80 mb-4 font-light leading-relaxed max-w-2xl">
              {t("headerSubText")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5} direction="up">
            <p className="text-base md:text-lg text-white/60 mb-10 max-w-xl">
              {t("headerSmallSubText")}
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.6} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <GoldenButton
                variant="primary"
                size="lg"
                onClick={() => window.location.href = './about'}
              >
                {i18n.language === 'en' ? 'Learn More' : 'Узнать больше'}
              </GoldenButton>
              <GoldenButton
                variant="outline"
                size="lg"
                onClick={() => window.location.href = './gallery'}
              >
                {i18n.language === 'en' ? 'View Gallery' : 'Галерея'}
              </GoldenButton>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary/60 text-xs uppercase tracking-widest">
            {i18n.language === 'en' ? 'Scroll' : 'Прокрутите'}
          </span>
          <KeyboardArrowDownIcon className="text-primary animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Bottom golden line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </ParallaxBackground>
  );
}
