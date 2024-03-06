import React from "react";

export const OurStyle: React.FC<{}> = () => {
  return (
    <div className='px-5'>
      <p className='text-2xl font-bold py-2 my-2 border-b-2 border-[#900000] w-[22%] md:w-[18%] lg:w-[14%] hover:cursor-pointer'>
        Our Style
      </p>
      <div className='flex flex-row w-[100%] justify-start text-gray-500'>
        <div className='flex flex-col gap-5'>
          <p className='text-justify leading-10 md:leading-10 lg:leading-10 font-normal  text-gray-500'>
            Insurance Companies, like most financial institutions, operate in an
            increasingly competitive environment.
          </p>
          <p className='text-justify leading-10 md:leading-10 lg:leading-10 font-normal  text-gray-500'>
            At CAI however, the uniqueness of our service delivery is in our
            ability to provide fast, efficient and highly professional service
            to the market in which we operate. This we are able to achieve
            through the automation of our various lines of operation, thereby
            reducing processing time and ultimately acquiring the much desired
            competitive edge.
          </p>
          <p className='text-justify leading-10 md:leading-10 lg:leading-10 font-normal  text-gray-500'>
            In addition, our products and operations are essentially
            market-driven with emphasis on providing a wide menu of option on
            policies, having paid due regard to production processes employed in
            various industries.
          </p>
          <p className='text-justify leading-10 md:leading-10 lg:leading-10 font-normal  text-gray-500'>
            Our total commitment and focus is to strike a fine balance between
            sound underwriting, cost control, service and investment of our
            various clients.
          </p>
          <p className='text-justify leading-10 md:leading-10 lg:leading-10 font-normal  text-gray-500'>
            The Company is an efficient and fully automated company with a sharp
            focus on the wholesale corporate client market.
          </p>
        </div>
      </div>
    </div>
  );
};
