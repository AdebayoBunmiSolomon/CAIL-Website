import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <div className=" bg-[#061D30] items-center  justify-center">
      <div className=" flex-col container text-white">
        <div className=" flex w-[100%] pt-10 md:pt-5">
          <NewsLetter />
        </div>
        <div className="w-[100%] flex gap-10  md:gap-40  items-start justify-between py-10 text-[18px] flex-1 ">
          <div className="firstcol flex-wrap">
            <div className="">
              <p className="text-[#9DADB9]">QUICK LINKS</p>
            </div>
            <div className=" flex gap-1  md:gap-5 flex-col mt-7 text-[11px] md:text-[18px] ">
              <p className="  ">Custodian Investment Plc</p>
              <p className="  ">Custodian and Allied Insurance Ltd</p>
              <p className="  ">Custodian Life Assurance Ltd</p>
              <p className="  ">Custodian Trustees Ltd</p>
              <p className="  ">CrusaderSterling Pensions Ltd</p>
              <p className="  "> UPDC Plc</p>
            </div>
          </div>
          <div className="firstcol flex-shrink">
            <div>
              <p className="text-[#9DADB9]">LEGAL</p>
            </div>
            <div className="mt-7 flex flex-col gap-1 md:gap-5 text-[11px] md:text-[18px] ">
              <p className=" ">Privacy Policy</p>
              <p className=" ">Whistle blowing policy</p>
              <p className=" ">Whistle blower</p>
              <p className=" ">Terms and conditions</p>
              <p className=" ">complaints procedure</p>
            </div>
          </div>
          <div className="firstcol flex-auto">
            <div>
              <p className="text-[#9DADB9]">MORE</p>
            </div>
            <div className="mt-7 flex flex-col text-[11px] md:text-[18px] gap-1 md:gap-5">
              <p className=" ">Carrers</p>
              <p className=" ">CSR</p>
              <p className=" ">Key Moments</p>
            </div>
          </div>
          <div className="">
            <div>
              <p className="text-[#9DADB9]">FOLLOW US</p>
            </div>
            <div className="flex gap-2 mt-7">
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaInstagramSquare />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <p className=" mb-2 text-xs">© 2023 Custodian Investment Plc</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
