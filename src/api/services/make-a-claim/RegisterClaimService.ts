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
          const accData = await submitAccidentClaim();
          setShowClaims({
            ...showClaims,
            visible: accData?.visible,
            claimsNumber: accData?.claimsNumber,
          });
          break;
        case "aviation":
          const avtnData = await submitAviationClaim();
          setShowClaims({
            ...showClaims,
            visible: avtnData?.visible,
            claimsNumber: avtnData?.claimsNumber,
          });
          break;
        case "bond":
          const bndData = await submitBondClaim();
          setShowClaims({
            ...showClaims,
            visible: bndData?.visible,
            claimsNumber: bndData?.claimsNumber,
          });
          break;
        case "engineering":
          const engData = await submitEngineeringClaim();
          setShowClaims({
            ...showClaims,
            visible: engData?.visible,
            claimsNumber: engData?.claimsNumber,
          });
          break;
        case "fire":
          const fireData = await submitFireClaim();
          setShowClaims({
            ...showClaims,
            visible: fireData?.visible,
            claimsNumber: fireData?.claimsNumber,
          });
          break;
        case "marine":
          const marData = await submitMarineClaim();
          setShowClaims({
            ...showClaims,
            visible: marData?.visible,
            claimsNumber: marData?.claimsNumber,
          });
          break;
        case "motor":
          const motData = await submitMotorClaim();
          setShowClaims({
            ...showClaims,
            visible: motData?.visible,
            claimsNumber: motData?.claimsNumber,
          });
          break;
        case "oil and gas":
          const oilnGasData = await submitOilAndGasClaim();
          setShowClaims({
            ...showClaims,
            visible: oilnGasData?.visible,
            claimsNumber: oilnGasData?.claimsNumber,
          });
          break;
        case "packaged":
          const pkgPolData = await submitPackagedPolicyClaim();
          setShowClaims({
            ...showClaims,
            visible: pkgPolData?.visible,
            claimsNumber: pkgPolData?.claimsNumber,
          });
          break;
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
