import React, { useState } from "react";
import { PostRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";

export const useNewsLetter = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const subscribeToNewsLetter = async (email: string) => {
    setLoading(true);
    setIsError(false);
    try {
      const { data } = await PostRequest(
        `${endpoints.SUBSCRIBE_TO_NEWS_LETTER}`,
        {
          email: email,
        },
        {}
      );
      // console.log(data);
      if (data) {
        if (data.statusCode === 200) {
          toast(data.message, {
            type: "success",
            theme: "colored",
          });
          setIsError(false);
        } else {
          toast(data.message, {
            type: "error",
            theme: "colored",
          });
          setIsError(true);
        }
      } else {
        toast("Email is already subscribed", {
          type: "error",
          theme: "colored",
        });
        setIsError(true);
      }
    } catch (err: any) {
      // console.log("Error", err);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    subscribeToNewsLetter,
    isError,
  };
};
