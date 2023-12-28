import React, { useEffect, useState } from "react";
import { resourcesData } from "../assets/data/resourcesData";
import { faqsData } from "../assets/data/faqsData";
import Hero from "../components/Hero";
import { useParams } from "react-router-dom";
import Faqs from "../components/Faqs";
import Financials from "../components/Financials";
import { financialData } from "../assets/data/financialData";
import ProductCard from "../components/products/ProductCard";
import Downloads from "../components/Downloads";
import { downloadList } from "../assets/data/downloads";

const resourcesCorporateData = [
  {
    productType: "Corporate",
    title: "Explore Comprehensive",
    subTitle: "Corporate Products",
    desc: "A Reliable Path to Financial Stability. Plan Your Future Income Today.",
    data: [
      {
        title: "Custodian Group Credit Life",
        containerBgColor: "#F4E6E6",
        bgColor: "#FFFFFF",
        titleColor: "#3F3F3F",
        textColor: "#808080",
        desc: "",
        benefits: [
          {
            ul: "Benefits",
            li: [
              {
                desc: "Death: The policy covers death of the borrower within the cover period and the future outstanding principal of the borrower will be paid on death of the borrower starting from the time of death.",
              },
              {
                desc: "Permanent Disability By Accident: The policy covers total permanent disablement of the borrower as a result of accident within the cover period and the future outstanding principal of the borrower will be paid on total permanent disablement of the borrower starting from the time of disability.",
              },
            ],
          },
        ],
        keyFeatures: [
          {
            ul: "",
            li: [
              {
                desc: "Death: The policy covers death of the borrower within the cover period and the future outstanding principal of the borrower will be paid on death of the borrower starting from the time of death.",
              },
              {
                desc: "Permanent Disability By Accident: The policy covers total permanent disablement of the borrower as a result of accident within the cover period and the future outstanding principal of the borrower will be paid on total permanent disablement of the borrower starting from the time of disability.",
              },
            ],
          },
        ],
      },
      {
        title: "Custodian Group Life Insurance",
        containerBgColor: "#F4E6E6",
        bgColor: "#061D30",
        titleColor: "#FFFFFF",
        textColor: "#DBDBDB",
        desc: "The Custodian Group Life Assurance Policy is designed to meet the requirements of the statutory group life policy under section 4(5) of the Pension Reform Act, 2014. In addition, it provides some additional benefits which could be attached to the main policy depending on the circumstances of the employer. Custodian Life Assurance (CLA) is duly licensed by the National Insurance Commission and a registered member of the Nigerian Insurers Association (NIA).",
        benefits: [
          {
            ul: "Benefits",
            li: [
              {
                desc: "The group life assurance policy is the cheapest insurance cover",
              },
              {
                desc: "Prevents extra budgetary expenses resulting from unforeseen death of an employee",
              },
              {
                desc: "Very simple to administer.",
              },
            ],
          },
        ],
        keyFeatures: [
          {
            ul: "Key Features",
            li: [
              {
                desc: "Provides a 24-hour mortality cover devoid of geographical limitations.",
              },
              {
                desc: "Provides cover against death from any source",
              },
              {
                desc: "Provides instant financial assistance for dependents of the deceased",
              },
              {
                desc: "Provides death cover of twice the sum assured in case of accidental death (if the option is chosen)",
              },
              {
                desc: "Provides permanent disability benefit equal to the sum assured in case of the Employee being totally and permanently disabled (optional)",
              },
            ],
          },
        ],
      },
    ],
  },
];

const Resources: React.FunctionComponent<{}> = () => {
  const { id } = useParams<string>();
  const [heroInfo, setHeroInfo] = useState<any>();
  const [faqData, setFaqData] = useState<any>();
  const getResourceData = () => {
    const resourceData: any = resourcesData.filter(
      (resources: any) => resources.resourcesType === id
    );
    setHeroInfo(resourceData);
    getFaqData();
  };

  const getFaqData = () => {
    const faqData: any = faqsData.filter(
      (faqs: any) => faqs.resourcesType === id
    );
    setFaqData(faqData[0].data);
  };

  useEffect(() => {
    const loadData = () => {
      if (id !== "Corporate") {
        getResourceData();
      } else {
        //do something else
      }
    };
    loadData();
  }, [id]);

  return (
    <>
      {id !== "Corporate" ? (
        <>
          <Hero
            title={heroInfo && heroInfo[0].title}
            subtitle={heroInfo && heroInfo[0].subTitle}
            description={heroInfo && heroInfo[0].desc}
          />

          <Faqs data={faqData && faqData} />

          <Financials data={financialData} />
        </>
      ) : (
        <>
          <Hero
            title={"Your Financial Future With"}
            subtitle={"Steady Income Streams"}
            description={
              "A Reliable Path to Financial Stability. Plan Your Future Income Today"
            }
          />
          <div className='bg-[#F4E6E6]'>
            <ProductCard data={resourcesCorporateData[0].data} />
          </div>
        </>
      )}
      <Downloads data={downloadList} />
    </>
  );
};

export default Resources;
