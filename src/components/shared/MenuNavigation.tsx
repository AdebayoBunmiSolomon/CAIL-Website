/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { FaChevronDown } from "react-icons/fa6";
import { RiMenuLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import ClaLogo from "../../assets/svg/ClaLogo";

const MenuNavigation = () => {
  const navigate = useNavigate();

  // const [selectedLink, setSelectedLink] = useState<string>();
  const [selectedHeader, setSelectedHeader] = useState<string>("home");
  const menuRef = useRef<any>(null);
  const location = useLocation();
  const { pathname } = location;

  const openSelfService = () => {
    const externalUrl = "http://ss-portal.cip-tech.org/";
    window.open(externalUrl, "_blank");
  };

  useEffect(() => {
    if (pathname === "/") {
      setSelectedHeader("home");
    } else if (pathname === "/about-us") {
      setSelectedHeader("about-us");
    } else if (pathname === "/products") {
      setSelectedHeader("products");
    } else if (pathname === "/media") {
      setSelectedHeader("media");
    } else if (pathname === "/claim") {
      setSelectedHeader("claim");
    } else if (pathname === "/resources") {
      setSelectedHeader("resources");
    } else if (pathname === "/contact") {
      setSelectedHeader("contact");
    }
    console.log(pathname);
  }, [pathname]);

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
      <div
        className=' md:flex hidden rounded-[50px] items-center px-2 justify-between bg-[white] drop-shadow-xl h-[63px]'
        ref={menuRef}>
        <ul className='flex flex-row text-[14px] h-full justify-center leading-[22.5px] '>
          <li
            onClick={() => {
              navigate("/");
              setSelectedHeader("home");
            }}
            className={` h-full  cursor-pointer hover:font-bold   flex  items-center justify-center `}>
            <div
              className={`px-[15px] py-[10px] ${
                selectedHeader === "home"
                  ? "bg-[#900000] text-white rounded-[50px]"
                  : ""
              }`}>
              Home
            </div>
          </li>
          <li
            onClick={() => {
              navigate("/about-us");
              setSelectedHeader("about-us");
            }}
            className={`h-full cursor-pointer  flex items-center justify-center align-middle hover:font-bold `}>
            <div
              className={`py-[10px] px-[15px]  ${
                selectedHeader === "about-us"
                  ? "bg-[#900000] text-white rounded-[50px]"
                  : ""
              }`}>
              About Us
            </div>
          </li>
          <li
            onClick={() => {
              navigate("/products");
              setSelectedHeader("products");
            }}
            className={`relative  h-full cursor-pointer  flex items-center justify-center hover:font-bold`}>
            <div
              className={`px-[15px] py-[10px] ${
                selectedHeader === "products"
                  ? "bg-[#900000] text-white rounded-[50px]"
                  : ""
              }`}>
              <div className='flex flex-row items-center'>Products</div>
            </div>
          </li>
          <li
            onClick={() => {
              navigate("/claim");
              setSelectedHeader("claim");
            }}
            className={`h-full cursor-pointer  flex items-center justify-center align-middle hover:font-bold `}>
            {" "}
            <div
              className={`py-[10px] px-[15px]  ${
                selectedHeader === "claim"
                  ? "bg-[#900000] text-white rounded-[50px]"
                  : ""
              }`}>
              Make a Claim
            </div>
          </li>
          <li
            onClick={() => {
              navigate("/resources");
              setSelectedHeader("resources");
            }}
            className={` relative  h-full cursor-pointer  flex items-center justify-center hover:font-bold`}>
            <div
              className={`px-[15px] py-[10px] ${
                selectedHeader === "resources"
                  ? "bg-[#900000] text-white rounded-[50px]"
                  : ""
              }`}>
              <div className='flex items-center'>Resources</div>
            </div>
          </li>
          <li
            onClick={() => {
              navigate("/contact");
              setSelectedHeader("contact");
            }}
            className={`h-full cursor-pointer  flex items-center justify-center align-middle hover:font-bold `}>
            <div
              className={`py-[10px] px-[15px]  ${
                selectedHeader === "contact"
                  ? "bg-[#900000] text-white rounded-[50px]"
                  : ""
              }`}>
              Contact Us
            </div>
          </li>
        </ul>
      </div>

      <div className='hidden md:flex justify-items-center align-middle '>
        <Button onClick={openSelfService} className=' h-[63px] px-[20px]'>
          Access Self-Service
        </Button>
      </div>
      <RiMenuLine size={20} className='md:hidden' />
    </div>
  );
};

export default MenuNavigation;
