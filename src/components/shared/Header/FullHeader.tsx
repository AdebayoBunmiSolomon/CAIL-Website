/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { RiMenuLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ClaLogo from "../../../assets/svg/ClaLogo";
import { header } from "../../../assets/data/header";
import { useSelectedHeader } from "../../../hooks/useSelectedHeader";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HeaderDropDown } from "./HeaderDropDown";
import { usePathName } from "../../../hooks";
import { useGlobalStore } from "../../../hooks/store/make-a-claim";

export const FullHeader = () => {
  const { selectedHeaderIndex, setSelectedHeaderIndex } = useSelectedHeader();
  const [nestedList, setNestedList] = useState<any>();
  const { checkForPathName, selectedPath, pathname } = usePathName();
  const { setGlobalData, globalData } = useGlobalStore();
  const navigate = useNavigate();

  const openSelfService = () => {
    const externalUrl = "https://ssp.custodianplc.com.ng/";
    window.open(externalUrl, "_blank");
  };

  useEffect(() => {
    checkForPathName(pathname);
  }, [selectedPath, pathname]);

  return (
    <div className='flex flex-row items-center justify-between pt-[30px] px-20 z-20 fixed w-full backdrop-blur-[5px]'>
      <div
        className='w-[150px] cursor-pointer'
        onClick={() => {
          navigate("/");
        }}>
        <ClaLogo />
      </div>
      <ul
        className='flex items-center gap-5 drop-shadow-xl bg-white px-3 py-2 rounded-full'
        onMouseLeave={() => {
          setSelectedHeaderIndex(selectedHeaderIndex);
          setNestedList(null); // Reset nested list when leaving the ul
        }}>
        {header &&
          header.map((items, index) => (
            <li
              key={index}
              className={`flex items-center relative py-2 px-3 hover:cursor-pointer rounded-3xl  text-sm hover:font-semibold ${
                selectedPath === items.page
                  ? "bg-[#900000] text-white hover:text-white"
                  : undefined
              }`}
              onMouseEnter={() => {
                setSelectedHeaderIndex(index);
                setNestedList(items.nestedList && items.nestedList);
              }}
              onClick={() => {
                if (items.nestedList) {
                  setSelectedHeaderIndex(index);
                  setGlobalData({
                    ...globalData,
                    doYouHaveAWitness: false,
                    hasTheFireServiceBeenInformed: false,
                    hasThePoliceBeenInformed: false,
                    claimType: "",
                    thirdPartyInvolved: "",
                    policyNumber: "",
                  });
                } else {
                  setSelectedHeaderIndex(index);
                  navigate(items.page);
                  checkForPathName(items.page);
                }
              }}>
              {items.title}{" "}
              {items.nestedList !== null && (
                <MdKeyboardArrowDown
                  size={20}
                  color={selectedHeaderIndex === index ? "white" : "black"}
                />
              )}
              {selectedHeaderIndex === index && nestedList && (
                <HeaderDropDown data={nestedList} parentRoute={items.page} />
              )}
            </li>
          ))}
      </ul>
      <div className='hidden md:flex justify-items-center align-middle '>
        <Button onClick={openSelfService} className='py-6 px-[20px]'>
          Access Self-Service
        </Button>
      </div>
      <RiMenuLine size={20} className='md:hidden' />
    </div>
  );
};
