import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { aviationFormStepper } from "../../../assets/data/formStepper";
import { useForm } from "react-hook-form";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  aviationClaimCircumstances,
  aviationClaimDetailsTypes,
  aviationClaimReqDoc,
} from "../../../form-types/Types";
import {
  aviationClaimCircumstancesValidationSchema,
  aviationClaimDetailsValidationSchema,
  aviationClaimReqDocValidationSchema,
} from "../../../form-types/validationSchema";
import { AviationClaimDetails } from "./ClaimDetails";
import { AviationClaimSummary } from "./Summary";
import { RegisterClaimService } from "../../../api/services/make-a-claim";
import { getButtonBtnState } from "../../../helper/helper";
import { AviationClaimCircumstances } from "./Circumstances";
import { AviationClaimRequiredDocumentsDetails } from "./RequiredDocuments";
import {
  useAviationClaimForm,
  useMakeAClaimForm,
} from "../../../hooks/store/make-a-claim";
import { ClaimsNumber } from "../../../common/Claims-Number";

export const AviationClaimStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } =
    useFormStepper(aviationFormStepper);
  const { loading, makeAClaim, showClaims, setShowClaims } =
    RegisterClaimService();
  const buttonState = getButtonBtnState(
    activeStep,
    aviationFormStepper.length - 1
  );
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { aviationClaimFormData } = useAviationClaimForm();

  const {
    control: aviationClaimDetailsControl,
    formState: { errors: aviationClaimDetailsErrors },
    trigger: aviationClaimDetailsTrigger,
    setValue: setAviationClaimDetailsValues,
  } = useForm<aviationClaimDetailsTypes>({
    mode: "onChange",
    resolver: yupResolver(aviationClaimDetailsValidationSchema),
  });

  const {
    control: aviationClaimCircumstancesControl,
    formState: { errors: aviationClaimCircumstancesErrors },
    trigger: aviationClaimCircumstancesTrigger,
    setValue: setAviationClaimCircumstancesValues,
  } = useForm<aviationClaimCircumstances>({
    mode: "onChange",
    resolver: yupResolver(aviationClaimCircumstancesValidationSchema),
  });

  const {
    control: aviationClaimReqDocControl,
    formState: { errors: aviationClaimReqDocErrors },
    trigger: aviationClaimReqDocTrigger,
    setValue: setAviationClaimReqDocValues,
    setError: setAviationClaimReqDocError,
  } = useForm<aviationClaimReqDoc>({
    mode: "onChange",
    resolver: yupResolver(aviationClaimReqDocValidationSchema),
  });

  const onSubmitNextStep = async () => {
    const formData = {
      policyHolderName: makeAClaimFormData.officeName,
      policyNumber: makeAClaimFormData.policyId,
      subRisk: makeAClaimFormData.subRisk,
      creationDate: makeAClaimFormData.creationDate,
      claimType: aviationClaimFormData.claimType,
      email: aviationClaimFormData.email,
      phoneNumber: aviationClaimFormData.phoneNumber,
      dateTimeOfIncident: aviationClaimFormData.dateTimeOfIncident,
      descriptionOfIncident: aviationClaimFormData.descriptionOfIncident,
      listOfStolenItems: aviationClaimFormData.listOfStolenItems,
      doYouHaveAWitness: aviationClaimFormData.doYouHaveAWitness,
      nameOfWitness: aviationClaimFormData.nameOfWitness,
      witnessContactInfo: aviationClaimFormData.witnessContactInfo,
      hasThePoliceBeenInformed: aviationClaimFormData.hasThePoliceBeenInformed,
      whenWasThePoliceInformed: aviationClaimFormData.whenWasThePoliceInformed,
      policeStationAddress: aviationClaimFormData.policeStationAddress,
      claimsAmount: aviationClaimFormData.claimsAmount,
    };
    const fileData = {
      evidenceUpload1: aviationClaimFormData.evidenceUpload1,
      evidenceUpload2: aviationClaimFormData.evidenceUpload2,
      evidenceUpload3: aviationClaimFormData.evidenceUpload3,
      evidenceUpload4: aviationClaimFormData.evidenceUpload4,
      eyeWitnessReport: aviationClaimFormData.eyeWitnessReport,
      policeReport: aviationClaimFormData.policeReport,
    };
    let isValid = false;
    if (activeStep === 0) {
      isValid = await aviationClaimDetailsTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await aviationClaimCircumstancesTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = await aviationClaimReqDocTrigger();
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
          <AviationClaimDetails
            useFormProps={{
              control: aviationClaimDetailsControl,
              errors: aviationClaimDetailsErrors,
              setValues: setAviationClaimDetailsValues,
            }}
          />
        );
      case 1:
        return (
          <AviationClaimCircumstances
            useFormProps={{
              control: aviationClaimCircumstancesControl,
              errors: aviationClaimCircumstancesErrors,
              setValues: setAviationClaimCircumstancesValues,
            }}
          />
        );
      case 2:
        return (
          <AviationClaimRequiredDocumentsDetails
            useFormProps={{
              control: aviationClaimReqDocControl,
              errors: aviationClaimReqDocErrors,
              setValues: setAviationClaimReqDocValues,
              setError: setAviationClaimReqDocError,
            }}
          />
        );
      case 3:
        return <AviationClaimSummary />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='pt-[200px] pb-20 px-2 md:px-10 lg:px-20'>
        <Stepper steps={aviationFormStepper} activeStep={activeStep} />
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
