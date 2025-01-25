import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-[#797B89] py-12 px-6">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Company Logo" className='w-[150px] mb-4' />
        </div>
        
        <div className="flex justify-center">
          <nav>
            <ul className='flex items-center gap-5 text-[12px] text-[#1B1C20] font-medium'>
              <li><a href="#" className="hover:text-[#FD6003] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#FD6003] transition-colors">Why Us?</a></li>
              <li><a href="#" className="hover:text-[#FD6003] transition-colors">Appointments</a></li>
              <li><a href="#" className="hover:text-[#FD6003] transition-colors">Property Listing</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="flex space-x-6 justify-center md:justify-end">
          <a href="#" className="text-[#FD6003] hover:opacity-80 transition-opacity">
            <Twitter size={24} fill="#FD6003" />
          </a>
          <a href="#" className="text-[#FD6003] hover:opacity-80 transition-opacity">
            <Facebook size={24} fill="#FD6003" />
          </a>
          <a href="#" className="text-[#FD6003] hover:opacity-80 transition-opacity">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-[#FD6003] hover:opacity-80 transition-opacity">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.195c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.665.24 2.895.12 3.195c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" fill="currentColor" />
            </svg>
          </a>
        </div>
        
        <div className="col-span-full border-t border-[#D4D4D8] my-6"></div>
        
        <div className="col-span-full text-center">
          <p className="text-sm text-[#797B89]">&copy; Copyright 2025, All Rights Reserved</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-sm text-[#1B1C20] hover:text-[#FD6003] transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-[#1B1C20] hover:text-[#FD6003] transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;