import React from 'react'
import card from '../assets/images/Card.png'
import appleLogo from '../assets/images/apple-logo.svg'
import playstore from '../assets/images/playstore.svg'

const AppointmentSection = () => {
  return (
    <section className='py-[50px]'>
        <div className="image-container">
            <img src={card} alt="" className='mx-auto' />
        </div>
        <div className="text-container px-[20px]">
            <h1 className='text-[#1B1C20] text-3xl font-bold mb-8'>Hassle-Free Appointment Booking</h1>
            <p className="text-[#383A47] text-[18px] mb-7">Take the stress out of scheduling property viewings with our seamless appointment booking feature. Select your preferred date and time directly within the app, and our agents will confirm the visit. Whether you’re buying, selling, or renting, Rheel App ensures a smooth and convenient process tailored to your schedule.</p>
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
        </div>
    </section>
  )
}

export default AppointmentSection