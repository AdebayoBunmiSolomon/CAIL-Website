import React from "react";
import CardBody from "./CardBody";

interface productCardProps {
  data: any;
}

const ProductCard: React.FunctionComponent<productCardProps> = ({ data }) => {
  const productData = data;
  return (
    <>
      {productData &&
        productData.map((item: any, index: number) => {
          return (
            <div key={index}>
              <CardBody data={item} />
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;
