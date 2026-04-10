import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FlightIcon from '@mui/icons-material/Flight';
import LanguageIcon from '@mui/icons-material/Language';

export default function NavDefault() {
    const [t, i18n] = useTranslation("global");
    const navText: string[] = t('nav', { returnObjects: true }) as string[];
    const [CurrentLang, setCurrentLang] = useState(i18n.language);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const changeLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ru') : i18n.changeLanguage('en');
        localStorage.setItem("language", i18n.language);
        setCurrentLang(i18n.language);
    };

    useEffect(() => {
        const localLang = localStorage.getItem("language");
        i18n.changeLanguage(localLang || 'en');
        setCurrentLang(i18n.language);
    }, [CurrentLang, i18n]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const pages = [
        { text: navText[0], path: '' },
        { text: navText[2], path: 'gallery' },
        { text: navText[3], path: 'about' },
    ];

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => {
        if (path === '' && (location.pathname === '/' || location.pathname === '/tourguide-portfolio')) return true;
        return location.pathname === `/${path}`;
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-background/80 backdrop-blur-xl border-b border-primary/10'
                        : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <motion.div
                                whileHover={{ rotate: 15 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <FlightIcon className="text-primary text-2xl" />
                            </motion.div>
                            <span className="font-serif text-xl font-bold tracking-wider text-white group-hover:text-primary transition-colors duration-300">
                                AHMED
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {pages.map((page) => (
                                <Link
                                    key={page.text}
                                    to={`/${page.path}`}
                                    className="relative px-5 py-2 group"
                                >
                                    <span className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                                        isActive(page.path) ? 'text-primary' : 'text-white/70 hover:text-white'
                                    }`}>
                                        {page.text}
                                    </span>
                                    {/* Animated underline */}
                                    <motion.span
                                        className="absolute bottom-0 left-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                                        initial={{ width: 0, x: '-50%' }}
                                        animate={{
                                            width: isActive(page.path) ? '80%' : 0,
                                            x: '-50%'
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    {/* Hover underline */}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary/50 group-hover:w-[60%] transition-all duration-300" />
                                </Link>
                            ))}
                        </div>

                        {/* Right side - Language toggle */}
                        <div className="flex items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={changeLanguage}
                                className="flex items-center gap-2 px-3 py-2 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                            >
                                <LanguageIcon className="text-primary text-xl" />
                                <span className="text-xs font-semibold uppercase text-primary">
                                    {CurrentLang}
                                </span>
                            </motion.button>

                            {/* Mobile menu button */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 text-white hover:text-primary transition-colors"
                            >
                                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu content */}
                        <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
                            {pages.map((page, index) => (
                                <motion.div
                                    key={page.text}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={`/${page.path}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-2xl font-serif font-medium tracking-wider transition-colors duration-300 ${
                                            isActive(page.path) ? 'text-primary' : 'text-white hover:text-primary'
                                        }`}
                                    >
                                        {page.text}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Decorative line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 80 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
