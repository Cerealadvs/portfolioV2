import React from 'react'

function IntroProjets() {
  return (
    <div className='flex items-center justify-center flex-col text-center pb-6'>
      <h1
        className='sm:text-5xl text-4xl md:text-7xl mb-1 md:mb-3 text-teal-500 dark:text-white'
        id='Project'>
        Mes Projets
      </h1>
      <p className='text-md py-5 leading-8 text-slate-800 dark:text-slate-500 md:text-xl max-w-xl mx-auto'>
        Voici les différents projets que j'ai réalisés dans le cadre de ma formation chez{' '}
        <span className='text-teal-500'>
          {' '}
          <a href='https://openclassrooms.com/fr/'>OpenClassrooms</a>{' '}
        </span>{' '}
        . Vous pouvez consulter d'autres projets sur{' '}
        <span className='text-teal-500'>
          {' '}
          <a href='https://github.com/Cerealadvs'> Github</a>{' '}
        </span>{' '}
        et voir ceux sur lesquels je travaille en ce moment.
      </p>
      <p className='text-md py-5 leading-8 text-slate-800 dark:text-slate-500 md:text-xl max-w-xl mx-auto'>
        Que ce soit du front ou du back, je travaille principalement avec les technologies du web
        actuellement.
      </p>
    </div>
  )
}

export default IntroProjets
