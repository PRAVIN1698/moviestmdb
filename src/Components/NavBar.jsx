import React from 'react'
import logos from '../assets/Logos.png'
const NavBar = () => {
  return (
    <div className='flex  border pl-8 py-9 space-x-8 items-center'>
        <img src = {logos} className='w-[50px]'/>
        <h3>
            Movies
        </h3>
        <h3>
         Watchlist
        </h3>
    </div>
  )
}

export default NavBar