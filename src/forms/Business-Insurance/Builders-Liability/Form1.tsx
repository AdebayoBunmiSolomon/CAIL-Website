import React from "react";
import { Controller } from "react-hook-form";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import {
  identificationType,
  nigerianStates,
  title,
} from "../../../assets/data/formOptionsData";

type formProps = {
  useFormProps: any;
};

export const BuildersLiabilityForm1: React.FC<formProps> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Builders Liability' />
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
                  label='First name'
                  placeHolder='Enter first name'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
                  error={props?.errors?.first_name?.message}
                />
              )}
              name='first_name'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Surname'
                  placeHolder='Enter surname'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
                  error={props?.errors?.surname?.message}
                />
              )}
              name='surname'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Email'
                  type='email'
                  placeHolder='Enter email'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
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
                  label='Mobile number'
                  placeHolder='000 0000 0000'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
                  error={props?.errors?.mobile_number?.message}
                />
              )}
              name='mobile_number'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Sum insured'
                  placeHolder='Enter sum insured'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
                  error={props?.errors?.sum_insured?.message}
                />
              )}
              name='sum_insured'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Company name'
                  placeHolder='Enter company name'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
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
                  label='Address'
                  placeHolder='enter address'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
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
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Identification type'
                  data={identificationType}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                  }}
                  placeholder='Select identification type'
                  error={
                    !field.value ? props?.errors?.id_type?.message : undefined
                  }
                />
              )}
              name='id_type'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Identification number'
                  placeHolder='000 0000 0000'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
                  error={props?.errors?.id_number?.message}
                />
              )}
              name='id_number'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Means of Id'
                  placeHolder='enter means of id'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
                  error={props?.errors?.means_of_id?.message}
                />
              )}
              name='means_of_id'
              defaultValue=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
