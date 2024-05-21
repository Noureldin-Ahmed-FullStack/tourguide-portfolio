import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import BigBG from './Components/BigBG';
import NavTest from './Components/NavTest';
import NavDefault from './Components/NavDefault';
import Footer from './Components/Footer';
import Tours from './Components/Tours';
import Discover from './Components/Discover';



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
      <BigBG />
      {/* <Navbar /> */}
      <NavDefault />
      <Tours />
      <Discover />
    </>
  )
}

export default App
