import { useTranslation } from 'react-i18next';
import AboutHero from './AboutHero';
import Gallery from './Gallery';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedStagger, AnimatedStaggerChild } from '../ui/AnimatedSection';
import { GlowingOrb } from '../ui/ParallaxBackground';

export default function About() {
  const [t] = useTranslation("global");
  const items: { header: string; text: string }[] = t('about.items', { returnObjects: true }) as { header: string; text: string }[];

  return (
    <div className="w-full relative bg-background">
      <AboutHero />

      {/* About Content Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Decorative orbs */}
        <GlowingOrb className="top-0 -right-32" size={400} />
        <GlowingOrb className="bottom-20 -left-32" size={350} color="accent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Profile Card */}
            <AnimatedSection>
              <div className="grid md:grid-cols-3 gap-8 p-8 rounded-2xl border border-primary/20 bg-surface/30 backdrop-blur-sm hover:shadow-glow transition-shadow duration-500">
                {/* Profile Image */}
                <div className="md:col-span-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-xl aspect-[3/4] md:aspect-auto md:h-full"
                  >
                    <img
                      className="w-full h-full object-cover -scale-x-100"
                      src="https://res.cloudinary.com/dqijwldax/image/upload/v1752191792/TourGuideVideos/dad1_znkwnw.jpg"
                      alt="Ahmed Asila - Tour Guide"
                    />
                    {/* Golden overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-xl" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary rounded-br-xl" />
                  </motion.div>
                </div>

                {/* Profile Info */}
                <div className="md:col-span-2 flex flex-col justify-center">
                  <AnimatedSection delay={0.2}>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
                      <span className="text-primary uppercase tracking-[0.2em] text-xs font-medium">
                        About Me
                      </span>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.3}>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
                      {t('about.welcome')}
                    </h2>
                  </AnimatedSection>

                  <AnimatedSection delay={0.4}>
                    <p className="text-white/70 leading-relaxed mb-8">
                      {t('about.describtion')}
                    </p>
                  </AnimatedSection>

                  {/* Info Grid */}
                  <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
                    {items.map((item, index) => (
                      <AnimatedStaggerChild key={index}>
                        <motion.div
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="p-4 rounded-lg border border-primary/10 bg-background/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                        >
                          <h6 className="text-primary font-semibold mb-1 group-hover:text-primary-light transition-colors">
                            {item.header}
                          </h6>
                          <p className="text-white/60 text-sm">{item.text}</p>
                        </motion.div>
                      </AnimatedStaggerChild>
                    ))}
                  </AnimatedStagger>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
            />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              {t('about.Gallery')}
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Explore the magnificent sights and memorable moments from our tours
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Gallery />
          </AnimatedSection>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </section>
    </div>
  );
}
