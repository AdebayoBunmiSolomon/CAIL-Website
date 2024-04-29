import React from "react";
import { Controller } from "react-hook-form";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import {
  eventInvolvement,
  eventLocation,
  eventType,
  noOfGuests,
  title,
} from "../../../assets/data/formOptionsData";
import { convertToDateTimeISO } from "../../../helper/helper";

type formProps = {
  useFormProps: any;
};

export const BurglaryForm1: React.FC<formProps> = ({ useFormProps }) => {
  const props = useFormProps;
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Burglary/House-Breaking' />
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
                  label='House type'
                  placeHolder='Enter house type'
                  value={field.value}
                  onChange={(text) => field.onChange(text)}
                  error={props?.errors?.house_type?.message}
                />
              )}
              name='house_type'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Event Involvement'
                  data={eventInvolvement}
                  selectedOption={field.value}
                  onChangeSelectedOption={(event) => {
                    field.onChange(event);
                  }}
                  placeholder='Select Involvement'
                  error={props?.errors?.event_involvement?.message}
                />
              )}
              name='event_involvement'
              defaultValue=''
            />

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
                  error={props?.errors?.event_type?.message}
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
                  error={props?.errors?.event_location?.message}
                />
              )}
              name='event_location'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='No of People'
                  data={noOfGuests}
                  selectedOption={field.value}
                  onChangeSelectedOption={(event) => {
                    field.onChange(event);
                  }}
                  placeholder='Select no of guest'
                  error={props?.errors?.no_of_people?.message}
                />
              )}
              name='no_of_people'
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

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Event date'
                  placeHolder='insurance start date'
                  type='date'
                  min={new Date().toISOString().split("T")[0]}
                  value={field.value}
                  onChange={(event) => {
                    const startDate = convertToDateTimeISO(event.target.value);
                    field.onChange(event.target.value);
                  }}
                  error={props?.errors?.event_date?.message}
                />
              )}
              name='event_date'
              defaultValue=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
