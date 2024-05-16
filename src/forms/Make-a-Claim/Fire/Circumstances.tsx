import React, { useEffect, useState } from "react";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import { Controller } from "react-hook-form";
import {
  convertDateTimeISOtoHTMLDate,
  convertToDateTimeISO,
  getBooleanFromYesOrNo,
} from "../../../helper/helper";
import {
  fireServiceInformed,
  fireServiceReport,
  hasAWitness,
  policeInformed,
} from "../../../assets/data/formOptionsData";
import {
  useFireClaimForm,
  useGlobalStore,
} from "../../../hooks/store/make-a-claim";

type useFormProps = {
  useFormProps: any;
};

export const FireClaimCircumstances: React.FC<useFormProps> = ({
  useFormProps,
}) => {
  const { setFireClaimFormData, fireClaimFormData } = useFireClaimForm();
  const { setGlobalData, globalData } = useGlobalStore();
  const props = useFormProps;
  console.log(props);

  useEffect(() => {
    if (globalData.doYouHaveAWitness === true) {
      props?.setValues("nameOfWitness", fireClaimFormData.nameOfWitness);
      props?.setValues(
        "witnessContactInfo",
        fireClaimFormData.witnessContactInfo
      );
      return;
    } else {
      props?.setValues("nameOfWitness", "NULL");
      props?.setValues("witnessContactInfo", "NULL");
    }
  }, [globalData.doYouHaveAWitness]);

  useEffect(() => {
    if (globalData.hasThePoliceBeenInformed === true) {
      props?.setValues(
        "policeStationAddress",
        fireClaimFormData.policeStationAddress
      );
      props?.setValues(
        "whenWasThePoliceInformed",
        convertDateTimeISOtoHTMLDate(fireClaimFormData.whenWasThePoliceInformed)
      );
      return;
    } else {
      props?.setValues("policeStationAddress", "NULL");
      props?.setValues("whenWasThePoliceInformed", "NULL");
    }
  }, [globalData.hasThePoliceBeenInformed]);

  useEffect(() => {
    if (fireClaimFormData.claimType === "Fire/Explosion") {
      props?.setValues(
        "hasTheFireServiceBeenInformed",
        fireClaimFormData.hasTheFireServiceBeenInformed
      );
    } else {
      props?.setValues("hasTheFireServiceBeenInformed", "NULL");
    }
  }, [fireClaimFormData.claimType]);

  useEffect(() => {
    if (globalData.hasTheFireServiceBeenInformed === true) {
      props?.setValues(
        "fireServiceStationAddress",
        fireClaimFormData.fireServiceStationAddress
      );
      props?.setValues(
        "doYouHaveAFireServiceReport",
        fireClaimFormData.doYouHaveAFireServiceReport
      );
    } else {
      props?.setValues("fireServiceStationAddress", "NULL");
      props?.setValues("doYouHaveAFireServiceReport", "NULL");
    }
  }, [globalData.hasTheFireServiceBeenInformed]);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Fire Claim Circumstances' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='description of incident'
                  label='Description of Incident/Loss'
                  value={field.value}
                  textArea
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setFireClaimFormData({
                      ...fireClaimFormData,
                      descriptionOfIncident: event.target.value,
                    });
                  }}
                  error={props?.errors?.descriptionOfIncident?.message}
                />
              )}
              name='descriptionOfIncident'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='enter lists here'
                  label='List of Stolen Items'
                  value={field.value}
                  textArea
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setFireClaimFormData({
                      ...fireClaimFormData,
                      listOfStolenItems: event.target.value,
                    });
                  }}
                  error={props?.errors?.listOfStolenItems?.message}
                />
              )}
              name='listOfStolenItems'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Do you have a Witness?'
                  data={hasAWitness}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    const booleanValue = getBooleanFromYesOrNo(text);
                    setFireClaimFormData({
                      ...fireClaimFormData,
                      doYouHaveAWitness: text,
                    });
                    setGlobalData({
                      ...globalData,
                      doYouHaveAWitness: booleanValue,
                    });
                  }}
                  placeholder='Select option'
                  error={
                    !field.value
                      ? props?.errors?.doYouHaveAWitness?.message
                      : undefined
                  }
                />
              )}
              name='doYouHaveAWitness'
              defaultValue=''
            />
            {globalData.doYouHaveAWitness === true ? (
              <>
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <TextInput
                      placeHolder='john doe'
                      label='Name of witness'
                      value={field.value}
                      onChange={(event) => {
                        field.onChange(event.target.value);
                        setFireClaimFormData({
                          ...fireClaimFormData,
                          nameOfWitness: event.target.value,
                        });
                      }}
                      error={props?.errors?.nameOfWitness?.message}
                    />
                  )}
                  name='nameOfWitness'
                  defaultValue=''
                />
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <TextInput
                      placeHolder='witness contact phone number & email'
                      label='Witness contact info'
                      value={field.value}
                      onChange={(event) => {
                        field.onChange(event.target.value);
                        setFireClaimFormData({
                          ...fireClaimFormData,
                          witnessContactInfo: event.target.value,
                        });
                      }}
                      error={props?.errors?.witnessContactInfo?.message}
                    />
                  )}
                  name='witnessContactInfo'
                  defaultValue=''
                />
              </>
            ) : null}
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            {fireClaimFormData.claimType === "Fire/Explosion" ? (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <SelectOptions
                    label='Has the fire service been informed?'
                    data={fireServiceInformed}
                    selectedOption={field.value}
                    onChangeSelectedOption={(text) => {
                      const booleanValue = getBooleanFromYesOrNo(text);
                      setGlobalData({
                        ...globalData,
                        hasTheFireServiceBeenInformed: booleanValue,
                      });
                      field.onChange(text);
                      setFireClaimFormData({
                        ...fireClaimFormData,
                        hasTheFireServiceBeenInformed: text,
                      });
                    }}
                    placeholder='Select option'
                    error={
                      !field.value
                        ? props?.errors?.hasTheFireServiceBeenInformed?.message
                        : undefined
                    }
                  />
                )}
                name='hasTheFireServiceBeenInformed'
                defaultValue=''
              />
            ) : null}
            {globalData.hasTheFireServiceBeenInformed === true ? (
              <>
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <TextInput
                      placeHolder='Lagos, Nigeria'
                      label='Fire Service Station Address'
                      value={field.value}
                      onChange={(event) => {
                        field.onChange(event.target.value);
                        setFireClaimFormData({
                          ...fireClaimFormData,
                          fireServiceStationAddress: event.target.value,
                        });
                      }}
                      error={props?.errors?.fireServiceStationAddress?.message}
                    />
                  )}
                  name='fireServiceStationAddress'
                  defaultValue=''
                />
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <SelectOptions
                      label='Do you have a fire service report?'
                      data={fireServiceReport}
                      selectedOption={field.value}
                      onChangeSelectedOption={(text) => {
                        field.onChange(text);
                        setFireClaimFormData({
                          ...fireClaimFormData,
                          doYouHaveAFireServiceReport: text,
                        });
                      }}
                      placeholder='Select option'
                      error={
                        !field.value
                          ? props?.errors?.doYouHaveAFireServiceReport?.message
                          : undefined
                      }
                    />
                  )}
                  name='doYouHaveAFireServiceReport'
                  defaultValue=''
                />
              </>
            ) : null}
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Has the police been informed?'
                  data={policeInformed}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    const booleanValue = getBooleanFromYesOrNo(text);
                    setGlobalData({
                      ...globalData,
                      hasThePoliceBeenInformed: booleanValue,
                    });
                    field.onChange(text);
                    setFireClaimFormData({
                      ...fireClaimFormData,
                      hasThePoliceBeenInformed: text,
                    });
                  }}
                  placeholder='Select option'
                  error={
                    !field.value
                      ? props?.errors?.hasThePoliceBeenInformed?.message
                      : undefined
                  }
                />
              )}
              name='hasThePoliceBeenInformed'
              defaultValue=''
            />
            {globalData.hasThePoliceBeenInformed === true ? (
              <>
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <TextInput
                      placeHolder='Lagos, Nigeria'
                      label='Police Station address'
                      value={field.value}
                      onChange={(event) => {
                        field.onChange(event.target.value);
                        setFireClaimFormData({
                          ...fireClaimFormData,
                          policeStationAddress: event.target.value,
                        });
                      }}
                      error={props?.errors?.policeStationAddress?.message}
                    />
                  )}
                  name='policeStationAddress'
                  defaultValue=''
                />
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <TextInput
                      placeHolder=''
                      label='When was police informed?'
                      type='date'
                      value={field.value}
                      onChange={(event) => {
                        const date = convertToDateTimeISO(event.target.value);
                        field.onChange(event.target.value);
                        setFireClaimFormData({
                          ...fireClaimFormData,
                          whenWasThePoliceInformed: date,
                        });
                      }}
                      error={props?.errors?.whenWasThePoliceInformed?.message}
                    />
                  )}
                  name='whenWasThePoliceInformed'
                  defaultValue=''
                />
              </>
            ) : null}
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='0'
                  label='Claims amount'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setFireClaimFormData({
                      ...fireClaimFormData,
                      claimsAmount: event.target.value,
                    });
                  }}
                  error={props?.errors?.claimsAmount?.message}
                />
              )}
              name='claimsAmount'
              defaultValue=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
