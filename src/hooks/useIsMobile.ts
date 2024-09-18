import { useMediaQuery } from "@react-hook/media-query";

export const useIsMobile = () => {
  //phones
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  //tablets
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  //laptops
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  //desktops
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );
  return {
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice,
  };
};
