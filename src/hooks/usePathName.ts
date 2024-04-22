import { useState } from "react";
import { useLocation } from "react-router-dom";
import { header } from "../assets/data/header";

export const usePathName = () => {
  const { pathname } = useLocation();
  const [selectedPath, setSelectedPath] = useState<string>(header[0].page);

  const checkForPathName = (selectedPath: string) => {
    if (selectedPath.includes("/products")) {
      setSelectedPath("/products");
    } else if (selectedPath.includes("/resources")) {
      setSelectedPath("/resources");
    } else {
      setSelectedPath(selectedPath);
    }
  };

  return {
    checkForPathName,
    selectedPath,
    pathname,
  };
};
