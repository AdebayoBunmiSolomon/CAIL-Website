import React, { useEffect } from "react";
import { Hero, AboutUs, OurGoals, Tab, Executives } from "../../components";
import { executives } from "../../assets/data/executives";
import { useSelectedTabData } from "../../hooks/useSelectedTabData";
import { tabDataType } from "../../types/types";

export const About: React.FC<{}> = () => {
  const { setTabData, setTabHeader, tabData, tabHeader } = useSelectedTabData();

  const loadInitialTabData = (tabData: tabDataType[]) => {
    setTabData(tabData);
  };

  // load initial tab data
  useEffect(() => {
    loadInitialTabData(executives[0].tabData);
  }, []);

  return (
    <>
      <Hero
        title='All you need to know about'
        description="Your dedicated ally in ensuring life's uncertainities and achieving Financial aspirations. Explore & Allied Insurance today"
        subtitle='Custodian & Allied Insurance '
      />
      <AboutUs />
      <OurGoals />
      <div className='bg-[#efefef] py-5'>
        <Tab
          data={executives}
          tabClick={(tabData, tabHeader) => {
            setTabData(tabData);
            setTabHeader(tabHeader);
          }}
          style='bg-[#efefef] py-0'
        />
        <Executives
          data={tabData}
          tabHeader={!tabHeader ? executives[0].tabHeader : tabHeader}
        />
      </div>
    </>
  );
};
