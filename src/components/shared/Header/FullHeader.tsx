/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "../../ui/button";
import { RiMenuLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ClaLogo from "../../../assets/svg/ClaLogo";
import { header } from "../../../assets/data/header";
import { useSelectedHeader } from "../../../hooks/useSelectedHeader";

const FullHeader = () => {
  const { selectedHeaderIndex, setSelectedHeaderIndex } = useSelectedHeader();
  const navigate = useNavigate();

  const openSelfService = () => {
    const externalUrl = "http://ss-portal.cip-tech.org/";
    window.open(externalUrl, "_blank");
  };

  return (
    <div className='flex flex-row items-center justify-between pt-[30px] px-[100px] z-20 fixed  w-full backdrop-blur-[5px]'>
      <div className='flex items-center justify-center'>
        <div
          className='w-[150px] cursor-pointer'
          onClick={() => {
            navigate("/");
          }}>
          <ClaLogo />
        </div>
      </div>
      <ul className='flex flex-row gap-7 items-center bg-[white] px-3 py-2 rounded-[50px] overflow-hidden drop-shadow-xl'>
        {header &&
          header.map((items, index) => (
            <li
              key={index}
              className={`hover:cursor-pointer py-3 px-3 rounded-3xl ${
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
      <div className='hidden md:flex justify-items-center align-middle '>
        <Button onClick={openSelfService} className=' h-[63px] px-[20px]'>
          Access Self-Service
        </Button>
      </div>
      <RiMenuLine size={20} className='md:hidden' />
    </div>
  );
};

export default FullHeader;
