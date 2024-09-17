import { useState } from "react";
import { useMotorForm } from "../../../hooks/store/motor";
import { PostRequest } from "../../requests";
import md5 from "md5";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";

export const useSubmitMotorQuote = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { motorFormData } = useMotorForm();
  //credentials needed to post data
  const merchantId = "CAI_WEB_00001";
  const secretKey = "Test_sk_web55@%321";

  const payLoad = {
    customer_name: `${motorFormData.surName} ${motorFormData.firstName}`,
    address: motorFormData.address,
    phone_number: motorFormData.phoneNumber,
    email: motorFormData.email,
    engine_number: motorFormData.engineNumber,
    insurance_type: motorFormData.coverTypeId,
    premium: Number(motorFormData.cost),
    sum_insured: Number(motorFormData.vehicleValue),
    chassis_number: motorFormData.chasisNumber,
    registration_number: motorFormData.registrationNumber,
    vehicle_model: motorFormData.vehicleMake,
    vehicle_category: motorFormData.vehicleCategoryName,
    vehicle_color: motorFormData.vehicleColor,
    vehicle_type: motorFormData.vehicleType,
    vehicle_year: motorFormData.year,
    merchant_id: merchantId,
    reference_no: "n",
    id_type: motorFormData.identification_name,
    occupation: motorFormData.occupation,
    id_number: motorFormData.identification_number,
    dob: motorFormData.birthDate, // ISO 8601 formatted date string
    attachment: motorFormData.base64File,
    extension_type: motorFormData.file?.type,
    payment_option: motorFormData.paymentOption,
    excess: "n",
    tracking: "n",
    flood: "n",
    srcc: "n",
    start_date: motorFormData.startDate, // ISO 8601 formatted date string
    referralCode: "n",
  };
  const hash = md5(
    `${payLoad.premium}${payLoad.sum_insured}${motorFormData.coverTypeName}${payLoad.reference_no}${secretKey}`
  );

  const submitMotorQuote = async () => {
    console.log(JSON.stringify(payLoad));
    console.log(hash);
    try {
      const { data } = await PostRequest(
        `${endpoints.BUY_AUTO_QUOTE}`,
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
          toast("Motor submitted successfully", {
            theme: "colored",
            type: "success",
          });
        } else {
          toast("Error submitting quote", {
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
      setSubmitting(false);
    }
  };

  return {
    submitMotorQuote,
    submitting,
  };
};
