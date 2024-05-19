import React from "react";
import { fileInputProps } from "../../types/types";

export const FileInput: React.FC<fileInputProps> = ({
  placeHolder,
  label,
  error,
  ...props
}) => {
  return (
    <>
      <div className='flex flex-col w-full mb-4'>
        {label && (
          <p
            className={`${
              error ? "text-black" : "text-black"
            } text-[15px] mb-2 font-medium`}>
            {label}
          </p>
        )}
        <input
          type='file'
          className='py-3 rounded-lg px-2 h-12 placeholder:text-slate-400 border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1'
          placeholder={placeHolder}
          {...props}
          accept='.mp4,.jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf,video/mp4'
          aria-describedby='file_input_help'
        />
        {error && (
          <p className='font-medium text-[crimson] text-sm h-5'>{error}</p>
        )}
      </div>
    </>
  );
};
