import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { eventsInsuranceValidationSchema } from "../../../form-types/validationSchema";
import {
  Button,
  CheckBoxOptions,
  FormTitle,
  SelectOptions,
  TextInput,
} from "../../../components";
import { convertToDateTimeISO } from "../../../helper/helper";
import {
  eventInsuranceCoverType,
  eventInvolvement,
  eventLocation,
  eventType,
  noOfGuests,
} from "../../../assets/data/formOptionsData";
import { eventInsuranceFormType } from "../../../form-types/Types";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const PersonalInsuranceEventsForm: React.FC<{}> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<eventInsuranceFormType>({
    mode: "onChange",
    resolver: yupResolver(eventsInsuranceValidationSchema),
  });
  const navigate: NavigateFunction = useNavigate();

  const onSubmit = (data: eventInsuranceFormType) => {
    console.log("Hello");
    console.log(data);
    navigate("/thank-you");
  };

  return (
    <>
      <div className='pt-[200px] pb-20 px-20'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-[95%] bg-white rounded-md self-center p-6'>
            <FormTitle title='Custodian Events Insurance' />
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='First name'
                    placeHolder='enter first name'
                    type='text'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.first_name?.message}
                  />
                )}
                name='first_name'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Surname'
                    placeHolder='enter surname'
                    type='text'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.surname?.message}
                  />
                )}
                name='surname'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Company name'
                    placeHolder='enter company name'
                    type='text'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.company_name?.message}
                  />
                )}
                name='company_name'
                defaultValue=''
              />
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Email'
                    placeHolder='a@example.com'
                    type='email'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.email?.message}
                  />
                )}
                name='email'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Mobile number'
                    placeHolder='000 0000 0000'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.mobile_number?.message}
                  />
                )}
                name='mobile_number'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Sum insured'
                    placeHolder='enter sum insured'
                    type='text'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.sum_insured?.message}
                  />
                )}
                name='sum_insured'
                defaultValue=''
              />
            </div>

            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Event date'
                    placeHolder='select date'
                    type='date'
                    value={field.value}
                    onChange={(event) => {
                      const date = convertToDateTimeISO(event.target.value);
                      field.onChange(event);
                    }}
                    error={errors?.event_date?.message}
                  />
                )}
                name='event_date'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Event duration (no of days only)'
                    placeHolder='00000'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.event_duration?.message}
                  />
                )}
                name='event_duration'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <SelectOptions
                    label='Event Involvement'
                    data={eventInvolvement}
                    selectedOption={field.value}
                    onChangeSelectedOption={(event) => {
                      field.onChange(event);
                    }}
                    placeholder='Select Involvement'
                    error={
                      !field.value
                        ? errors?.event_involvement?.message
                        : undefined
                    }
                  />
                )}
                name='event_involvement'
                defaultValue=''
              />
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
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
                      !field.value ? errors?.event_type?.message : undefined
                    }
                  />
                )}
                name='event_type'
                defaultValue=''
              />

              <Controller
                control={control}
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
                      !field.value ? errors?.event_location?.message : undefined
                    }
                  />
                )}
                name='event_location'
                defaultValue=''
              />

              <Controller
                control={control}
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
                      !field.value ? errors?.no_of_guests?.message : undefined
                    }
                  />
                )}
                name='no_of_guests'
                defaultValue=''
              />
            </div>

            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <CheckBoxOptions
                    label='Select the covers you want'
                    data={eventInsuranceCoverType}
                    checkedOption={field.value}
                    onChangeCheckedOption={(event) => field.onChange(event)}
                    error={errors?.cover_type?.message}
                  />
                )}
                name='cover_type'
                defaultValue={[]}
              />
            </div>
          </div>
          <div className='w-[95%] py-6'>
            <Button
              text={"Submit"}
              onPress={handleSubmit(onSubmit)}
              className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700 self-end'
            />
          </div>
        </div>
      </div>
    </>
  );
};
