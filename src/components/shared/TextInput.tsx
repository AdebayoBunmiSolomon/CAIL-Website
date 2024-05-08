import React from "react";
import { inputProps } from "../../types/types";

export const TextInput: React.FC<inputProps> = ({
  textArea,
  type,
  label,
  placeHolder,
  error,
  disabled,
  min,
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
        {textArea ? (
          <>
            <textarea
              className='py-3 rounded-lg px-2 placeholder:text-slate-400 border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 h-32'
              placeholder={placeHolder}
              onChange={props.onChange}
              value={props.value}
              disabled={disabled}
            />
          </>
        ) : (
          <>
            <input
              type={type}
              className='py-3 rounded-lg px-2 h-12 placeholder:text-slate-400 border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1'
              placeholder={placeHolder}
              disabled={disabled}
              min={min}
              {...props}
            />
          </>
        )}
        {error && (
          <p className='font-medium text-[crimson] text-sm h-5'>{error}</p>
        )}
      </div>
    </>
  );
};
