import React from "react";
import { Button } from "../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { claimsFormStepper } from "../../assets/data/formStepper";
import { useForm } from "react-hook-form";
import { useFormStepper } from "../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { claimDetailsTypes } from "../../form-types/Types";
import { claimDetailsValidationSchema } from "../../form-types/validationSchema";
import { ClaimDetails } from "./ClaimDetails";
import { ClaimSummary } from "./Summary";
import { RegisterClaimService } from "../../api/services/make-a-claim";
import { getButtonBtnState } from "../../helper/helper";

export const MakeAClaimStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(claimsFormStepper);
  const { useMakeAClaim, loading } = RegisterClaimService();
  const buttonState = getButtonBtnState(activeStep, 1);

  const {
    control: claimDetailsControl,
    formState: { errors: claimDetailsErrors },
    trigger: claimDetailsTrigger,
    setValue: setClaimDetailsValues,
  } = useForm<claimDetailsTypes>({
    mode: "onChange",
    resolver: yupResolver(claimDetailsValidationSchema),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await claimDetailsTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = true;
      if (isValid) {
        useMakeAClaim();
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <ClaimDetails
            useFormProps={{
              control: claimDetailsControl,
              errors: claimDetailsErrors,
              setValues: setClaimDetailsValues,
            }}
          />
        );
      case 1:
        return <ClaimSummary />;
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-20'>
      <Stepper steps={claimsFormStepper} activeStep={activeStep} />
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
