import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa6";

interface faqDataProps {
  data: any;
}

const Faqs: React.FunctionComponent<faqDataProps> = ({ data }) => {
  const [info, setInfo] = useState<any>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const faqs: any = data;

  useEffect(() => {
    setInfo(data && data[0].info);
  }, [faqs]);

  return (
    <>
      <div className='bg-[#FFFFFF] flex justify-center mb-10 mt-10'>
        <div className='w-[90%]'>
          <p className='text-[#000] text-[40px] font-bold pl-7'>FAQs.</p>
          {/* faq contents */}
          <div className='w-[100%] flex flex-col md:flex-row lg:flex-row gap-6 justify-center'>
            {/* faq list */}
            <div className='w-[100%] md:w-[50%] lg:w-[50%] h-[550px] overflow-y-scroll p-4'>
              {faqs &&
                faqs.map((items: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => {
                      setInfo(items.info);
                      setActiveIndex(index);
                    }}
                    className={`${
                      activeIndex === index ? "bg-[#F4E6E6]" : "bg-[#FAF5F5]"
                    } rounded-xl text-[#000] hover:cursor-pointer mb-5 border`}>
                    <div className='flex flex-row justify-between items-center'>
                      <p className='p-5 w-[80%] text-[17px] font-medium'>
                        {items.li}
                      </p>
                      <p className='p-5'>
                        {activeIndex === index && (
                          <FaCircle className={"text-[#900000]"} />
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

export default Faqs;
