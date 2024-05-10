import React, { useState } from "react";
import { Button, FormTitle, TextInput } from "../../components";
import { Controller, useForm } from "react-hook-form";
import { claimStatusTypes } from "../../form-types/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { claimStatusValidationSchema } from "../../form-types/validationSchema";
import { GoArrowRight } from "react-icons/go";
import { ClaimsInfo } from "./ClaimsInfo";
import { useMakeAClaimForm } from "../../hooks/store/make-a-claim/useMakeAClaim";

export const MakeAClaim: React.FC<{}> = () => {
  const [showClaimInfo, setShowClaimInfo] = useState<boolean>(false);
  const { makeAClaimFormData, setMakeAClaimFormData } = useMakeAClaimForm();
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
      setShowClaimInfo(!showClaimInfo);
      console.log("form submitted");
    }
  };

  return (
    <>
      <div className='pt-[200px] pb-20 px-20'>
        <div className='flex justify-center items-center'>
          <div className='w-[50%] bg-white rounded-md self-center p-6'>
            <FormTitle title='Claim Status' />
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Policy number'
                    placeHolder='21807392928292'
                    type='text'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                      setMakeAClaimFormData({
                        ...makeAClaimFormData,
                        policyNumber: event.target.value,
                      });
                    }}
                    error={errors?.policyNumber?.message}
                  />
                )}
                name='policyNumber'
                defaultValue=''
              />
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Vehicle Reg NO'
                    placeHolder='Vehicle value'
                    type='text'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                      setMakeAClaimFormData({
                        ...makeAClaimFormData,
                        vehicleRegNumber: event.target.value,
                      });
                    }}
                    error={errors?.vehicleRegNumber?.message}
                  />
                )}
                name='vehicleRegNumber'
                defaultValue=''
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end items-center w-[79%] px-14 md:px-12 lg:px-10 pt-5 pb-20'>
          <Button
            text={"Proceed"}
            onPress={handleSubmit(onSubmit)}
            className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
            rightIcon={<GoArrowRight size={25} />}
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
