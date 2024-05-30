import React from "react";
import { heroProps } from "../../types/types";

export const Hero: React.FC<heroProps> = ({
  title,
  description,
  subtitle,
  subtitle2,
}) => {
  return (
    <section className='pt-20 h-screen bg-[#FBF9F9] hero__bg'>
      <div className='container mx-auto flex flex-col items-center justify-center h-full px-4'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center'>
          {title}
        </h1>
        <p className='text-primaryColor text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-4'>
          {subtitle}
        </p>
        <p className='text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-4'>
          {subtitle2}
        </p>
        <p className='text-lg md:text-xl lg:text-2xl font-normal text-[#3F3F3F] text-center max-w-[700px] mt-6'>
          {description}
        </p>
      </div>
    </section>
  );
};
