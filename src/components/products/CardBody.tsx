import React from "react";
import { BenefitList, KeyFeaturesList } from "./CardList";
import { GrLinkNext } from "react-icons/gr";

interface cardBodyProps {
  data: any;
}

const CardBody: React.FunctionComponent<cardBodyProps> = ({ data }) => {
  const {
    title,
    titleColor,
    textColor,
    desc,
    bgColor,
    benefits,
    keyFeatures,
    containerBgColor,
    getQuote,
  }: any = data;
  return (
    <div
      className={`${`bg-[${containerBgColor}]`} flex flex-row justify-center pt-10 pb-7`}>
      <div
        className={`${`bg-[${bgColor}]`} py-10 px-5 w-[80%] rounded-3xl border-2`}>
        <div className='flex flex-col gap-5'>
          <p
            className={`${`text-[${titleColor}]`} text-[25px] md:text-[30px] lg:text-[35px] font-bold`}>
            {title}
          </p>
          <p
            className={`${`text-[${textColor}]`} text-[12px] md:text-[15px] lg:text-[18px] font-normal text-justify leading-loose`}>
            {desc}
          </p>
          <div className='flex flex-col space-y-3 md:flex-col md:space-y-3 lg:flex-row lg:space-x-5 lg:space-y-0 mt-1 md:mt-2 lg:mt-4'>
            <BenefitList
              benefitList={benefits && benefits[0]}
              textColor={textColor}
              titleColor={titleColor}
              costImplication={"Custodian Group Life Insurance"}
              title={title}
            />
            <KeyFeaturesList
              keyFeaturesList={keyFeatures && keyFeatures[0]}
              textColor={textColor}
              titleColor={titleColor}
            />
          </div>
          {/* get quote button */}
          <div>
            <a href={getQuote}>
              <button className='bg-[#900000] text-[#FFFFFF] w-[120px] h-[30px] rounded-3xl hover:duration-500'>
                <span className='flex flex-row justify-around text-[#FFFFFF]'>
                  Get Quote{" "}
                  <i className='pt-1'>
                    <GrLinkNext color={"#FFFFFF"} />
                  </i>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
