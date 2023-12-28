import React from "react";
import { GrLinkDown } from "react-icons/gr";

interface financialProps {
  data: any;
}

const Financials: React.FunctionComponent<financialProps> = ({ data }) => {
  const financialData: any = data;
  return (
    <>
      <div className='bg-[#FBF9F9] flex justify-center mt-10'>
        <div className='w-[90%]'>
          <p className='text-[#000] text-[40px] font-bold pl-7 pt-10 pb-10'>
            Financials
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {financialData &&
              financialData.map((item: any, index: number) => (
                <div key={index} className='bg-[#F5F5F5] p-8 rounded-xl'>
                  <h1 className='text-[#900000] font-bold text-[35px]'>
                    {item.financialYear}
                  </h1>
                  <p>{item.financialType}</p>
                  <a href={item.download}>
                    <button className='bg-[#FFFFFF] text-[white] w-[130px] py-1 rounded-xl mt-5'>
                      <span className='flex flex-row justify-evenly text-[#000000] font-medium'>
                        Download{" "}
                        <i className='pt-1'>
                          <GrLinkDown color={"#000000"} />
                        </i>
                      </span>
                    </button>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Financials;
