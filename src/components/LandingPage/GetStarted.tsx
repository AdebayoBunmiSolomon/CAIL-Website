import React, { useState } from "react";
import { Button } from "../ui/button";
import GeneralInsurance from "../../assets/images/generalInsurance.jpg";
import { PageContainer } from "../../pages/PageContainer";

export const GetStarted = () => {
  const [hoveredOn, setHoveredOn] = useState<boolean>(false);
  return (
    <PageContainer>
      <section className='h-[100vh] md:pb-[600px]'>
        <div className='w-full items-start justify-center]'>
          <div className='flex flex-col md:flex-col lg:flex-row items-center justify-between mx-auto px-[80px] 2xl:px-[150px]'>
            {/* Hero Content Left */}
            <div className='w-[700px] space-y-[50px]'>
              <div className='space-y-[30px]'>
                <div>
                  <span className='text-[58px]  leading-[68px] text-primaryColor font-[700]'>
                    Insurance solutions
                  </span>
                  <h1 className='text-[58px] leading-[68px] text-black font-[700]'>
                    crafted to fit your special needs
                  </h1>
                </div>
                <p className='text-[24px] leading-[34px] font-[400] '>
                  Discover how our insurance product can provide you with peace
                  of mind and security, all while contributing to a profitable
                  and sustainable future
                </p>
              </div>

              <div className='flex flex-col md:flex-row gap-[50px]'>
                <Button
                  className='w-[236px] h-[70px] font-[700] bg-[#F4E6E6] rounded-[50px] text-[18px] leading-[30px] text-primaryColor hover:bg-[#F4E6E6]'
                  onClick={() => {}}>
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero Image Right */}

            <div className='w-full md:w-full lg:w-3/5 h-full overflow-hidden relative rounded-2xl'>
              <a href='##' className='group block h-full relative'>
                <img
                  className='h-96 w-full object-cover object-left transition-opacity duration-300 ease-in-out'
                  src={GeneralInsurance}
                  alt='Random image'
                />
                <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-60'></div>
                <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  <h2 className='text-3xl font-bold leading-10'>
                    General Insurance Just for you.
                    <br />
                    <span className='text-lg'>
                      Want to Give us a try?{" "}
                      <a
                        href='#'
                        className='text-[#900000] hover:border-b-2 hover:border-[#e5e5e5e5]'>
                        Buy Products
                      </a>
                    </span>
                  </h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
