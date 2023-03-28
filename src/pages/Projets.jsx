import React from 'react'
import Footer from '../components/Footer'
import IntroProjets from '../components/IntroProjets'
import Portfolio from '../components/Portfolio'

function Projets() {
  return (
    <div className='mt-16'>
      {/* margin et padding */}
      <IntroProjets />
      <Portfolio />
      <Footer />
      Projets ici ?
    </div>
  )
}

export default Projets
