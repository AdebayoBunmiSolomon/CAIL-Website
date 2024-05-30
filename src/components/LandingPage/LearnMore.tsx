import React from "react";
import { Button } from "../ui/button";
import { HiArrowRight } from "react-icons/hi2";

export const LearnMore = () => {
  return (
    <>
      <section className='pt-16 pb-32 2xl:h-[800px] bg-[#F5F5F5]'>
        <div className='container mx-auto space-y-10 px-4 md:px-10'>
          <div className='space-y-6'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#900000]'>
              What we do
            </h2>
            <div className='max-w-[650px] space-y-4'>
              <p className='text-base md:text-lg leading-7'>
                Custodian & Allied Insurance is a wholly owned Nigerian Company.
                CAIL's sole purpose is to develop, package and deliver
                innovative insurance products that best satisfy customer needs,
                whilst operating a highly profitable, efficient, resourceful and
                ethical organization that will survive well into the future and
                be a valuable asset to its shareholders.
              </p>
              <p className='text-base md:text-lg leading-7'>
                CAIL's Board comprises individuals who have proven track records
                in their various fields of endeavor, thereby bringing several
                years of experience to bear upon the Board.
              </p>
            </div>
            <Button className='bg-[#D39999] text-[#900000] hover:text-[#f5f5f5] flex items-center space-x-2'>
              <span>Learn more</span>
              <HiArrowRight />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
