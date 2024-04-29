import React from "react";
import { Controller } from "react-hook-form";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import {
  identificationType,
  paymentOptions,
} from "../../../assets/data/formOptionsData";

type formProps = {
  useFormProps: any;
};

export const ProfessionalIndemnityForm2: React.FC<formProps> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Custodian Events Insurance' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Identification Type'
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
                  placeHolder='enter identification number here'
                  label='Identification number'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
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
        </div>
      </div>
    </>
  );
};
