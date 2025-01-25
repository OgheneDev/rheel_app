import React from 'react';
import appleLogo from '../assets/images/apple-logo.svg';
import playstore from '../assets/images/playstore.svg';
import ellipseOne from '../assets/images/Ellipse 3.png';
import ellipseTwo from '../assets/images/Ellipse 4.png';
import ellipseThree from '../assets/images/Ellipse 5.png';
import hero from '../assets/images/hero.png';
import jenny from '../assets/images/jenny.png';
import ronny from '../assets/images/ronny.png';
import { Star } from 'lucide-react';

const HeroSection = () => {
  const renderStars = (rating = 4) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'fill-[#FFC947] text-[#FFC947]' : 'text-gray-300 fill-gray-300'}
      />
    ));
  };

  return (
    <section className="relative w-full h-full px-5 py-7 flex flex-col gap-7">
      <div className="text-content z-10 relative">
        <h1 className="text-[#1B1C20] text-4xl font-bold mb-5">Buy, Sell and Rent without Hassle</h1>
        <p className="text-[#383A47] text-[18px] leading-[2rem] mb-5">
          Our seamless gateway to properties in Abuja and Lagos. Explore Rheel App today for exclusive listings, trusted transactions, and unmatched convenience.
        </p>
        <div className="flex flex-row gap-3 mb-5">
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
        <div className="flex items-start gap-5 customer-review">
          <div className="flex">
            <img src={ellipseOne} alt="" className="" />
            <img src={ellipseTwo} alt="" className="" />
            <img src={ellipseThree} alt="" className="" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#12141D] mb-3">2,291</h3>
            <p className="text-[#383A47] text-[14px]">Happy Customers</p>
          </div>
        </div>
        <div className="h-[2px] w-[100px] bg-[#12141D] mb-5"></div>
        <div>
          <h3 className="text-3xl font-bold text-[#12141D] mb-3">4.8/5</h3>
          <div className="flex gap-1">{renderStars(4)}</div>
        </div>
      </div>
      <div className="absolute w-80 h-70 bottom-10 right-5 rounded-full bg-yellow-400 z-0"></div>
      <div className="relative z-10">
        <img src={hero} alt="Woman" className="w-[90%] mx-auto h-auto" />
      </div>
      <div className="absolute bottom-[170px] right-0 bg-gradient-to-r from-white to-pink-100 rounded-lg shadow-md p-2 max-w-[250px] z-10">
        <div className="flex">
          <img src={jenny} alt="Jenny Wilson" className="w-[40px] h-[40px] rounded-full mr-2" />
          <div>
          <span className="font-medium text-[10px] text-[#12141D]">Jenny Wilson</span>
          <p className="text-[#383A47] text-[9px]">As an agent using reel has moved my business forward and helped reach larger audience</p>
          </div>
        </div>
        
      </div>
      <div className="absolute bottom-15 left-3 bg-gradient-to-r from-white to-pink-100 rounded-lg shadow-md p-2 max-w-xs z-10">
        <div className="flex items-center">
          <img src={ronny} alt="Ronald Richards" className="w-[40px] h-[40px] rounded-full mr-2" />
          <div>
          <span className="font-medium text-[10px] text-[#12141D]">Ronald Richards</span>
          <p className="text-[#383A47] text-[9px]">One of the best real estate app I have ever used.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;