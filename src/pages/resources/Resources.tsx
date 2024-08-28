import React, { useEffect, useRef, useState } from "react";
import { Downloads, Faqs, Financials, Hero } from "../../components";
import { resourcesData } from "../../assets/data/resources";
import { financialData } from "../../assets/data/financials";
import { downloadData } from "../../assets/data/download";
import { useParams } from "react-router-dom";
import { GrLinkDown } from "react-icons/gr";

export const Resources: React.FunctionComponent<{}> = () => {
  const { id } = useParams<string>();
  // console.log(id);
  const [archiveView, setArchiveView] = useState<boolean>(false);

  //reference to a particular section of a page
  const faqRef = useRef<any>(null);
  const financialsRef = useRef<any>(null);
  const downloadsRef = useRef<any>(null);

  //scroll to particular section of a page
  const executeScroll = () => {
    if (id === "faqs") {
      faqRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else if (id === "financials") {
      financialsRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else if (id === "downloads") {
      downloadsRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Adding a delay to ensure that components are rendered before scrolling
    const timeoutId = setTimeout(() => {
      executeScroll();
    }, 200); // Adjust the delay as necessary

    return () => clearTimeout(timeoutId);
  }, [id]);
  return (
    <>
      <Hero
        title={"Get Access To More"}
        description={""}
        subtitle={"Information"}
      />

      <div ref={faqRef}>
        <Faqs data={resourcesData && resourcesData[0].data} />
      </div>

      <div ref={financialsRef}>
        <Financials
          data={financialData}
          viewArchive={() => setArchiveView(!archiveView)}
        />
      </div>

      <div ref={downloadsRef}>
        <Downloads data={downloadData} />
      </div>
      {archiveView && (
        <div className='top-0 left-0 bottom-0 right-0 fixed z-40 bg-[#0000007F] w-screen h-screen flex justify-center items-center'>
          <div className='w-[90%] bg-white pb-5 rounded-lg overflow-hidden h-[80%] overflow-y-scroll px-5'>
            <div className='flex items-center justify-between'>
              <p className='text-[#000] text-[40px] font-bold pl-7 pt-10 pb-10'>
                Financials
              </p>
              <button
                className='text-2xl text-black hover:text-slate-400 hover:duration-700'
                onClick={() => setArchiveView(!archiveView)}>
                X
              </button>
            </div>
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
      )}
    </>
  );
};
