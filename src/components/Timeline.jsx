import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'

const Timeline = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20  pb-10'>
      <h1
        className='sm:text-5xl text-4xl md:text-7xl mb-1 md:mb-3 text-teal-500 dark:text-white'
        id='Project'>
        Étapes
      </h1>

      <div className='flex flex-col md:flex-row justify-center mt-16'>
        <div className='w-full md:w-7/12'>
          {timeline.map((item) => (
            <TimelineItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
