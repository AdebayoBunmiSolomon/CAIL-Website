import { useState } from "react";
import { PostRequest } from "../../requests/Post";
import { LoginDetails } from "../../LoginDeatils";
import { useToken } from "../../../hooks/store/motor/useToken";
import { endpoints } from "../../enpoints";

export const LoginMotorService = () => {
  const [calculateLoading, setCalculateLoading] = useState<boolean>(false);
  const { setToken } = useToken();
  const headers = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const userLoginToGetToken = async () => {
    setCalculateLoading(true);
    const { status, data } = await PostRequest(
      `${endpoints.login}`,
      {
        username: LoginDetails.userName,
        password: LoginDetails.passWord,
      },
      headers
    );
    // console.log(status);
    setCalculateLoading(true);
    try {
      if (status === 200) {
        // console.log(data.data.accessToken);
        if (data.data.accessToken) {
          setToken(data.data.accessToken);
        }
        setCalculateLoading(false);
      } else {
        // console.log("Error logging in");
        setCalculateLoading(false);
      }
    } catch (err: any) {
      // console.log(err);
      setCalculateLoading(false);
    }
  };

  return {
    calculateLoading,
    userLoginToGetToken,
  };
};
