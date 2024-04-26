import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
export default function Tired() {
  return (
    <div className="bg-white xl:mt-24 md:py-4 sm:max-md:-mt-2 px-2 py-10 lg:px-20 lg:pt-20 w-full ">
      <h1 className="text-center text-[#014584] xxl:text-7xl text-[32px] sm:text-[36px] md:text-[40px] lg:text-[45px] mt-4 mb-3 font-semibold">
        Tired Of Cleaning By Yourself?
      </h1>
      <p className="text-center max-sm:px-2 md:px-10 mb-5 text-[17px] xxl:text-3xl leading-8 sm:text-lg lg:mx-56 text-[#014584]"> 
      Let Killer Clean do all of the dirty work for you. Focus on everything else you need to get done and schedule a cleaning with us today.
      </p>
      <div className="flex flex-col md:flex-row items-center w-full md:mb-12">
        <div className="md:w-[50%] flex flex-col max-sm:p-2 items-center sm:max-md:p-8  md:p-14 xxl:p-14">
          <h1 className="max-lg:text-3xl text-center lg:text-4xl xxl:text-8xl text-[#014584] max-sm:mb-4 sm:mb-4 font-semibold xxl:mb-20">
            Consistent Quality
          </h1>
          <p className="text-[17px] text-[#014584] xxl:text-3xl text-center leading-8 sm:text-left">
          Killer Clean provides all the cleaning supplies and equipment needed to clean your home.
          </p>
        </div>
        <div className="md:w-[50%] flex justify-center md:justify-end">
          <img
            src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-740-%C3%97-800-px-10-1.png"
            alt="" className="w-[90%] max-sm:p-2 sm:max-md:p-8 md:p-14 xxl:p-14"
          />
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row-reverse items-center relative md:mb-12">
        <div className="md:w-[50%] flex flex-col max-sm:p-2 items-center sm:max-md:p-8  md:p-14 xxl:p-14">
          <h1 className="text-3xl text-center lg:text-4xl xxl:text-8xl text-[#014584] max-sm:mb-4 sm:mb-4 font-semibold xxl:mb-20 ">
            Experienced and Background Checked Cleaners
          </h1>
          <p className="text-[17px] text-[#014584] xxl:text-3xl text-center leading-8 sm:text-left">
          Our employees are friendly, professionally trained, background checked, bonded and insured.
          </p>
        </div>
        <div className="md:w-[50%] flex justify-center md:justify-end">
          <img
            src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-740-%C3%97-800-px-7-1.png"
            alt="" className="w-[90%] max-sm:p-2 sm:max-md:p-8 md:p-10 xxl:p-14"
          />
        </div>
        <img
          src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-design-2023-08-01T175153.298.png"
          alt=""
          className="absolute -left-[238px] top-20 h-52 -rotate-1 hidden sm:block"
        />
      </div>
      <div className=" flex items-center w-full md:mb-12">
        <div className="md:w-[50%] flex flex-col max-sm:p-2 items-center sm:max-md:p-8 md:p-10 xxl:p-14">
          <h1 className="max-lg:text-3xl text-center lg:text-4xl xxl:text-8xl text-[#014584] max-sm:mb-4 sm:mb-4 xxl:mb-20 font-semibold">
            Online Booking & Payment and Responsive Customer Support
          </h1>
          <p className="text-[17px] text-[#014584] xxl:text-3xl text-center max-sm:mb-4 sm:mb-4 leading-8 sm:text-left xxl:mb-20 ">
          We are a multi-award-winning company that is over 15 years in the making. We currently serve over 500 customers each day across the country.
          </p>
          <Button as={Link} to={"/book"} className='book mb-4'>
            Schedule A Cleaning
          </Button>
        </div>
        <div className="md:w-[50%] hidden md:flex justify-end">
          <img
            src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-740-%C3%97-800-px-11-1.png"
            alt="" className="w-[90%] p-7 sm:p-14 xxl:p-14"
          />
        </div>
      </div>
    </div>
  );
}