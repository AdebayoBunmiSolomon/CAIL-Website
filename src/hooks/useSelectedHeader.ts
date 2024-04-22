import { useState } from "react";

export const useSelectedHeader = () => {
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState<number | null>(
    0
  );
  return {
    selectedHeaderIndex,
    setSelectedHeaderIndex,
  };
};
