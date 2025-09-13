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


function App() {
  const [init, setInit] = useState(false);
  const options = useMemo(
    () => ({
      fpsLimit: 60,
      background: {
        color: "#161815"
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: { enable: false, force: 60, smooth: 10 }
          },
          resize: true
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 }
        }
      },
      particles: {
        color: { value: "#ffffff" },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: false,
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.05,
            sync: true,
            startValue: "max",
            count: 1,
            destroy: "min"
          },
          value: {
            min: 0,
            max: 0.5
          }
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 5 }
        }
      }
    }), [])
  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="main-container text-zinc-100">
      <Particles
        id="tsparticles"
        options={options as any}
      />
      <div className='z-0'>
        <Router>
          <NavDefault />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tourguide-portfolio" element={<Main />} />
            <Route path="/Tours" element={<ToursAll />} />
            <Route path="/gallery" element={<div className='mt-28'><Gallery /></div>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>lol wrong route</h1>} />
          </Routes>
          <Footer />
        </Router>

      </div>
    </div>
  )
}

export default App
