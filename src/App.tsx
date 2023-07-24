import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MechClass from './pages/MechClass'
import LightMechs from './pages/LightMechs'
import MediumMechs from './pages/MediumMechs'
import HeavyMechs from './pages/HeavyMechs'
import AssaultMechs from './pages/AssaultMechs'
import Mech from './pages/Mech'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mechs" element={<MechClass />} />
        <Route path="light-mechs" element={<LightMechs />} />
        <Route path="medium-mechs" element={<MediumMechs />} />
        <Route path="heavy-mechs" element={<HeavyMechs />} />
        <Route path="assault-mechs" element={<AssaultMechs />} />
        <Route path="mechs/:id" element={<Mech />} />
      </Routes>
    </Router>
      
  )
}

export default App
