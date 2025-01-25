import React from 'react'
import house from '../assets/images/house.png'
import money from '../assets/images/money.png'

const KeyFeaturesSection = () => {
    const keyData = [
        {
            icon: house,
            title: 'Sell Your Property with Ease',
            description: 'Rheel App simplifies the selling process, connecting you directly with serious buyers. Save time, eliminate middlemen, and showcase your property to a wide audience with ease. Our platform ensures your property gets the visibility it deserves, making the entire process fast and hassle-free.'
        },
        {
            icon: money,
            title: 'Buy Properties with Confidence',
            description: 'Buying your dream property has never been easier. With Rheel App, you’ll enjoy a streamlined experience, detailed property insights, and complete transparency. From luxury homes to investment opportunities, find the perfect property that matches your needs – all with unmatched convenience.'
        }
    ]

  return (
   <div>
     <section className="bg-[#016A52] bg-[url('/src/assets/images/Shapes.png')] bg-no-repeat py-[50px] w-[95%] md:w-full mx-auto mb-5 md:mb-8">
        <h2 className='font-bold text-white text-4xl mb-[50px] text-center'>Key Features</h2>
        <div className='flex md:px-[100px] flex-col md:flex-row gap-[50px]'>
            {keyData.map((feature, index) => (
                <div
                  key={index}
                  className='bg-white flex flex-col justify-center items-center text-center w-[90%] mx-auto px-4 py-8 pb-5 rounded-[15px]'
                >
                    <img src={feature.icon} alt="" className='mb-3' />
                    <h3 className='mb-3 text-xl font-bold text-[#FD6003]'>{feature.title}</h3>
                    <p className='text-[#383A47] text-[15px]'>{feature.description}</p>
                </div>
            ))}
        </div>

    </section>
   </div>
  )
}

export default KeyFeaturesSection