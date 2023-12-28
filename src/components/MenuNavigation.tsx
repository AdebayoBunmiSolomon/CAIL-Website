/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useState, useRef, useEffect } from "react";
import claLogo from "../assets/images/cla-logo.png";
import { Button } from "../components/ui/button";
import { FaChevronDown } from "react-icons/fa6";
import { RiMenuLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const MenuNavigation = () => {
  const navigate = useNavigate();
  const [submenu, setSubmenu] = useState(false);
  const [submenu2, setSubmenu2] = useState(false);
  const menuRef = useRef<any>(null);

  const toggleMenu = () => {
    setSubmenu(!submenu);
  };

  const toggleMenu2 = () => {
    setSubmenu2(!submenu2);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: { target: any }) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSubmenu(false);
        setSubmenu2(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuRef]);

  return (
    <div className='flex flex-row items-center justify-between py-8 bg-[#FBF9F9] px-10'>
      <div className='flex justify-center'>
        <img src={claLogo} alt='logo' className=' h-[40px] md:h-[65.5px]' />
      </div>
      <div
        className=' md:flex hidden rounded-3xl  bg-[white] drop-shadow-xl '
        ref={menuRef}>
        <ul className='flex flex-row mt-2 '>
          <li
            onClick={() => navigate("/")}
            className='p-4 w-[full] cursor-pointer hover:font-bold hover:text-[#900000] flex align-middle'>
            Home
          </li>
          <li
            onClick={() => navigate("#")}
            className='p-4 w-[full] cursor-pointer flex align-middle hover:font-bold hover:text-[#900000]'>
            About Us
          </li>
          <li
            onClick={toggleMenu}
            className='p-4 relative cursor-pointer   w-[full] flex hover:font-bold hover:text-[#900000]'>
            Products <FaChevronDown className=' w-[10px] h-[10px] ml-1 mt-2' />
            {submenu && (
              <ul className='absolute left-0 mt-10 hover:font-normal bg-white border rounded   text-gray-700 shadow-md w-[200px]'>
                <li
                  className=' py-2 pl-2 hover:font-semibold text-sm'
                  onClick={() => {
                    navigate("#");
                  }}>
                  Savings and Investment
                </li>
                <li
                  className=' py-2 pl-2 hover:font-semibold text-sm'
                  onClick={() => {
                    navigate("#");
                  }}>
                  Protection Policies
                </li>
                <li
                  className=' py-2 pl-2 hover:font-semibold text-sm'
                  onClick={() => {
                    navigate("#");
                  }}>
                  Endowment Policies
                </li>
                <li
                  className=' py-2 pl-2 hover:font-semibold text-sm'
                  onClick={() => {
                    navigate("#");
                  }}>
                  Annuities
                </li>
                <li
                  className=' py-2 pl-2 hover:font-semibold text-sm'
                  onClick={() => {
                    navigate("#");
                  }}>
                  Corporate{" "}
                </li>
              </ul>
            )}
          </li>
          <li className='p-4 w-[full] cursor-pointer flex align-middle hover:font-bold hover:text-[#900000]'>
            Media
          </li>
          <li
            onClick={() => navigate("#")}
            className='p-4 w-[full] cursor-pointer flex align-middle hover:font-bold hover:text-[#900000]'>
            Make a Claim
          </li>
          <li
            onClick={toggleMenu2}
            className='p-4 relative w-[full] cursor-pointer flex align-middle hover:font-bold hover:text-[#900000]'>
            Resources <FaChevronDown className=' w-[10px] h-[10px] ml-1 mt-2' />
            {submenu2 && (
              <ul className='absolute left-0 mt-10 bg-white border rounded hover:font-normal text-gray-700 shadow-md'>
                <li
                  className='p-2 hover:font-semibold text-sm'
                  onClick={() => {
                    navigate("#");
                  }}>
                  FAQs
                </li>
                <li
                  className='p-2 hover:font-semibold text-sm'
                  onClick={() => {
                    navigate("#");
                  }}>
                  Finacials
                </li>
                <li
                  className='p-2 hover:font-semibold text-sm'
                  onClick={() => {
                    navigate("#");
                  }}>
                  Downloads
                </li>
                <li
                  className='p-2 hover:font-semibold text-sm'
                  onClick={() => {
                    navigate("#");
                  }}>
                  Corporates
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={() => navigate("#")}
            className='p-4 w-[full] cursor-pointer flex align-middle hover:font-bold hover:text-[#900000]'>
            Contact Us
          </li>
        </ul>
      </div>

      <div className='hidden md:flex justify-items-center align-middle m-3'>
        <Button>Access Self-Service</Button>
      </div>
      <RiMenuLine size={20} className='md:hidden' />
    </div>
  );
};

export default MenuNavigation;
