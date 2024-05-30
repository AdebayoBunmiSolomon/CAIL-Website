import React from "react";
import { productCardProps } from "../../types/types";
import { GoArrowRight } from "react-icons/go";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { useSelectedHeader } from "../../hooks/useSelectedHeader";
import { truncateLargeText } from "../../helper/helper";
import { Button } from "../shared/Button";
import { useSelectedProdSection } from "../../hooks/store/useSelectedProdSection";

export const ProductCard: React.FC<productCardProps> = ({
  data,
  tabHeader,
  showDataDescription,
  showExploreMore,
  productsToShowPerPage,
  routeName,
  navigateToProdSection,
}) => {
  const { setSelectedHeaderIndex } = useSelectedHeader();
  const navigate: NavigateFunction = useNavigate();
  const { setSelectedProdSection } = useSelectedProdSection();
  return (
    <>
      <div className='bg-white py-5 px-4 md:px-10 lg:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data &&
            data.slice(0, productsToShowPerPage).map((items, index) => (
              <div
                className='bg-gray-200 py-6 px-5 rounded-xl flex flex-col gap-7'
                key={index}>
                <div>
                  <p className='font-medium text-sm md:text-base lg:text-xl w-full'>
                    {items.title}
                  </p>
                </div>
                {showDataDescription && (
                  <div>
                    <p className='text-gray-500 font-medium'>
                      {truncateLargeText(items.description)}
                    </p>
                  </div>
                )}
                <div className='flex flex-col h-full items-start justify-end'>
                  <Button
                    text='Learn More'
                    className='flex text-[#900000] font-semibold bg-transparent px-0'
                    rightIcon={<GoArrowRight size={20} color='#900000' />}
                    onPress={() => {
                      if (navigateToProdSection) {
                        navigate(`${routeName}/${tabHeader}`);
                        setSelectedProdSection(String(items.title));
                      } else {
                        navigate(`${routeName}/${tabHeader}`);
                      }
                    }}
                  />
                </div>
              </div>
            ))}

          {showExploreMore && (
            <div className='bg-gradient-to-r from-[#900000] to-[#D25050] py-6 px-5 rounded-xl hover:cursor-pointer flex flex-col gap-7'>
              <p className='font-bold text-2xl md:text-3xl lg:text-4xl w-full text-white'>
                Explore more products
              </p>
              <div className='flex flex-col h-full items-end justify-end'>
                <button
                  onClick={() => {
                    navigate(`/products/${tabHeader}`);
                    setSelectedHeaderIndex(2);
                  }}>
                  <GoArrowRight size={30} color='#FFFFFF' />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
