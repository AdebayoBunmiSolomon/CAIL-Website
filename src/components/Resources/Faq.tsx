import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa6";
import { faqProps } from "../../types/types";

export const Faqs: React.FunctionComponent<faqProps> = ({ data }) => {
  const [info, setInfo] = useState<any>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const faqs = data;

  useEffect(() => {
    setInfo(data && data[0].info);
  }, [data]);

  return (
    <>
      <div className='bg-[#FFFFFF] flex justify-center pt-[50px] pb-[80px]'>
        <div className='w-[90%]'>
          <p className='text-[#000] text-[40px] font-bold pl-7  py-[50px]'>
            FAQs.
          </p>
          {/* faq contents */}
          <div className='w-[100%] flex flex-col md:flex-row lg:flex-row gap-6 justify-center'>
            {/* faq list */}
            <div className='w-[100%] md:w-[50%] lg:w-[50%] h-[550px] overflow-y-scroll p-4'>
              {faqs &&
                faqs.map((items, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setInfo(items.info);
                      setActiveIndex(index);
                    }}
                    className={`${
                      activeIndex === index ? "bg-[#F4E6E6]" : "bg-[#FAF5F5]"
                    } rounded-xl text-[#000] hover:cursor-pointer mb-3`}>
                    <div className='flex flex-row justify-between items-center'>
                      <p className='p-5 w-[80%] text-[17px] font-medium'>
                        {items.list}
                      </p>
                      <p className='p-5'>
                        {activeIndex === index && (
                          <FaCircle className={"text-[#900000]"} size={22} />
                        )}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            {/* faq info */}
            <div className='bg-primaryColor w-[100%] md:w-[45%] lg:w-[45%] h-[550px] rounded-3xl'>
              <p className='text-justify p-5 text-[#FFFFFF]'>{info}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
