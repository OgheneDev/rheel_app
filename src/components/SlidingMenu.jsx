import React from 'react';
import { X } from 'lucide-react';
import logo from '../assets/images/white-logo.png';
import appleLogo from '../assets/images/apple-logo.svg';
import playstoreLogo from '../assets/images/playstore.svg';

const SlidingMenu = ({ isVisible, toggleMenu, scrollToSection }) => {
  const menuItems = [
    { id: 'features', label: 'Features' },
    { id: 'why-us', label: 'Why us?' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'property-listing', label: 'Property Listing' },
  ];

  const handleMenuItemClick = (id) => {
    scrollToSection(id);
    toggleMenu();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[url('/src/assets/images/Shapes.png')] bg-no-repeat bg-left-top h-screen bg-[#016A52] z-50 transform transition-transform duration-300 overflow-y-auto ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-5">
        <div className='flex justify-between items-center mb-12'>
          <X 
            size={24} 
            className='text-white cursor-pointer' 
            onClick={toggleMenu} 
          />
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <nav className="flex flex-col text-white space-y-6 mb-8">
          {menuItems.map(({ id, label }) => (
            <div
              key={id}
              className="cursor-pointer hover:text-gray-300 transition-colors"
              onClick={() => handleMenuItemClick(id)}
            >
              {label}
            </div>
          ))}
        </nav>

        <div className="flex flex-row gap-3">
          <a 
            href="#" 
            className="flex gap-2 items-center bg-[#121212] text-white px-4 py-2 rounded-lg flex-shrink-0"
          >
            <img src={appleLogo} alt="Apple Logo" className="w-[30px] h-[30px]" />
            <div className="text-left">
              <p className="text-[8px] leading-tight">Download on the</p>
              <h5 className="font-bold text-[10px]">App Store</h5>
            </div>
          </a>
          <a 
            href="#" 
            className="flex gap-2 items-center border border-white text-white px-4 py-2 rounded-lg flex-shrink-0"
          >
            <img src={playstoreLogo} alt="Play Store Logo" className="w-[30px] h-[30px]" />
            <div className="text-left">
              <p className="text-[8px] leading-tight">Get it on</p>
              <h5 className="font-bold text-[10px]">Google Play</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlidingMenu;