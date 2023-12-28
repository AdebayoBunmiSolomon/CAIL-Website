/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { getQuoteData } from "../../assets/data/getQuoteData";
import GetQuoteTabBar from "./GetQuoteTabBar";
import { GrLinkNext } from "react-icons/gr";

const GetQuote: React.FunctionComponent<{}> = () => {
  const [toggledNav, setToggledNav] = useState<string>(
    "Business Insurance Products"
  );
  const [toggledNavData, setToggledNavData] = useState<any | null>(
    getQuoteData
  );

  const getTabData = (type: string) => {
    const tabData = getQuoteData.filter(
      (item: any) => item.productType === type
    );

    setToggledNavData(tabData);
    console.log(tabData);
    setToggledNav(tabData[0].productType);
  };

  useEffect(() => {
    getTabData(toggledNav);
  }, []);

  return (
    <section>
      <div className='flex flex-col items-center'>
        {/* tab bar */}
        <div className='flex flex-row justify-center gap-5 bg-[#F4E6E6] rounded-[56px] py-[0.7rem] md:py-2 lg:py-2 px-2'>
          <GetQuoteTabBar
            data={getQuoteData}
            nav={toggledNav}
            getTabData={getTabData}
          />
        </div>
        {/* toggled nav data display */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10'>
          {toggledNavData[0].data &&
            toggledNavData[0].data.map((item: any, index: number) => (
              <div
                key={index}
                className='bg-[#eee5e5] p-5 rounded-xl flex flex-col justify-between'>
                <div>
                  <p className='text-[#00000] font-semibold w-[200px] text-[16px]'>
                    {item.title}
                  </p>
                </div>
                <div className=' w-[300px]'>
                  <p className='text-[#00000] font-normal text-[16px]'>
                    {item.desc}
                  </p>
                </div>
                <div>
                  <a href={item.learnMore}>
                    <button className='text-[#900000] w-[130px] py-1 rounded-xl mt-5'>
                      <span className='flex flex-row justify-evenly text-[#900000] opacity-80 font-medium'>
                        Learn more{" "}
                        <i className='pt-1'>
                          <GrLinkNext color={"#900000"} />
                        </i>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          <div className='bg-gradient-to-r from-[#900000] to-[#D25050] p-5 rounded-xl flex flex-col justify-between'>
            <div>
              <h1 className='text-[25px] md:text-[35px] lg:text-[43px] text-[#FFFFFF] font-bold w-[290px]'>
                Explore more products
              </h1>
            </div>
            <div className='flex flex-row justify-between'>
              <i></i>
              <i className='pt-1'>
                <GrLinkNext color={"#FFFFFF"} />
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
