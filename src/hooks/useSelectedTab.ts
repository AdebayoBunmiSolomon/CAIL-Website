import { useState } from "react";
import { tabData } from "../assets/data/tabData";
import { tabDataType } from "../types/types";

type selectedTab = {
  index: number;
  tabHeader: string;
  position: string;
  tabData: tabDataType[];
};

export const useSelectedTab = () => {
  const [selectedTab, setSelectedTab] = useState<selectedTab>({
    index: 0,
    position: "",
    tabHeader: tabData[0].tabHeader,
    tabData: tabData[0].tabData,
  });

  return {
    selectedTab,
    setSelectedTab,
  };
};
