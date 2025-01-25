import React from 'react'
import video from '../assets/images/video.png'
import clock from '../assets/images/clock.png'
import connect from '../assets/images/connect.png'

const FeaturesSection = () => {
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
    <section className='py-[100px] px-5 text-[#1B1C20]'>
      <h1 className='text-4xl font-bold mb-8 text-center '>Features for a better experience</h1>
      <div className='flex flex-col px-[10px] gap-[50px]'> 
      {featuresData.map((feature, index) => (
        <div 
          key={index}
          className='flex flex-col gap-5'
          >
         <div className='flex justify-center'>
           <img src={feature.icon} alt="" className='w-[70px]' />
         </div>
         <div className='text-center'>
         <h2 className='text-3xl mb-3 '>{feature.title}</h2>
         <p className='text-[#383A47] text-[18px]'>{feature.description}</p>
         </div>
       </div>
      ))}

      </div>
    </section>
  )
}

export default FeaturesSection
