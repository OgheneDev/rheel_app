import React from 'react';
import appleLogo from '../assets/images/apple-logo.svg';
import playstore from '../assets/images/playstore.svg';
import header from '../assets/images/header.png'
import { Star } from 'lucide-react';
import images from '../assets/images/images.png'

const HeroSection = () => {
  const renderStars = (rating = 4) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={15}
        className={index < rating ? 'fill-[#FFC947] text-[#FFC947] md:w-[12px]' : 'text-gray-300 md:w-[12px] fill-gray-300'}
      />
    ));
  };

  return (
    <section className="relative w-full h-full px-5 md:px-[100px] py-7 flex flex-col md:flex-row md:gap-[300px] gap-7">
      <div className="text-content z-10 md:w-[37%] relative">
        <h1 className="text-[#1B1C20] text-4xl font-bold mb-5">Buy, Sell and Lease without Hassle</h1>
        <p className="text-[#383A47] text-[18px] md:text-[13px] leading-[2rem] mb-5">
          Our seamless gateway to properties in Abuja and Lagos. Explore Rheel App today for exclusive listings, trusted transactions, and unmatched convenience.
        </p>
        <div className="flex flex-row gap-3 mb-5 md:mb-[100px]">
          <button className="flex gap-2 items-center bg-[#121212] text-white px-4 py-2 rounded-lg flex-shrink-0">
            <img src={appleLogo} alt="Apple Logo" className="w-[30px] h-[30px]" />
            <div className="text-left">
              <p className="text-[8px]">Download on the</p>
              <h5 className="font-bold text-[10px]">Apple Store</h5>
            </div>
          </button>
          <button className="flex gap-2 items-center border border-[#121212] text-[#121212] px-4 py-2 rounded-lg flex-shrink-0">
            <img src={playstore} alt="Play Store Logo" className="w-[30px] h-[30px]" />
            <div className="text-left">
              <p className="text-[8px]">Download on the</p>
              <h5 className="font-bold text-[10px]">Play Store</h5>
            </div>
          </button>
        </div>
        <div className='md:flex '>
        <div className="flex items-start gap-5 customer-review">
          <img src={images} alt="" className='w-[130px] md:w-[70px]' />
          <div>
            <h3 className="text-3xl md:text-xl md:mb-1  font-bold text-[#12141D] mb-3">2,291</h3>
            <p className="text-[#383A47] text-[15px] md:text-[12px]">Happy Customers</p>
          </div>
        </div>
        <div className="h-[2px] w-[62px] md:rotate-90 md:h-[1px] md:mt-5 md:w-[25px] bg-[#12141D] mb-5"></div>
        <div>
          <h3 className="text-3xl font-bold text-[#12141D] mb-3 md:mb-1 md:text-xl">4.8/5</h3>
          <div className="flex gap-2 items-center  mb-5">
          <div className="flex gap-1">{renderStars(4)}</div>
          <p className='text-[#383A47] text-[15px] md:text-[12px]'>Rating</p>
          </div>
        </div>
        </div>
      </div>

      <div className="image-container w-[450px]">
        <img src={header} alt=""  />
      </div>
      
    </section>
  );
};

export default HeroSection;