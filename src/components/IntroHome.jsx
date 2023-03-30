import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import knife from '/assets/knife-round.png'

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20  pb-10'>
      <h1 className='sm:text-5xl text-4xl md:text-7xl mb-1 md:mb-3 text-teal-500 dark:text-white'>
        Cyril Delteil
      </h1>
      <h2 className='flex sm:text-3xl text-2xl pt-4 md:text-4xl mb-3 text-slate-600'>
        Je suis un
        <TypeAnimation
          sequence={['développeur', 2000, 'explorateur du web', 2000, 'passionné de technologie', 2000]}
          wrapper='div'
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '1em', paddingLeft: '5px' }}
        />
      </h2>
      {/* TODO: On garde ? */}
      <p className='text-md py-5 leading-8 text-slate-800 dark:text-slate-500 md:text-xl max-w-xl mx-auto'>
        Actuellement à la recherche d'une expérience professionnelle dans le développement web.
      </p>
      <p className='text-md leading-8 text-gray-800 dark:text-slate-400 my-5 max-w-xl md:text-xl'>
        Mes amis me décrivent comme un <span className='text-teal-500'>couteau suisse </span> ; je m'adapte à
        toutes les situations. Ce trait de personnalité m'a toujours permis de travailler dans les domaines
        qui m’intéressaient. Très curieux, j'aime explorer de nouveaux domaines de connaissances et c'est tout
        naturellement que je suis arrivé dans l'informatique. Actuellement en reconversion dans le{' '}
        <span className='text-teal-500'>web</span>, je cherche une première
        <span className='text-teal-500'> expérience</span> dans le développement.
      </p>

      <img src={knife} alt='Logo' />
      {/* className='sm:w-10/12 TODO:'taille en petit trop proche des bords */}

      {/* TODO: idée: créer des liens sur les différents outils (ouverture de menu en liens)f */}
    </div>
  )
}

export default Intro
