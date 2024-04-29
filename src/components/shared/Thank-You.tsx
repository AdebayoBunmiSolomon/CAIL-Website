// @ts-ignore
import React from "react";
import balloon from "../../assets/images/balloon.png";

export const ThankYou: React.FC<{}> = () => {
  return (
    <>
      <div className='pt-[200px] pb-[100px] flex flex-col items-center justify-center'>
        <figure>
          <img src={balloon} alt='' className='w-[150px] h-[150px] mb-[20px]' />
        </figure>
        <h1 className='text-[38px] leading-[48px] font-[700] mb-[25px] text-center text-gradient'>
          Congratulation!!! <br />
          Form Submitted <br />
          Successfully
        </h1>
      </div>
    </>
  );
};
