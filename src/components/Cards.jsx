import React from 'react'

import booki from '/assets/booki.jpg'
import ohmyfood from '/assets/ohmyfood.jpg'
import lapanthere from '/assets/lapanthere.jpg'
import kanap from '/assets/kanap.jpg'
import hottakes from '/assets/hottakes.jpg'
import groupomania from '/assets/groupomania.jpg'
import portfolioV1 from '/assets/portfolioV1.jpg'
import snake from '/assets/snake.jpg'
import pokemon from '/assets/pokemon.jpg'

function Cards() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3'>
        <div class='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
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
            <p class='mb-3 text-start sm:text-sm md:text-lg lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Objectifs:
              <br />
              Petit jeu de mémory fait sur la base de pokémon et de cartes à trouver.
              <br />
              Évent Javascript
            </p>

            <div className='flex'>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                HTML5
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                CSS3
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                JavaScript
              </p>
              <a
                class='rounded-full hover:bg-orange-600 bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'
                href='https://cerealadvs.github.io/pokemon-card-match/'>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
          <div class=''>
            <img
              class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
              src={snake}
              alt='snake'
            />
          </div>
          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div class='absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
            <h1 class='font-dmserif text-3xl font-bold text-white'>Snake</h1>
            <p class='mb-3 text-start sm:text-sm md:text-lg lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Objectifs:
              <br />
              Création d'un petit jeu snake,
              <br />
              Évent Javascript
            </p>
            <div className='flex'>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                HTML5
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                CSS3
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                JavaScript
              </p>
              <a
                class='rounded-full hover:bg-orange-600 bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'
                href='https://cerealadvs.github.io/snake/'>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
          <div class=''>
            <img
              class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
              src={portfolioV1}
              alt='portfolioV1'
            />
          </div>
          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div class='absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
            <h1 class='font-dmserif text-3xl font-bold text-white'>Portfolio V1</h1>
            <p class='mb-3 text-start sm:text-sm md:text-lg lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Objectifs:
              <br />
              Réalisation de mon premier portfolio, gestin du thème sombre et clair seont les préférences
              utlisateur.
            </p>
            <div className='flex'>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                React
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                Tailwind
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                Create React App
              </p>
              <a
                class='rounded-full hover:bg-orange-600 bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'
                href='https://github.com/Cerealadvs/portofolio'>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
          <div class=''>
            <img
              class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
              src={groupomania}
              alt='groupomania'
            />
          </div>
          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div class='absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
            <h1 class='font-dmserif text-3xl font-bold text-white'>Groupomania</h1>
            <p class='mb-3 text-start sm:text-sm md:text-lg lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Objectifs:
              <br />
              Authentifier un utilisateur et maintenir sa session,
              <br />
              Implémenter un stockage de données sécurisées en utilisant une base de données,
              <br />
              Développer l'interface d'un site web grâce à un framework front-end
            </p>
            <div className='flex'>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                React
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                Node.Js
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                Express
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                MongoDB
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                API
              </p>
              <a
                class='rounded-full hover:bg-orange-600 bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'
                href='https://github.com/Cerealadvs/Groupomania'>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
          <div class=''>
            <img
              class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
              src={hottakes}
              alt='pííquante'
            />
          </div>
          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div class='absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
            <h1 class='font-dmserif text-3xl font-bold text-white'>Pííquante</h1>
            <p class='mb-3 text-start sm:text-sm md:text-lg lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Objectifs:
              <br />
              Mettre en œuvre des opérations CRUD de manière sécurisée,
              <br />
              Implémenter un modèle logique de données conformément à la réglementation,
              <br />
              Stocker des données de manière sécurisée
            </p>
            <div className='flex'>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                Angular
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                Node.Js
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                Express
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                MongoDB
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                API
              </p>
              <a
                class='rounded-full hover:bg-orange-600 bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'
                href='https://github.com/Cerealadvs/Piiquante'>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
          <div class=''>
            <img
              class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
              src={kanap}
              alt='kanap'
            />
          </div>
          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div class='absolute inset-0 flex translate-y-[75%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
            <h1 class='font-dmserif text-3xl font-bold text-white'>Kanap</h1>
            <p class='mb-3 text-start sm:text-sm md:text-lg lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
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
            <div className='flex'>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                HTML5
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                CSS3
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                JavaScript
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                API
              </p>
              <a
                class='rounded-full hover:bg-orange-600 bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'
                href='https://github.com/Cerealadvs/Kanap'>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
          <div class=''>
            <img
              class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
              src={lapanthere}
              alt='la panthere'
            />
          </div>
          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div class='absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
            <h1 class='font-dmserif text-3xl font-bold text-white'>La Panthère</h1>
            <p class='mb-3 text-start sm:text-sm md:text-lg lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
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
            <div className='flex'>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                HTML5
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                CSS3
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                SASS
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                SEO
              </p>
              <a
                class='rounded-full hover:bg-orange-600 bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'
                href='https://cerealadvs.github.io/LaPanthere/'>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
          <div class=''>
            <img
              class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
              src={ohmyfood}
              alt='oh my food'
            />
          </div>
          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div class='absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
            <h1 class='font-dmserif text-3xl font-bold text-white'>Oh my food</h1>
            <p class='mb-3 text-start sm:text-sm md:text-lg lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Objectifs:
              <br />
              Mettre en œuvre des effets CSS graphiques avancés,
              {/* <br />
            Mettre en place une structure de navigation pour un site web, */}
              <br />
              Assurer la cohérence graphique d'un site web,
              <br />
              Utiliser un système de gestion de versions pour le suivi du projet et son hébergement,
              <br />
              Mettre en place son environnement Front-End
            </p>
            <div className='flex'>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                HTML5
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                CSS3
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                SASS
              </p>
              <a
                class='rounded-full hover:bg-orange-600 bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'
                href='https://cerealadvs.github.io/OhMyFood/index.html'>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
          <div class=''>
            <img
              class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
              src={booki}
              alt='booki'
            />
          </div>
          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
          <div class='absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
            <h1 class='font-dmserif text-3xl font-bold text-white'>Booki</h1>
            <p class='mb-3 text-start sm:text-sm md:text-lg lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Objectifs:
              <br />
              Intégrer du contenu conformément à une maquette,
              <br />
              Implémenter une interface responsive
            </p>
            <div className='flex'>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                HTML5
              </p>
              <p className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'>
                CSS3
              </p>
              <a
                class='rounded-full hover:bg-orange-600 bg-neutral-900 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60'
                href='https://cerealadvs.github.io/Booki/'>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
