import React from "react";
import { GrLinkDown } from "react-icons/gr";

interface downloadProps {
  data: any;
}

const Downloads: React.FunctionComponent<downloadProps> = ({ data }) => {
  const downloadData: any = data;
  return (
    <>
      <div className='bg-[#FBF9F9] flex justify-center pb-20'>
        <div className='w-[90%]'>
          <p className='text-[#000] text-[40px] font-bold pl-7 pt-10 pb-10'>
            Downloads
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {downloadData &&
              downloadData.map((item: any, index: number) => (
                <div key={index} className='bg-[#eee5e5] p-8 rounded-xl'>
                  <p className='text-[#706d6dd5] font-bold'>
                    {item.downloadType}
                  </p>
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

export default Downloads;
