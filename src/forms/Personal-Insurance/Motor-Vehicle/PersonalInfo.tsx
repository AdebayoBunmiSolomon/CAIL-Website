import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import {
  gender,
  identificationType,
  nigerianStates,
  title,
} from "../../../assets/data/formOptionsData";
import { useMotorForm } from "../../../hooks/store/motor/useMotorForm";
import { convertToDateTimeISO } from "../../../helper/helper";
import { FileInput } from "../../../components/shared/FileInput";

type personalInfoType = {
  useFormProps: any;
};

export const PersonalInsurancePersonalInfo: React.FC<personalInfoType> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  const { motorFormData, setMotorFormData } = useMotorForm();
  const [fileName, setFileName] = useState<string>();

  useEffect(() => {
    const updateValueOfFileInputToRemoveErrorMsg = () => {
      // if (!motorFormData.file) {
      props?.setValues("file", motorFormData.file);
      setFileName(motorFormData.file);
    };
    // };
    updateValueOfFileInputToRemoveErrorMsg();
  }, [motorFormData.file, fileName]);

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[95%] bg-white rounded-md self-center p-6'>
        <FormTitle title='Motor Vehicle Insurance' />
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
                  setMotorFormData({ ...motorFormData, title: text });
                }}
                placeholder='Select Title'
                error={!field.value ? props?.errors?.title?.message : undefined}
              />
            )}
            name='title'
            defaultValue=''
          />
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                placeHolder='Surname'
                label='Surname'
                type='text'
                value={field.value}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  setMotorFormData({
                    ...motorFormData,
                    surName: event.target.value,
                  });
                }}
                error={props?.errors?.surname?.message}
              />
            )}
            name='surname'
            defaultValue=''
          />
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                placeHolder='First name'
                label='First name'
                type='text'
                value={field.value}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  setMotorFormData({
                    ...motorFormData,
                    firstName: event.target.value,
                  });
                }}
                error={props?.errors?.first_name?.message}
              />
            )}
            name='first_name'
            defaultValue=''
          />
        </div>
        <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                placeHolder='Email address'
                label='Email Address'
                type='email'
                value={field.value}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  setMotorFormData({
                    ...motorFormData,
                    email: event.target.value,
                  });
                }}
                error={props?.errors?.email_address?.message}
              />
            )}
            name='email_address'
            defaultValue=''
          />
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                placeHolder='Mobile number'
                label='Mobile Number'
                value={field.value}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  setMotorFormData({
                    ...motorFormData,
                    phoneNumber: event.target.value,
                  });
                }}
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
                placeHolder='Date of birth'
                label='Date Of Birth'
                type='date'
                value={field.value}
                onChange={(event) => {
                  const date = convertToDateTimeISO(event.target.value);
                  field.onChange(event.target.value);
                  setMotorFormData({
                    ...motorFormData,
                    birthDate: date,
                  });
                }}
                error={props?.errors?.dob?.message}
              />
            )}
            name='dob'
            defaultValue=''
          />
        </div>
        <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) => (
              <SelectOptions
                label='Select Gender'
                data={gender}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => {
                  field.onChange(text);
                  setMotorFormData({
                    ...motorFormData,
                    gender: text,
                  });
                }}
                placeholder='Select gender'
                error={
                  !field.value ? props?.errors?.gender?.message : undefined
                }
              />
            )}
            name='gender'
            defaultValue=''
          />
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                label='Occupation'
                placeHolder='occupation'
                value={field.value}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  setMotorFormData({
                    ...motorFormData,
                    occupation: event.target.value,
                  });
                }}
                error={props?.errors?.occupation?.message}
              />
            )}
            name='occupation'
            defaultValue=''
          />
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                label='Address'
                placeHolder='Address'
                value={field.value}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  setMotorFormData({
                    ...motorFormData,
                    address: event.target.value,
                  });
                }}
                error={props?.errors?.address?.message}
              />
            )}
            name='address'
            defaultValue=''
          />
        </div>
        <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
          <Controller
            control={props?.control}
            render={({ field }) => (
              <SelectOptions
                label='Select State'
                data={nigerianStates}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => {
                  field.onChange(text);
                  setMotorFormData({
                    ...motorFormData,
                    state: text,
                  });
                }}
                placeholder='Select State'
                error={!field.value ? props?.errors?.state?.message : undefined}
              />
            )}
            name='state'
            defaultValue=''
          />
          <Controller
            control={props?.control}
            render={({ field }) => (
              <TextInput
                label='Identification number'
                placeHolder='Identification Number'
                value={field.value}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  setMotorFormData({
                    ...motorFormData,
                    identification_number: event.target.value,
                  });
                }}
                error={props?.errors?.identification_number?.message}
              />
            )}
            name='identification_number'
            defaultValue=''
          />
          <Controller
            control={props?.control}
            render={({ field }) => (
              <SelectOptions
                label='Identification Type'
                data={identificationType}
                selectedOption={field.value}
                onChangeSelectedOption={(text) => {
                  field.onChange(text);
                  setMotorFormData({
                    ...motorFormData,
                    identification_type: text,
                  });
                }}
                placeholder='Select identification type'
                error={
                  !field.value
                    ? props?.errors?.identification_type?.message
                    : undefined
                }
              />
            )}
            name='identification_type'
            defaultValue=''
          />
        </div>
        <Controller
          control={props?.control}
          render={({ field }) => (
            <FileInput
              label='Upload File'
              placeHolder='Choose File'
              defaultValue={fileName && fileName}
              onChange={(event) => {
                const target = event.target as HTMLInputElement;
                if (target) {
                  const selectedFile = target.files?.[0];
                  console.log(selectedFile);
                  setMotorFormData({
                    ...motorFormData,
                    file: selectedFile,
                  });
                }
              }}
              error={!field.value && props?.errors?.file?.message}
            />
          )}
          name='file'
          defaultValue=''
        />
      </div>
    </div>
  );
};
