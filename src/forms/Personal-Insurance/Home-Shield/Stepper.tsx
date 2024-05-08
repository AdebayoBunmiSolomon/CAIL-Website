import React from "react";
import { HomeShieldSummary } from "./Summary";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { homeShieldSteps } from "../../../assets/data/formStepper";
import {
  homeShieldFormType1,
  homeShieldFormType2,
} from "../../../form-types/lookup";
import { useForm } from "react-hook-form";
import {
  homeShieldValidationSchema1,
  homeShieldValidationSchema2,
} from "../../../form-types/validationSchema";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { HomeShieldForm1 } from "./Form1";
import { HomeShieldForm2 } from "./Form2";
import { CreateQuoteService } from "../../../api/services/home-shield/CreateQuoteService";
import { getButtonBtnState } from "../../../helper/helper";

export const HomeShieldStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(homeShieldSteps);
  const { useCreateQuote, loading } = CreateQuoteService();
  const buttonState = getButtonBtnState(activeStep, 2);

  const {
    control: stepOneControl,
    formState: { errors: stepOneErrors },
    trigger: stepOneTrigger,
    setValue: setStepOneValue,
  } = useForm<homeShieldFormType1>({
    mode: "onChange",
    resolver: yupResolver(homeShieldValidationSchema1),
  });

  const {
    control: stepTwoControl,
    formState: { errors: stepTwoErrors },
    trigger: stepTwoTrigger,
    setValue: setStepTwoValues,
  } = useForm<homeShieldFormType2>({
    mode: "onChange",
    resolver: yupResolver(homeShieldValidationSchema2),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await stepOneTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await stepTwoTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = true;
      if (isValid) {
        useCreateQuote();
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <HomeShieldForm1
            useFormProps={{
              control: stepOneControl,
              errors: stepOneErrors,
              setValues: setStepOneValue,
            }}
          />
        );
      case 1:
        return (
          <HomeShieldForm2
            useFormProps={{
              control: stepTwoControl,
              errors: stepTwoErrors,
              setValues: setStepTwoValues,
            }}
          />
        );
      case 2:
        return <HomeShieldSummary />;
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-20'>
      <Stepper steps={homeShieldSteps} activeStep={activeStep} />
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
          text={loading ? "Loading..." : buttonState}
          onPress={onSubmitNextStep}
          className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
          rightIcon={<GoArrowRight size={25} />}
        />
      </div>
    </div>
  );
};
