import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NewsLetter } from "../NewsLetter";
import { GoDot } from "react-icons/go";

export const Footer = () => {
  return (
    <div className=' bg-[#061D30]'>
      <div className=' flex-col px-24 text-white'>
        <div className=' flex w-[100%] md:pt-5'>
          <NewsLetter />
        </div>
        <div className='w-[100%] flex gap-28  items-start justify-between py-10 text-[18px] flex-1 '>
          <div className='firstcol flex-wrap'>
            <div className=''>
              <p className='text-[#9DADB9]'>QUICK LINKS</p>
            </div>
            <div className=' flex gap-[20px] flex-col mt-7 text-[11px] font-extralight md:text-[16px] '>
              <a
                href={
                  "https://custodianplc.com.ng/custodian-and-allied-insurance-limited"
                }
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
                <p className='  '>CrusaderSterling Pensions Ltd</p>
              </a>
              <a
                href={"https://updcplc.com/"}
                target='_blank'
                rel='noopener noreferrer'>
                <p className='  '> UPDC Plc</p>
              </a>
              <p>UPDC FM Ltd.</p>
              <p>Interstate Securities Ltd</p>
              <p>UPDC Festival Hotel Ltd.</p>
            </div>
          </div>
          <div className='firstcol flex-shrink'>
            <div>
              <p className='text-[#9DADB9]'>LEGAL</p>
            </div>
            <div className='mt-7 flex flex-col gap-[20px] font-extralight text-[11px] md:text-[16px] '>
              <a
                href={
                  "https://https://www.custodianplc.com.ng/privacy-policy.com/"
                }
                target='_blank'
                rel='noopener noreferrer'>
                <p className=' '>Privacy Policy</p>
              </a>
              <a
                href={
                  "https://www.custodianplc.com.ng/documents/WHISTLE_BLOWING_POLICY.pdf"
                }
                target='_blank'
                rel='noopener noreferrer'>
                <p className=' '>Whistle Bowing Policy</p>
              </a>
              <a href={" https://www.custodianplc.com.ng/whistleblower"}>
                <p className=' '>Whistle Blower</p>
              </a>
              <a
                href={
                  "https://www.custodianplc.com.ng/custodian-life-assurance-limited#"
                }>
                <p className=' '>Terms and Conditions</p>
              </a>
              <a href={"https://www.custodianplc.com.ng/complaints-procedure"}>
                <p className=' '>Complaints and Procedure</p>
              </a>
            </div>
          </div>
          <div className='firstcol flex-auto'>
            <div>
              <p className='text-[#9DADB9]'>MORE</p>
            </div>
            <div className='mt-7 flex flex-col text-[11px] md:text-[16px] font-extralight gap-[20px]'>
              <a
                href={"https://t.ly/xK6Lp"}
                target='_blank'
                rel='noopener noreferrer'>
                <p className='  '>Take a survey</p>
              </a>
              <p className=' '>Media</p>
              <p className=' '>Resources</p>
              <p className=' '>Give Us Feedback</p>
              <p className=' '>Make Recomendation</p>
            </div>
          </div>
          <div className=''>
            <div>
              <p className='text-[#9DADB9]'>FOLLOW US</p>
            </div>
            <div className='flex gap-2 mt-7'>
              <a
                href={"https://www.facebook.com/CustodianPLC/"}
                target='_blank'
                rel='noopener noreferrer'>
                {" "}
                <FaFacebookSquare size={30} />
              </a>
              <a
                href={"https://twitter.com/CustodianPLC"}
                target='_blank'
                rel='noopener noreferrer'>
                <FaTwitterSquare size={30} />
              </a>
              <a
                href={"https://www.instagram.com/custodianplc/"}
                target='_blank'
                rel='noopener noreferrer'>
                <FaInstagramSquare size={30} />
              </a>
              <a
                href={"https://www.linkedin.com/company/custodianplc"}
                target='_blank'
                rel='noopener noreferrer'>
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className=' flex justify-center gap-10 mt-10'>
          <p className=' mb-2 text-xs'>© 2023 Custodian Investment Plc</p>{" "}
          <p className=' mb-2 text-xs  flex '>
            <GoDot />
            Authorised and Regulated by the National Insurance Commission- RIC
            No. 010 (L)
          </p>
        </div>
      </div>
    </div>
  );
};
