import React from 'react'
import phones from '../assets/images/phones.png'

const ChooseSection = () => {
  return (
    <section className='bg-[#F8F8FA] pb-5'>
      <div>
        <div className="image-cont">
            <img src={phones} alt="" className='w-[90%] mx-auto mb-8' />
        </div>
        <div className="text-container text-center px-8">
            <h2 className='text-[#1B1C20] text-2xl font-bold mb-8'>Why Choose Rheel App??</h2>
            <p className="text-[#383A47] text-[18px]">Step into the future of real estate with Rheel App – your ultimate companion for finding, buying, and selling properties in Abuja and Lagos. Whether you’re a first-time buyer, a seasoned investor, or simply looking for your dream home, Rheel App makes your journey effortless. Discover exclusive properties, save time, and enjoy the peace of mind that comes with transparency and trust.</p>
        </div>
      </div>
    </section>
  )
}

export default ChooseSection
