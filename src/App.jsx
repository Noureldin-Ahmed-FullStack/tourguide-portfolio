import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import BigBG from './Components/BigBG';
import NavTest from './Components/NavTest';
import NavDefault from './Components/NavDefault';
import Footer from './Components/Footer';
import ToursAll from './Components/Pages/ToursAll';
import Discover from './Components/Discover';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Gallery from './Components/Pages/Gallery';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';



function App() {
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
    <>
      <Router>
      <NavDefault />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Tours" element={<ToursAll />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>lol wrong route</h1>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
