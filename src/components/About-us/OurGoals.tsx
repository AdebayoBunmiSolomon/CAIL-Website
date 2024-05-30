import React from "react";

export const OurGoals: React.FC<{}> = () => {
  return (
    <section className='bg-[#FFFFFF] py-10 px-[70px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-10 items-center justify-center'>
          <div className='flex flex-col gap-10 w-full lg:w-1/2'>
            <div className='bg-[#F5F5F5] rounded-2xl py-10 px-5'>
              <div className=' text-left'>
                <span className='font-medium text-2xl md:text-3xl lg:text-4xl text-[#3F3F3F]'>
                  Our Vision
                </span>
                <h1 className='text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mt-6 text-gradient'>
                  To be Africa's Insurer of Choice.
                </h1>
              </div>
            </div>
            <div className='bg-[#F5F5F5] rounded-2xl py-10 px-5'>
              <div className='text-left'>
                <span className='text-primaryColor font-medium text-2xl md:text-3xl lg:text-4xl'>
                  Our Mission
                </span>
                <p className='text-lg md:text-xl lg:text-2xl leading-relaxed font-normal text-[#3F3F3F] mt-6'>
                  CLA’s mission is to develop and deliver innovative insurance
                  products that best satisfy customer needs, whilst operating a
                  highly profitable, efficient, resourceful and ethical
                  organisation.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-[#F5F5F5] rounded-2xl py-10 px-5 w-full lg:w-1/2'>
            <div className='text-left'>
              <span className='text-primaryColor text-2xl md:text-3xl lg:text-4xl font-medium'>
                Our Goals
              </span>
              <ul className='list-disc list-outside text-lg md:text-xl lg:text-2xl leading-relaxed font-normal text-[#3F3F3F] mt-6 space-y-3'>
                <li>
                  To position ourselves strategically in the market and be
                  perceived as a modern, dynamic and resourceful insurance
                  company.
                </li>
                <li>
                  To strike a fine balance between the businesses of sound
                  underwriting, cost control and service on one hand and
                  investment on the other.
                </li>
                <li>
                  To assemble a seasoned team of professionals who would, with
                  the aid of modern information processing techniques, deliver
                  qualitative, fast and efficient service to our select
                  clientele.
                </li>
                <li>
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
