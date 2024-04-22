import React from "react";
import { headerDropDownProps } from "../../../types/types";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const HeaderDropDown: React.FC<headerDropDownProps> = ({
  data,
  parentRoute,
}) => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <ul className='absolute left-0 top-full mt-2 bg-white border rounded shadow-lg justify-center items-center'>
      {data &&
        data.map((nestedItems, index) => (
          <li
            onClick={() => navigate(`${parentRoute}/${nestedItems.page}`)}
            key={index}
            className='text-black py-2 w-[220px] pl-5 hover:text-[#900000]'>
            {nestedItems.title}
          </li>
        ))}
    </ul>
  );
};
