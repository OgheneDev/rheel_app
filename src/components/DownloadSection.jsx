import React from 'react'
import appleLogo from '../assets/images/apple-logo.svg'
import playstore from '../assets/images/playstore.svg'

const DownloadSection = () => {
  return (
    <section className='p-[30px] text-[#1B1C20] text-center bg-[#FAFAFA]'>
        <h1 className='font-bold text-4xl mb-8'>Download Rheel Estate Mobile App today</h1>
        <p className='text-[18px] mb-8'>Available for download on both the Apple App Store and Google Play Store, RHEEL App is your digital key to an elevated real estate adventure. Powered by Rheel Estate Limited, a registered and trusted real estate consulting and brokerage firm, we are committed to setting new standards of transparency and excellence.</p>
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
    </section>
  )
}

export default DownloadSection