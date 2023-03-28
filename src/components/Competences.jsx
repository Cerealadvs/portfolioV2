import React from 'react'

import html from '/assets/html.svg'
import css from '/assets/css.svg'
import sass from '/assets/sass.svg'
import express from '/assets/express.svg'
import js from '/assets/js.svg'
import mongo from '/assets/mongo.svg'
import react from '/assets/react.svg'
import tailwind from '/assets/tailwind.svg'
import node from '/assets/node.svg'
import api from '/assets/api.svg'
import seo from '/assets/seo.svg'
import vite from '/assets/vite.svg'
import typescript from '/assets/typescript.svg'
import git from '/assets/git.svg'
import github from '/assets/github.svg'
import cra from '/assets/cra.svg'

function Competences() {
  return (
    <div className='flex flex-col text-center pt-20 pb-10'>
      <h1
        className='sm:text-5xl text-4xl md:text-7xl mb-1 md:mb-3 text-teal-500 dark:text-white'
        id='Project'>
        Mes Compétences
      </h1>
      <p className='text-md py-5 leading-8 text-slate-800 dark:text-slate-500 md:text-xl max-w-xl mx-auto'>
        Au travers ces projets j'ai pu travailler avec différentes technologies :
      </p>

      <div className=' m-10 lg:flex gap-10 shadow-lg p-10 rounded-xl my-2 dark: shadow-slate-600'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 place-items-center'>
          <div>
            <img src={mongo} width={100} height={100} alt='mongo' />
            <p className=' text-center py-2 leading-8 text-gray-800 dark:text-slate-400'>Mongo.DB</p>
          </div>

          <div>
            <img src={express} width={100} height={100} alt='express' />
            <p className=' text-center py-2 leading-8 text-gray-800 dark:text-slate-400'>Express</p>
          </div>
          <div>
            <img src={react} width={100} height={100} alt='react' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>React</p>
          </div>
          <div>
            <img src={node} width={100} height={100} alt='node' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>Node.js</p>
          </div>
          <div>
            <img src={tailwind} width={100} height={100} alt='tailwind' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>Tailwind</p>
          </div>
          <div>
            <img src={html} width={100} height={100} alt='html' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>HTML</p>
          </div>
          <div>
            <img src={css} width={100} height={100} alt='css' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>CSS</p>
          </div>
          <div>
            <img src={sass} width={100} height={100} alt='sass' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>SASS</p>
          </div>
          <div>
            <img src={js} width={100} height={100} alt='js' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>
              JavaScript
            </p>
          </div>
          <div>
            <img src={typescript} width={100} height={100} alt='typescript' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>
              TypeScript
            </p>
          </div>
          <div>
            <img src={api} width={100} height={100} alt='api' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800  dark:text-slate-400'>API REST</p>
          </div>
          <div>
            <img src={seo} width={100} height={100} alt='seo' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>
              Référencement
            </p>
          </div>
          <div>
            <img src={cra} width={100} height={100} alt='github' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>
              Create React App
            </p>
          </div>
          <div>
            <img src={vite} width={100} height={100} alt='vite' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>Vite</p>
          </div>
          <div>
            <img src={git} width={100} height={100} alt='git' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>Git</p>
          </div>
          <div>
            <img src={github} width={100} height={100} alt='github' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>Github</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competences
