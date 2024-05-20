import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { oilAndGasFormStepper } from "../../../assets/data/formStepper";
import { useForm } from "react-hook-form";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  oilAndGasClaimCircumstances,
  oilAndGasClaimDetailsTypes,
  oilAndGasClaimReqDoc,
} from "../../../form-types/Types";
import {
  oilAndGasClaimCircumstancesValidationSchema,
  oilAndGasClaimDetailsValidationSchema,
  oliAndGasClaimReqDocValidationSchema,
} from "../../../form-types/validationSchema";
import { OliAndGasClaimDetails } from "./ClaimDetails";
import { OilAndGasClaimSummary } from "./Summary";
import { RegisterClaimService } from "../../../api/services/make-a-claim";
import { getButtonBtnState } from "../../../helper/helper";
import { OilAndGasClaimCircumstances } from "./Circumstances";
import { OilAndGasClaimRequiredDocumentsDetails } from "./RequiredDocuments";

export const OilAndGasClaimStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } =
    useFormStepper(oilAndGasFormStepper);
  const { loading } = RegisterClaimService();
  const buttonState = getButtonBtnState(
    activeStep,
    oilAndGasFormStepper.length - 1
  );

  const {
    control: oilAndGasClaimDetailsControl,
    formState: { errors: oilAndGasClaimDetailsErrors },
    trigger: oilAndGasClaimDetailsTrigger,
    setValue: setOilAndGasClaimDetailsValues,
  } = useForm<oilAndGasClaimDetailsTypes>({
    mode: "onChange",
    resolver: yupResolver(oilAndGasClaimDetailsValidationSchema),
  });

  const {
    control: oilAndGasClaimReqDocControl,
    formState: { errors: oilAndGasClaimReqDocErrors },
    trigger: oilAndGasClaimReqDocTrigger,
    setValue: setOilAndGasClaimReqDocValues,
    setError: setOilAndGasClaimReqDocError,
  } = useForm<oilAndGasClaimReqDoc>({
    mode: "onChange",
    resolver: yupResolver(oliAndGasClaimReqDocValidationSchema),
  });

  const {
    control: oilAndGasClaimCircumstancesControl,
    formState: { errors: oilAndGasClaimCircumstancesErrors },
    trigger: oilAndGasClaimCircumstancesTrigger,
    setValue: setOilAndGasClaimCircumstancesValues,
  } = useForm<oilAndGasClaimCircumstances>({
    mode: "onChange",
    resolver: yupResolver(oilAndGasClaimCircumstancesValidationSchema),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await oilAndGasClaimDetailsTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await oilAndGasClaimCircumstancesTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = await oilAndGasClaimReqDocTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 3) {
      isValid = true;
      if (isValid) {
        //perform submit operation
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <OliAndGasClaimDetails
            useFormProps={{
              control: oilAndGasClaimDetailsControl,
              errors: oilAndGasClaimDetailsErrors,
              setValues: setOilAndGasClaimDetailsValues,
            }}
          />
        );
      case 1:
        return (
          <OilAndGasClaimCircumstances
            useFormProps={{
              control: oilAndGasClaimCircumstancesControl,
              errors: oilAndGasClaimCircumstancesErrors,
              setValues: setOilAndGasClaimCircumstancesValues,
            }}
          />
        );
      case 2:
        return (
          <OilAndGasClaimRequiredDocumentsDetails
            useFormProps={{
              control: oilAndGasClaimReqDocControl,
              errors: oilAndGasClaimReqDocErrors,
              setValues: setOilAndGasClaimReqDocValues,
              setError: setOilAndGasClaimReqDocError,
            }}
          />
        );
      case 3:
        return <OilAndGasClaimSummary />;
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-20'>
      <Stepper steps={oilAndGasFormStepper} activeStep={activeStep} />
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
  );
};
