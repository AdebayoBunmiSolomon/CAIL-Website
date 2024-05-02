import React, { useEffect, useState } from "react";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import { Controller } from "react-hook-form";
import { convertToDateTimeISO } from "../../../helper/helper";
import { useSafetyPlusForm } from "../../../hooks/store/safety-plus/useSafetyPlusForm";
import {
  gender,
  identificationType,
  paymentOptions,
  policyPeriod,
} from "../../../assets/data/formOptionsData";
import { FileInput } from "../../../components/shared/FileInput";

type formProps = {
  useFormProps: any;
};

export const SafetyPlusForm2: React.FC<formProps> = ({ useFormProps }) => {
  const props = useFormProps;
  const { safetyPlusFormData, setSafetyPlusFormData } = useSafetyPlusForm();
  const [premium, setPremium] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  useEffect(() => {
    if (safetyPlusFormData.number_of_units === "1") {
      props?.setValues("premium", "1000");
      setPremium("1,000");
      setSafetyPlusFormData({ ...safetyPlusFormData, premium: "1000" });
    } else if (safetyPlusFormData.number_of_units === "2") {
      props?.setValues("premium", "2000");
      setPremium("2,000");
      setSafetyPlusFormData({ ...safetyPlusFormData, premium: "2000" });
    }
  }, [safetyPlusFormData.number_of_units]);

  useEffect(() => {
    const updateValueOfFileInputToRemoveErrorMsg = () => {
      // if (!motorFormData.file) {
      props?.setValues("means_of_id", safetyPlusFormData.means_of_id2);
      setFileName(safetyPlusFormData.means_of_id2);
    };
    // };
    updateValueOfFileInputToRemoveErrorMsg();
  }, [safetyPlusFormData.means_of_id2, fileName]);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Safety Plus Insurance' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Start date'
                  placeHolder='insurance start date'
                  type='date'
                  min={new Date().toISOString().split("T")[0]}
                  value={field.value}
                  onChange={(event) => {
                    const startDate = convertToDateTimeISO(event.target.value);
                    field.onChange(event.target.value);
                    setSafetyPlusFormData({
                      ...safetyPlusFormData,
                      insured_date: startDate,
                    });
                  }}
                  error={props?.errors?.insured_date?.message}
                />
              )}
              name='insured_date'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Policy Period'
                  data={paymentOptions}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setSafetyPlusFormData({
                      ...safetyPlusFormData,
                      policy_period: text,
                    });
                  }}
                  placeholder='Select policy period'
                  error={props?.errors?.policy_period?.message}
                />
              )}
              name='policy_period'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Number of Units'
                  data={policyPeriod}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    if (text === "1") {
                      setSafetyPlusFormData({
                        ...safetyPlusFormData,
                        number_of_units: text,
                      });
                    }
                    if (text === "2") {
                      setSafetyPlusFormData({
                        ...safetyPlusFormData,
                        number_of_units: text,
                      });
                    }
                  }}
                  placeholder='Select no of units'
                  error={props?.errors?.number_of_units?.message}
                />
              )}
              name='number_of_units'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Premium'
                  placeHolder='0'
                  value={premium}
                  disabled={true}
                  error={!premium ? props?.errors?.premium?.message : undefined}
                />
              )}
              name='premium'
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
                    setSafetyPlusFormData({
                      ...safetyPlusFormData,
                      id_type2: text,
                    });
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
                  label='Identification number'
                  placeHolder='Identification Number'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setSafetyPlusFormData({
                      ...safetyPlusFormData,
                      id_number2: event.target.value,
                    });
                  }}
                  error={props?.errors?.id_number?.message}
                />
              )}
              name='id_number'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Company name'
                  placeHolder='enter company name'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setSafetyPlusFormData({
                      ...safetyPlusFormData,
                      company_name: event.target.value,
                    });
                  }}
                  error={props?.errors?.company_name?.message}
                />
              )}
              name='company_name'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Company address'
                  placeHolder='enter company address'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setSafetyPlusFormData({
                      ...safetyPlusFormData,
                      company_address: event.target.value,
                    });
                  }}
                  error={props?.errors?.company_address?.message}
                />
              )}
              name='company_address'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Beneficiary name'
                  placeHolder='enter beneficiary name'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setSafetyPlusFormData({
                      ...safetyPlusFormData,
                      beneficiary_name: event.target.value,
                    });
                  }}
                  error={props?.errors?.beneficiary_name?.message}
                />
              )}
              name='beneficiary_name'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Beneficiary DOB'
                  placeHolder='enter beneficiary dob'
                  type='date'
                  value={field.value}
                  onChange={(event) => {
                    const date = convertToDateTimeISO(event.target.value);
                    field.onChange(event.target.value);
                    setSafetyPlusFormData({
                      ...safetyPlusFormData,
                      beneficiary_dob: date,
                    });
                  }}
                  error={props?.errors?.beneficiary_dob?.message}
                />
              )}
              name='beneficiary_dob'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Beneficiary Gender'
                  data={gender}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setSafetyPlusFormData({
                      ...safetyPlusFormData,
                      beneficiary_gender: text,
                    });
                  }}
                  placeholder='Select gender'
                  error={
                    !field.value
                      ? props?.errors?.beneficiary_gender?.message
                      : undefined
                  }
                />
              )}
              name='beneficiary_gender'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  label='Beneficiary relationship'
                  placeHolder='enter beneficiary relationship'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setSafetyPlusFormData({
                      ...safetyPlusFormData,
                      beneficiary_relationship: event.target.value,
                    });
                  }}
                  error={props?.errors?.beneficiary_relationship?.message}
                />
              )}
              name='beneficiary_relationship'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
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
                      setSafetyPlusFormData({
                        ...safetyPlusFormData,
                        means_of_id2: selectedFile,
                      });
                    }
                  }}
                  error={!field.value && props?.errors?.means_of_id?.message}
                />
              )}
              name='means_of_id'
              defaultValue=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
