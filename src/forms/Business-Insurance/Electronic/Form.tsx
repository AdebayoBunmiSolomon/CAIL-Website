import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { electricFormType } from "../../../form-types/Types";
import { electronicEquipmentValidationSchema } from "../../../form-types/validationSchema";
import { NavigateFunction, useNavigate } from "react-router-dom";
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

export const ElectricForm: React.FC<{}> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<electricFormType>({
    mode: "onChange",
    resolver: yupResolver(electronicEquipmentValidationSchema),
  });
  const navigate: NavigateFunction = useNavigate();

  const onSubmit = (data: electricFormType) => {
    console.log("Hello");
    console.log(data);
    navigate("/thank-you");
  };
  return (
    <>
      <div className='pt-[200px] pb-20 px-20'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-[95%] bg-white rounded-md self-center p-6'>
            <FormTitle title='Electronic Equipment' />
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
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
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
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

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Address'
                    placeHolder='enter adress'
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
            <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
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

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    label='Cost'
                    placeHolder='0'
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    error={errors?.cost?.message}
                  />
                )}
                name='cost'
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
