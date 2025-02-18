import React from 'react'
import frame from '../assets/images/Frame 290911-1.png'

const CoreValuesSection = () => {
  return (
    <section className='py-8 bg-[#F8F8FA]'>
        <h2 className='text-4xl text-[#1B1C20] text-center font-bold mb-[30px]'>Core Values</h2>
        <div className='flex flex-col md:flex-row-reverse md:justify-between gap-7 px-5 md:px-[120px] md:py-8'>
            <div className="image-content">
                <img src={frame} alt="" className='w-[90%] mx-auto md:w-[350px] md:mx-0 md:mr-[40px]' />
            </div>
            <div className="text-content">
                <div className='mb-7'>
                    <h2 className='text-[#1B1C20] font-bold text-4xl mb-3'>Exclusive Property Insights</h2>
                    <p className='text-[#383A47] text-[13px]'>Gain a holistic understanding of your potential property with immersive details, including:</p>
                    <ul className='text-[#383A47] ml-10 text-[13px] list-disc'>
                        <li>Comprehensive property descriptions</li>
                        <li>Amenities that cater to your lifestyle</li>
                        <li>Professional-grade photos and videos showcasing the interior and exterior</li>
                        <li>Drone footage providing a unique perspective</li>
                        <li>Floor plans for a spatial understanding</li>
                        <li>Construction progress videos for properties under development.</li>
                    </ul>
                </div>
                <div>
                    <h2 h2 className='text-[#1B1C20] font-bold text-4xl mb-3'>Trust and Transparency</h2>
                    <ul className='text-[#383A47] ml-10 text-[13px] list-disc'>
                        <li>RHEEL App exclusively features properties under the esteemed Rheel Estate Limited portfolio.</li>
                        <li>Transparent transactions:  Purchase properties at the owner's asking price with no hidden costs</li>
                        <li>Rest easy knowing that each property listed on RHEEL App is genuine and trustworth</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CoreValuesSection