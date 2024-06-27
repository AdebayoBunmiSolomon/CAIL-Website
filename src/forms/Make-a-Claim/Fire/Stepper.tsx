import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { fireClaimsFormStepper } from "../../../assets/data/formStepper";
import { useForm } from "react-hook-form";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  fireClaimCircumstances,
  fireClaimDetailsTypes,
  fireClaimReqDoc,
} from "../../../form-types/Types";
import {
  fireClaimCircumstancesValidationSchema,
  fireClaimDetailsValidationSchema,
  fireClaimReqDocValidationSchema,
} from "../../../form-types/validationSchema";
import { FireClaimDetails } from "./ClaimDetails";
import { FireClaimSummary } from "./Summary";
import { RegisterClaimService } from "../../../api/services/make-a-claim";
import { getButtonBtnState } from "../../../helper/helper";
import { FireClaimCircumstances } from "./Circumstances";
import { FireClaimRequiredDocumentsDetails } from "./RequiredDocuments";
import {
  useFireClaimForm,
  useMakeAClaimForm,
} from "../../../hooks/store/make-a-claim";
import { ClaimsNumber } from "../../../common/Claims-Number";

export const FireClaimStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(
    fireClaimsFormStepper
  );
  const { loading, makeAClaim, showClaims, setShowClaims } =
    RegisterClaimService();
  const buttonState = getButtonBtnState(
    activeStep,
    fireClaimsFormStepper.length - 1
  );
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { fireClaimFormData } = useFireClaimForm();

  const {
    control: fireClaimDetailsControl,
    formState: { errors: fireClaimDetailsErrors },
    trigger: fireClaimDetailsTrigger,
    setValue: setFireClaimDetailsValues,
  } = useForm<fireClaimDetailsTypes>({
    mode: "onChange",
    resolver: yupResolver(fireClaimDetailsValidationSchema),
  });

  const {
    control: fireClaimCircumstancesControl,
    formState: { errors: fireClaimCircumstancesErrors },
    trigger: fireClaimCircumstancesTrigger,
    setValue: setFireClaimCircumstancesValues,
  } = useForm<fireClaimCircumstances>({
    mode: "onChange",
    resolver: yupResolver(fireClaimCircumstancesValidationSchema),
  });

  const {
    control: fireClaimReqDocControl,
    formState: { errors: fireClaimReqDocErrors },
    trigger: fireClaimReqDocTrigger,
    setValue: setFireClaimReqDocValues,
    setError: setFireClaimReqDocError,
  } = useForm<fireClaimReqDoc>({
    mode: "onChange",
    resolver: yupResolver(fireClaimReqDocValidationSchema),
  });

  const onSubmitNextStep = async () => {
    const formData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: fireClaimFormData.claimType,
      email: fireClaimFormData.email,
      phoneNumber: fireClaimFormData.phoneNumber,
      dateTimeOfLoss: fireClaimFormData.dateTimeOfLoss,
      descriptionOfIncident: fireClaimFormData.descriptionOfIncident,
      listOfStolenItems: fireClaimFormData.listOfStolenItems,
      doYouHaveAWitness: fireClaimFormData.doYouHaveAWitness,
      nameOfWitness: fireClaimFormData.nameOfWitness,
      witnessContactInfo: fireClaimFormData.witnessContactInfo,
      hasTheFireServiceBeenInformed:
        fireClaimFormData.hasTheFireServiceBeenInformed,
      fireServiceStationAddress: fireClaimFormData.fireServiceStationAddress,
      doYouHaveAFireServiceReport:
        fireClaimFormData.doYouHaveAFireServiceReport,
      hasThePoliceBeenInformed: fireClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: fireClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: fireClaimFormData.policeStationAddress,
      claimsAmount: fireClaimFormData.claimsAmount,
    };
    const fileData = {
      purchaseOrReplacementInvoice:
        fireClaimFormData.purchaseOrReplacementInvoice,
      uploadDamagePic1: fireClaimFormData.uploadDamagePic1,
      uploadDamagePic2: fireClaimFormData.uploadDamagePic2,
      uploadDamagePic3: fireClaimFormData.uploadDamagePic3,
      uploadDamagePic4: fireClaimFormData.uploadDamagePic4,
      eyeWitnessReport: fireClaimFormData.eyeWitnessReport,
      policeReport: fireClaimFormData.policeReport,
      fireServiceReport: fireClaimFormData.fireServiceReport,
    };
    let isValid = false;
    if (activeStep === 0) {
      isValid = await fireClaimDetailsTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await fireClaimCircumstancesTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = await fireClaimReqDocTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 3) {
      isValid = true;
      if (isValid) {
        makeAClaim(formData, fileData);
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <FireClaimDetails
            useFormProps={{
              control: fireClaimDetailsControl,
              errors: fireClaimDetailsErrors,
              setValues: setFireClaimDetailsValues,
            }}
          />
        );
      case 1:
        return (
          <FireClaimCircumstances
            useFormProps={{
              control: fireClaimCircumstancesControl,
              errors: fireClaimCircumstancesErrors,
              setValues: setFireClaimCircumstancesValues,
            }}
          />
        );
      case 2:
        return (
          <FireClaimRequiredDocumentsDetails
            useFormProps={{
              control: fireClaimReqDocControl,
              errors: fireClaimReqDocErrors,
              setValues: setFireClaimReqDocValues,
              setError: setFireClaimReqDocError,
            }}
          />
        );
      case 3:
        return <FireClaimSummary />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='pt-[200px] pb-20 px-2 md:px-10 lg:px-20'>
        <Stepper steps={fireClaimsFormStepper} activeStep={activeStep} />
        {getActiveStepComponent()}
        <div className='flex items-center gap-5 justify-end pr-7 mt-5'>
          {activeStep > 0 && (
            <Button
              text='Prev'
              onPress={() => prevStep()}
              className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
              leftIcon={<GoArrowLeft size={25} />}
            />
          )}
          <Button
            text={loading === true ? "Loading" : buttonState}
            onPress={onSubmitNextStep}
            className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
            rightIcon={<GoArrowRight size={25} />}
          />
        </div>
      </div>

      <ClaimsNumber
        showForm={showClaims.visible}
        claimNumber={showClaims.claimsNumber}
        closeForm={() =>
          setShowClaims({
            ...showClaims,
            visible: false,
            claimsNumber: "",
          })
        }
      />
    </>
  );
};
