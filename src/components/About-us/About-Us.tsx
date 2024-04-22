import React from "react";
import { OurStyle } from "./Our-Style";
import { CustodianHouse } from "../../assets";

export const AboutUs: React.FC<{}> = () => {
  return (
    <div className='bg-[#f4e6e6] py-5 p-20'>
      <div className='flex flex-col md:flex-col lg:flex-row  lg:items-center lg:justify-between'>
        <div className='flex flex-col w-[100%] md:w-[100%] lg:w-[60%] gap-10'>
          <p className='text-gradient font-bold inline-block text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl'>
            About Us
          </p>
          <p className='text-gray-500 font-medium text-left'>
            Custodian & Allied Insurance is a wholly owned Nigerian Company.
            CAIL's sole purpose is to develop, package and deliver innovative
            insurance products that best satisfy customer needs. whilst
            operating a highly profitable, efficient, resourceful and ethical
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
            Insurance Services
          </p>
        </div>
        <div className='w-[100%] md:w-[100%] lg:w-[38%] justify-center items-center flex'>
          <CustodianHouse />
        </div>
      </div>
      <OurStyle />
    </div>
  );
};
