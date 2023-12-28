/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { productsData } from "@/assets/data/productsData";
import Hero from "@/components/Hero";
import ProductCard from "@/components/products/ProductCard";
import { useParams } from "react-router-dom";
import Explore from "@/components/products/Explore";

const Products: React.FunctionComponent<{}> = () => {
  const { id }: any = useParams();
  const [initialProductsData, setInitialProductsData] = useState<any>();

  const getProductsData = () => {
    const productData: any = productsData.filter(
      (item: any) => item.productType === id
    );
    setInitialProductsData(productData);
  };

  useEffect(() => {
    getProductsData();
  }, [id]);

  return (
    <>
      <Hero
        title={initialProductsData && initialProductsData[0].title}
        subtitle={initialProductsData && initialProductsData[0].subTitle}
        description={initialProductsData && initialProductsData[0].desc}
      />
      <div className='bg-[#F4E6E6]'>
        <ProductCard
          data={initialProductsData && initialProductsData[0].data}
        />
      </div>
      <div>
        <Explore />
      </div>
    </>
  );
};

export default Products;
