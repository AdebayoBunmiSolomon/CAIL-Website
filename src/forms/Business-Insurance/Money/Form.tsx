import React from "react";
import { Controller, useForm } from "react-hook-form";
import { moneyFormType } from "../../../form-types/Types";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { moneyValidationSchema } from "../../../form-types/validationSchema";
import {
  Button,
  FormTitle,
  SelectOptions,
  TextInput,
} from "../../../components";
import {
  coverType,
  gender,
  identificationType,
  nigerianStates,
  paymentOptions,
  title,
} from "../../../assets/data/formOptionsData";
import { convertToDateTimeISO } from "../../../helper/helper";

export const MoneyForm: React.FC<{}> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<moneyFormType>({
    mode: "onChange",
    resolver: yupResolver(moneyValidationSchema),
  });
  const navigate: NavigateFunction = useNavigate();

  const onSubmit = (data: moneyFormType) => {
    console.log("Hello");
    console.log(data);
    navigate("/thank-you");
  };
  return (
    <>
      <div className='pt-[200px] pb-20 px-20'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-[95%] bg-white rounded-md self-center p-6'>
            <FormTitle title='Money Insurance' />
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
                    error={errors?.title?.message}
                  />
                )}
                name='title'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    placeHolder='First name'
                    label='First name'
                    type='text'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                    }}
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
                    placeHolder='enter surname'
                    label='Surname'
                    type='text'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                    }}
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
                    placeHolder='Email address'
                    label='Email Address'
                    type='email'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                    }}
                    error={errors?.email?.message}
                  />
                )}
                name='email'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <SelectOptions
                    label='Select Gender'
                    data={gender}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      field.onChange(text);
                    }}
                    placeholder='Select gender'
                    error={errors?.gender?.message}
                  />
                )}
                name='gender'
                defaultValue=''
              />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    placeHolder='Date of birth'
                    label='Date Of Birth'
                    type='date'
                    value={field.value}
                    onChange={(event) => {
                      const date = convertToDateTimeISO(event.target.value);
                      field.onChange(event.target.value);
                    }}
                    error={errors?.dob?.message}
                  />
                )}
                name='dob'
                defaultValue=''
              />
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    placeHolder='Mobile number'
                    label='Mobile Number'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                    }}
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
                    placeHolder='enter sum insured'
                    label='Sum insured'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                    }}
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
                    placeHolder='Address'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                    }}
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
                  <SelectOptions
                    label='Identification Type'
                    data={identificationType}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      field.onChange(text);
                    }}
                    placeholder='Select identification type'
                    error={errors?.id_type?.message}
                  />
                )}
                name='id_type'
                defaultValue=''
              />
            </div>
            <div>
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
