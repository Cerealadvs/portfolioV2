import React from 'react'
import Title from '../components/Title'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className='flex flex-col mb-10 mx-auto mt-16'>
      <div className='flex justify-center items-center'>
        <form
          action='https://getform.io/f/(customSlugHere)'
          method='POST'
          className='flex flex-col w-full md:w-7/12'>
          <Title>Contact</Title>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <input
            type='text'
            name='email'
            placeholder='Email'
            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <textarea
            name='message'
            placeholder='Message'
            rows='10'
            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <button
            type='button'
            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-teal-500 drop-shadow-md hover:stroke-white'>
            Work With Me
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
