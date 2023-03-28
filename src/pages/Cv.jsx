import React from 'react'
import Footer from '../components/Footer'
import CV from '/assets/CV.jpg'

function Cv() {
  return (
    <div className='mt-16'>
      <div
        className='flex justify-center
    '>
        <img src={CV} alt='CV' className='' />
      </div>
      <Footer />
      Cv
    </div>
  )
}

export default Cv
