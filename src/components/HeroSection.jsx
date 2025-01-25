import React from 'react'
import appleLogo from '../assets/images/apple-logo.svg'
import playstore from '../assets/images/playstore.svg'
import ellipseOne from '../assets/images/Ellipse 3.png'
import ellipseTwo from '../assets/images/Ellipse 4.png'
import ellipseThree from '../assets/images/Ellipse 5.png'
import hero from '../assets/images/hero.png'
import { Star } from 'lucide-react'

const HeroSection = () => {
    // Render star ratings
  const renderStars = (rating = 4) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? "fill-[#FFC947] text-[#FFC947]" : "text-gray-300 fill-gray-300"}
      />
    ));
  };
  return (
    <section className='px-5 py-7 flex flex-col gap-7'>
      <div className="text-content">
        <h1 className='text-[#1B1C20] text-5xl font-bold mb-5'>Buy, Sell and Rent without Hassle</h1>
        <p className='text-[#383A47] text-[18px] leading-[2rem] mb-5'>Our seamless gateway to properties in Abuja and Lagos. Explore Rheel App today for exclusive listings, trusted transactions, and unmatched convenience.</p>
        <div className="flex flex-row gap-3 mb-5 justify-center">
        <button className="flex gap-2 items-center bg-[#121212] text-white px-4 py-2 rounded-lg flex-shrink-0">
            <img src={appleLogo} alt="Apple Logo" className="w-[30px] h-[30px]" />
            <article className="text-left">
                <p className="text-[12px]">Download on the</p>
                <h5 className="font-bold text-base">Apple Store</h5>
            </article>
        </button>
        <button className="flex gap-2 items-center border border-[#121212] text-[#121212] px-4 py-2 rounded-lg flex-shrink-0">
            <img src={playstore} alt="Play Store Logo" className="w-[30px] h-[30px]" />
            <article className="text-left">
                <p className="text-[12px]">Download on the</p>
                <h5 className="font-bold text-base">Play Store</h5>
            </article>
        </button>
    </div>
    
        <div className="flex items-start gap-5 customer-review">
            <div className='flex '>
                <img src={ellipseOne} alt="" className='' />
                <img src={ellipseTwo} alt="" className=''  />
                <img src={ellipseThree} alt="" className=''  />
            </div>
            <article>
                <h3 className='text-4xl font-bold text-[#12141D] mb-3'>2,291</h3>
                <p className='text-[#383A47] text-[16px]'>Happy Customers</p>
            </article>
        </div>
        <div className='h-[2px] w-[100px] bg-[#12141D] mb-5'></div>
        <div>
            <h3 className='text-4xl font-bold text-[#12141D] mb-3'>4.8/5</h3>
            <div className='flex gap-1'>
                {renderStars(4)}
            </div>
        </div>
      </div>
      <div>
            <img src={hero} alt="" className='w-[100%]' />
      </div>
    </section>
  )
}

export default HeroSection
