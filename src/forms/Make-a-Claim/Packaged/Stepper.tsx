import React from "react";
import { Button } from "../../../components";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Stepper } from "react-form-stepper";
import { packagedPolicyFormStepper } from "../../../assets/data/formStepper";
import { useForm } from "react-hook-form";
import { useFormStepper } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  packagedPolicyClaimCircumstances,
  packagedPolicyClaimDetailsTypes,
  packagedPolicyClaimReqDoc,
} from "../../../form-types/Types";
import {
  packagedPolicyCircumstancesValidationSchema,
  packagedPolicyClaimDetailsValidationSchema,
  packagedPolicyClaimReqDocValidationSchema,
} from "../../../form-types/validationSchema";
import { PackagedPolicyClaimDetails } from "./ClaimDetails";
import { RegisterClaimService } from "../../../api/services/make-a-claim";
import { getButtonBtnState } from "../../../helper/helper";
import { PackagedPolicyClaimCircumstances } from "./Circumstances";
import { PackagedPolicyClaimRequiredDocumentsDetails } from "./RequiredDocuments";
import { PackagedPolicyClaimSummary } from "./Summary";
import { ClaimsNumber } from "../../../common/Claims-Number";

export const PackagedPolicyClaimStepper: React.FC<{}> = () => {
  const { activeStep, nextStep, prevStep } = useFormStepper(
    packagedPolicyFormStepper
  );
  const { loading, makeAClaim, setShowClaims, showClaims } =
    RegisterClaimService();
  const buttonState = getButtonBtnState(
    activeStep,
    packagedPolicyFormStepper.length - 1
  );

  const {
    control: packagedPolicyClaimDetailsControl,
    formState: { errors: packagedPolicyClaimDetailsErrors },
    trigger: packagedPolicyClaimDetailsTrigger,
    setValue: setPackagedPolicyClaimDetailsValues,
  } = useForm<packagedPolicyClaimDetailsTypes>({
    mode: "onChange",
    resolver: yupResolver(packagedPolicyClaimDetailsValidationSchema),
  });

  const {
    control: packagedPolicyClaimCircumstancesControl,
    formState: { errors: packagedPolicyClaimCircumstancesErrors },
    trigger: packagedPolicyClaimCircumstancesTrigger,
    setValue: setPackagedPolicyClaimCircumstancesValues,
  } = useForm<packagedPolicyClaimCircumstances>({
    mode: "onChange",
    resolver: yupResolver(packagedPolicyCircumstancesValidationSchema),
  });

  const {
    control: packagedPolicyClaimReqDocControl,
    formState: { errors: packagedPolicyClaimReqDocErrors },
    trigger: packagedPolicyClaimReqDocTrigger,
    setValue: setPackagedPolicyClaimReqDocValues,
    setError: setPackagedPolicyClaimReqDocError,
  } = useForm<packagedPolicyClaimReqDoc>({
    mode: "onChange",
    resolver: yupResolver(packagedPolicyClaimReqDocValidationSchema),
  });

  const onSubmitNextStep = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await packagedPolicyClaimDetailsTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await packagedPolicyClaimCircumstancesTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 2) {
      isValid = await packagedPolicyClaimReqDocTrigger();
      if (isValid) nextStep();
    } else if (activeStep === 3) {
      isValid = true;
      if (isValid) {
        makeAClaim("packaged");
      }
    }
  };

  const getActiveStepComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <PackagedPolicyClaimDetails
            useFormProps={{
              control: packagedPolicyClaimDetailsControl,
              errors: packagedPolicyClaimDetailsErrors,
              setValues: setPackagedPolicyClaimDetailsValues,
            }}
          />
        );
      case 1:
        return (
          <PackagedPolicyClaimCircumstances
            useFormProps={{
              control: packagedPolicyClaimCircumstancesControl,
              errors: packagedPolicyClaimCircumstancesErrors,
              setValues: setPackagedPolicyClaimCircumstancesValues,
            }}
          />
        );
      case 2:
        return (
          <PackagedPolicyClaimRequiredDocumentsDetails
            useFormProps={{
              control: packagedPolicyClaimReqDocControl,
              errors: packagedPolicyClaimReqDocErrors,
              setValues: setPackagedPolicyClaimReqDocValues,
              setError: setPackagedPolicyClaimReqDocError,
            }}
          />
        );
      case 3:
        return <PackagedPolicyClaimSummary />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='pt-[200px] pb-20 px-2 md:px-10 lg:px-20'>
        <Stepper steps={packagedPolicyFormStepper} activeStep={activeStep} />
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
            text={
              loading === true ? (
                <svg
                  aria-hidden='true'
                  className='inline w-6 h-6 mr-2 text-gray-200 animate-spin fill-white'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
              ) : (
                buttonState
              )
            }
            onPress={onSubmitNextStep}
            className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
            rightIcon={<GoArrowRight size={25} />}
            disabled={loading}
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
