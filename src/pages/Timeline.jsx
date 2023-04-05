import React from 'react'
import TimelineItem from '../components/TimelineItem'
import Footer from '../components/Footer'

function Timeline() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20  pb-10'>
      <h1
        className='sm:text-5xl text-4xl md:text-7xl mb-1 md:mb-3 text-teal-500 dark:text-white'
        id='Project'>
        Étapes
      </h1>

      <div className='flex flex-col md:flex-row justify-center mt-16'>
        <div className='w-full md:w-7/12'>
          <TimelineItem />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Timeline
