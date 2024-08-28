import React from "react";
import { officesData } from "../../assets/data/offices";

export const ContactOffices: React.FC<{}> = () => {
  return (
    <div className='bg-[#FBF9F9] px-20 py-10'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl leading-[58px] font-bold'>
        Contact Offices
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5'>
        {officesData &&
          officesData.map((items, index) => {
            const lastTwoItem = officesData
              .map((items) => items.name)
              .slice(-2);
            // console.log(lastTwoItem);
            return (
              <div
                className='bg-[#e5e5e5e5] py-6 px-5 rounded-xl flex flex-col'
                key={index}>
                <h1 className='text-gradient font-bold text-2xl md:text-3xl lg:text-4xl mb-5'>
                  {items.name}
                </h1>
                <p className='w-[70%] font-normal text-gray-600'>
                  {items.address}
                </p>
                {items.phone !== "" && (
                  <p className='w-[70%] font-normal text-gray-600'>
                    <span className='font-medium'>Tel:</span> {items.phone}
                  </p>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
