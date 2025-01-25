import React, { useState, useEffect, useRef } from 'react';
import video from '../assets/images/video.png';
import clock from '../assets/images/clock.png';
import connect from '../assets/images/connect.png';
import search from '../assets/images/search.png';
import manage from '../assets/images/manage.png';
import explore from '../assets/images/explore.png';

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
    },
    {
      icon: search,
      title: 'Unrivaled Property Search Experience',
      description: 'Seamlessly navigate the diverse real estate markets of Abuja and Lagos with our intuitive search interface. Tailor your search based on location, budget, preferred number of rooms, and property type to discover precisely what you desire.'
    },
    {
      icon: manage,
      title: 'Account Management',
      description: 'Create your account for a personalised experience, enabling you to:Save your favourite properties for future reference, Track your property inquiries effortlessly, Enjoy a seamless and tailored experience.'
    },
    {
      icon: explore,
      title: 'Explore, Enquire, Experience',
      description: 'Discover your dream property today by downloading RHEEL App. Your next home or investment opportunity awaits, embark on your real estate journey with absolute peace of mind. At RHEEL App, we`re not just redefining real estate; we`re revolutionising your experience.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuresData.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [featuresData.length]);

  // Get the three features to display
  const getDisplayFeatures = () => {
    return [
      featuresData[(currentIndex) % featuresData.length],
      featuresData[(currentIndex + 1) % featuresData.length],
      featuresData[(currentIndex + 2) % featuresData.length]
    ];
  };

  return (
    <section id={id} className='py-[100px] px-5 text-[#1B1C20] overflow-hidden'>
      <h1 className='text-3xl font-bold mb-8 text-center md:mb-[80px]'>
        Features for a better experience
      </h1>
      <div 
        ref={sliderRef}
        className='flex flex-col md:flex-row md:justify-between md:gap-5 md:px-[100px] px-[10px] gap-[50px]'
      > 
        {getDisplayFeatures().map((feature, index) => (
          <div 
            key={index}
            className='flex flex-col md:flex-row md:items-start md:w-[300px] gap-5 transition-all duration-500 ease-in-out'
          >
            <div className='flex justify-center'>
              <img 
                src={feature.icon} 
                alt="" 
                className='w-[70px] md:w-[150px]' 
              />
            </div>
            <div className='text-center md:text-start'>
              <h2 className='text-2xl md:text-xl mb-3 md:mb-1 md:font-bold md:text-[15px]'>
                {feature.title}
              </h2>
              <p className='text-[#383A47] md:text-[13px] text-[16px]'>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;