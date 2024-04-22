/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tabContentsType } from "../../types/types";
import { products } from "../../assets/data/products";
import { Hero, ProductCard } from "../../components";

export const Products: React.FunctionComponent<{}> = () => {
  const { id } = useParams();
  const selectedTabHeader = id;
  const [productsData, setProductsData] = useState<tabContentsType[]>();

  useEffect(() => {
    const loadProducts = () => {
      const findSelectedProducts = products.filter(
        (items) => items.tabHeader === selectedTabHeader
      );
      console.log(findSelectedProducts[0].tabData);
      setProductsData(findSelectedProducts);
    };
    loadProducts();
  }, [selectedTabHeader]);
  return (
    <>
      <Hero
        title={String(productsData && productsData[0].title)}
        description={""}
        subtitle={String(productsData && productsData[0].subTitle)}
        subtitle2={String(productsData && productsData[0].subTitle2)}
      />
      <ProductCard
        data={productsData && productsData[0].tabData}
        productsToShowPerPage={Number(
          productsData && productsData[0].tabData.length
        )}
        tabHeader={String(productsData && productsData[0].tabHeader)}
        routeName='/products-section'
      />
    </>
  );
};
