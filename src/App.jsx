import { useEffect, useMemo, useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDefault from './Components/NavDefault';
import ToursAll from './Components/Pages/ToursAll';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Gallery from './Components/Pages/Gallery';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from '../src/assets/particles.json'; // Adjust the path as needed


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
}))
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
  const { darkMode, setDarkmode } = useState(true);
  const setDarkmodeFunc = () => {
    setDarkmode(false);
    document.querySelector("body").setAttribute('data-theme', 'dark')
    const theme = localStorage.setItem('theme', "dark")
  }
  const setLightmodeFunc = () => {
    setDarkmode(true);
    document.querySelector("body").setAttribute('data-theme', 'light')
    const theme = localStorage.setItem('theme', "light")
  }
  return (
    <div className="main-container">
      <Particles
        id="tsparticles"
        options={options}
        />
      <div className='z-0'>
        <Router>
          <NavDefault />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tourguide-portfolio" element={<Main />} />
            <Route path="/Tours" element={<ToursAll />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>lol wrong route</h1>} />
          </Routes>
        </Router>

      </div>
    </div>
  )
}

export default App
