import React from 'react'
import desk from '../assets/images/image 1.png'

const ChooseSection = ({id}) => {
  return (
    <div className=''>
      <section id={id} className='bg-[#F8F8FA] pb-5 w-[95%] md:py-[50px] md:w-full md:flex md:items-start md:px-0 '>
        <div className="image-cont">
            <img src={desk} alt="" className='w-[90%] mx-auto mb-8 md:hidden' />
            <img src={desk} alt="" className='md:block hidden' />
        </div>
      <div className="text-container text-center  md:text-start md:mt-12  md:w-[30%] px-5 md:px-0">
            <h2 className='text-[#1B1C20] text-4xl font-bold mb-8  md:mb-5'>Why Choose Rheel App??</h2>
            <p className="text-[#383A47] text-[18px] md:text-[13px]">Are you ready to transcend your real estate experience in Abuja? Look no further. Rheel App is your digital gateway to a world of exclusive properties, unmatched convenience,and unparalleled benefits. Whether you're a first-time buyer, seasoned investor, or simply seeking your next dream home, Rheel App is designed to elevate your journey from start to finish.</p>
        </div>
    </section>
    </div>
  )         
}

export default ChooseSection
