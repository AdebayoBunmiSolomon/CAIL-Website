import React, { FunctionComponent } from "react";
import { PrevNextButtonProps } from "../../types/types";

export const PrevButton: FunctionComponent<PrevNextButtonProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#900000",
      }}
      onClick={onClick}
    />
  );
};

export const NextButton: FunctionComponent<PrevNextButtonProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#900000",
      }}
      onClick={onClick}
    />
  );
};
