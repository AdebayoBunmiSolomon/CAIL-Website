import React from "react";
import { OurStyle } from "./Our-Style";
import { CustodianHouse } from "../../assets";

export const AboutUs: React.FC<{}> = () => {
  return (
    <div className='bg-[#f4e6e6] py-5 px-6 lg:px-20'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex flex-col w-full lg:w-3/5 gap-6 lg:gap-10'>
          <p className='text-gradient font-bold inline-block text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl'>
            About Us
          </p>
          <p className='text-gray-500 font-medium text-left'>
            Custodian and Allied Insurance is a wholly owned Nigerian Company.
            CAIL's sole purpose is to develop, package and deliver innovative
            insurance products that best satisfy customer needs, whilst
            operating a highly profitable, efficient, resourceful, and ethical
            organization that will survive well in the future and be a valuable
            asset to its shareholders.
          </p>
          <p className='text-gray-500 font-medium text-left'>
            CAIL's Board comprises individuals who have been proven track
            records in their various fields of endeavor, thereby bringing
            several years of experience to bear upon the Board.
          </p>
          <p className='text-gray-500 font-medium text-left'>
            CAIL is a registered member of the Nigerian Insurers Association
            (NIA) and is approved by other regulatory bodies in Nigeria to offer
            Insurance Services.
          </p>
        </div>
        <div className='w-full lg:w-2/5 flex justify-center items-center mt-10 lg:mt-0'>
          <CustodianHouse />
        </div>
      </div>
      <OurStyle />
    </div>
  );
};
