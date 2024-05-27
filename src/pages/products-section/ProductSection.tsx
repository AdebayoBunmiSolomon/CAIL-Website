import React, { useEffect, useState } from "react";
import {
  BottomSectionItem,
  Button,
  ComingSoon,
  TopSectionItem,
} from "../../components";
import { singleProdDataProps, tabDataType } from "../../types/types";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { products } from "../../assets/data/products";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { scrollToTop } from "../../helper/helper";
import { useSelectedProdSection } from "../../hooks/store/useSelectedProdSection";

export const ProductSection: React.FC<{}> = () => {
  const navigate: NavigateFunction = useNavigate();
  const [productsData, setProductsData] = useState<tabDataType[]>();
  const [singleProdData, setSingleProdData] = useState<singleProdDataProps[]>();
  const [initialIndex, setInitialIndex] = useState<number>(0);
  const { id } = useParams();
  const { selectedProdSection } = useSelectedProdSection();
  const [showComingSoon, setShowComingSoon] = useState<boolean>(false);
  const tabHeader = id;

  const nextBtn = () => {
    if (productsData) {
      const dataLength = productsData?.length;
      if (initialIndex + 1 === dataLength) {
      } else {
        setInitialIndex(initialIndex + 1);
      }
    }
  };

  const prevBtn = () => {
    if (productsData) {
      const dataLength = productsData?.length;
      if (initialIndex < dataLength) {
        setInitialIndex(initialIndex - 1);
      } else {
      }
    }
  };

  useEffect(() => {
    const loadSelectedProducts = () => {
      const filteredProducts = products.filter(
        (items) => items.tabHeader === tabHeader
      );
      if (filteredProducts) {
        // console.log(filteredProducts[0].tabData);
        setProductsData(filteredProducts[0].tabData);
      }
    };
    loadSelectedProducts();
  }, [id]);

  useEffect(() => {
    const loadSingleSelectedProducts = () => {
      const filteredSingleProducts = products.filter(
        (items) => items.tabHeader === tabHeader
      );
      if (filteredSingleProducts) {
        const data = filteredSingleProducts[0].tabData.filter(
          (items) => items.title === selectedProdSection
        );
        if (data) {
          setSingleProdData(data);
        }
      }
    };
    loadSingleSelectedProducts();
  }, [selectedProdSection]);

  return (
    <>
      {selectedProdSection ? (
        <section className='pt-[150px] bg-[#FBF9F9] px-20'>
          <Button
            leftIcon={<GoArrowLeft size={20} />}
            text='Back'
            className='py-[3px] md:py-[3px] lg:py-[5px] px-3 bg-[white] drop-shadow-xl mb-5'
            onPress={() => navigate("/")}
          />
          <div className='bg-white w-[100%] self-center drop-shadow-xl rounded-2xl py-5 px-5'>
            <div className='flex flex-col gap-5'>
              <h1 className=' font-bold text-[#3F3F3F] text-xl md:text-2xl lg:text-3xl'>
                {singleProdData && singleProdData[0].title}
              </h1>
              <p className='text-[#808080] text-[12px] md:text-[16px] lg:text-[16px] font-normal leading-loose'>
                {singleProdData && singleProdData[0].description}
              </p>
              {/* top section list */}
              {singleProdData &&
                singleProdData[0].benefits.map((items, index) => (
                  <TopSectionItem items={items} keyIndex={index} />
                ))}
              {/* bottom section list */}
              {singleProdData &&
                singleProdData[0].keyFeatures.map((items, index) => (
                  <BottomSectionItem keyIndex={index} items={items} />
                ))}
            </div>
            <Button
              text='Get a quote'
              className='py-[5px] md:py-[7px] lg:py-[10px] px-[15px] text-[white] duration-700 hover:bg-[#900000c7]'
              rightIcon={<GoArrowRight size={20} color={"text-[#FFFFFF]"} />}
              onPress={() => {
                //navigate(`${singleProdData?.[0].getQuote}`)
                if (singleProdData?.[0].getQuote) {
                  navigate(`${singleProdData?.[0].getQuote}`);
                  setShowComingSoon(!showComingSoon);
                } else {
                  setShowComingSoon(!showComingSoon);
                }
              }}
            />
          </div>
        </section>
      ) : (
        <section className='pt-[150px] bg-[#FBF9F9] px-20'>
          <Button
            leftIcon={<GoArrowLeft size={20} />}
            text='Back'
            className='py-[3px] md:py-[3px] lg:py-[5px] px-3 bg-[white] drop-shadow-xl mb-5'
            onPress={() => navigate("/")}
          />
          <div className='bg-white w-[100%] self-center drop-shadow-xl rounded-2xl py-5 px-5'>
            <div className='flex flex-col gap-5'>
              <h1 className=' font-bold text-[#3F3F3F] text-xl md:text-2xl lg:text-3xl'>
                {productsData && productsData[initialIndex].title}
              </h1>
              <p className='text-[#808080] text-[12px] md:text-[16px] lg:text-[16px] font-normal leading-loose'>
                {productsData && productsData[initialIndex].description}
              </p>
              {/* top section list */}
              {productsData &&
                productsData[initialIndex].benefits.map((items, index) => (
                  <TopSectionItem items={items} keyIndex={index} />
                ))}
              {/* bottom section list */}
              {productsData &&
                productsData[initialIndex].keyFeatures.map((items, index) => (
                  <BottomSectionItem keyIndex={index} items={items} />
                ))}
            </div>
            <Button
              text='Get a quote'
              className='py-[5px] md:py-[7px] lg:py-[10px] px-[15px] text-[white] duration-700 hover:bg-[#900000c7]'
              rightIcon={<GoArrowRight size={20} color={"text-[#FFFFFF]"} />}
              onPress={() => {
                if (productsData?.[initialIndex].getQuote) {
                  navigate(`${productsData?.[initialIndex].getQuote}`);
                  setShowComingSoon(!showComingSoon);
                } else {
                  setShowComingSoon(!showComingSoon);
                }
              }}
            />
          </div>
          <div className='flex flex-row justify-center items-center gap-2 pt-5'>
            <Button
              disabled={initialIndex < 1 ? true : false}
              onPress={() => prevBtn()}
              text='Prev'
              className={`py-[3px] md:py-[3px] lg:py-[4px] px-3 bg-[white] drop-shadow-xl text-[#900000] ${
                initialIndex < 1 ? "opacity-40" : undefined
              }`}
              leftIcon={<GoArrowLeft size={20} color={"text-[#90000]"} />}
            />
            <Button
              disabled={
                initialIndex + 1 === productsData?.length ? true : false
              }
              onPress={() => {
                nextBtn();
                scrollToTop();
              }}
              text='Next'
              className={`py-[3px] md:py-[3px] lg:py-[4px] px-3 bg-[white] drop-shadow-xl text-[#900000] ${
                initialIndex + 1 === productsData?.length
                  ? "opacity-40"
                  : undefined
              }`}
              rightIcon={<GoArrowRight size={20} color={"text-[#90000]"} />}
            />
          </div>
        </section>
      )}
      <ComingSoon
        showComingSoon={showComingSoon}
        closeModal={(value) => setShowComingSoon(value)}
      />
    </>
  );
};
