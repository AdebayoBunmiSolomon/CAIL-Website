import React, { useState } from "react";
import { header } from "../../../assets/data/header";
import { useSelectedHeader } from "../../../hooks/useSelectedHeader";
import ClaLogo from "../../../assets/svg/ClaLogo";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

export const MobileHeader: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { selectedHeaderIndex, setSelectedHeaderIndex } = useSelectedHeader();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  return (
    <div className='w-[100%] py-3 fixed top-0 right-0 left-0 z-10 backdrop-blur-[5px]'>
      <div className='flex flex-row items-center justify-between w-full'>
        <div
          className='w-[150px] cursor-pointer'
          onClick={() => {
            navigate("/");
          }}>
          <ClaLogo />
        </div>
        <div>
          <button onClick={() => setShowDropDown(!showDropDown)}>
            <IoMenu className='w-[40px] h-[40px]' />
          </button>
        </div>
      </div>
      {showDropDown && (
        <ul className='flex flex-col gap-0 items-center justify-center'>
          {header &&
            header.map((items, index) => (
              <li
                key={index}
                className={`hover:cursor-pointer py-3 px-3 w-full text-center hover:bg-[#900000] hover:text-white duration-500 ${
                  index === selectedHeaderIndex
                    ? "bg-[#900000] text-white"
                    : undefined
                }`}
                onClick={() => {
                  setSelectedHeaderIndex(index);
                  navigate(items.page);
                }}>
                {items.title}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
