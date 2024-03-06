import React, { useState } from "react";
import { tabContentsProps } from "../../../types/types";
import { useSelectedTab } from "../../../hooks/useSelectedTab";
import { Contents } from "./Contents";
import { MdGridOn, MdGridView } from "react-icons/md";

export const Tab: React.FC<tabContentsProps> = ({ data }) => {
  const { selectedTab, setSelectedTab } = useSelectedTab();
  const [gridView, setGridView] = useState<boolean>(false);
  return (
    <div className='flex justify-center bg-[#FFFFFF] py-5'>
      <div className='w-[90%]'>
        {data &&
          data.map((items, index) => (
            <button
              key={index}
              className={`${
                selectedTab.index === index
                  ? "bg-[#900000] text-[white] hover:bg-[#900000d5] duration-700"
                  : "bg-[#e5e5e5e5] text-[#900000] hover:bg-[#e5e5e5a7] duration-700"
              } py-3 px-10 rounded-md hover:cursor-pointer`}
              onClick={() => {
                setSelectedTab({
                  ...selectedTab,
                  index: index,
                  tabHeader: items.tabHeader,
                  tabData: items.tabData,
                });
              }}>
              {items.tabHeader}
            </button>
          ))}
        <div className='border-2 h-[400px] rounded-lg px-2 pt-2 overflow-y-scroll'>
          <div className='flex justify-end py-2'>
            <button
              onClick={() => setGridView(!gridView)}
              className='px-2 py-2 border-2 rounded-full'>
              {gridView ? (
                <MdGridView size={20} color='#900000' />
              ) : (
                <MdGridOn size={20} color='#900000' />
              )}
            </button>
          </div>
          <Contents tabContentsData={selectedTab.tabData} gridView={gridView} />
        </div>
      </div>
    </div>
  );
};
