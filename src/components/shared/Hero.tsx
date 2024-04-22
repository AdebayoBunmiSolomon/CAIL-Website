import React from "react";
import { heroProps } from "../../types/types";

export const Hero: React.FC<heroProps> = ({
  title,
  description,
  subtitle,
  subtitle2,
}) => {
  return (
    <section className='pt-[200px] h-[100dvh] bg-[#FBF9F9] hero__bg'>
      <div className='container flex flex-col items-center justify-center h-[85%]'>
        <h1 className='lg:text-[68px] lg:leading-[80px] md:text-[3.75rem] md:leading-[4.375rem] font-[700]'>
          {title}
        </h1>
        <p className='text-primaryColor lg:text-[68px] lg:leading-[80px] md:text-[3.75rem] md:leading-[4.375rem] font-[700]'>
          {subtitle}
        </p>
        <p className='lg:text-[68px] lg:leading-[80px] md:text-[3.75rem] md:leading-[4.375rem] font-[700]'>
          {subtitle2}
        </p>
        <p className='text-[21px] leading-[38px] font-[400] text-[#3F3F3F] text-center max-w-[700px] mt-[20px]'>
          {description}
        </p>
      </div>
    </section>
  );
};
