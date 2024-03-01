import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import CapitalBuilder from "../../assets/svg/CapitalBuilder";
import LifeTimeHarvest from "../../assets/svg/LifeTimeHarvest";
import TuitionProtection from "../../assets/svg/TuitionProtection";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <section className='bg-[#FBF9F9] h-[100vh] pt-[200px] md:pb-[600px]'>
      <div className='w-full items-start justify-center]'>
        <div className='flex items-center justify-between mx-auto px-[80px] 2xl:px-[150px]'>
          {/* Hero Content Left */}
          <div className='w-[700px] space-y-[50px]'>
            <div className='space-y-[30px]'>
              <div>
                <span className='text-[58px]  leading-[68px] text-primaryColor font-[700]'>
                  Insurance solutions
                </span>
                <h1 className='text-[58px] leading-[68px] text-black font-[700]'>
                  crafted to fit your special needs
                </h1>
              </div>
              <p className='text-[24px] leading-[34px] font-[400] '>
                Discover how our insurance product can provide you with peace of
                mind and security, all while contributing to a profitable and
                sustainable future
              </p>
            </div>

            <div className='flex flex-col md:flex-row gap-[50px]'>
              <Button
                className='w-[236px] h-[70px] font-[700] bg-[#F4E6E6] rounded-[50px] text-[18px] leading-[30px] text-primaryColor hover:bg-[#F4E6E6]'
                onClick={() => {}}>
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image Right */}
          <div className='w-[550px] 2xl:w-[650px] hero-img'>
            <div className='flex items-center w-full justify-center relative'>
              <div
                className={`bouncing-image top bounce  `}
                onClick={() => navigate("/products/Protection Policies")}>
                <TuitionProtection />
              </div>
            </div>
            <div
              className={`bouncing-image left bounce `}
              onClick={() => navigate("/products/Endowment Policies")}>
              <LifeTimeHarvest />
            </div>
            <div
              className={`bouncing-image right bounce `}
              onClick={() => navigate("/products/Saving And Investment")}>
              <CapitalBuilder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
