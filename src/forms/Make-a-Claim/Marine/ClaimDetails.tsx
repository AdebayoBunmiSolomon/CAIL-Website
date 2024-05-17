import React from "react";
import { FormTitle, TextInput } from "../../../components";
import {
  useMakeAClaimForm,
  useMarineClaimForm,
} from "../../../hooks/store/make-a-claim";
import { Controller } from "react-hook-form";
import { convertToDateTimeISO } from "../../../helper/helper";

type useFormProps = {
  useFormProps: any;
};

export const MarineClaimDetails: React.FC<useFormProps> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { marineClaimFormData, setMarineClaimFormData } = useMarineClaimForm();
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Aviation Claim Details' />
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
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='enter claim type'
                  label='Claim type'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMarineClaimFormData({
                      ...marineClaimFormData,
                      claimType: event.target.value,
                    });
                  }}
                  error={props?.errors?.claimType?.message}
                />
              )}
              name='claimType'
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
                    setMarineClaimFormData({
                      ...marineClaimFormData,
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
                  placeHolder='080 000 0000'
                  label='Phone number'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMarineClaimFormData({
                      ...marineClaimFormData,
                      phoneNumber: event.target.value,
                    });
                  }}
                  error={props?.errors?.phoneNumber?.message}
                />
              )}
              name='phoneNumber'
              defaultValue=''
            />
          </div>
          <div>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder=''
                  label='Date & Time of Incident'
                  type='datetime-local'
                  value={field.value}
                  onChange={(event) => {
                    const date = convertToDateTimeISO(event.target.value);
                    field.onChange(event.target.value);
                    setMarineClaimFormData({
                      ...marineClaimFormData,
                      dateTimeOfIncident: date,
                    });
                  }}
                  error={props?.errors?.dateTimeOfIncident?.message}
                />
              )}
              name='dateTimeOfIncident'
              defaultValue=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
