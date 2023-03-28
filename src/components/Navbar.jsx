import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className='bg-slate-600 z-50 top-0  fixed  w-full'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <Link to='/' className='flex-shrink-0'>
                <img className='h-8 w-8' src='assets/knife-round.png' alt='Logo' />
              </Link>

              <ul className='hidden md:flex'>
                <li className='ml-10 flex items-baseline space-x-4'>
                  <Link
                    to='/projects'
                    className=' text-gray-300 hover:bg-gray-700 hover:text-white text-xl  px-3 py-2 rounded-md'>
                    Projets
                  </Link>
                  <Link
                    to='/skills'
                    className=' text-gray-300 hover:bg-gray-700 hover:text-white text-xl  px-3 py-2 rounded-md'>
                    Compétences
                  </Link>

                  <Link
                    to='/timeline'
                    className=' text-gray-300 hover:bg-gray-700 hover:text-white text-xl  px-3 py-2 rounded-md'>
                    Étapes
                  </Link>

                  <Link
                    to='/cv'
                    className=' text-gray-300 hover:bg-gray-700 hover:text-white text-xl  px-3 py-2 rounded-md'>
                    CV
                  </Link>

                  <Link
                    to='/contact'
                    className=' text-gray-300 hover:bg-gray-700 hover:text-white text-xl  px-3 py-2 rounded-md'>
                    Contact
                  </Link>
                  <Link
                    to='https://github.com/Cerealadvs'
                    target='_blank'
                    className=' text-gray-300 hover:bg-gray-700 hover:text-white text-xl  px-3 py-2 rounded-md'>
                    GitHub
                  </Link>
                  <Link
                    to='https://fr.linkedin.com/in/cyril-delteil-5542426b'
                    target='_blank'
                    className=' text-gray-300 hover:bg-gray-700 hover:text-white text-xl  px-3 py-2 rounded-md'>
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='bg-slate-600 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          {(ref) => (
            <div className='md:hidden' id='mobile-menu'>
              <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <Link
                  to='/projects'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Projets
                </Link>

                <Link
                  to='/skills'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Compétences
                </Link>

                <Link
                  to='/timeline'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Étapes
                </Link>

                <Link
                  to='/cv'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  CV
                </Link>

                <Link
                  to='/contact'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Contact
                </Link>
                <Link
                  to='https://github.com/Cerealadvs'
                  target='_blank'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  GitHub
                </Link>
                <Link
                  to='https://fr.linkedin.com/in/cyril-delteil-5542426b'
                  target='_blank'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  LinkedIn
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Nav
