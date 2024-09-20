import { useState } from "react";
import { useEnquiryForm } from "../../../hooks/store/enquiry";
import { GetRequest, PostRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";
import { convertToEncodedFormat } from "../../../helper/helper";
export const MakeEnquiry = () => {
  const { enquiryFormData } = useEnquiryForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [policyValidFromAPi, setPolicyValidFromApi] = useState<boolean>(false);
  // const navigate = useNavigate();

  const formData = {
    full_name: enquiryFormData.fullName,
    email: enquiryFormData.email,
    subject: enquiryFormData.subject,
    policy_number: enquiryFormData.policyNumber,
    message: enquiryFormData.message,
    callMeBack: enquiryFormData.callMe_Back,
    phoneNumber: enquiryFormData.phone_number,
  };

  const validatePolicyNumberFromApi = async (policyNumber: string) => {
    const encodedPolicyNumber = convertToEncodedFormat(policyNumber);
    try {
      const { data } = await GetRequest(
        `${endpoints.GET_POLICY_SUMMARY}/${encodedPolicyNumber}/policy-summary`,
        {},
        {}
      );
      if (data.status === 200) {
        setPolicyValidFromApi(true);
        return true;
      } else if (data.ErrorDescription) {
        setPolicyValidFromApi(false);
        return false;
      }
    } catch (err: any) {
      // console.log("Error", err);
    }
  };

  const useMakeEnquiry = async (policyNumberAvailable: boolean) => {
    setLoading(true);
    if (policyNumberAvailable) {
      try {
        const isPolicyValid = await validatePolicyNumberFromApi(
          formData.policy_number
        );
        if (isPolicyValid) {
          const { data, status } = await PostRequest(
            `${endpoints.MAKE_ENQUIRY}`,
            formData,
            {}
          );
          if (status === 200) {
            toast(data.message, {
              type: "success",
              theme: "colored",
            });
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          } else {
            toast(data.message, {
              type: "error",
              theme: "colored",
            });
          }
        } else {
          toast("Policy number not found", {
            type: "error",
            theme: "colored",
          });
        }
      } catch (err) {
        // console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const { data, status } = await PostRequest(
          `${endpoints.MAKE_ENQUIRY}`,
          formData,
          {}
        );
        if (status === 200) {
          toast(data.message, {
            type: "success",
            theme: "colored",
          });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          toast(data.message, {
            type: "error",
            theme: "colored",
          });
        }
      } catch (err) {
        // console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    useMakeEnquiry,
    loading,
    policyValidFromAPi,
  };
};
