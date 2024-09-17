import { useState } from "react";
import { claimFormType } from "../../../types/types";
import { useSubmitAccidentClaim } from "./services/SubmitAccident";
import { useSubmitMotorClaim } from "./services/SubmitMotor";
import { useSubmitBondClaim } from "./services/SubmitBond";
import { useSubmitAviationClaim } from "./services/SubmitAviation";
import { useSubmitEngineeringClaim } from "./services/SubmitEngineering";
import { useSubmitFireClaim } from "./services/SubmitFire";
import { useSubmitMarineClaim } from "./services/SubmitMarine";
import { useSubmitOilAndGasClaim } from "./services/SubmitOilAndGas";
import { useSubmitPkgedPolicyClaim } from "./services/SubmitPackagedPolicy";

export type showClaimDataType = {
  visible: boolean;
  claimsNumber: string;
};

export const RegisterClaimService = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showClaims, setShowClaims] = useState<showClaimDataType>({
    visible: false,
    claimsNumber: "",
  });
  const { submitAccidentClaim } = useSubmitAccidentClaim();
  const { submitMotorClaim } = useSubmitMotorClaim();
  const { submitBondClaim } = useSubmitBondClaim();
  const { submitAviationClaim } = useSubmitAviationClaim();
  const { submitEngineeringClaim } = useSubmitEngineeringClaim();
  const { submitFireClaim } = useSubmitFireClaim();
  const { submitMarineClaim } = useSubmitMarineClaim();
  const { submitOilAndGasClaim } = useSubmitOilAndGasClaim();
  const { submitPackagedPolicyClaim } = useSubmitPkgedPolicyClaim();

  const makeAClaim = async (claimType: claimFormType) => {
    setLoading(true);
    try {
      switch (claimType) {
        case "accident":
          await submitAccidentClaim();
        case "aviation":
          await submitAviationClaim();
        case "bond":
          await submitBondClaim();
        case "engineering":
          await submitEngineeringClaim();
        case "fire":
          await submitFireClaim();
        case "marine":
          await submitMarineClaim();
        case "motor":
          await submitMotorClaim();
        case "oil and gas":
          await submitOilAndGasClaim();
        case "packaged":
          await submitPackagedPolicyClaim();
        default:
          null || undefined;
          break;
      }
    } catch (err: any) {
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
