import React, { useState, useRef, useEffect } from 'react'
import house from '../assets/images/house.png'
import money from '../assets/images/money.png'
import key from '../assets/images/key.png'

const KeyFeaturesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardContainerRef = useRef(null);
    const totalCards = 3;
    const cardData = [
        {
            icon: house,
            title: 'Sell Your Property with Ease',
            description: 'Rheel App simplifies the selling process, connecting you directly with serious buyers. Save time, eliminate middlemen, and showcase your property to a wide audience with ease. Our platform ensures your property gets the visibility it deserves, making the entire process fast and hassle-free.'
        },
        {
            icon: money,
            title: 'Buy Properties with Confidence',
            description: 'Buying your dream property has never been easier. With Rheel App, you’ll enjoy a streamlined experience, detailed property insights, and complete transparency. From luxury homes to investment opportunities, find the perfect property that matches your needs – all with unmatched convenience.'
        },{
            icon: key,
            title: 'Lease Your Property with zero hassle',
            description: 'Rheel App simplifies the selling process, connecting you directly with serious buyers. Save time, eliminate middlemen, and showcase your property to a wide audience with ease. Our platform ensures your property gets the visibility it deserves, making the entire process fast and hassle-free.'
        }
    ]

    const handleNavigate = (direction) => {
        const container = cardContainerRef.current;
        const cardWidth = container.offsetWidth;
        let nextIndex;
    
        if (direction === 'next') {
          nextIndex = (activeIndex + 1) % totalCards;
        } else {
          nextIndex = activeIndex === 0 ? totalCards - 1 : activeIndex - 1;
        }
    
        container.scrollTo({
          left: cardWidth * nextIndex,
          behavior: 'smooth',
        });
        setActiveIndex(nextIndex);
    };

    useEffect(() => {
        const container = cardContainerRef.current;
        if (container) {  // Check if the container exists before adding the event listener
            const handleScroll = () => {
              const scrollPosition = container.scrollLeft;
              const cardWidth = container.offsetWidth;
              const currentIndex = Math.round(scrollPosition / cardWidth);
              setActiveIndex(currentIndex);
            };
     
            container.addEventListener('scroll', handleScroll);
     
            return () => container.removeEventListener('scroll', handleScroll);
        }
     }, []);
     

    useEffect(() => {
   const container = cardContainerRef.current;
   if (container) {  // Check if the container exists before adding the event listener
       const handleScroll = () => {
         const scrollPosition = container.scrollLeft;
         const cardWidth = container.offsetWidth;
         const currentIndex = Math.round(scrollPosition / cardWidth);
         setActiveIndex(currentIndex);
       };

       container.addEventListener('scroll', handleScroll);

       return () => container.removeEventListener('scroll', handleScroll);
   }
}, []);


  return (
   <div>
     <section className="bg-[#016A52] bg-[url('/src/assets/images/Shapes.png')] md:px-[120px] px-2 bg-no-repeat py-[50px] w-[95%] md:w-full mx-auto mb-5 md:mb-8">
        <h2 className='font-bold text-white text-3xl mb-[50px] md:mb-[100px] text-center'>Key Features</h2>
        <div className="relative">
            {/* Previous Button */}
          <button 
            onClick={() => handleNavigate('prev')}
            className="absolute left-10 top-1/2 cursor-pointer -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md hidden md:flex items-center justify-center"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#121661" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div 
          className='card-slider flex md:gap-[70px] overflow-x-auto snap-x snap-mandatory space-x-[20px]'
          ref={cardContainerRef}
          >
            {cardData.map((card, index) => (
                <div
                  key={index}
                  className='bg-white snap-center shrink-0 w-[90vw] md:w-[480px] flex flex-col justify-center items-center text-center  px-4 py-8 pb-5 rounded-[15px] md:rounded-[10px]'
                >
                    <img src={card.icon} alt="" className='mb-3' />
                    <h3 className='mb-3 text-xl font-bold text-[#FD6003]'>{card.title}</h3>
                    <p className='text-[#383A47] text-[15px]'>{card.description}</p>
                </div>
            ))}
          </div>

          {/* Next Button */}
      <button 
          onClick={() => handleNavigate('next')}
          className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md hidden md:flex items-center justify-center"
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="#121661" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Indicator Dots - Now visible on all screen sizes */}
      <div className="indicator-dots md:hidden flex justify-center mt-8">
        {cardData.map((_, index) => (
          <span
            key={index}
            className={`dot h-[15px] w-[15px] mx-2 rounded-full cursor-pointer ${
              index === activeIndex
                ? 'bg-[#FD6003]'
                : 'bg-gray-100'
            }`}
            onClick={() => {
              const container = cardContainerRef.current;
              const cardWidth = container.offsetWidth;
              container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth',
              });
              setActiveIndex(index);
            }}
          ></span>
        ))}
      </div>

        </div>
       

    </section>
   </div>
  )
}

export default KeyFeaturesSection