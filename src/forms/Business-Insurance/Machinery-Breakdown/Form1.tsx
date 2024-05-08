import React from "react";
import { Controller } from "react-hook-form";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import {
  coverType,
  identificationType,
  nigerianStates,
} from "../../../assets/data/formOptionsData";
import { useMachineryBreakdownForm } from "../../../hooks/store/machinery-breakdown/useMachineryBreakdownForm";

type formProps = {
  useFormProps: any;
};

export const MachineryBreakdownForm1: React.FC<formProps> = ({
  useFormProps,
}) => {
  const { machineryBreakdownFormData, setMachineryBreakDownFormData } =
    useMachineryBreakdownForm();
  const props = useFormProps;
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Machinery Breakdown' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='First name'
                  placeHolder='Enter first name'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
                      first_name: event.target.value,
                    });
                  }}
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
                  onChange={(event) => {
                    field.onChange(event);
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
                      surname: event.target.value,
                    });
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
                  label='Company name'
                  placeHolder='Enter company name'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event);
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
                      company_name: event.target.value,
                    });
                  }}
                  error={props?.errors?.company_name?.message}
                />
              )}
              name='company_name'
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
                  onChange={(event) => {
                    field.onChange(event);
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
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
                  label='Mobile number'
                  placeHolder='000 0000 0000'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event);
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
                      mobile_number: event.target.value,
                    });
                  }}
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
                  onChange={(event) => {
                    field.onChange(event);
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
                      sum_insured: event.target.value,
                    });
                  }}
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
                <SelectOptions
                  label='Cover type'
                  data={coverType}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
                      cover_type: text,
                    });
                  }}
                  placeholder='Select cover type'
                  error={props?.errors?.cover_type?.message}
                />
              )}
              name='cover_type'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Address'
                  placeHolder='enter address'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event);
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
                      address: event.target.value,
                    });
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
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
                      state: text,
                    });
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
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
                      id_type: text,
                    });
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
                  onChange={(event) => {
                    field.onChange(event);
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
                      id_number: event.target.value,
                    });
                  }}
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
                  onChange={(event) => {
                    field.onChange(event);
                    setMachineryBreakDownFormData({
                      ...machineryBreakdownFormData,
                      means_of_id: event.target.value,
                    });
                  }}
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
