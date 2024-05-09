import { useState } from "react";
import { useEnquiryForm } from "../../../hooks/store/enquiry";
import { PostRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";

export const MakeEnquiry = () => {
  const { enquiryFormData } = useEnquiryForm();
  const [loading, setLoading] = useState<boolean>(false);

  const formData = {
    full_name: enquiryFormData.fullName,
    email: enquiryFormData.email,
    subject: enquiryFormData.subject,
    policy_number: enquiryFormData.policyNumber,
    message: enquiryFormData.message,
  };

  const useMakeEnquiry = async () => {
    setLoading(true);
    console.log(formData);
    const { data, status } = await PostRequest(
      `${endpoints.makeEnquiry}`,
      formData,
      {}
    );
    setLoading(true);
    try {
      if (status === 200) {
        setLoading(false);
        console.log("Form submitted successfully");
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
    useMakeEnquiry,
    loading,
  };
};
