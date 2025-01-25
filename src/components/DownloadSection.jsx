import React from 'react'
import appleLogo from '../assets/images/apple-logo.svg'
import playstore from '../assets/images/playstore.svg'

const DownloadSection = () => {
  return (
    <div>
        <section className='p-[30px] md:px-[100px] text-[#1B1C20] w-[95%] md:w-full mx-auto text-center bg-[#FAFAFA]'>
        <h1 className='font-bold text-3xl mb-8'>Download Rheel Estate Mobile App today</h1>
        <p className='text-[16px] mb-8 md:text-[14px]'>Available for download on both the Apple App Store and Google Play Store, RHEEL App is your digital key to an elevated real estate adventure. Powered by Rheel Estate Limited, a registered and trusted real estate consulting and brokerage firm, we are committed to setting new standards of transparency and excellence.</p>
        <div className="flex flex-row justify-center gap-3 mb-10">
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
    </section>
    </div>
  )
}

export default DownloadSection