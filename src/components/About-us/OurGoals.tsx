import React from "react";

export const OurGoals: React.FC<{}> = () => {
  return (
    <section className='bg-[#FFFFFF]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[25px] items-center justify-center'>
          <div className=' flex flex-col gap-[25px] md:gap-[25px] lg:gap-[70px] '>
            <div className='bg-[#F5F5F5] rounded-[25px] max-w-[557px] py-[10px] p-3'>
              <div className='container py-8 items-center justify-center'>
                <span className='font-[500] text-[18px] md:text-[22px] lg:text-[26px] leading-[30px] text-[#3F3F3F]'>
                  Our Vision
                </span>
                <h1 className='text-[48px] md:text-[56px] lg:text-[64px] leading-[70px] font-[700] mt-[30px] text-gradient'>
                  To be African's Insurer of Choice.
                </h1>
              </div>
            </div>
            <div className='bg-[#F5F5F5] rounded-[25px] max-w-[557px]  py-[10px] p-3'>
              <div className='container py-8 items-center justify-between'>
                <span className='text-primaryColor font-[500] text-[18px] md:text-[22px] lg:text-[26px] leading-[30px]'>
                  Our Mission
                </span>
                <p className='text-[18px] md:text-[22px] lg:text-[26px] leading-[38.5px] font-[400] text-[#3F3F3F] mt-[30px]'>
                  CLA’s mission is to develop and deliver innovative insurance
                  products that best satisfy customer needs, whilst operating a
                  highly profitable, efficient, resourceful and ethical
                  organisation.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-[#F5F5F5] rounded-[25px] max-w-[557px] py-[10px] p-3'>
            <div className='container py-8 items-center justify-between'>
              <span className='text-primaryColor text-[18px] md:text-[22px] lg:text-[26px] leading-[30px] font-[500]'>
                Our Goals
              </span>
              <ul className='list-disc list-outside text-[18px] md:text-[22px] lg:text-[26px] leading-[35.62px] font-[400] text-[#3F3F3F] mt-[30px] space-y-3'>
                <li className=''>
                  To position ourselves strategically in the market and be
                  perceived as a modern, dynamic and resourceful insurance
                  company.
                </li>
                <li className=''>
                  To strike a fine balance between the businesses of sound
                  underwriting, cost control and service on one hand and
                  investment on the other.
                </li>
                <li className=''>
                  To assemble a seasoned team of professionals who would, with
                  the aid of modern information processing techniques, deliver
                  qualitative, fast and efficient service to our select
                  clientele.
                </li>
                <li className=''>
                  To provide services that extend beyond national frontiers and
                  ultimately establish and operate in the ECOWAS sub-region.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
