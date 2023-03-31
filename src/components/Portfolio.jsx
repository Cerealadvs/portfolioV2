import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'
import knife from '/assets/knife-round.png'

const Portfolio = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {portfolio.map((project) => (
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
        <img className='h-8 w-8' src='assets/knife-round.png' alt='Logo' />
        <img src={knife} alt='Logo' className='h-8 w-8' />
      </div>
    </div>
  )
}

export default Portfolio
