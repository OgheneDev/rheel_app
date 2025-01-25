import React from 'react'
import inbox from '../assets/images/inbox.png'

const ListingSection = () => {
  return (
    <div>
        <section className='bg-[#F8F8FA] py-[80px] pb-5 mb-7 px-3 mx-auto w-[95%]'> 
        <div className="image-container">
            <img src={inbox} alt="" className='mx-auto' />
        </div>
        <div className="text-container ">
            <h2 className='text-[#1B1C20] text-3xl text-center font-bold mb-8'>Easy Property Listing</h2>
            <p className="text-[#383A47] text-center text-[16px] mb-10">Listing your property has never been easier! With Rheel App, homeowners can connect directly with potential buyers. Simply request a callback from our agents by clicking the ‘Request Inspection’ button, fill out a quick form, and let us handle the rest. Your property will be live and visible to thousands of users in no time.</p>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <h3 className='text-3xl text-[#1B1C20] font-bold uppercase'>4.3k+</h3>
                    <p className='text-[#383A47] text-[12px]'>Satisfied <br />Client</p>
                </div>
                <div className='flex gap-2'>
                    <h3 className='text-3xl text-[#1B1C20] font-bold uppercase'>7m+</h3>
                    <p className='text-[#383A47] text-[12px]'>Completed <br />trades</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ListingSection