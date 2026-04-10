import { useEffect, useMemo, useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Gallery from './components/Pages/Gallery';
import Contact from './components/Pages/Contact';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import NavDefault from './components/NavDefault';
import About from './components/Pages/About';
import ToursAll from './components/Pages/ToursAll';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [init, setInit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      background: {
        color: "#0A0A0A"
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: {
            enable: true,
            mode: "grab",
            parallax: { enable: true, force: 40, smooth: 10 }
          },
          resize: { enable: true }
        },
        modes: {
          push: { quantity: 2 },
          grab: { distance: 150, links: { opacity: 0.3 } },
          repulse: { distance: 200, duration: 0.4 }
        }
      },
      particles: {
        color: { value: "#C9A962" },
        links: {
          enable: true,
          color: "#C9A962",
          distance: 150,
          opacity: 0.1,
          width: 1
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: "out" as const,
          random: true,
          speed: 0.8,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 1200
          },
          value: 50
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
            startValue: "random" as const,
            destroy: "none" as const
          },
          value: {
            min: 0.1,
            max: 0.4
          }
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 3 }
        }
      }
    }), []);

  useEffect(() => {
    if (init) return;

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-container text-zinc-100 relative">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          >
            {/* Animated logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(201, 169, 98, 0.3)',
                    '0 0 60px rgba(201, 169, 98, 0.5)',
                    '0 0 30px rgba(201, 169, 98, 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center"
              >
                <span className="font-serif text-4xl text-primary font-bold">A</span>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-primary uppercase tracking-[0.4em] text-sm"
            >
              Loading
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="mt-4 w-48 h-0.5 bg-primary/20 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particles background */}
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="fixed inset-0 pointer-events-none"
        />
      )}

      <div className="relative z-10">
        <Router>
          <NavDefault />
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Main />
                  </motion.div>
                }
              />
              <Route
                path="/tourguide-portfolio"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Main />
                  </motion.div>
                }
              />
              <Route
                path="/Tours"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ToursAll />
                  </motion.div>
                }
              />
              <Route
                path="/gallery"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="pt-28 pb-16 min-h-screen"
                  >
                    <Gallery />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Contact />
                  </motion.div>
                }
              />
              <Route
                path="*"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="min-h-screen flex items-center justify-center"
                  >
                    <div className="text-center">
                      <h1 className="font-serif text-6xl text-primary mb-4">404</h1>
                      <p className="text-white/60">Page not found</p>
                    </div>
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
