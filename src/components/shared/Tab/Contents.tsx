import React from "react";
import { contentsProps } from "../../../types/types";
import { useSelectedTab } from "../../../hooks/useSelectedTab";
import { truncateText } from "../../../helper/helper";
import { useIsMobile } from "../../../hooks/useIsMobile";

export const Contents: React.FC<contentsProps> = ({
  tabContentsData,
  gridView,
}) => {
  const { selectedTab, setSelectedTab } = useSelectedTab();
  const { isMobile } = useIsMobile();
  return (
    <div>
      {gridView ? (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2'>
          {tabContentsData &&
            tabContentsData.map((contents, index) => (
              <div key={index}>
                <p
                  onClick={() => {
                    setSelectedTab({
                      ...selectedTab,
                      position: contents.position,
                    });
                  }}
                  className={`py-3 px-8 rounded-lg mb-2 ${
                    contents.position
                      ? "bg-[#900000] text-[white] hover:bg-[#900000d5] duration-700"
                      : "bg-[#e5e5e5e5] text-[#900000] hover:bg-[#e5e5e5a7] duration-700"
                  } hover:cursor-pointer`}>
                  {contents.title}
                  {contents.position && ",  "}
                  <i>
                    {gridView && !isMobile
                      ? truncateText(contents.position)
                      : contents.position}
                  </i>
                </p>
              </div>
            ))}
        </div>
      ) : (
        tabContentsData &&
        tabContentsData.map((contents, index) => (
          <div key={index}>
            <p
              onClick={() => {
                setSelectedTab({ ...selectedTab, position: contents.position });
              }}
              className={`py-3 px-8 rounded-lg mb-2 ${
                contents.position
                  ? "bg-[#900000] text-[white] hover:bg-[#900000d5] duration-700"
                  : "bg-[#e5e5e5e5] text-[#900000] hover:bg-[#e5e5e5a7] duration-700"
              } hover:cursor-pointer`}>
              {contents.title}
              {contents.position && ",  "}
              <i>{contents.position}</i>
            </p>
          </div>
        ))
      )}
    </div>
  );
};
