import { useState } from 'react'
import '../css/Discover.css'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import CustomDialog from './ui/ModalWithChildren';
import ParallaxBackground, { GlowingOrb } from './ui/ParallaxBackground';
import AnimatedSection from './ui/AnimatedSection';
import GoldenButton from './ui/GoldenButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Discover() {
    const [SelectedVideo, setSelectedVideo] = useState('Vid1.mp4');
    const [t] = useTranslation("global");

    const startVideo = (video: string) => {
        setSelectedVideo(video)
        setIsDialogOpen(true)
    }

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleCloseDialog = () => {
        setIsDialogOpen(false)
    };

    const videos = [
        { id: 'Vid1.mp4', thumbnail: 'thumbnail1.jpg', title: 'Tour Experience' },
        { id: 'Vid2.mp4', thumbnail: 'thumbnail2.jpg', title: 'Adventure Awaits' },
    ];

    return (
        <ParallaxBackground
            imageUrl="https://ssniper.sirv.com/TourguideProject/boat.jpg"
            className="min-h-screen py-24"
            overlayOpacity={0.7}
            parallaxStrength={0.2}
        >
            {/* Decorative orbs */}
            <GlowingOrb className="top-20 -right-20" size={350} />
            <GlowingOrb className="bottom-20 -left-20" size={300} color="accent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Content side */}
                    <div className="text-center lg:text-left">
                        <AnimatedSection direction="left">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <span className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
                                <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
                                    Experience
                                </span>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.1} direction="left">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
                                {t('discover.secondHeader')}
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} direction="left">
                            <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-lg">
                                {t('discover.subtext')}
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3} direction="left">
                            <GoldenButton
                                variant="primary"
                                size="lg"
                                onClick={() => startVideo('Instagram.mp4')}
                            >
                                <PlayArrowIcon />
                                Watch Full Experience
                            </GoldenButton>
                        </AnimatedSection>
                    </div>

                    {/* Video thumbnails side */}
                    <AnimatedSection delay={0.3} direction="right">
                        <div className="grid gap-6">
                            {videos.map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                                    onClick={() => startVideo(video.id)}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative overflow-hidden rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
                                        {/* Thumbnail */}
                                        <div className="aspect-video overflow-hidden">
                                            <img
                                                src={`https://ssniper.sirv.com/TourguideProject/Gallery/${video.thumbnail}`}
                                                alt={video.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                        {/* Play button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                                            >
                                                <PlayArrowIcon className="text-background text-3xl ml-1" />
                                            </motion.div>
                                        </div>

                                        {/* Title */}
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h4 className="text-white font-medium text-lg group-hover:text-primary transition-colors duration-300">
                                                {video.title}
                                            </h4>
                                            <span className="text-white/60 text-sm">Click to watch</span>
                                        </div>

                                        {/* Golden accent on hover */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-dark via-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Video Modal */}
            <CustomDialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                confirmText="Confirm"
                className="overflow-y-hidden !w-fit mx-0"
                cancelText="close"
            >
                <video
                    autoPlay
                    onContextMenu={e => e.preventDefault()}
                    className="max-h-[70vh] z-3 rounded-lg"
                    controls
                    src={`https://ssniper.sirv.com/TourguideProject/Videos/${SelectedVideo}`}
                />
            </CustomDialog>
        </ParallaxBackground>
    );
}
