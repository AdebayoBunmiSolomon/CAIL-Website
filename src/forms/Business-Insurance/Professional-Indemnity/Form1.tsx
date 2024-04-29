import React from "react";
import { Controller } from "react-hook-form";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import {
  gender,
  nigerianStates,
  title,
} from "../../../assets/data/formOptionsData";
import { convertToDateTimeISO } from "../../../helper/helper";

type formProps = {
  useFormProps: any;
};

export const ProfessionalIndemnityForm1: React.FC<formProps> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Professional Indemnity' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Select Title'
                  data={title}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                  }}
                  placeholder='Select Title'
                  error={
                    !field.value ? props?.errors?.title?.message : undefined
                  }
                />
              )}
              name='title'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='Surname'
                  label='Surname'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.surname?.message}
                />
              )}
              name='surname'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='First name'
                  label='First name'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.first_name?.message}
                />
              )}
              name='first_name'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='Date of birth'
                  label='Date Of Birth'
                  type='date'
                  value={field.value}
                  onChange={(event) => {
                    const date = convertToDateTimeISO(event.target.value);
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.dob?.message}
                />
              )}
              name='dob'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Select Gender'
                  data={gender}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                  }}
                  placeholder='Select gender'
                  error={
                    !field.value ? props?.errors?.gender?.message : undefined
                  }
                />
              )}
              name='gender'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Occupation'
                  placeHolder='occupation'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.occupation?.message}
                />
              )}
              name='occupation'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Company name'
                  placeHolder='entered company name'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.company_name?.message}
                />
              )}
              name='company_name'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='Email address'
                  label='Email Address'
                  type='email'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
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
                  placeHolder='Mobile number'
                  label='Mobile Number'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
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
                <TextInput
                  label='Sum insured'
                  placeHolder='0'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.sum_insured?.message}
                />
              )}
              name='sum_insured'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Address'
                  placeHolder='enter address'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.address?.message}
                />
              )}
              name='address'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Select State'
                  data={nigerianStates}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                  }}
                  placeholder='Select State'
                  error={
                    !field.value ? props?.errors?.state?.message : undefined
                  }
                />
              )}
              name='state'
              defaultValue=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
