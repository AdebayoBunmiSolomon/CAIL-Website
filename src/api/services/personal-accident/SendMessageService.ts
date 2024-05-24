import { useState } from "react";
import { PostRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";
import { usePersonalAccidentForm } from "../../../hooks/store/personal-accident/usePersonalAccidentForm";

export const sendPersonalAccidentMsg = () => {
  const { personalAccidentFormData } = usePersonalAccidentForm();
  const [loading, setLoading] = useState<boolean>(false);

  const formData = {
    firstName: personalAccidentFormData.full_name,
    email: personalAccidentFormData.email,
    mobile_number: personalAccidentFormData.mobile_number,
    subject: personalAccidentFormData.subject,
    message: personalAccidentFormData.message,
    product_class: "10",
  };

  const useSendMsg = async () => {
    setLoading(true);
    console.log(formData);
    const { data, status } = await PostRequest(
      `${endpoints.POST_PERSONAL_ACCIDENT}`,
      formData,
      {}
    );
    setLoading(true);
    try {
      if (status === 200) {
        console.log("Form data submitted successfully");
        setLoading(false);
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
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return {
    useSendMsg,
    loading,
  };
};
