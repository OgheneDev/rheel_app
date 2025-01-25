import React from 'react';
import video from '../assets/images/video.png';
import clock from '../assets/images/clock.png';
import connect from '../assets/images/connect.png';
import search from '../assets/images/search.png';
import manage from '../assets/images/manage.png';
import explore from '../assets/images/explore.png';

const FeaturesSection = ({ id }) => {
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
      description: 'Create your account for a personalised experience, enabling you to: Save your favourite properties for future reference, Track your property inquiries effortlessly, Enjoy a seamless and tailored experience.'
    },
    {
      icon: explore,
      title: 'Explore, Enquire, Experience',
      description: 'Discover your dream property today by downloading RHEEL App. Your next home or investment opportunity awaits, embark on your real estate journey with absolute peace of mind. At RHEEL App, we`re not just redefining real estate; we`re revolutionising your experience.'
    }
  ];

  return (
    <section id={id} className="py-[100px] md:px-[100px] px-5 text-[#1B1C20]">
      <h1 className="text-3xl font-bold mb-8 text-center md:mb-[80px]">
        Features for a better experience
      </h1>
      
      {/* Slider (desktop only) */}
      <div className="relative overflow-hidden hidden md:block">
        <div className="flex flex-col md:flex-row gap-4 animate-scroll">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start md:w-[100px] gap-5 transition-all duration-500 ease-in-out"
            >
              <div className="flex justify-center">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-[70px] md:w-[150px]"
                />
              </div>
              <div className="text-center md:text-start">
                <h2 className="text-2xl md:text-xl mb-3 md:mb-1 md:font-bold md:text-[15px]">
                  {feature.title}
                </h2>
                <p className="text-[#383A47] md:text-[13px] text-[16px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Normal mapped features for mobile */}
      <div className="block md:hidden">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-5 mb-8"
          >
            <div className="flex justify-center">
              <img
                src={feature.icon}
                alt=""
                className="w-[70px] md:w-[150px]"
              />
            </div>
            <div className="text-center md:text-start">
              <h2 className="text-2xl md:text-xl mb-3 md:mb-1 md:font-bold md:text-[15px]">
                {feature.title}
              </h2>
              <p className="text-[#383A47] md:text-[13px] text-[16px]">
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
