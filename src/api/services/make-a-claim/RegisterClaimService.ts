import { useState } from "react";
import { PostRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { toast } from "react-toastify";
import { claimsHeaderConfiguration } from "../../configuration/header";

type showClaimDataType = {
  visible: boolean;
  claimsNumber: string;
};

export const RegisterClaimService = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showClaims, setShowClaims] = useState<showClaimDataType>({
    visible: false,
    claimsNumber: "",
  });

  const makeAClaim = async (formData: object, fileData: object) => {
    setLoading(true);
    const formValue = new FormData();
    formValue.append("data", JSON.stringify(formData));
    formValue.append("file", JSON.stringify(fileData));
    try {
      const { status, data } = await PostRequest(
        `${endpoints.POST_CLAIM}`,
        formValue,
        claimsHeaderConfiguration
      );
      setLoading(true);
      if (status === 200) {
        console.log(data);
        console.log("Claim data submitted successfully");
        toast("Claim data saved successfully", {
          type: "success",
          theme: "colored",
        });
        setShowClaims({
          ...showClaims,
          visible: true,
          claimsNumber: data.data.claimsNumber,
        });
      } else {
        console.log("Error submitting claim data");
        toast("Error saving claims data", {
          type: "error",
          theme: "colored",
        });

        setShowClaims({
          ...showClaims,
          visible: false,
          claimsNumber: "",
        });
      }
    } catch (err) {
      console.log(err);
      setShowClaims({
        ...showClaims,
        visible: false,
        claimsNumber: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    makeAClaim,
    loading,
    showClaims,
    setShowClaims,
  };
};
