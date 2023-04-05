import React from 'react'

import AllCards from './AllCards'
import CardsTest from './CardsTest'

import ProjetsOC from './ProjetsOC'
import CardsOC from './CardsOC'
import ProjetsPerso from './ProjetsPerso'
import CardsPerso from './CardsPerso'

const Portfolio = () => {
  return (
    <div>
      {/* <AllCards /> */}
      <ProjetsPerso />
      <CardsPerso />
      <ProjetsOC />
      {/* <CardsTest /> */}
      <CardsOC />
    </div>
  )
}

export default Portfolio
