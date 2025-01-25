import React from 'react'
import video from '../assets/images/video.png'
import clock from '../assets/images/clock.png'
import connect from '../assets/images/connect.png'

const FeaturesSection = ({id}) => {
    const featuresData = [
        {
            icon: video,
            title: 'Property Visualization like never Before',
            description: 'Explore a diverse range of listings, including duplexes, terraces, bungalows, apartments, lands, and carcass buildings. Your dream property is just a search away.'
        },
        {
            icon: clock,
            title: 'Fast and Efficient Process',
            description: 'Save time with our streamlined processes. From quick property searches to fast transactions, Rheel App ensures you achieve your real estate goals without unnecessary delays.'
        },
        {
            icon: connect,
            title: 'Secure and Confidential',
            description: 'Your data and transactions are safeguarded with industry-leading security measures. Rheel App values your privacy and ensures a trusted environment for all users.'
        }
    ]
  return (
    <section id={id} className='py-[100px] px-5 text-[#1B1C20]'>
      <h1 className='text-3xl font-bold mb-8 text-center md:mb-[80px]'>Features for a better experience</h1>
      <div className='flex flex-col md:flex-row md:justify-between md:gap-0 md:px-[100px] px-[10px] gap-[50px]'> 
      {featuresData.map((feature, index) => (
        <div 
          key={index}
          className='flex flex-col md:flex-row md:items-start md:w-[300px] gap-5'
          >
         <div className='flex justify-center'>
           <img src={feature.icon} alt="" className='w-[70px] md:w-[150px]' />
         </div>
         <div className='text-center md:text-start'>
         <h2 className='text-2xl md:text-xl mb-3 md:mb-1 md:font-bold md:text-[15px] '>{feature.title}</h2>
         <p className='text-[#383A47] md:text-[13px] text-[16px]'>{feature.description}</p>
         </div>
       </div>
      ))}

      </div>
    </section>
  )
}

export default FeaturesSection
