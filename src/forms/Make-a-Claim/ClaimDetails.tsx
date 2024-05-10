import React, { useEffect, useState } from "react";
import { FormTitle, SelectOptions, TextInput } from "../../components";
import { Controller } from "react-hook-form";
import { claimType, damageType } from "../../assets/data/formOptionsData";
import { convertToDateTimeISO } from "../../helper/helper";
import { useMakeAClaimForm } from "../../hooks/store/make-a-claim/useMakeAClaim";

type useFormProps = {
  useFormProps: any;
};

export const ClaimDetails: React.FC<useFormProps> = ({ useFormProps }) => {
  const [selectedClaimType, setSelectedClaimType] = useState<string>("");
  const props: any = useFormProps;
  const { makeAClaimFormData, setMakeAClaimFormData } = useMakeAClaimForm();
  console.log(props);

  useEffect(() => {
    if (selectedClaimType !== "Accident") {
      props?.setValues("damageType", "NIL");
      setMakeAClaimFormData({
        ...makeAClaimFormData,
        damageType: "NIL",
      });
    } else {
      props?.setValues("damageType", "");
      setMakeAClaimFormData({
        ...makeAClaimFormData,
        policyHolderName: "",
      });
    }
  }, [selectedClaimType]);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Claim Details' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='john doe'
                  label='Policy-holder Name'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMakeAClaimFormData({
                      ...makeAClaimFormData,
                      policyHolderName: event.target.value,
                    });
                  }}
                  error={props?.errors?.policyHolderName?.message}
                />
              )}
              name='policyHolderName'
              defaultValue=''
            />
            <TextInput
              placeHolder='000000000000'
              label='Policy number'
              type='text'
              value={makeAClaimFormData.policyNumber}
              disabled={true}
            />
            <TextInput
              placeHolder='private car insurance'
              label='Policy type'
              type='text'
              value={"Private Car Insurance"}
              disabled={true}
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='902-YD0-GE89'
                  label='Vehicle Reg Number'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMakeAClaimFormData({
                      ...makeAClaimFormData,
                      vehicleRegNumber: event.target.value,
                    });
                  }}
                  error={props?.errors?.vehicleRegNumber?.message}
                />
              )}
              name='vehicleRegNumber'
              defaultValue=''
            />

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
                    setMakeAClaimFormData({
                      ...makeAClaimFormData,
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
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMakeAClaimFormData({
                      ...makeAClaimFormData,
                      mobile_number: event.target.value,
                    });
                  }}
                  error={props?.errors?.mobile_number?.message}
                />
              )}
              name='mobile_number'
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
                    setSelectedClaimType(text);
                    setMakeAClaimFormData({
                      ...makeAClaimFormData,
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

            {selectedClaimType === "Accident" && (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <SelectOptions
                    label='Select damage type'
                    data={damageType}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      field.onChange(text);
                      setMakeAClaimFormData({
                        ...makeAClaimFormData,
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
                  value={field.value}
                  onChange={(event) => {
                    const date = convertToDateTimeISO(event.target.value);
                    field.onChange(event.target.value);
                    setMakeAClaimFormData({
                      ...makeAClaimFormData,
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
