import { useState } from "react";
import { tabDataType } from "../types/types";

export const useSelectedTabData = () => {
  const [tabData, setTabData] = useState<tabDataType[]>();
  const [tabHeader, setTabHeader] = useState<string>();

  return {
    setTabData,
    tabData,
    tabHeader,
    setTabHeader,
  };
};
