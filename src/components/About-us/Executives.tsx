import React, { useState } from "react";
import { executiveProps } from "../../types/types";
import { FaCircle } from "react-icons/fa";
import { executives } from "../../assets/data/executives";

export const Executives: React.FC<executiveProps> = ({ data }) => {
  const [desc, setDesc] = useState<any>(executives[0].tabData[0].description);
  const [active, setActive] = useState<number>(0);
  console.log(data);
  return (
    <section className='flex justify-center items-center'>
      <div className='flex flex-col md:flex-col lg:flex-row lg:justify-between gap-[10px]'>
        <div className='w-[50%] justify-center items-center'>
          {data &&
            data.map((item, index) => (
              <div
                className={`p-3 lg:p-5 rounded-[12px] ${
                  active === index ? "bg-[#F4E6E6]" : "bg-[#FAF5F5]"
                } mb-[20px] cursor-pointer flex items-center justify-between h-[70px] w-[500px] `}
                onClick={() => {
                  setDesc(item.description);
                  setActive(index);
                }}
                key={index}>
                <div className='w-[400px] flex items-end justify-between'>
                  <h1 className='font-semibold'>{item.title}</h1>
                  <h2 className='text-primaryColor font-semibold'>
                    {item.position}
                  </h2>
                </div>
                <div>
                  {active === index && (
                    <FaCircle className={"text-[#900000]"} />
                  )}
                </div>
              </div>
            ))}
        </div>
        <div className='w-[50%] justify-center items-center'>
          <div className='bg-primaryColor rounded-2xl h-[610px] w-[500px] overflow-y-auto'>
            <div className='container p-[30px]'>
              <p className='text-[#F5F5F5]'>{desc && desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
