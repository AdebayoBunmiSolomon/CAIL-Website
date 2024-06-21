import { useState } from "react";
import { GetRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { useMakeAClaimForm } from "../../../hooks/store/make-a-claim/useMakeAClaim";
import { convertToEncodedFormat } from "../../../helper/helper";
import { toast } from "react-toastify";
import { useGlobalStore } from "../../../hooks/store/make-a-claim";

export const CheckClaimStatusService = () => {
  const { setMakeAClaimFormData, makeAClaimFormData } = useMakeAClaimForm();
  const [loading, setLoading] = useState<boolean>(false);
  const { setGlobalData, globalData } = useGlobalStore();
  const [showClaimInfo, setShowClaimInfo] = useState<boolean>(false);
  const useCheckClaimStatus = async (policyNumber: any) => {
    setLoading(true);
    try {
      const formattedPolicyNumber = convertToEncodedFormat(policyNumber);
      setLoading(true);
      setShowClaimInfo(false);
      const { data } = await GetRequest(
        `${endpoints.GET_POLICY_SUMMARY}/${formattedPolicyNumber}/policy-summary`,
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
        setGlobalData({
          ...globalData,
          policyNumber: data.data.policyId,
        });
        toast(data.message, {
          type: "success",
          theme: "colored",
        });
      } else {
        setMakeAClaimFormData({
          ...makeAClaimFormData,
          policyId: "",
          officeName: "",
          subRisk: "",
          creationDate: "",
        });
        setGlobalData({
          ...globalData,
          policyNumber: "",
        });
        toast("No Policy item found", {
          type: "success",
          theme: "colored",
        });
        setLoading(false);
      }
    } catch (err: any) {
      setMakeAClaimFormData({
        ...makeAClaimFormData,
        policyId: "",
        officeName: "",
        subRisk: "",
        creationDate: "",
      });
      setGlobalData({
        ...globalData,
        policyNumber: "",
      });
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
