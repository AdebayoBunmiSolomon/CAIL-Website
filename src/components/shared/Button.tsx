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
        className={`bg-[#900000] px-10 py-3 md:py-3 lg:py-5 text-[#FFFFF] font-medium  text-[12px] md:text-[12px] lg:text-[16px]  ${className} rounded-full flex items-center justify-between gap-2`}
        onClick={onPress}>
        {leftIcon && leftIcon}
        {text && text}
        {rightIcon && rightIcon}
      </button>
    </>
  );
};
