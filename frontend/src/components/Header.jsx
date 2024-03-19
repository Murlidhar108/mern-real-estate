import React from 'react'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'


export default function Header() {
  return (
    <>
      <header className='bg-slate-200 shadow-lg'>
        <div className='flex justify-between items-center mx-auto mx-w-6xl p-3'>  
          
            <h1 className='font-bold text-md flex flex-wrap:wrap' >
              <span className='text-pink-500'>Murlidhar</span>
            <Link to='/' >
              <span className='ml-4 text-slate-600'>Real</span>
              <span className='text-slate-700'>Estate</span>
            </Link>
            </h1>

          <form className=' bg-slate-100 p-3 rounded-3xl flex items-center' >
            <input type="text" placeholder='search here ...' className='bg-transparent focus:outline-none
            width-25 sm:w-65' />
            <FaSearch className='text-blue-400'/>
          </form>

          <ul className='flex gap-4'>
            <Link to='/home' ><li className='hover:underline text-slate-700'>Home</li></Link>
            <Link to='/about' ><li className='hover:underline text-slate-700'>About</li></Link>
            <Link to='/sign-in' ><li className='hover:underline text-slate-700'>Signin</li></Link>
          </ul>
        </div>
      </header>
    </>
  )
}






