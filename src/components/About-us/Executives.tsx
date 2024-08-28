import React, { useEffect, useState } from "react";
import { executiveProps } from "../../types/types";
import { FaCircle } from "react-icons/fa";
import { executives } from "../../assets/data/executives";

export const Executives: React.FC<executiveProps> = ({ data }) => {
  const [desc, setDesc] = useState<any>(executives[0].tabData[0].description);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const loadData = () => {
      setDesc(executives[0].tabData[0].description);
    };
    loadData();
  }, [data]);
  return (
    <div className='bg-[#efefef] flex justify-center pt-[50px] pb-[80px]'>
      <div className='w-[90%]'>
        <div className='w-[100%] flex flex-col md:flex-row lg:flex-row gap-6 justify-center'>
          <div className='w-[100%] md:w-[50%] lg:w-[50%] h-[550px]'>
            {data &&
              data.map((item, index) => (
                <div
                  className={`rounded-xl text-[#000] hover:cursor-pointer mb-3 ${
                    active === index ? "bg-[#F4E6E6]" : "bg-[#FAF5F5]"
                  }`}
                  onClick={() => {
                    setDesc(item.description);
                    setActive(index);
                  }}
                  key={index}>
                  <div className='flex flex-row justify-between items-center'>
                    <p className='p-5 w-[80%] text-[17px] font-medium'>
                      {item.title}
                    </p>
                    <p className='p-5'>
                      {active === index && (
                        <FaCircle className={"text-[#900000]"} size={22} />
                      )}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          {/* description container */}
          <div className='bg-primaryColor w-[100%] md:w-[45%] lg:w-[45%] h-[550px] rounded-3xl overflow-y-scroll'>
            <p className='text-justify p-5 text-[#FFFFFF]'>{desc && desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
