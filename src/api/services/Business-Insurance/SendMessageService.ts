import { useState } from "react";
import { GetRequest, PostRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";
import md5 from "md5";
import { useBusinessInsuranceForm } from "../../../hooks/store/personal-accident/useBusinessInsuranceForm";
import { useNavigate } from "react-router-dom";

export const sendQuoteMsg = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
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
        // console.log("Form data submitted successfully");
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
        navigate(-1);
      } else {
        // console.log("Error submitting data");
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

  const getPolicyInfo = async (
    policyNumber: string,
    secretKey: string,
    merchantId: string
  ) => {
    setLoading(true);
    const hashedString = md5(JSON.stringify(policyNumber + secretKey));
    try {
      setLoading(true);
      const { data } = await GetRequest(
        `https://apidev.custodianplc.com.ng/api/Agent/policies/all-siblings?policyNumber=${policyNumber}&merchantId=${merchantId}&hash=${hashedString}`,
        {},
        {}
      );

      if (data) {
        // console.log(data);
      }
    } catch (err: any) {
      console.log("Error", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    sendMsg,
    loading,
  };
};
