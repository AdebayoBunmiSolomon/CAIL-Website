import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { marineFormStepper } from "../../../assets/data/formStepper";
import { useForm } from "react-hook-form";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  marineClaimCircumstances,
  marineClaimDetailsTypes,
} from "../../../form-types/Types";
import {
  marineClaimCircumstancesValidationSchema,
  marineClaimDetailsValidationSchema,
} from "../../../form-types/validationSchema";
import { MarineClaimDetails } from "./ClaimDetails";
import { MarineClaimSummary } from "./Summary";
import { RegisterClaimService } from "../../../api/services/make-a-claim";
import { getButtonBtnState } from "../../../helper/helper";
import { MarineClaimCircumstances } from "./Circumstances";
import { MarineClaimRequiredDocumentsDetails } from "./RequiredDocuments";

export const MarineClaimStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(marineFormStepper);
  const { loading } = RegisterClaimService();
  const buttonState = getButtonBtnState(activeStep, marineFormStepper.length);

  const {
    control: marineClaimDetailsControl,
    formState: { errors: marineClaimDetailsErrors },
    trigger: marineClaimDetailsTrigger,
    setValue: setMarineClaimDetailsValues,
  } = useForm<marineClaimDetailsTypes>({
    mode: "onChange",
    resolver: yupResolver(marineClaimDetailsValidationSchema),
  });

  const {
    control: marineClaimCircumstancesControl,
    formState: { errors: marineClaimCircumstancesErrors },
    trigger: marineClaimCircumstancesTrigger,
    setValue: setMarineClaimCircumstancesValues,
  } = useForm<marineClaimCircumstances>({
    mode: "onChange",
    resolver: yupResolver(marineClaimCircumstancesValidationSchema),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await marineClaimDetailsTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await marineClaimCircumstancesTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <MarineClaimDetails
            useFormProps={{
              control: marineClaimDetailsControl,
              errors: marineClaimDetailsErrors,
              setValues: setMarineClaimDetailsValues,
            }}
          />
        );
      case 1:
        return (
          <MarineClaimCircumstances
            useFormProps={{
              control: marineClaimCircumstancesControl,
              errors: marineClaimCircumstancesErrors,
              setValues: setMarineClaimCircumstancesValues,
            }}
          />
        );
      case 2:
        return <MarineClaimRequiredDocumentsDetails useFormProps={{}} />;
      case 3:
        return <MarineClaimSummary />;
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-20'>
      <Stepper steps={marineFormStepper} activeStep={activeStep} />
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
