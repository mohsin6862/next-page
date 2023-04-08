import React from 'react'
import Lottie from 'lottie-react'
import reader from '../About/reader.json'
import {  Bars3BottomRightIcon, BoltIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='px-4 py-16 sm-max-w-xl l=md-max-w-full lg:max-w-screen-2xl mx-auto md:px-24 lg:px-8 lg-20 flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <div>
            <p className='badge'>On Sale!</p>
          </div>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            A reader lives a <br className='hidden md:block' /> thousand lives{' '}
            <span className='inline-block text-blue-400'>before he dies</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
        </div>
        <div className=' flex flex-col items-center md:flex-row'>
          <Link to='/books' className=' md:w-auto md:mr-4'>
            <div className='btn inline-flex items-center justify-center w-full h-full'>
              <p className='mr-3'>Visit Store</p>
              <ShoppingBagIcon className='w-5 text-gray-100' />
            </div>
          </Link>
          <Link
            to='/about'
            className='inline-flex items-center btn-2'
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  )
}

export default Home