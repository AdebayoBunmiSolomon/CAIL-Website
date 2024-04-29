import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { publicLiabilityFormType } from "../../../form-types/Types";
import { publicLiabilityValidationSchema } from "../../../form-types/validationSchema";
import {
  Button,
  FormTitle,
  SelectOptions,
  TextInput,
} from "../../../components";
import {
  coverType,
  identificationType,
  nigerianStates,
  paymentOptions,
} from "../../../assets/data/formOptionsData";
import { convertToDateTimeISO } from "../../../helper/helper";

export const PublicLiabilityForm: React.FC<{}> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<publicLiabilityFormType>({
    mode: "onChange",
    resolver: yupResolver(publicLiabilityValidationSchema),
  });
  const navigate: NavigateFunction = useNavigate();

  const onSubmit = (data: publicLiabilityFormType) => {
    console.log("Hello");
    console.log(data);
    navigate("/thank-you");
  };

  return (
    <>
      <div className='pt-[200px] pb-20 px-20'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-[95%] bg-white rounded-md self-center p-6'>
            <FormTitle title='Public Liability' />
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
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
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

              <Controller
                control={control}
                render={({ field }) => (
                  <SelectOptions
                    label='Cover type'
                    data={coverType}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      field.onChange(text);
                    }}
                    placeholder='Select cover type'
                    error={errors?.cover_type?.message}
                  />
                )}
                name='cover_type'
                defaultValue=''
              />
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Address'
                    placeHolder='enter address'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.address?.message}
                  />
                )}
                name='address'
                defaultValue=''
              />

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
                    error={errors?.state?.message}
                  />
                )}
                name='state'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Start date'
                    placeHolder='insurance start date'
                    type='date'
                    min={new Date().toISOString().split("T")[0]}
                    value={field.value}
                    onChange={(event) => {
                      const startDate = convertToDateTimeISO(
                        event.target.value
                      );
                      field.onChange(event.target.value);
                    }}
                    error={errors?.insured_date?.message}
                  />
                )}
                name='insured_date'
                defaultValue=''
              />
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <SelectOptions
                    label='Cover type'
                    data={coverType}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      field.onChange(text);
                    }}
                    placeholder='Select cover type'
                    error={errors?.cover_type?.message}
                  />
                )}
                name='cover_type'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Address'
                    placeHolder='enter address'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.address?.message}
                  />
                )}
                name='address'
                defaultValue=''
              />

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
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Identification number'
                    placeHolder='Identification Number'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                    }}
                    error={errors?.id_number?.message}
                  />
                )}
                name='id_number'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <SelectOptions
                    label='Identification Type'
                    data={identificationType}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      field.onChange(text);
                    }}
                    placeholder='Select identification type'
                    error={!field.value ? errors?.id_type?.message : undefined}
                  />
                )}
                name='id_type'
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
                defaultValue=''
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
