import React, { useState } from "react";
import { Button, FormTitle, TextInput } from "../../../components";
import { Controller, useForm } from "react-hook-form";
import { claimStatusTypes } from "../../../form-types/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { claimStatusValidationSchema } from "../../../form-types/validationSchema";
import { GoArrowRight } from "react-icons/go";
import { ClaimsInfo } from "../ClaimsInfo";
import { CheckClaimStatusService } from "../../../api/services/make-a-claim";
import { validatePolicyNumber } from "../../../helper/helper";

export const MakeAClaim: React.FC<{}> = () => {
  const [policyValid, setPolicyValid] = useState<boolean>(false);
  const { useCheckClaimStatus, loading, showClaimInfo, setShowClaimInfo } =
    CheckClaimStatusService();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<claimStatusTypes>({
    mode: "onChange",
    resolver: yupResolver(claimStatusValidationSchema),
  });

  const onSubmit = (data: claimStatusTypes) => {
    if (data) {
      useCheckClaimStatus(data.policyNumber);
    }
  };

  // useEffect(() => {
  //   if (motorPolicy === true) {
  //     setValue("vehicleRegNumber", "");
  //   } else {
  //     setValue("vehicleRegNumber", "NIL");
  //   }
  // }, [motorPolicy]);

  return (
    <>
      <div className='px-2 md:px-10 lg:px-20'>
        <div className='flex justify-center items-center'>
          <div className='w-[90%] md:w-[70%] lg:w-[50%] bg-white rounded-lg self-center p-6 shadow-xl'>
            <FormTitle title='Make Claim' />
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Policy number'
                    placeHolder='enter policy number here...'
                    type='text'
                    value={field.value}
                    onChange={(event) => {
                      const { isPolicyValid } = validatePolicyNumber(
                        event.target.value
                      );
                      field.onChange(event.target.value);
                      setPolicyValid(isPolicyValid);
                    }}
                    error={errors?.policyNumber?.message}
                  />
                )}
                name='policyNumber'
                defaultValue=''
              />
            </div>
            {/* {policyValid && motorPolicy && (
              <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      label='Vehicle Reg NO'
                      placeHolder='Registration number'
                      type='text'
                      value={field.value}
                      onChange={(event) => {
                        field.onChange(event.target.value);
                      }}
                      error={errors?.vehicleRegNumber?.message}
                    />
                  )}
                  name='vehicleRegNumber'
                  defaultValue=''
                />
              </div>
            )} */}
          </div>
        </div>
        <div className='flex justify-end items-center w-[79%] px-2 md:px-5 lg:px-10 pt-5 pb-20'>
          <Button
            text={
              loading ? (
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
                "Proceed"
              )
            }
            onPress={handleSubmit(onSubmit)}
            className={`py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg ${
              !policyValid ? "" : "hover:bg-[#900000d7]"
            } hover:duration-700`}
            rightIcon={<GoArrowRight size={25} />}
            disabled={policyValid ? false : true}
          />
        </div>
      </div>
      <ClaimsInfo
        showClaimsInfo={showClaimInfo}
        closeModal={(value) => setShowClaimInfo(value)}
      />
    </>
  );
};