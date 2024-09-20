import React from "react";
import { ContactForm, Hero, ContactOffices } from "../../components";
import { IoIosArrowForward } from "react-icons/io";

export const ContactUs: React.FC<{}> = () => {
  const takeAQuickSurvey = () => {
    window.open("https://t.ly/xK6Lp", "_blank");
  };
  return (
    <>
      <Hero
        title='Do You Have Questions?'
        description=''
        subtitle="Let's Hear from You"
      />

      <div className='flex flex-col items-start justify-start md:flex-col md:items-start md:justify-start lg:flex-row lg:items-center lg:justify-between px-4 md:px-6 lg:px-20 w-full bg-white py-10'>
        <div className='w-[100%] md:w-[100%] lg:w-[55%]'>
          <ContactForm />
        </div>
        <div className='w-[100%] md:w-[100%] lg:w-[40%]'>
          <div className='p-6 md:p-8 lg:p-10 flex flex-col gap-6 md:gap-8 lg:gap-10 bg-[#F5F5F5] border-4 border-[#e5e5e5] rounded-lg'>
            <div>
              <h1 className='font-semibold text-lg'>The Office</h1>
              <p className='text-sm'>
                Address: 16A, Commercial Avenue, Sabo, Yaba, Lagos
              </p>
              <p className='text-sm'>Phone: (+234)2012774000-9</p>
              <p className='text-sm'>
                Email: carecentre@custodianinsurance.com
              </p>
            </div>
            <div>
              <h1 className='font-semibold text-lg'>Business Hours</h1>
              <p className='text-sm'>Monday - Friday: 8am to 5:30pm</p>
              <p className='text-sm'>Saturday: Closed</p>
              <p className='text-sm'>Sunday: Closed</p>
            </div>

            <button
              className='bg-[#900000] font-medium bg-gradient-to-b from-[#D25050] via-[#900000] to-[#900000] items-center text-white rounded-lg justify-between flex px-4 py-6'
              onClick={() => takeAQuickSurvey()}>
              <h4>Take a quick survey</h4>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <ContactOffices />
    </>
  );
};
