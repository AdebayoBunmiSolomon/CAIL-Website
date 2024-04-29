import React from "react";

type formTitleProps = {
  title: string;
};

export const FormTitle: React.FC<formTitleProps> = ({ title }) => {
  return (
    <>
      <p className='text-[18px] mb-3 font-medium text-slate-600'>
        {title && title}
      </p>
    </>
  );
};
