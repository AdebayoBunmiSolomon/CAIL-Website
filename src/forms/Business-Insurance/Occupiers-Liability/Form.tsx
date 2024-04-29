import React from "react";
import { occupiersLiabilityFormType } from "../../../form-types/Types";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { occupiersLiabilityValidationSchema } from "../../../form-types/validationSchema";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  Button,
  FormTitle,
  SelectOptions,
  TextInput,
} from "../../../components";
import {
  eventInvolvement,
  eventLocation,
  eventType,
  nigerianStates,
  noOfGuests,
  paymentOptions,
  title,
} from "../../../assets/data/formOptionsData";

export const OccupiersLiabilityForm: React.FC<{}> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<occupiersLiabilityFormType>({
    mode: "onChange",
    resolver: yupResolver(occupiersLiabilityValidationSchema),
  });
  const navigate: NavigateFunction = useNavigate();

  const onSubmit = (data: occupiersLiabilityFormType) => {
    console.log("Hello");
    console.log(data);
    navigate("/thank-you");
  };
  return (
    <>
      <div className='pt-[200px] pb-20 px-20'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-[95%] bg-white rounded-md self-center p-6'>
            <FormTitle title='Occupiers Liability' />
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <SelectOptions
                    label='Select Title'
                    data={title}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      field.onChange(text);
                    }}
                    placeholder='Select Title'
                    error={!field.value ? errors?.title?.message : undefined}
                  />
                )}
                name='title'
                defaultValue=''
              />
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
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
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

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Sum insured'
                    placeHolder='0'
                    type='text'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.sum_insured?.message}
                  />
                )}
                name='sum_insured'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Address'
                    placeHolder='enter address'
                    type='text'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.address?.message}
                  />
                )}
                name='address'
                defaultValue=''
              />
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <SelectOptions
                    label='Select State'
                    data={nigerianStates}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      field.onChange(text);
                    }}
                    placeholder='Select State'
                    error={!field.value ? errors?.state?.message : undefined}
                  />
                )}
                name='state'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <SelectOptions
                    label='Payment options'
                    data={paymentOptions}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      field.onChange(text);
                    }}
                    placeholder='Select payment options'
                    error={errors?.payment_option?.message}
                  />
                )}
                name='payment_option'
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
