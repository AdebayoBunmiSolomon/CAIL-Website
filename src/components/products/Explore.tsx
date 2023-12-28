import React from "react";
import { exploreOtherProducts } from "@/assets/data/explore";
import { GrLinkNext } from "react-icons/gr";

const Explore: React.FunctionComponent<{}> = () => {
  return (
    <div className='flex justify-center pt-20 pb-20'>
      <div className='w-[80%] space-y-6'>
        <h1 className='text-[#000000] font-bold text-[32px]'>
          EXPLORE OTHER PRODUCTS
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          <Card data={exploreOtherProducts} />
        </div>
      </div>
    </div>
  );
};

export default Explore;

//Explore card component
interface cardProps {
  data: any;
}

const Card: React.FunctionComponent<cardProps> = ({ data }) => {
  const productList = data;
  return (
    <>
      {productList &&
        productList.map((item: any, index: number) => {
          return (
            <div className='bg-[#F5F5F5] p-8 rounded-xl' key={index}>
              <div className='flex flex-col gap-8'>
                <h1 className='text-[#900000] font-bold text-[35px]'>
                  {item.productType}
                </h1>
                <a href={item.explore}>
                  <button className='bg-[#FFFFFF] text-[white] w-[120px] h-[30px] rounded-3xl'>
                    <span className='flex flex-row justify-around text-[#000000] font-medium'>
                      Explore{" "}
                      <i className='pt-1'>
                        <GrLinkNext color={"#000000"} />
                      </i>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
};
