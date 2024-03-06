import React from "react";
import { PageContainer } from "../PageContainer";
import {
  TopContent,
  VideoContent,
  Statement,
  Tab,
  OurStyle,
} from "../../components";
import { tabData } from "../../assets/data/tabData";

export const About: React.FC<{}> = () => {
  return (
    <PageContainer>
      <div>
        <TopContent />
        <VideoContent />
        <Statement />
        <Tab data={tabData} />
        <OurStyle />
      </div>
    </PageContainer>
  );
};
