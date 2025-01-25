import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import frame from '../assets/images/Frame 2892.png';
import playstore from '../assets/images/playstore.svg';
import { MenuIcon } from 'lucide-react';
import SlidingMenu from './SlidingMenu';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsVisible(false); // Close menu
    } else {
      console.error(`Section with ID "${sectionId}" not found`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 flex justify-between items-center px-5 md:px-[100px] py-7">
      <img src={logo} alt="Rheel Estate logo" className="md:w-[100px] w-[70px]" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-5 text-[12px] cursor-pointer text-[#1B1C20]">
        <li onClick={() => scrollToSection('features')}>Features</li>
        <li onClick={() => scrollToSection('why-us')}>Why us?</li>
        <li onClick={() => scrollToSection('appointments')}>Appointments</li>
        <li onClick={() => scrollToSection('property-listing')}>Property listing</li>
      </ul>

      <button className="hidden md:flex gap-5 text-[12px] bg-[#016A52] text-white rounded-sm p-3 py-[5px]">
        <div className="flex gap-2 items-center">
          <img src={frame} alt="" className="w-[20px] h-[20px]" />
          <img src={playstore} alt="" className="w-[10px] h-[10px]" />
        </div>
        Download App
      </button>

      <MenuIcon size="25" className="md:hidden" onClick={toggleMenu} />
      {isVisible && (
        <SlidingMenu
          isVisible={isVisible}
          toggleMenu={toggleMenu}
          scrollToSection={scrollToSection}
        />
      )}
    </nav>
  );
};

export default Navbar;
