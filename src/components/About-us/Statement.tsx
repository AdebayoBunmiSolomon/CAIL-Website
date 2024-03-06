import React from "react";

export const Statement: React.FC<{}> = () => {
  return (
    <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center px-5'>
      <div className='flex flex-col gap-5 w-[100%] md:w-[100%] lg:w-[47%]'>
        <div>
          <p className='font-medium py-2'>Our Vision</p>
          <p className=' font-normal  text-gray-500'>
            To be Africa's insurer of choice
          </p>
        </div>
        <div>
          <p className='font-medium  py-2'>Our Mission</p>
          <p className=' font-normal text-gray-500'>
            <span className='font-semibold'>CAIL's</span> Mission is to develop,
            and deliver innovative insurance products that best satisfy customer
            needs, whilst operating a highly profitable, efficient, resourceful
            and ethical organization.
          </p>
        </div>
      </div>
      <div className='w-[100%] md:w-[100%] lg:w-[45%]'>
        <p className='font-medium py-2'>Our Goals</p>
        <ul className=' list-disc  text-gray-500 font-normal text-justify'>
          <li className='py-3'>
            To position ourselves strategically in the market and be perceived
            as a modern, dynamic and resourceful underwriter.
          </li>
          <li className='py-3'>
            To strike a fine balance between the businesses of sound
            underwriting, cost control and service on one hand and investment on
            the other.
          </li>
          <li className='py-3'>
            To assemble a seasoned team of professionals who would, with the aid
            of modern information processing techniques, deliver qualitative,
            fast and efficient service to our select clientele.
          </li>
          <li className='py-3'>
            To provide services that extend beyond national frontiers and
            ultimately establish and operate in the ECOWAS sub-region.
          </li>
        </ul>
      </div>
    </div>
  );
};
