import { useState } from "react";
import { PostRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";
import { claimsHeaderConfiguration } from "../../configuration/header";

export const RegisterClaimService = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const makeAClaim = async (formData: object, fileData: object) => {
    setLoading(true);
    const formValue = new FormData();
    formValue.append("data", JSON.stringify(formData));
    formValue.append("file", JSON.stringify(fileData));
    try {
      const { status } = await PostRequest(
        `${endpoints.POST_CLAIM}`,
        formValue,
        claimsHeaderConfiguration
      );
      setLoading(true);
      if (status === 200) {
        console.log("Form data submitted successfully");
        toast("Claim data saved successfully", {
          type: "success",
          theme: "colored",
        });
      } else {
        console.log("Error submitting data");
        toast("Error saving claims data", {
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
    makeAClaim,
    loading,
  };
};
