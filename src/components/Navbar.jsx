import React from 'react'
import logo from '../assets/images/logo.png'
import { MenuIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex justify-between  items-center px-5 py-7'>
      <img src={logo} alt="Rheel Estate logo" className="w-[100px]" />

      <MenuIcon size="35" />
    </nav>
  )
}

export default Navbar
