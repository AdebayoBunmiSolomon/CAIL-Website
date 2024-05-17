import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { accidentClaimsFormStepper } from "../../../assets/data/formStepper";
import { useForm } from "react-hook-form";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  accidentClaimCircumstances,
  accidentClaimDetailsTypes,
} from "../../../form-types/Types";
import {
  accidentClaimCircumstancesValidationSchema,
  accidentClaimDetailsValidationSchema,
} from "../../../form-types/validationSchema";
import { AccidentClaimDetails } from "./ClaimDetails";
import { AccidentClaimSummary } from "./Summary";
import { RegisterClaimService } from "../../../api/services/make-a-claim";
import { getButtonBtnState } from "../../../helper/helper";
import { AccidentClaimsCircumstances } from "./Circumstances";
import { AccidentClaimRequiredDocuments } from "./RequiredDocuments";

export const AccidentClaimStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(
    accidentClaimsFormStepper
  );
  const { loading } = RegisterClaimService();
  const buttonState = getButtonBtnState(
    activeStep,
    accidentClaimsFormStepper.length
  );

  const {
    control: accidentClaimDetailsControl,
    formState: { errors: accidentClaimDetailsErrors },
    trigger: accidentClaimDetailsTrigger,
    setValue: setAccidentClaimDetailsValues,
  } = useForm<accidentClaimDetailsTypes>({
    mode: "onChange",
    resolver: yupResolver(accidentClaimDetailsValidationSchema),
  });

  const {
    control: accidentClaimCircumstancesControl,
    formState: { errors: accidentClaimCircumstancesErrors },
    trigger: accidentClaimCircumstancesTrigger,
    setValue: setAccidentClaimCircumstancesValues,
  } = useForm<accidentClaimCircumstances>({
    mode: "onChange",
    resolver: yupResolver(accidentClaimCircumstancesValidationSchema),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await accidentClaimDetailsTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await accidentClaimCircumstancesTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <AccidentClaimDetails
            useFormProps={{
              control: accidentClaimDetailsControl,
              errors: accidentClaimDetailsErrors,
              setValues: setAccidentClaimDetailsValues,
            }}
          />
        );
      case 1:
        return (
          <AccidentClaimsCircumstances
            useFormProps={{
              control: accidentClaimCircumstancesControl,
              errors: accidentClaimCircumstancesErrors,
              setValues: setAccidentClaimCircumstancesValues,
            }}
          />
        );
      case 2:
        return <AccidentClaimRequiredDocuments useFormProps={{}} />;
      case 3:
        return <AccidentClaimSummary />;
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-20'>
      <Stepper steps={accidentClaimsFormStepper} activeStep={activeStep} />
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