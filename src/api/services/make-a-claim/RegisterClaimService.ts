import { useState } from "react";
import { PostRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";
import { useMakeAClaimForm } from "../../../hooks/store/make-a-claim/useMakeAClaim";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const RegisterClaimService = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  const formData = {
    incident_date: "",
    policy_number: "",
    created_by: "",
  };

  const useMakeAClaim = async () => {
    setLoading(true);
    console.log(formData);
    const { data, status } = await PostRequest(
      `${endpoints.MAKE_A_CLAIM}`,
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
        setInterval(() => {
          navigate("/thank-you");
        }, 2000);
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
    useMakeAClaim,
    loading,
  };
};
