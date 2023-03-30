import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projets from './pages/Projets'
import Contact from './pages/Contact'
import Timeline from './pages/Timeline'
import Cv from './pages/Cv'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div className='bg-slate-300'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projets />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/cv' element={<Cv />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
