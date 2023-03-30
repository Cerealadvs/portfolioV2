import React from 'react'

const TimelineItem = () => {
  return (
    <div className='flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700'>
      <div className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            En ce moment
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>Développeur web</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>~</div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Actuellement en train d'effectuer différents projets pour approfondir mes connaissances en
          développement et tout ce qui est lié aux technologies du web: <br />
          HTML, CSS, JavaScript, Tailwind, Frameworks, React, Express, Base de données, Mongo DB, etc..
        </p>

        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2023
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>Portfolio</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>20h</div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Réalisation de ce portfolio avec React, Tailwind, Vite
        </p>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2023
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>Pokémon Match Card</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>5h</div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Petit jeu de mémory fait sur la base de pokémon et de cartes à trouver. <br />
          Évent Javascript
        </p>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2023
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>Snake</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>5h</div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Création d'un petit jeu snake,
          <br /> Évent Javascript
        </p>

        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2022
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>OpenClassrooms</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>1 an</div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Validation de la formation développeur web sur OpenClassrooms,
          <br />
          les projets ci-dessous sont en lien avec la formation
        </p>

        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2022
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>Groupomania</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>50h</div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Créer un réseau social d'entreprise avec React,
          <br />
          Objectifs:
          <br />
          Authentifier un utilisateur et maintenir sa session,
          <br />
          Implémenter un stockage de données sécurisées en utilisant une base de données,
          <br />
          Développer l'interface d'un site web grâce à un framework front-end
        </p>

        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2022
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>Pííquante</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>50h</div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Construire une API sécurisée pour une application d'avis gastronomiques,
          <br />
          Objectifs:
          <br />
          Mettre en œuvre des opérations CRUD de manière sécurisée,
          <br />
          Implémenter un modèle logique de données conformément à la réglementation,
          <br />
          Stocker des données de manière sécurisée
        </p>

        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2022
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>Kanap</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>90h</div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Construire un site e-commerce en JavaScript,
          <br />
          Objectifs:
          <br />
          Créer un plan de test pour une application,
          <br />
          Valider des données issues de sources externes,
          <br />
          Interagir avec un web service avec JavaScript,
          <br />
          Gérer des événements JavaScript
        </p>

        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2022
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>La Panthère</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>30h</div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Optimiser un site existant et assurer l'accessibilité d'un site,
          <br />
          Objectifs:
          <br />
          Réaliser une recherche des bonnes pratiques en développement web,
          <br />
          Optimiser le référencement d'un site web,
          <br />
          Optimiser la taille et la vitesse d'un site web,
          <br />
          Écrire un code HTML et CSS maintenable
        </p>

        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2022
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>Oh my food</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>70h</div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Dynamiser une page web avec des animations CSS
          <br />
          Objectifs:
          <br />
          Mettre en œuvre des effets CSS graphiques avancés,
          <br />
          Mettre en place une structure de navigation pour un site web,
          <br />
          Assurer la cohérence graphique d'un site web,
          <br />
          Utiliser un système de gestion de versions pour le suivi du projet et son hébergement,
          <br />
          Mettre en place son environnement Front-End
        </p>

        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2022
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>Booki</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>90h</div>
        </p>
        <p className='my-2  mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Transformez une maquette en site web avec HTML & CSS
          <br />
          Objectifs:
          <br />
          Intégrer du contenu conformément à une maquette,
          <br />
          Implémenter une interface responsive
        </p>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2022
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>OpenClassrooms</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>1 an</div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Suivi de la fromation développeur web sur OpenClassrooms,
          <br />
          les projets ci-dessus sont en lien avec la formation
        </p>

        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            2020
          </span>
          <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>Première ligne de code</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>
            le commencement
          </div>
        </p>
        <p className='my-2 mx-16 text-left font-normal text-stone-500 dark:text-stone-400'>
          Durant la pandémie de COVID-19 je me suis amusé sur une application téléphone MIMO, j'ai commencé à
          coder et voir si cela me plaisait. Quelques mois plus tard je validais la certification me donnant
          envie de continuer sur un vrai environnement de développement
        </p>
      </div>
    </div>
  )
}

export default TimelineItem
