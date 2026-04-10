import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FlightIcon from '@mui/icons-material/Flight';
import { useTranslation } from 'react-i18next';
import ContactForm from './ui/ContactForm';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

export default function Footer() {
    const clientMail = import.meta.env.VITE_CLIENT_MAIL;
    const [t] = useTranslation("global");
    const socials: string[] = t('socials.FollowMe', { returnObjects: true }) as string[];

    const socialLinks = [
        {
            name: 'Instagram',
            icon: InstagramIcon,
            href: 'https://www.instagram.com/ahmed_russianguide_cairo_egypt',
            tooltip: socials[0],
            hoverClass: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400',
        },
        {
            name: 'WhatsApp',
            icon: WhatsAppIcon,
            href: 'https://wa.me/201117900555',
            tooltip: socials[2],
            hoverClass: 'hover:bg-green-500',
        },
        {
            name: 'Telegram',
            icon: TelegramIcon,
            href: 'https://t.me/+201012022433',
            tooltip: socials[3],
            hoverClass: 'hover:bg-blue-500',
        },
        {
            name: 'Email',
            icon: EmailOutlinedIcon,
            href: `mailto:${clientMail}`,
            tooltip: socials[1],
            hoverClass: 'hover:bg-primary',
        },
    ];

    return (
        <footer className="relative bg-background border-t border-primary/10">
            {/* Golden accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            {/* Main footer content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left side - Branding & Socials */}
                    <AnimatedSection direction="left">
                        <div>
                            {/* Logo */}
                            <div className="flex items-center gap-3 mb-6">
                                <FlightIcon className="text-primary text-3xl" />
                                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                                    AHMED ASILA
                                </span>
                            </div>

                            <p className="text-white/60 mb-8 max-w-md leading-relaxed">
                                Professional tour guide offering personalized Egyptian experiences.
                                Discover the wonders of ancient Egypt with local expertise.
                            </p>

                            {/* Social Links */}
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`
                                            flex items-center gap-2 px-4 py-3 rounded-lg
                                            border border-primary/20 bg-surface/50
                                            transition-all duration-300
                                            ${social.hoverClass}
                                            hover:border-transparent hover:text-white hover:shadow-lg
                                        `}
                                    >
                                        <social.icon className="text-xl" />
                                        <span className="text-sm font-medium">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right side - Contact Form */}
                    <AnimatedSection direction="right" delay={0.2}>
                        <div className="lg:pl-12 lg:border-l border-primary/10">
                            <h3 className="font-serif text-xl font-semibold text-white mb-6">
                                Get In Touch
                            </h3>
                            <ContactForm />
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-primary/10">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/40 text-sm">
                            &copy; {new Date().getFullYear()} Ahmed Asila. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-white/40">
                            <span>Professional Tour Guide</span>
                            <span className="h-1 w-1 rounded-full bg-primary/40" />
                            <span>Cairo, Egypt</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </footer>
    );
}
