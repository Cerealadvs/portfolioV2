import React from 'react'

import pokemon from '/assets/pokemon.jpg'

function CardoTesto() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3'>
        <div class='group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
          <div>
            <img
              class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
              src={pokemon}
              alt='pokemon'
            />
          </div>
          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div class='absolute inset-0 flex translate-y-[70%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
            <h1 class='font-dmserif text-3xl font-bold text-white'>Pokémon Match Card</h1>
            <p class='mb-3 text-start text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Objectifs:
              <br />
              Petit jeu de mémory fait sur la base de pokémon et de cartes à trouver.
              <br />
              Évent Javascript
            </p>

            <div className='flex'>
              <a
                class='rounded-full hover:bg-orange-600 bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'
                href='https://cerealadvs.github.io/pokemon-card-match/'>
                GitHub
              </a>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                HTML5
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                CSS3
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardoTesto
