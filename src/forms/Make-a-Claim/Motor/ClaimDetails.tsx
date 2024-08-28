import React, { useEffect } from "react";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import { Controller } from "react-hook-form";
import { claimType, damageType } from "../../../assets/data/formOptionsData";
import {
  convertToDateTimeISO,
  getDateTimeLocalMaxVal,
} from "../../../helper/helper";
import {
  useGlobalStore,
  useMakeAClaimForm,
  useMotorClaimForm,
} from "../../../hooks/store/make-a-claim";

type useFormProps = {
  useFormProps: any;
};

export const MotorClaimDetails: React.FC<useFormProps> = ({ useFormProps }) => {
  const props: any = useFormProps;
  const { motorClaimFormData, setMotorClaimFormData } = useMotorClaimForm();
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { setGlobalData, globalData } = useGlobalStore();

  useEffect(() => {
    if (globalData.claimType !== "Accident") {
      props?.setValues("damageType", "NULL");
    } else {
      props?.setValues("damageType", motorClaimFormData.damageType);
    }
  }, [globalData.claimType]);

  useEffect(() => {
    if (
      makeAClaimFormData.officeName &&
      makeAClaimFormData.policyId &&
      makeAClaimFormData.subRisk
    ) {
      setMotorClaimFormData({
        ...motorClaimFormData,
        policyHolderName: makeAClaimFormData.officeName,
        policyNumber: makeAClaimFormData.policyId,
        policyType: makeAClaimFormData.subRisk,
      });
    }
  }, [makeAClaimFormData]);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Motor Claim Details' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <TextInput
              placeHolder='john doe'
              label='Policy-holder Name'
              type='text'
              value={makeAClaimFormData.officeName}
              disabled={true}
            />
            <TextInput
              placeHolder='000000000000'
              label='Policy number'
              type='text'
              value={makeAClaimFormData.policyId}
              disabled={true}
            />
            <TextInput
              placeHolder='private car insurance'
              label='Policy type'
              type='text'
              value={makeAClaimFormData.subRisk}
              disabled={true}
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <TextInput
              placeHolder='Vehicle Reg Number'
              label='Vehicle Reg Number'
              type='text'
              value={makeAClaimFormData.vehicleRegNumber}
              disabled={true}
            />
            {/* <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='902-YD0-GE89'
                  label='Vehicle Reg Number'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMotorClaimFormData({
                      ...motorClaimFormData,
                      vehicleRegNumber: event.target.value,
                    });
                  }}
                  error={props?.errors?.vehicleRegNumber?.message}
                />
              )}
              name='vehicleRegNumber'
              defaultValue=''
            /> */}

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='johndoe@example.com'
                  label='Email address'
                  type='email'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMotorClaimFormData({
                      ...motorClaimFormData,
                      email: event.target.value,
                    });
                  }}
                  error={props?.errors?.email?.message}
                />
              )}
              name='email'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='0800 000 0000'
                  label='Mobile number'
                  type='number'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMotorClaimFormData({
                      ...motorClaimFormData,
                      mobileNumber: event.target.value,
                    });
                  }}
                  error={props?.errors?.mobileNumber?.message}
                />
              )}
              name='mobileNumber'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Select claim type'
                  data={claimType}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setMotorClaimFormData({
                      ...motorClaimFormData,
                      claimType: text,
                    });
                    setGlobalData({
                      ...globalData,
                      claimType: text,
                    });
                  }}
                  placeholder='Select claim type'
                  error={
                    !field.value ? props?.errors?.claimType?.message : undefined
                  }
                />
              )}
              name='claimType'
              defaultValue=''
            />

            {globalData.claimType === "Accident" && (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <SelectOptions
                    label='Select damage type'
                    data={damageType}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      field.onChange(text);
                      setMotorClaimFormData({
                        ...motorClaimFormData,
                        damageType: text,
                      });
                    }}
                    placeholder='Select damage type'
                    error={
                      !field.value
                        ? props?.errors?.damageType?.message
                        : undefined
                    }
                  />
                )}
                name='damageType'
                defaultValue=''
              />
            )}

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder=''
                  label='Date & Time Loss'
                  type='date'
                  max={getDateTimeLocalMaxVal()}
                  value={field.value}
                  onChange={(event) => {
                    const date = convertToDateTimeISO(event.target.value);
                    field.onChange(event.target.value);
                    setMotorClaimFormData({
                      ...motorClaimFormData,
                      dateTimeOfLoss: date,
                    });
                  }}
                  error={props?.errors?.dateTimeOfLoss?.message}
                />
              )}
              name='dateTimeOfLoss'
              defaultValue=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
