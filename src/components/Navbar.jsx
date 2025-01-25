import React from 'react'
import logo from '../assets/images/logo.png'
import frame from '../assets/images/Frame 2892.png'
import playstore from '../assets/images/playstore.svg';
import { MenuIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex justify-between  items-center px-5 md:px-[100px] py-7'>
      <img src={logo} alt="Rheel Estate logo" className='md:w-[100px]' />

      {/*Desktop Menu */}
      <ul className='hidden md:flex gap-5 text-[12px] text-[#1B1C20]'>
        <li>Features</li>
        <li>Why us?</li>
        <li>Appointment</li>
        <li>Property listing</li>
      </ul>

      <button className='hidden md:flex gap-5 text-[12px] bg-[#016A52] text-white rounded-sm p-3 py-[5px]'>
        <div className='flex gap-2 items-center'>
          <img src={frame} alt="" className='w-[20px] h-[20px]' />
          <img src={playstore} alt="" className='w-[10px] h-[10px]' />
        </div>
        Download App
      </button>



      <MenuIcon size="25" className='md:hidden' />
    </nav>
  )
}

export default Navbar
