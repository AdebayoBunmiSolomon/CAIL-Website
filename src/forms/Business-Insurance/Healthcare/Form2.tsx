import React from "react";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import { Controller } from "react-hook-form";
import {
  eventLocation,
  eventType,
  noOfGuests,
  paymentOptions,
} from "../../../assets/data/formOptionsData";

type formProps = {
  useFormProps: any;
};

export const HealthCareForm2: React.FC<formProps> = ({ useFormProps }) => {
  const props = useFormProps;
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Health Care' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Event Type'
                  data={eventType}
                  selectedOption={field.value}
                  onChangeSelectedOption={(event) => {
                    field.onChange(event);
                  }}
                  placeholder='Select Event Type'
                  error={
                    !field.value
                      ? props?.errors?.event_type?.message
                      : undefined
                  }
                />
              )}
              name='event_type'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Event Location'
                  data={eventLocation}
                  selectedOption={field.value}
                  onChangeSelectedOption={(event) => {
                    field.onChange(event);
                  }}
                  placeholder='Select Event Location'
                  error={
                    !field.value
                      ? props?.errors?.event_location?.message
                      : undefined
                  }
                />
              )}
              name='event_location'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='No of Guests'
                  data={noOfGuests}
                  selectedOption={field.value}
                  onChangeSelectedOption={(event) => {
                    field.onChange(event);
                  }}
                  placeholder='Select no of guest'
                  error={
                    !field.value
                      ? props?.errors?.no_of_guests?.message
                      : undefined
                  }
                />
              )}
              name='no_of_guests'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Sum insured'
                  placeHolder='enter sum insured'
                  value={field.value}
                  onChange={(event) => field.onChange(event.target.value)}
                  error={props?.errors?.sum_insured?.message}
                />
              )}
              name='sum_insured'
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
