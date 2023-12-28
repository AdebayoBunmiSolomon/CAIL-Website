/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface getQuoteDots {
  data: any;
  index: number;
}

const GetQuoteDots: React.FunctionComponent<getQuoteDots> = ({
  data,
  index,
}) => {
  const toggledNavData: any = data;
  const initialIndex: number = index;
  return (
    <>
      {toggledNavData &&
        toggledNavData.map((item: any, index: number) => {
          return (
            <div key={index}>
              <div></div>
              <div className='flex flex-row gap-3'>
                {item.data &&
                  item.data.map((item: any, index: number) => {
                    return (
                      <div
                        className={`w-4 h-4 rounded-full ${
                          initialIndex === index
                            ? "bg-[#900000]"
                            : "bg-[#ccc6c6]"
                        }`}
                        key={index}>
                        <p className='hidden'>{item.title}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default GetQuoteDots;
