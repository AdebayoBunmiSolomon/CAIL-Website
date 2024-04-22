import React from "react";
import { tabContentsProps } from "../../../types/types";
import { useIsMobile, useSelectedTab } from "../../../hooks";
import { truncateText } from "../../../helper/helper";

export const Tab: React.FC<tabContentsProps> = ({ data, tabClick, style }) => {
  const { isMobile } = useIsMobile();
  const { selectedTab, setSelectedTab } = useSelectedTab();
  return (
    <div className={`flex justify-center bg-[#FFFFFF] ${style} py-5`}>
      <div className='px-2 py-2 bg-[#f4e6e6] flex gap-5 rounded-full'>
        {data &&
          data.map((items, index) => (
            <button
              key={index}
              className={`${
                selectedTab.index === index
                  ? "bg-gradient-to-r from-[#900000] to-[#D25050] text-[white] hover:bg-[#900000d5] duration-700"
                  : "bg-transparent text-gray-600 hover:bg-[#e5e5e5a7] duration-700"
              } py-2 px-4 hover:cursor-pointer rounded-full`}
              onClick={() => {
                setSelectedTab({
                  ...selectedTab,
                  index: index,
                  tabHeader: items.tabHeader,
                  tabData: items.tabData,
                });
                tabClick(items.tabData, items.tabHeader);
              }}>
              {isMobile ? truncateText(items.tabHeader) : items.tabHeader}
            </button>
          ))}
      </div>
    </div>
  );
};
