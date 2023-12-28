/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import HTMLReactParser from "html-react-parser";
import { GrLinkNext } from "react-icons/gr";
import { Button } from "../ui/button";

interface getQuoteImageProps {
  data: any;
  index: number;
}

const GetQuoteImage: React.FunctionComponent<getQuoteImageProps> = ({
  data,
}) => {
  const toggledNavData: any = data;
  return (
    <>
      {toggledNavData &&
        toggledNavData.map((item: any, index: number) => {
          // return selected tabData product type
          return (
            <div key={index} className='w-[100%] justify-center flex flex-row'>
              {item.data && (
                <>
                  <p>{item.data.title}</p>
                </>
              )}
            </div>
          );
        })}
    </>
  );
};

export default GetQuoteImage;
