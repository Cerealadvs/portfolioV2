import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import Navbar from './components/Navbar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Timeline from './components/Timeline'

const App = () => {
  return (
    <div className='bg-slate-300'>
      {/* TODO:  Test background en couleur bg-gradient-to-b from-orange-300 to-blue-500*/}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
