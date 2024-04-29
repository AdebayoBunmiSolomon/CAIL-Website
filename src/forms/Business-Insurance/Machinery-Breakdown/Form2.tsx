import React from "react";
import { Controller } from "react-hook-form";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import {
  arrOfYears,
  bodyType,
  paymentOptions,
  vehicleCategory,
  vehicleColor,
} from "../../../assets/data/formOptionsData";
import { convertToDateTimeISO } from "../../../helper/helper";

type formProps = {
  useFormProps: any;
};

export const MachineryBreakdownForm2: React.FC<formProps> = ({
  useFormProps,
}) => {
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
                <SelectOptions
                  label='Machine category'
                  data={vehicleCategory}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    if (text !== "Select machine category") {
                      field.onChange(text);
                    }
                  }}
                  placeholder='Select machine category'
                  error={props?.errors?.machine_category?.message}
                />
              )}
              name='machine_category'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Machine value'
                  placeHolder='Machine value'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.machine_value?.message}
                />
              )}
              name='machine_value'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Payment options'
                  data={paymentOptions}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                  }}
                  placeholder='Select payment options'
                  error={props?.errors?.payment_option?.message}
                />
              )}
              name='payment_option'
              defaultValue=''
            />
          </div>

          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Machine maker'
                  placeHolder='Machine maker'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.machine_maker?.message}
                />
              )}
              name='machine_maker'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Model number'
                  placeHolder='0000000000'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.model_number?.message}
                />
              )}
              name='model_number'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Registration number'
                  placeHolder='0000000000'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.reg_number?.message}
                />
              )}
              name='reg_number'
              defaultValue=''
            />
          </div>

          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Chasis number'
                  placeHolder='00000000'
                  type='text'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.chasis_no?.message}
                />
              )}
              name='chasis_no'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Engine number'
                  placeHolder='0000000000'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.engine_no?.message}
                />
              )}
              name='engine_no'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Select year'
                  data={arrOfYears}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                  }}
                  placeholder='Select year'
                  error={props?.errors?.year_of_make?.message}
                />
              )}
              name='year_of_make'
              defaultValue=''
            />
          </div>

          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Body type'
                  data={bodyType}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                  }}
                  placeholder='Select body type'
                  error={
                    !field.value ? props?.errors?.body_type?.message : undefined
                  }
                />
              )}
              name='body_type'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Start date'
                  placeHolder='insurance start date'
                  min={new Date().toISOString().split("T")[0]}
                  type='date'
                  value={field.value}
                  onChange={(event) => {
                    const startDate = convertToDateTimeISO(event.target.value);
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.insured_date?.message}
                />
              )}
              name='insured_date'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Machine color'
                  data={vehicleColor}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                  }}
                  placeholder='Vehicle Color'
                  error={
                    !field.value
                      ? props?.errors?.machine_color?.message
                      : undefined
                  }
                />
              )}
              name='machine_color'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='cost'
                  label='Cost'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.cost?.message}
                />
              )}
              name='cost'
              defaultValue=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
