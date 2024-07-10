import React from "react";
import { buttonProps } from "../../types/types";

export const Button: React.FC<buttonProps> = ({
  text,
  className,
  onPress,
  leftIcon,
  rightIcon,
  disabled,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        className={`${
          disabled ? "bg-[#90000068]" : "bg-[#900000]"
        } px-10 py-3 md:py-3 lg:py-5 text-[#FFFFF] font-medium  text-[12px] md:text-[12px] lg:text-[16px]  ${className} rounded-full flex items-center justify-between gap-2 text-center ${
          disabled ? "opacity-60" : undefined
        }`}
        onClick={onPress}>
        {disabled ? null : leftIcon}
        {text && text}
        {disabled ? null : rightIcon}
      </button>
    </>
  );
};
