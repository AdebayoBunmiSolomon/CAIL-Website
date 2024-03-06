import React from "react";
import { MobileHeader } from "./Header/MobileHeader";
import FullHeader from "./Header/FullHeader";
import { useIsMobile } from "../../hooks/useIsMobile";

export const MenuNavigation: React.FC<{}> = () => {
  const { isMobile } = useIsMobile();

  return <>{isMobile ? <MobileHeader /> : <FullHeader />}</>;
};
