import { useState } from "react";

export const useRequestCallBack = () => {
  const [requestCallBck, setRequestCallBck] = useState<boolean>(false);

  return {
    requestCallBck,
    setRequestCallBck,
  };
};
