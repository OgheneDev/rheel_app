import React from 'react'
import card from '../assets/images/package.png'
import appleLogo from '../assets/images/apple-logo.svg'
import playstore from '../assets/images/playstore.svg'

const AppointmentSection = ({id}) => {
  return (
    <section id={id} className='py-[50px] md:flex flex-row-reverse md:gap-[100px] md:px-[100px]'>
        <div className="image-container">
            <img src={card} alt="" className='mx-auto w-[300px] md:w-[60%]' />
        </div>
        <div className="text-container px-[20px] md:w-[60%]">
            <h1 className='text-[#1B1C20] text-3xl font-bold mb-5 md:mb-[100px]'>Hassle-Free Appointment Booking</h1>
            <p className="text-[#383A47] text-[16px] mb-7 md:text-[12px]">Take the stress out of scheduling property viewings with our seamless appointment booking feature. Select your preferred date and time directly within the app, and our agents will confirm the visit. Whether you’re buying, selling, or renting, Rheel App ensures a smooth and convenient process tailored to your schedule.</p>
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
        </div>
    </section>
  )
}

export default AppointmentSection