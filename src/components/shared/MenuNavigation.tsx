import React from "react";
import { MobileHeader } from "./Header/MobileHeader";
import { useIsMobile } from "../../hooks/useIsMobile";
import { FullHeader } from "./Header/FullHeader";

export const MenuNavigation: React.FC<{}> = () => {
  const { isMobile } = useIsMobile();

  return <>{isMobile ? <MobileHeader /> : <FullHeader />}</>;
};
