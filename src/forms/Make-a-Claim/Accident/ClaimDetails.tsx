import React, { useEffect, useState } from "react";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import {
  useAccidentClaimForm,
  useMakeAClaimForm,
} from "../../../hooks/store/make-a-claim";
import { Controller } from "react-hook-form";
import {
  accidentClaimType,
  premiseOccupied,
} from "../../../assets/data/formOptionsData";
import {
  convertToDateTimeISO,
  getDateTimeLocalMaxVal,
} from "../../../helper/helper";

type useFormProps = {
  useFormProps: any;
};

export const AccidentClaimDetails: React.FC<useFormProps> = ({
  useFormProps,
}) => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { accidentClaimFormData, setAccidentClaimFormData } =
    useAccidentClaimForm();
  const [wasPremiseOccupied, setWasPremiseOccupied] = useState<string>("");
  const props = useFormProps;

  useEffect(() => {
    if (wasPremiseOccupied === "Yes") {
      props?.setValues("dateLastOccupied", "");
    } else {
      props?.setValues("dateLastOccupied", "NULL");
    }
  }, [wasPremiseOccupied]);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Accident Claim Details' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <TextInput
              placeHolder='john doe'
              label='Policy-holder Name'
              type='text'
              value={makeAClaimFormData.officeName}
              disabled={true}
            />
            <TextInput
              placeHolder='000000000000'
              label='Policy number'
              type='text'
              value={makeAClaimFormData.policyId}
              disabled={true}
            />
            <TextInput
              placeHolder='private car insurance'
              label='Policy type'
              type='text'
              value={makeAClaimFormData.subRisk}
              disabled={true}
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Select claim type'
                  data={accidentClaimType}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setAccidentClaimFormData({
                      ...accidentClaimFormData,
                      claimType: text,
                    });
                  }}
                  placeholder='Select claim type'
                  error={
                    !field.value ? props?.errors?.claimType?.message : undefined
                  }
                />
              )}
              name='claimType'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='johndoe@example.com'
                  label='Email address'
                  type='email'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setAccidentClaimFormData({
                      ...accidentClaimFormData,
                      email: event.target.value,
                    });
                  }}
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
                  placeHolder='080 000 0000'
                  label='Phone number'
                  type='number'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setAccidentClaimFormData({
                      ...accidentClaimFormData,
                      phoneNumber: event.target.value,
                    });
                  }}
                  error={props?.errors?.phoneNumber?.message}
                />
              )}
              name='phoneNumber'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder=''
                  label='Date & Time of Loss'
                  type='datetime-local'
                  value={field.value}
                  max={getDateTimeLocalMaxVal()}
                  onChange={(event) => {
                    const date = convertToDateTimeISO(event.target.value);
                    field.onChange(event.target.value);
                    setAccidentClaimFormData({
                      ...accidentClaimFormData,
                      dateTimeOfLoss: date,
                    });
                  }}
                  error={props?.errors?.dateTimeOfLoss?.message}
                />
              )}
              name='dateTimeOfLoss'
              defaultValue=''
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Was the premise occupied at the time?'
                  data={premiseOccupied}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setWasPremiseOccupied(text);
                    setAccidentClaimFormData({
                      ...accidentClaimFormData,
                      wasThePremiseOccupiedAtTheTime: text,
                    });
                  }}
                  placeholder='Select options'
                  error={
                    !field.value
                      ? props?.errors?.wasThePremiseOccupiedAtTheTime?.message
                      : undefined
                  }
                />
              )}
              name='wasThePremiseOccupiedAtTheTime'
              defaultValue=''
            />
            {wasPremiseOccupied === "Yes" && (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <TextInput
                    placeHolder=''
                    label='Date Last Occupied'
                    type='date'
                    value={field.value}
                    onChange={(event) => {
                      const date = convertToDateTimeISO(event.target.value);
                      field.onChange(event.target.value);
                      setAccidentClaimFormData({
                        ...accidentClaimFormData,
                        dateLastOccupied: date,
                      });
                    }}
                    error={props?.errors?.dateLastOccupied?.message}
                  />
                )}
                name='dateLastOccupied'
                defaultValue=''
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
