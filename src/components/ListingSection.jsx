import React, { useState, useEffect, useRef } from 'react';
import inbox from '../assets/images/Screenshot 2025-01-23 at 2.33.19 AM 111.png';

const ListingSection = ({ id }) => {
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [completedTrades, setCompletedTrades] = useState(0);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      let clientCount = 0;
      let tradeCount = 0;

      const clientInterval = setInterval(() => {
        clientCount += 0.1; // Increment by 0.1
        if (clientCount >= 4.3) {
          clientCount = 4.3; // Cap at the target value
          clearInterval(clientInterval);
        }
        setSatisfiedClients(clientCount);
      }, 50); // Adjust speed as needed

      const tradeInterval = setInterval(() => {
        tradeCount += 0.1; // Increment by 0.1
        if (tradeCount >= 7) {
          tradeCount = 7; // Cap at the target value
          clearInterval(tradeInterval);
        }
        setCompletedTrades(tradeCount);
      }, 50); // Adjust speed as needed

      return () => {
        clearInterval(clientInterval);
        clearInterval(tradeInterval);
      };
    }
  }, [inView]);

  return (
    <div>
      <section
        ref={sectionRef}
        id={id}
        className="bg-[#F8F8FA] py-[80px] md:flex pb-5 mb-7 md:py-[80px] md:mb-0 md:px-[120px] justify-between px-3 mx-auto w-[95%] md:w-full"
      >
        <div className="image-container">
          <img src={inbox} alt="" className="mx-auto md:mx-0 md:w-[60%] mb-7 md:mb-0" />
        </div>
        <div className="text-container md:mt-[30px] md:w-[50%]">
          <h2 className="text-[#1B1C20] text-4xl text-center md:text-start font-bold mb-8">
            Easy Property Listing
          </h2>
          <p className="text-[#383A47] text-center md:text-start text-[16px] mb-10">
            Listing your property has never been easier! With Rheel App, homeowners can connect
            directly with potential buyers. Simply request a callback from our agents by clicking
            the ‘Request Inspection’ button, fill out a quick form, and let us handle the rest. Your
            property will be live and visible to thousands of users in no time.
          </p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <h3 className="text-3xl text-[#1B1C20] font-bold uppercase">
                {satisfiedClients.toFixed(1)}k+
              </h3>
              <p className="text-[#383A47] text-[12px]">
                Satisfied <br />
                Clients
              </p>
            </div>
            <div className="flex gap-2">
              <h3 className="text-3xl text-[#1B1C20] font-bold uppercase">
                {completedTrades.toFixed(1)}m+
              </h3>
              <p className="text-[#383A47] text-[12px]">
                Completed <br />
                Trades
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingSection;
