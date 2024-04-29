import React from "react";
import { Controller } from "react-hook-form";
import { FormTitle, TextInput } from "../../../components";

type formProps = {
  useFormProps: any;
};

export const BusinessInterruptionForm2: React.FC<formProps> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Business Interruption' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Cost'
                  placeHolder='Cost'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
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
                  label='Number of units'
                  placeHolder='0'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
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
