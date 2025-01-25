import React from 'react'
import phones from '../assets/images/phones.png'
import desk from '../assets/images/image 1.png'

const ChooseSection = ({id}) => {
  return (
    <div className=''>
      <section id={id} className='bg-[#F8F8FA] pb-5 w-[95%] md:py-[50px] md:w-full md:flex md:items-start md:px-[100px] md mx-auto'>
        <div className="image-cont">
            <img src={phones} alt="" className='w-[90%] mx-auto mb-8 md:hidden' />
            <img src={desk} alt="" className='md:block hidden' />
        </div>
      <div className="text-container text-center  md:text-start md:mt-12  md:w-[30%] px-5 md:px-0">
            <h2 className='text-[#1B1C20] text-2xl font-bold mb-8 md:text-3xl md:mb-5'>Why Choose Rheel App??</h2>
            <p className="text-[#383A47] text-[18px] md:text-[13px]">Step into the future of real estate with Rheel App – your ultimate companion for finding, buying, and selling properties in Abuja and Lagos. Whether you’re a first-time buyer, a seasoned investor, or simply looking for your dream home, Rheel App makes your journey effortless. Discover exclusive properties, save time, and enjoy the peace of mind that comes with transparency and trust.</p>
        </div>
    </section>
    </div>
  )
}

export default ChooseSection
