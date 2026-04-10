import MyCarousel from './MyCarousel';
import '../css/Tours.css'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import { GlowingOrb } from './ui/ParallaxBackground';

export default function Tours() {
    const [t] = useTranslation("global");

    return (
        <section className="relative py-24 overflow-hidden bg-background">
            {/* Decorative elements */}
            <GlowingOrb className="top-0 right-0" size={300} />
            <GlowingOrb className="bottom-0 left-0" size={250} color="accent" />

            {/* Section header */}
            <div className="container mx-auto px-6 mb-16 relative z-10">
                <AnimatedSection className="text-center">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
                    />
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-white">
                        {t('Tours.Header')}
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                        {t('Tours.subtext')}
                    </p>
                </AnimatedSection>
            </div>

            {/* Carousel section */}
            <AnimatedSection delay={0.3}>
                <div className="relative">
                    {/* Gradient overlays for carousel edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                    
                    <MyCarousel />
                </div>
            </AnimatedSection>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}
