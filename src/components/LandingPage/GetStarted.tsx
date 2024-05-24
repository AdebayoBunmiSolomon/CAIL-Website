import React, { useState } from "react";
import { PageContainer } from "../../pages/PageContainer";
import { Button } from "../shared/Button";

type getStartedProps = {
  getAQuote: () => void;
  takeARecommendationQuiz: () => void;
};

export const GetStarted: React.FC<getStartedProps> = ({
  takeARecommendationQuiz,
  getAQuote,
}) => {
  return (
    <PageContainer>
      <section className='bg-[#FBF9F9]'>
        <div className='w-full items-start justify-center'>
          <div className='flex flex-col items-center justify-center md:flex-col md:items-center md:justify-center lg:flex-row lg:justify-between lg:items-center px-20'>
            {/* Hero Content Left */}
            <div className='w-[100%] md:w-[100%] lg:w-[50%] space-y-[50px]'>
              <div className='space-y-[30px]'>
                <div>
                  <span className=' text-[38px] md:text-[48px] lg:text-[58px]  leading-[68px] text-primaryColor font-[700]'>
                    Insurance solutions
                  </span>
                  <h1 className='text-[38px] md:text-[48px] lg:text-[58px] leading-[68px] text-black font-[700]'>
                    crafted to fit your special needs
                  </h1>
                </div>
                <p className='text-[16px] md:text-[20px] lg:text-[24px] leading-[34px] font-[400] text-justify'>
                  Discover how our insurance product can provide you with peace
                  of mind and security, all while contributing to a profitable
                  and sustainable future
                </p>
                <div className='flex flex-col md:flex-col lg:flex-row gap-5'>
                  <Button
                    text='Get a Quote'
                    className='px-10 hover:bg-[#900000b3] duration-700 text-[#FFFFFF]'
                    onPress={() => {
                      getAQuote();
                    }}
                  />
                  <Button
                    text='Learn More'
                    className='px-10 hover:bg-[#f4e6e6d4] bg-[#f4e6e6] duration-700 text-[#900000]'
                    onPress={() => {
                      takeARecommendationQuiz();
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Hero Image Right */}
            <div className='w-[95vw] md:w-[100%] lg:w-[50%] overflow-hidden'>
              <div className='w-[550px] 2xl:w-[650px] hero-img'></div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
