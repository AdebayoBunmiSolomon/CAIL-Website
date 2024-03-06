import React from "react";
import { productsData } from "../../assets/data/products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextButton, PrevButton } from "./SlidesButton";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <NextButton />,
  prevArrow: <PrevButton />,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const ProductsSlide: React.FC<{}> = () => {
  return (
    <div className='py-20 w-[100%] bg-white'>
      <div className='w-[85%] m-auto pb-[150px]'>
        <h3 className='text-[#000000] hover:border-b-4 hover:border-[#900000] font-bold text-3xl w-[25%] hover:cursor-pointer pl-5 mb-5'>
          Our Products
        </h3>
        <Slider {...settings}>
          {productsData &&
            productsData.map((items, index) => {
              const length = productsData.length + 1;
              return (
                <div
                  className='bg-[white] drop-shadow-xl py-24 rounded-xl border-2'
                  key={index}>
                  <div className='flex flex-col justify-center items-center gap-5 pb-5'>
                    <items.icons color='#900000' size={50} />
                    <p className='text-black font-medium text-xl'>
                      {items.title}
                    </p>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <p className='w-[80%] pb-5 text-center'>{items.writeUp}</p>
                    <button className='bg-[#900000] text-white px-5 py-3 rounded-xl hover:bg-[#900000bb] duration-500'>
                      take a quick survey
                    </button>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};
