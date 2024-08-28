import React, { useState } from "react";
import { Tab } from "../../components";
import { claimsEntryTabHeader } from "../../assets/data/tabData";
import { ClaimStatus, MakeAClaim } from "./forms";

export const ClaimsEntry: React.FC<{}> = () => {
  const [selectedTabHeader, setSelectedTabHeader] = useState<string>(
    claimsEntryTabHeader[0].tabHeader
  );
  return (
    <>
      <div className='pt-[200px] px-2 md:px-10 lg:px-20'>
        <Tab
          data={claimsEntryTabHeader}
          tabClick={(tabData, tabHeader) => {
            // console.log(tabData);
            setSelectedTabHeader(tabHeader);
          }}
          style='bg-transparent'
        />
        {selectedTabHeader.toLowerCase() ===
        claimsEntryTabHeader[0].tabHeader.toLowerCase() ? (
          <MakeAClaim />
        ) : (
          <ClaimStatus />
        )}
      </div>
    </>
  );
};
