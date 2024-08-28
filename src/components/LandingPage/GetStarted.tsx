import React from "react";
import { PageContainer } from "../../pages/PageContainer";
import { Button } from "../shared/Button";
import heroImg from "../../assets/svg/heroImg.svg";

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
      <section className='bg-[#FBF9F9] py-10'>
        <div className='container mx-auto px-20'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-5'>
            {/* Hero Content Left */}
            <div className='w-full lg:w-1/2 space-y-8'>
              <div className='space-y-6'>
                <div>
                  <span className='text-[38px] md:text-[48px] lg:text-[58px] leading-tight text-primaryColor font-bold'>
                    Insurance solutions
                  </span>
                  <h1 className='text-[38px] md:text-[48px] lg:text-[58px] leading-tight text-black font-bold'>
                    crafted to fit your special needs
                  </h1>
                </div>
                <p className='text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed font-medium text-justify'>
                  Discover how our insurance product can provide you with peace
                  of mind and security, all while contributing to a profitable
                  and sustainable future.
                </p>
                <div className='flex flex-col lg:flex-row gap-5'>
                  <Button
                    text='Get a Quote'
                    className='px-10 py-2 hover:bg-[#900000b3] duration-700 text-white bg-primaryColor'
                    onPress={() => {
                      getAQuote();
                    }}
                  />
                  <Button
                    text='Learn More'
                    className='px-10 py-2 hover:bg-[#f4e6e6d4] bg-[#f4e6e6] duration-700 text-[#900000]'
                    onPress={() => {
                      takeARecommendationQuiz();
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Hero Image Right */}
            <div className='w-full lg:w-1/2 mt-10 lg:mt-0'>
              <div className='w-full h-auto'>
                <img
                  src={heroImg}
                  alt='Hero'
                  className='w-full h-full object-cover rounded-xl'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
