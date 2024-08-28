import { useState } from "react";
import { PostRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";
import { PaymentServices } from "../payments/payments";
import { useHomeShieldForm } from "../../../hooks/store/home-shield/useHomeShieldForm";

export const CreateQuoteService = () => {
  const { homeShieldFormData } = useHomeShieldForm();
  const [loading, setLoading] = useState<boolean>(false);
  const { useMakePaymentWithPaystack } = PaymentServices(
    homeShieldFormData.email,
    homeShieldFormData.premium
  );

  const insuredPropertiesString = homeShieldFormData.list_of_insured_property;
  const insuredPropertiesArray = insuredPropertiesString.split("\n");

  const formData = {
    firstName: homeShieldFormData.first_name,
    lastName: homeShieldFormData.surname,
    email: homeShieldFormData.email,
    phoneNumber: homeShieldFormData.mobile_number,
    address: homeShieldFormData.address,
    branch: "HO",
    businessSector: 4,
    birthDate: homeShieldFormData.dob,
    sumInsured: homeShieldFormData.premium,
    coverType: "1",
    insuredType: "B",
    subClass: "61",
    startDate: homeShieldFormData.insured_date,
    endDate: homeShieldFormData.insured_date,
    insuredPropertyAddress: homeShieldFormData.insured_property_address,
    insuredProperties: insuredPropertiesArray,
    homeShieldPremium: {
      units: Number(homeShieldFormData.no_of_units),
      brokerId: "B1017/HO",
      subClass: "61",
    },
  };

  const useCreateQuote = async () => {
    setLoading(true);
    // console.log(formData);
    const { data } = await PostRequest(
      `${endpoints.GET_HOME_SHIELD_QUOTE}`,
      formData,
      {}
    );
    setLoading(true);
    try {
      if (data.statusCode === 200) {
        // console.log("Form data submitted successfully");
        setLoading(false);
        toast(data.message, {
          type: "success",
          theme: "colored",
        });
        useMakePaymentWithPaystack();
      } else {
        // console.log("Error submitting data");
        setLoading(false);
        toast(data.message, {
          type: "error",
          theme: "colored",
        });
      }
      // }
    } catch (err) {
      // console.log(err);
      setLoading(false);
    }
  };

  return {
    useCreateQuote,
    loading,
  };
};
