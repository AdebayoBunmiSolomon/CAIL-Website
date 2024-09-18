import React, { useState } from "react";
import { header } from "../../../assets/data/header";
import { useSelectedHeader } from "../../../hooks/useSelectedHeader";
import ClaLogo from "../../../assets/svg/CAI_Logo.svg";
import { useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useGlobalStore } from "../../../hooks/store/make-a-claim";

export const MobileHeader: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { selectedHeaderIndex, setSelectedHeaderIndex } = useSelectedHeader();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const { setGlobalData, globalData } = useGlobalStore();
  return (
    <div className='w-[100%] py-3 fixed top-0 right-0 left-0 z-10 backdrop-blur-[5px]'>
      <div className='flex flex-row items-center justify-between w-full'>
        <div
          className='w-[100px] md:w-[150px] lg:w-[200px] cursor-pointer'
          onClick={() => {
            navigate("/");
          }}>
          <img
            src={ClaLogo}
            alt='Hero'
            className='w-full h-auto object-cover rounded-xl'
          />
        </div>
        <button onClick={() => setShowDropDown(!showDropDown)}>
          {showDropDown ? (
            <IoClose className='w-[30px] h-[30px]' />
          ) : (
            <IoMenu className='w-[30px] h-[30px]' />
          )}
        </button>
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
                  setGlobalData({
                    ...globalData,
                    doYouHaveAWitness: false,
                    hasTheFireServiceBeenInformed: false,
                    hasThePoliceBeenInformed: false,
                    claimType: "",
                    thirdPartyInvolved: "",
                    policyNumber: "",
                  });
                }}>
                {items.title}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
