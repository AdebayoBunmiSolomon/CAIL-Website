import React from "react";
import { PersonalInsurancePersonalInfo } from "./PersonalInfo";
import { PersonalInsuranceCarDetails } from "./CarDetails";
import { PersonalInsuranceSummary } from "./Summary";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { motorVehicleFormSteps } from "../../../assets/data/formStepper";
import {
  carDetailsLookUpTypes,
  personalInformationLookUpTypes,
} from "../../../form-types/lookup";
import { useForm } from "react-hook-form";
import {
  carDetailsValidationSchema,
  personalInformationValidationSchema,
} from "../../../form-types/validationSchema";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { PaymentServices } from "../../../api/services/payments/payments";
import { useCalcPremFromAPI, useMotorForm } from "../../../hooks/store/motor";
import { NewQuoteTransaction } from "../../../api/services/core/NewQuoteTransaction";
import { endpoints } from "../../../api/enpoints";

export const PersonalInsuranceMotorStepper: React.FC<{}> = () => {
  const { calculatedPremFromAPI } = useCalcPremFromAPI();
  const { activeStep, nextStep, prevStep } = useFormStepper(
    motorVehicleFormSteps
  );
  const { motorFormData } = useMotorForm();
  const { useMakePaymentWithPaystack } = PaymentServices(
    motorFormData.email,
    calculatedPremFromAPI
  );
  const { useGetAQuote } = NewQuoteTransaction(
    motorFormData,
    endpoints.POST_MOTOR_FORM_DATA,
    {}
  );

  const {
    control: personalControl,
    // handleSubmit: handlePersonalSubmit,
    formState: { errors: personalErrors },
    trigger: personalTrigger,
    setValue: setPersonalInfoValues,
    clearErrors: clearPersonalError,
  } = useForm<personalInformationLookUpTypes>({
    mode: "onChange",
    resolver: yupResolver(personalInformationValidationSchema),
  });

  const {
    control: carControl,
    // handleSubmit: handleCarSubmit,
    formState: { errors: carErrors },
    trigger: carTrigger,
    setValue: setCarDetailsValues,
    clearErrors: clearCarError,
  } = useForm<carDetailsLookUpTypes>({
    mode: "onChange",
    resolver: yupResolver(carDetailsValidationSchema),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await personalTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await carTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = true;
      if (isValid) {
        useMakePaymentWithPaystack();
        // useGetAQuote();
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalInsurancePersonalInfo
            useFormProps={{
              control: personalControl,
              errors: personalErrors,
              setValues: setPersonalInfoValues,
              clearError: clearPersonalError,
            }}
          />
        );
      case 1:
        return (
          <PersonalInsuranceCarDetails
            useFormProps={{
              control: carControl,
              errors: carErrors,
              setValues: setCarDetailsValues,
              clearError: clearCarError,
            }}
          />
        );
      case 2:
        return <PersonalInsuranceSummary />;
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-5 md:px-10 lg:px-20'>
      <Stepper steps={motorVehicleFormSteps} activeStep={activeStep} />
      {getActiveStepComponent()}
      <div className='flex items-center gap-5 justify-end pr-0 mt-5'>
        {activeStep > 0 && (
          <Button
            text='Prev'
            onPress={() => prevStep()}
            className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
            leftIcon={<GoArrowLeft size={25} />}
          />
        )}
        <Button
          text={activeStep === 2 ? "Buy Now" : "Next"}
          onPress={onSubmitNextStep}
          className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
          rightIcon={<GoArrowRight size={25} />}
        />
      </div>
    </div>
  );
};
