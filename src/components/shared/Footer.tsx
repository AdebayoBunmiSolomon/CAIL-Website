import React from "react";
import { GoDot } from "react-icons/go";
import { NavigateFunction, useNavigate } from "react-router-dom";
import fbIcon from "../../assets/images/fb_icon.png";
import igIcon from "../../assets/images/IG_icon.png";
import linkedInIcon from "../../assets/images/LinkedIn_icon.png";
// import { NewLetter } from "./Newsletter";

export const Footer = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className='bg-[#061D30]'>
      <div className='flex flex-col px-10 md:px-24 pt-5 text-white'>
        {/* <div className=' flex w-[100%] md:pt-5'>
          <NewLetter />
        </div> */}
        <div className='flex flex-col md:flex-row items-start justify-between py-10 text-[18px]'>
          <div className=''>
            <h3 className='text-[#9DADB9]'>QUICK LINKS</h3>
            <div className='flex gap-[10px] flex-col mt-7 text-[12px] leading-[30px] font-[500] md:text-[16px] '>
              <a
                href={"https://custodianplc.com.ng"}
                target='_blank'
                rel='noopener noreferrer'>
                <p className='  '>Custodian Investment Plc</p>
              </a>
              <a
                href={
                  "https://custodianplc.com.ng/custodian-and-allied-insurance-limited"
                }
                target='_blank'
                rel='noopener noreferrer'>
                <p className='  '>Custodian and Allied Insurance Ltd</p>
              </a>
              <a
                href={"https://custodianplc.com.ng/trustees-limited"}
                target='_blank'
                rel='noopener noreferrer'>
                <p className=' '>Custodian Trustees Ltd</p>
              </a>
              <a
                href={"https://crusaderpensions.com/"}
                target='_blank'
                rel='noopener noreferrer'>
                <p className='  '>Crusader Sterling Pensions Ltd</p>
              </a>
              <a
                href={"https://updcplc.com/"}
                target='_blank'
                rel='noopener noreferrer'>
                <p className='  '> UPDC Plc</p>
              </a>
              <a
                href={"https://updcfm.com/"}
                target='_blank'
                rel='noopener noreferrer'>
                <p>UPDC FM Ltd.</p>
              </a>
              <a
                href={"https://www.interstatesecurities.com/"}
                target='_blank'
                rel='noopener noreferrer'>
                <p>Interstate Securities Ltd</p>
              </a>
              <a
                href={"https://festivalhotellagos.com/"}
                target='_blank'
                rel='noopener noreferrer'>
                <p>UPDC Festival Hotel Ltd.</p>
              </a>
            </div>
          </div>
          <div className='mt-10 md:mt-0'>
            <p className='text-[#9DADB9]'>LEGAL</p>
            <div className='flex gap-[10px] flex-col mt-7 text-[12px] leading-[30px] font-[500] md:text-[16px]'>
              <span onClick={() => navigate("/privacy-policy")}>
                <p className='cursor-pointer'>Privacy Policy</p>
              </span>

              <a
                href={
                  "https://www.custodianplc.com.ng/documents/WHISTLE_BLOWING_POLICY.pdf"
                }
                target='_blank'
                rel='noopener noreferrer'>
                <p className=' '>Whistle Bowing Policy</p>
              </a>
              <a
                href={" https://www.custodianplc.com.ng/whistleblower"}
                target='_blank'
                rel='noopener noreferrer'>
                <p className=' '>Whistle Blower</p>
              </a>
              <span onClick={() => navigate("/terms&conditions")}>
                <p className='cursor-pointer'>Terms and Conditions</p>
              </span>

              <span onClick={() => navigate("/complaints-procedure")}>
                <p className='cursor-pointer'>Complaints and Procedure</p>
              </span>
            </div>
          </div>
          <div className='mt-10 md:mt-0'>
            <p className='text-[#9DADB9]'>MORE</p>
            <div className='flex gap-[10px] flex-col mt-7 text-[12px] leading-[30px] font-[500] md:text-[16px]'>
              <a
                href={"https://t.ly/xK6Lp"}
                target='_blank'
                rel='noopener noreferrer'>
                <p className='  '>Take a survey</p>
              </a>
              {/* <p className=" ">Media</p> */}
              <span onClick={() => navigate("/resources/faqs")}>
                <p className='cursor-pointer'>FAQs</p>
              </span>
              <span onClick={() => navigate("/resources/financials")}>
                <p className='cursor-pointer'>Financials</p>
              </span>
              <span onClick={() => navigate("/resources/downloads")}>
                <p className='cursor-pointer'>Downloads</p>
              </span>
              <span onClick={() => navigate("/contact-us")}>
                <p className='cursor-pointer'>Give Us Feedback</p>
              </span>
              {/* <p className=" ">Make Recomendation</p> */}
            </div>
          </div>
          <div className='mt-10 md:mt-0'>
            <p className='text-[#9DADB9]'>FOLLOW US</p>
            <div className='flex gap-[30px] mt-7'>
              <a
                href={"https://www.facebook.com/CustodianPLC/"}
                target='_blank'
                rel='noopener noreferrer'>
                <img src={fbIcon} alt='facebook' />
              </a>

              <a
                href={"https://www.instagram.com/custodianplc/"}
                target='_blank'
                rel='noopener noreferrer'>
                <img src={igIcon} alt='instagram' />
              </a>
              <a
                href={"https://www.linkedin.com/company/custodianplc"}
                target='_blank'
                rel='noopener noreferrer'>
                <img src={linkedInIcon} alt='LinkedIn' />
              </a>
              {/* <a
                href={"https://twitter.com/CustodianPLC"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={images.twitter} alt="twitter" />
              </a> */}
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center gap-5 mt-10 font-[400] mb-2 text-[6px] md:text-[16px] leading-[30px]'>
          <p>© 2023 Custodian Investment Plc</p>
          <p className='flex'>
            <GoDot />
            Authorised and Regulated by the National Insurance Commission -{" "}
            <span className='font-[500]'>RIC No. 010 (L)</span>
          </p>
        </div>
      </div>
    </div>
  );
};
