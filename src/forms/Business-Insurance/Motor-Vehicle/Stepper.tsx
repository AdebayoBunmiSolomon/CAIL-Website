import React from "react";
import { PersonalInfo } from "./PersonalInfo";
import { CarDetails } from "./CarDetails";
import { Summary } from "./Summary";
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
import { paymentsServices } from "../../../api/services/payments/payments";
import { useCalcPremFromAPI, useMotorForm } from "../../../hooks/store/motor";

export const MotorStepper: React.FC<{}> = () => {
  const { calculatedPremFromAPI } = useCalcPremFromAPI();
  const { activeStep, nextStep, prevStep } = useFormStepper(
    motorVehicleFormSteps
  );
  const { motorFormData } = useMotorForm();
  const { initializePaysStackPayment, onClose, onSuccess } = paymentsServices(
    motorFormData.email,
    calculatedPremFromAPI
  );

  const {
    control: personalControl,
    // handleSubmit: handlePersonalSubmit,
    formState: { errors: personalErrors },
    trigger: personalTrigger,
    setValue: setPersonalInfoValues,
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
        initializePaysStackPayment({ onSuccess, onClose });
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalInfo
            useFormProps={{
              control: personalControl,
              errors: personalErrors,
              setValues: setPersonalInfoValues,
            }}
          />
        );
      case 1:
        return (
          <CarDetails
            useFormProps={{
              control: carControl,
              errors: carErrors,
              setValues: setCarDetailsValues,
            }}
          />
        );
      case 2:
        return <Summary />;
      default:
        return null;
    }
  };

  return (
    <div className='pt-[200px] pb-20 px-20'>
      <Stepper steps={motorVehicleFormSteps} activeStep={activeStep} />
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
          text={activeStep === 2 ? "Buy Now" : "Next"}
          onPress={onSubmitNextStep}
          className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
          rightIcon={<GoArrowRight size={25} />}
        />
      </div>
    </div>
  );
};
