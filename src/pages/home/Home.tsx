import React, { useEffect } from "react";
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
export const Home = () => {
  const { setTabData, setTabHeader, tabData, tabHeader } = useSelectedTabData();

  const loadInitialTabData = (tabData: tabDataType[]) => {
    setTabData(tabData);
  };

  // load initial tab data
  useEffect(() => {
    loadInitialTabData(products[0].tabData);
  }, []);

  return (
    <>
      <GetStarted />
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
      <LearnMore />
      <DownloadApp />
    </>
  );
};
