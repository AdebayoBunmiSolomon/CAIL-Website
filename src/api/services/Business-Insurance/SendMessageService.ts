import { useState } from "react";
import { PostRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";
import md5 from "md5";
import { useBusinessInsuranceForm } from "../../../hooks/store/personal-accident/useBusinessInsuranceForm";

export const sendQuoteMsg = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setBusinessInsuranceFormData, businessInsuranceFormData } =
    useBusinessInsuranceForm();
  const sendMsg = async (formData: object) => {
    const serializedForm = md5(JSON.stringify(formData));
    setLoading(true);
    try {
      const { data, status } = await PostRequest(
        `${endpoints.POST_PERSONAL_ACCIDENT}`,
        formData,
        {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `x-custodian-signature ${serializedForm}`,
        }
      );
      if (status === 200) {
        console.log("Form data submitted successfully");
        setLoading(false);
        toast(data.message, {
          type: "success",
          theme: "colored",
        });
        setBusinessInsuranceFormData({
          ...businessInsuranceFormData,
          email: "",
          mobile_number: "",
          message: "",
          full_name: "",
          subject: "",
        });
      } else {
        console.log("Error submitting data");
        setLoading(false);
        toast(data.message, {
          type: "error",
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    sendMsg,
    loading,
  };
};
