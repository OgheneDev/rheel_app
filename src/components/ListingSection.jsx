import React from 'react'
import inbox from '../assets/images/inbox.png'

const ListingSection = () => {
  return (
    <section className='bg-[#F8F8FA] py-[80px]'> 
        <div className="image-container">
            <img src={inbox} alt="" className='mx-auto' />
        </div>
        <div className="text-container  px-5">
            <h2 className='text-[#1B1C20] text-4xl text-center font-bold mb-8'>Easy Property Listing</h2>
            <p className="text-[#383A47] text-center text-[20px] mb-10">Listing your property has never been easier! With Rheel App, homeowners can connect directly with potential buyers. Simply request a callback from our agents by clicking the ‘Request Inspection’ button, fill out a quick form, and let us handle the rest. Your property will be live and visible to thousands of users in no time.</p>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <h3 className='text-3xl text-[#1B1C20] font-bold uppercase'>43k+</h3>
                    <p className='text-[#383A47] text-[18px]'>Satisfied <br />Client</p>
                </div>
                <div className='flex gap-2'>
                    <h3 className='text-3xl text-[#1B1C20] font-bold uppercase'>7m+</h3>
                    <p className='text-[#383A47] text-[18px]'>Completed <br />trades</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ListingSection