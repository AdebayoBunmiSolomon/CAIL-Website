import { useState } from "react";
import { GetRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { useMakeAClaimForm } from "../../../hooks/store/make-a-claim/useMakeAClaim";
import { convertToEncodedFormat } from "../../../helper/helper";
import { toast } from "react-toastify";

export const CheckClaimStatusService = () => {
  const { setMakeAClaimFormData, makeAClaimFormData } = useMakeAClaimForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [showClaimInfo, setShowClaimInfo] = useState<boolean>(false);
  const useCheckClaimStatus = async (policyNumber: any) => {
    const formattedPolicyNumber = convertToEncodedFormat(policyNumber);
    setLoading(true);
    try {
      setLoading(true);
      setShowClaimInfo(false);
      const { data } = await GetRequest(
        `${endpoints.checkPolicySummary}/${formattedPolicyNumber}/policy-summary`,
        null,
        {}
      );
      setLoading(true);
      setShowClaimInfo(false);
      if (data.status === 200) {
        console.log(data);
        setLoading(false);
        setMakeAClaimFormData({
          ...makeAClaimFormData,
          policyId: data.data.policyId,
          officeName: data.data.officeName,
          subRisk: data.data.subRisk,
          creationDate: data.data.creationDate,
        });
        toast(data.message, {
          type: "success",
          theme: "colored",
        });
      } else {
        toast("No Policy item found", {
          type: "success",
          theme: "colored",
        });
        setLoading(false);
      }
    } catch (err: any) {
      console.log(err);
      setLoading(false);
      setShowClaimInfo(false);
    } finally {
      setLoading(false);
      setShowClaimInfo(true);
    }
  };
  return {
    loading,
    useCheckClaimStatus,
    showClaimInfo,
    setShowClaimInfo,
  };
};
