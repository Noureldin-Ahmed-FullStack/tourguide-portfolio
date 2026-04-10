import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ParallaxBackground, { GlowingOrb } from '../ui/ParallaxBackground';
import AnimatedSection from '../ui/AnimatedSection';

export default function AboutHero() {
  const [t] = useTranslation("global");

  return (
    <ParallaxBackground
      imageUrl="https://res.cloudinary.com/dqijwldax/image/upload/v1752186974/TourGuideVideos/pyramids_aul0nq.jpg"
      className="h-[70vh] min-h-[500px] flex items-center justify-center"
      overlayOpacity={0.6}
      parallaxStrength={0.2}
    >
      {/* Decorative orbs */}
      <GlowingOrb className="top-20 -left-20" size={300} />
      <GlowingOrb className="bottom-20 -right-20" size={250} color="accent" />

      <div className="container mx-auto px-6 relative z-10 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative label */}
          <AnimatedSection delay={0.1}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
                Tour Guide
              </span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent via-primary to-transparent" />
            </motion.div>
          </AnimatedSection>

          {/* Main title */}
          <AnimatedSection delay={0.2}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Ahmed </span>
              <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                Abdul Alim
              </span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection delay={0.3}>
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              {t('about.subtitle')}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('about.subsubtitle')}
            </p>
          </AnimatedSection>

          {/* Decorative line */}
          <AnimatedSection delay={0.5}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-10"
            />
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom golden line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </ParallaxBackground>
  );
}
