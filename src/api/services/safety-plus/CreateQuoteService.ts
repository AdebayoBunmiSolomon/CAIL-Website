import { useState } from "react";
import { PostRequest } from "../../requests";
import { useSafetyPlusForm } from "../../../hooks/store/safety-plus/useSafetyPlusForm";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";
import { PaymentServices } from "../payments/payments";

export const CreateQuoteService = () => {
  const { safetyPlusFormData } = useSafetyPlusForm();
  const [loading, setLoading] = useState<boolean>(false);
  const { useMakePaymentWithPaystack } = PaymentServices(
    safetyPlusFormData.email,
    safetyPlusFormData.premium
  );

  const formData = {
    firstName: safetyPlusFormData.first_name,
    lastName: safetyPlusFormData.surname,
    email: safetyPlusFormData.email,
    phoneNumber: safetyPlusFormData.mobile_number,
    address: safetyPlusFormData.address,
    branch: "HO",
    businessSector: 4,
    birthDate: safetyPlusFormData.dob,
    sumInsured: safetyPlusFormData.premium,
    coverType: "1",
    insuredType: "B",
    subClass: "61",
    startDate: safetyPlusFormData.insured_date,
    endDate: safetyPlusFormData.insured_date,
    safetyPlusPremium: {
      units: Number(safetyPlusFormData.number_of_units),
    },
  };

  const useCreateQuote = async () => {
    setLoading(true);
    console.log(formData);
    const { data } = await PostRequest(
      `${endpoints.GET_SAFETY_PLUS_QUOTE}`,
      formData,
      {}
    );
    setLoading(true);
    try {
      if (data.statusCode === 200) {
        console.log("Form data submitted successfully");
        setLoading(false);
        useMakePaymentWithPaystack();
        toast(data.message, {
          type: "success",
          theme: "colored",
        });
      } else {
        console.log("Error submitting data");
        setLoading(false);
        toast(data.message, {
          type: "error",
          theme: "colored",
        });
      }
      // }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return {
    useCreateQuote,
    loading,
  };
};
