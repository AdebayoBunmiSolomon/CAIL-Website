import React from "react";
import { headerDropDownProps } from "../../../types/types";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const HeaderDropDown: React.FC<headerDropDownProps> = ({
  data,
  parentRoute,
}) => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <ul className='absolute left-0 top-full bg-white border rounded-[25px] shadow-lg justify-center items-center mt-[-5px] py-[10px] px-[5px]'>
      {data &&
        data.map((nestedItems, index) => (
          <li
            onClick={() => navigate(`${parentRoute}/${nestedItems.page}`)}
            key={index}
            className='text-black py-2 w-[220px] pl-5 hover:text-[#900000] text-sm'>
            {nestedItems.title}
          </li>
        ))}
    </ul>
  );
};
