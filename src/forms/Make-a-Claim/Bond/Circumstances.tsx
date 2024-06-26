import React, { useEffect } from "react";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import { Controller } from "react-hook-form";
import {
  convertToDateTimeISO,
  getBooleanFromYesOrNo,
} from "../../../helper/helper";
import {
  hasAWitness,
  policeInformed,
} from "../../../assets/data/formOptionsData";
import {
  useBondClaimForm,
  useGlobalStore,
} from "../../../hooks/store/make-a-claim";

type useFormProps = {
  useFormProps: any;
};

export const BondClaimCircumstances: React.FC<useFormProps> = ({
  useFormProps,
}) => {
  const { bondClaimFormData, setBondClaimFormData } = useBondClaimForm();
  const { setGlobalData, globalData } = useGlobalStore();
  const props = useFormProps;

  useEffect(() => {
    if (globalData.doYouHaveAWitness === true) {
      props?.setValues("nameOfWitness", bondClaimFormData.nameOfWitness);
      props?.setValues(
        "witnessContactInfo",
        bondClaimFormData.witnessContactInfo
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
        bondClaimFormData.policeStationAddress
      );
      props?.setValues("whenWasThePoliceInformed", "");
      return;
    } else {
      props?.setValues("policeStationAddress", "NULL");
      props?.setValues("whenWasThePoliceInformed", "NULL");
    }
  }, [globalData.hasThePoliceBeenInformed]);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Accident Claim Circumstances' />
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
                    setBondClaimFormData({
                      ...bondClaimFormData,
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
                    setBondClaimFormData({
                      ...bondClaimFormData,
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
                    const booleanValue = getBooleanFromYesOrNo(text);
                    field.onChange(text);
                    setBondClaimFormData({
                      ...bondClaimFormData,
                      doYouHaveAWitness: text,
                    });
                    setGlobalData({
                      ...globalData,
                      doYouHaveAWitness: booleanValue,
                    });
                  }}
                  placeholder='Select witness'
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
                        setBondClaimFormData({
                          ...bondClaimFormData,
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
                        setBondClaimFormData({
                          ...bondClaimFormData,
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
            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Has the police been informed?'
                  data={policeInformed}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    const booleanValue = getBooleanFromYesOrNo(text);
                    field.onChange(text);
                    setBondClaimFormData({
                      ...bondClaimFormData,
                      hasThePoliceBeenInformed: text,
                    });
                    setGlobalData({
                      ...globalData,
                      hasThePoliceBeenInformed: booleanValue,
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
                        setBondClaimFormData({
                          ...bondClaimFormData,
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
                        setBondClaimFormData({
                          ...bondClaimFormData,
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
                    setBondClaimFormData({
                      ...bondClaimFormData,
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
