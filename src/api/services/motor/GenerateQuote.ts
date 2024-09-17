import { useState } from "react";
import { PostRequest } from "../../requests";
import { useMotorForm } from "../../../hooks/store/motor";
import { endpoints } from "../../enpoints";
import md5 from "md5";
import { toast } from "react-toastify";

export const useGenerateQuote = () => {
  const [costLoading, setCostLoading] = useState<boolean>(false);
  const [quotation, setQuotation] = useState<string>("");
  const { motorFormData } = useMotorForm();
  //credentials needed to post data
  const merchantId = "CAI_WEB_00001";
  const secretKey = "Test_sk_web55@%321";
  //payload to be sent over api
  const payLoad = {
    cover_type: motorFormData.coverTypeId,
    vehicle_category: motorFormData.vehicleCategoryName,
    vehicle_value: Number(motorFormData.vehicleValue),
    payment_option: motorFormData.paymentOption,
    excess: "n",
    tracking: "n",
    flood: "n",
    srcc: "n",
    merchant_id: merchantId,
  };
  const hash = md5(
    `${payLoad.vehicle_value}${payLoad.cover_type}${payLoad.tracking}${payLoad.excess}${payLoad.srcc}${payLoad.flood}${secretKey}`
  );
  const generateQuote = async () => {
    setCostLoading(true);
    console.log(hash);
    try {
      const { data } = await PostRequest(
        `${endpoints.GENERATE_AUTO_QUOTE}`,
        {
          ...payLoad,
          hash: hash,
        },
        {
          "Content-Type": "application/json",
        }
      );
      if (data) {
        if (data?.status === 200) {
          setQuotation(data?.data?.quote_amount);
          toast("Quote computation successful", {
            theme: "colored",
            type: "success",
          });
        } else {
          setQuotation("");
          toast("Error computing quote", {
            theme: "colored",
            type: "error",
          });
        }
      } else {
        toast("An error Occurred", {
          theme: "colored",
          type: "error",
        });
      }
    } catch (err: any) {
      console.log("Error", err);
    } finally {
      setCostLoading(false);
    }
  };

  return {
    generateQuote,
    costLoading,
    quotation,
    setQuotation,
  };
};
