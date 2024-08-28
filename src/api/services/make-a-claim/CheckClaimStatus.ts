import { useState } from "react";
import { GetRequest } from "../../requests";
import { endpoints } from "../../enpoints";
import { useMakeAClaimForm } from "../../../hooks/store/make-a-claim/useMakeAClaim";
import { convertToEncodedFormat } from "../../../helper/helper";
import { toast } from "react-toastify";
import {
  useClaimStatusForm,
  useGlobalStore,
} from "../../../hooks/store/make-a-claim";

export const CheckClaimStatusService = () => {
  const { setMakeAClaimFormData, makeAClaimFormData } = useMakeAClaimForm();
  const { claimStatusFormData, setClaimStatusFormData } = useClaimStatusForm();
  const [loading, setLoading] = useState<boolean>(false);
  const { setGlobalData, globalData } = useGlobalStore();
  const [showClaimInfo, setShowClaimInfo] = useState<boolean>(false);
  const useCheckClaimStatus = async (
    policyNumber: any,
    vehicleRegNumber?: string
  ) => {
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
      if (data) {
        // console.log("data", data);
        setLoading(false);
        setMakeAClaimFormData({
          ...makeAClaimFormData,
          policyId: data.data.policyId,
          officeName: data.data.officeName,
          subRisk: data.data.subRisk,
          creationDate: data.data.creationDate,
          vehicleRegNumber: String(vehicleRegNumber),
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
          vehicleRegNumber: "",
        });
        setGlobalData({
          ...globalData,
          policyNumber: "",
        });
        toast("No Policy item found", {
          type: "error",
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
        vehicleRegNumber: "",
      });
      setGlobalData({
        ...globalData,
        policyNumber: "",
      });
      // console.log(err);
      setLoading(false);
      setShowClaimInfo(false);
    } finally {
      setLoading(false);
      setShowClaimInfo(true);
    }
  };

  const getClaimStatus = async (claimsNumber: string) => {
    setLoading(true);
    try {
      // const formattedClaimsNumber = convertToEncodedFormat(claimsNumber);
      const { data } = await GetRequest(
        `${endpoints.GET_CLAIMS_INFO}${claimsNumber}`,
        null,
        {}
      );
      if (data.success === true) {
        setClaimStatusFormData({
          ...claimStatusFormData,
          policyNumber: data.data.policyNumber,
          policyType: data.data.policyType,
          status: data.data.status,
        });
        toast(data.message, {
          type: "success",
          theme: "colored",
        });
        setShowClaimInfo(true);
      } else {
        // console.log("Error getting claims information");
        setClaimStatusFormData({
          ...claimStatusFormData,
          policyNumber: "",
          policyType: "",
          status: "",
        });
        toast(data.message, {
          type: "error",
          theme: "colored",
        });
        setShowClaimInfo(false);
      }
    } catch (err: any) {
      setClaimStatusFormData({
        ...claimStatusFormData,
        policyNumber: "",
        policyType: "",
        status: "",
      });
      // console.log("Error", err);
      setShowClaimInfo(false);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    useCheckClaimStatus,
    showClaimInfo,
    setShowClaimInfo,
    getClaimStatus,
  };
};
