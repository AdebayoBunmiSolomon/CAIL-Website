import React, { useEffect, useRef } from "react";
import {
  DownloadApp,
  GetStarted,
  LearnMore,
  ProductCard,
  Tab,
} from "../../components";
import { products } from "../../assets/data/products";
import { tabDataType } from "../../types/types";
import { useSelectedTabData } from "../../hooks/useSelectedTabData";
import { NavigateFunction, useNavigate } from "react-router-dom";
export const Home = () => {
  const { setTabData, setTabHeader, tabData, tabHeader } = useSelectedTabData();
  const getAQuoteRef = useRef<any>(null);
  const navigate: NavigateFunction = useNavigate();

  const loadInitialTabData = (tabData: tabDataType[]) => {
    setTabData(tabData);
  };

  const getAQuote = () => {
    getAQuoteRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // load initial tab data
  useEffect(() => {
    loadInitialTabData(products[0].tabData);
  }, []);

  return (
    <>
      <GetStarted
        takeARecommendationQuiz={() => {
          navigate("/about-us");
        }}
        getAQuote={() => {
          getAQuote();
        }}
      />
      <div ref={getAQuoteRef}>
        <Tab
          data={products}
          tabClick={(tabData, tabHeader) => {
            setTabData(tabData);
            setTabHeader(tabHeader);
          }}
        />
        <ProductCard
          data={tabData}
          tabHeader={!tabHeader ? products[0].tabHeader : tabHeader}
          showDataDescription
          showExploreMore
          productsToShowPerPage={5}
          routeName='/products-section'
          navigateToProdSection
        />
      </div>
      <LearnMore />
      {/* <DownloadApp /> */}
    </>
  );
};
