import { useMediaQuery } from "@react-hook/media-query";

export const useIsMobile = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return {
    isMobile,
  };
};
