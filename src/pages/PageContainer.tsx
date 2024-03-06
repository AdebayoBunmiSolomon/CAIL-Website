import React from "react";
import { useIsMobile } from "../hooks/useIsMobile";

interface pageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<pageContainerProps> = ({ children }) => {
  const { isMobile } = useIsMobile();
  return (
    <div className={`${isMobile ? "pt-[200px]" : "pt-[150px]"} bg-[#FBF9F9]`}>
      {children}
    </div>
  );
};
