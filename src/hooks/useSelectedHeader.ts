import { useState } from "react";

export const useSelectedHeader = () => {
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState<number>(0);
  return {
    selectedHeaderIndex,
    setSelectedHeaderIndex,
  };
};
