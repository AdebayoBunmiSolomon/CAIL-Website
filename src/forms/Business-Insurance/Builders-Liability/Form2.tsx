import React from "react";
import { Controller } from "react-hook-form";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import {
  arrOfYears,
  paymentOptions,
} from "../../../assets/data/formOptionsData";
import { convertToDateTimeISO } from "../../../helper/helper";

type formProps = {
  useFormProps: any;
};

export const BuildersLiabilityForm2: React.FC<formProps> = ({
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

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='0000'
                  label='No of units'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.no_of_units?.message}
                />
              )}
              name='no_of_units'
              defaultValue=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
