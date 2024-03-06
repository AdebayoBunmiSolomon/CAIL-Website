import React from "react";

export const TopContent: React.FC<{}> = () => {
  return (
    <div className='px-5'>
      <p className='text-2xl font-bold py-2 my-2 border-b-2 border-[#900000] w-[22%] md:w-[18%] lg:w-[14%] hover:cursor-pointer'>
        About CAIL
      </p>
      <div className='flex flex-row w-[100%] justify-start text-gray-500'>
        <p className='text-justify leading-10 md:leading-10 lg:leading-10 text-[16px] md:text-xl lg:text-2xl'>
          Custodian & Allied Insurance is a wholly owned Nigerian Company.
          CAIL’s sole purpose is to develop, package and deliver innovative
          insurance products that best satisfy customer needs, whilst operating
          a highly profitable, efficient, resourceful and ethical organization
          that will survive well into the future and be a valuable asset to its
          shareholders. CAIL’s Board comprises individuals who have proven track
          records in their various fields of endeavor, thereby bringing several
          years of experience to bear upon the Board. CAIL is a registered
          member of the Nigerian Insurers Association (NIA) and is approved by
          other regulatory bodies in Nigeria to offer Insurance Services.
        </p>
      </div>
    </div>
  );
};
