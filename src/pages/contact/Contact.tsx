import React from "react";
import { ContactForm, Hero, ContactOffices } from "../../components";
import { IoIosArrowForward } from "react-icons/io";

export const ContactUs: React.FC<{}> = () => {
  return (
    <>
      <Hero
        title='Do You Have Questions,'
        description=''
        subtitle="Let's Hear From You"
      />

      <div className='flex flex-col items-start justify-start md:flex-col md:items-start md:justify-start lg:flex-row lg:items-center lg:justify-between px-20 w-[100%] bg-white py-10'>
        <div className='w-[100%] md:w-[100%] lg:w-[55%]'>
          <ContactForm />
        </div>
        <div className='w-[100%] md:w-[100%] lg:w-[40%]'>
          <div className='p-[25px] flex flex-col gap-[25px] bg-[#F5F5F5] h-fit w-fit border-[4px] border-[#e5e5e5] rounded-[14px]'>
            <div>
              <h1 className='font-semibold text-lg'>The Office</h1>
              <p className='text-sm'>
                Address: 16A, Commercial Avenue, Sabo, Yaba, Lagos
              </p>
              <p className='text-sm'>Phone: (+234)12774000-9</p>
              <p className='text-sm'>
                Email: carecentre@custodianinsurance.com
              </p>
            </div>
            <div>
              <h1 className='font-semibold text-lg'>Business Hours</h1>
              <p className='text-sm'>Monday - Friday: 9am to 5pm</p>
              <p className='text-sm'>Saturday: Closed</p>
              <p className='text-sm'>Sunday: Closed</p>
            </div>

            <button className='bg-[#900000] font-medium bg-gradient-to-b from-[#D25050] from-5% to-[#900000] to-95%  items-center text-white rounded-lg justify-between flex px-4 py-6'>
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
