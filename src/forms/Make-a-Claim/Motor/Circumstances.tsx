import React, { useEffect } from "react";
import { FormTitle, SelectOptions, TextInput } from "../../../components";
import { Controller } from "react-hook-form";
import {
  hasAWitness,
  policeInformed,
  thirdPartyInvolved,
} from "../../../assets/data/formOptionsData";
import {
  convertDateTimeISOtoHTMLDate,
  convertToDateTimeISO,
  getBooleanFromYesOrNo,
} from "../../../helper/helper";
import {
  useGlobalStore,
  useMotorClaimForm,
} from "../../../hooks/store/make-a-claim";

type useFormProps = {
  useFormProps: any;
};

export const MotorClaimCircumstances: React.FC<useFormProps> = ({
  useFormProps,
}) => {
  const props: any = useFormProps;
  const { setGlobalData, globalData } = useGlobalStore();
  const { motorClaimFormData, setMotorClaimFormData } = useMotorClaimForm();
  // console.log(props);

  useEffect(() => {
    if (globalData.doYouHaveAWitness === false) {
      props?.setValues("nameOfWitness", "NULL");
      props?.setValues("witnessContactInfo", "NULL");
    } else {
      props?.setValues("nameOfWitness", motorClaimFormData.nameOfWitness);
      props?.setValues(
        "witnessContactInfo",
        motorClaimFormData.witnessContactInfo
      );
    }
  }, [globalData.doYouHaveAWitness]);

  useEffect(() => {
    if (globalData.hasThePoliceBeenInformed === false) {
      props?.setValues("policeStationAddress", "NULL");
      props?.setValues("whenWasThePoliceInformed", "NULL");
    } else {
      props?.setValues(
        "policeStationAddress",
        motorClaimFormData.policeStationAddress
      );
      props?.setValues("whenWasThePoliceInformed", "");
    }
  }, [globalData.hasThePoliceBeenInformed]);

  useEffect(() => {
    if (
      globalData.thirdPartyInvolved === "Yes (Insured Liable)" ||
      globalData.thirdPartyInvolved === "Yes (Third Party Liable)"
    ) {
      props?.setValues(
        "thirdPartyInformation",
        motorClaimFormData.thirdPartyInformation
      );
    } else {
      props?.setValues("thirdPartyInformation", "NULL");
    }
  }, [globalData.thirdPartyInvolved]);

  useEffect(() => {
    if (
      motorClaimFormData.claimType === "Accident" &&
      motorClaimFormData.damageType === "Total Loss"
    ) {
      props?.setValues("claimsAmount", motorClaimFormData.claimsAmount);
    } else if (
      motorClaimFormData.claimType === "Fire" &&
      motorClaimFormData.damageType === "Total Loss"
    ) {
      props.setValues("claimsAmount", motorClaimFormData.claimsAmount);
    } else if (motorClaimFormData.claimType === "Theft") {
      props?.setValues("claimsAmount", motorClaimFormData.claimsAmount);
    } else {
      props.setValues("claimsAmount", "0");
    }
  }, [motorClaimFormData.claimType, motorClaimFormData.damageType]);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Motor Claim Circumstances' />
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
                    setMotorClaimFormData({
                      ...motorClaimFormData,
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
                <SelectOptions
                  label='Do you have a witness?'
                  data={hasAWitness}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    const booleanValue = getBooleanFromYesOrNo(text);
                    field.onChange(text);
                    setMotorClaimFormData({
                      ...motorClaimFormData,
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
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
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
                        setMotorClaimFormData({
                          ...motorClaimFormData,
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
                        setMotorClaimFormData({
                          ...motorClaimFormData,
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
                    setMotorClaimFormData({
                      ...motorClaimFormData,
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
          </div>

          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
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
                        setMotorClaimFormData({
                          ...motorClaimFormData,
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
                        setMotorClaimFormData({
                          ...motorClaimFormData,
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
                  placeHolder='Lagos, Nigeria'
                  label='Where can the vehicle be inspected'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMotorClaimFormData({
                      ...motorClaimFormData,
                      whereCanTheVehicleBeInspected: event.target.value,
                    });
                  }}
                  error={props?.errors?.whereCanTheVehicleBeInspected?.message}
                />
              )}
              name='whereCanTheVehicleBeInspected'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <SelectOptions
                  label='Third Party Involved?'
                  data={thirdPartyInvolved}
                  selectedOption={field.value}
                  onChangeSelectedOption={(text) => {
                    field.onChange(text);
                    setMotorClaimFormData({
                      ...motorClaimFormData,
                      isThirdPartyInvolved: text,
                    });
                    setGlobalData({
                      ...globalData,
                      thirdPartyInvolved: text,
                    });
                  }}
                  placeholder='Select options'
                  error={
                    !field.value
                      ? props?.errors?.isThirdPartyInvolved?.message
                      : undefined
                  }
                />
              )}
              name='isThirdPartyInvolved'
              defaultValue=''
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <TextInput
                  placeHolder='0'
                  label='Estimate of Repairs'
                  value={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    setMotorClaimFormData({
                      ...motorClaimFormData,
                      estimateOfRepairs: event.target.value,
                    });
                  }}
                  error={props?.errors?.estimateOfRepairs?.message}
                />
              )}
              name='estimateOfRepairs'
              defaultValue=''
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            {globalData.thirdPartyInvolved === "Yes (Insured Liable)" ||
            globalData.thirdPartyInvolved === "Yes (Third Party Liable)" ? (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <TextInput
                    placeHolder='third party information'
                    label='Third Party Information'
                    value={field.value}
                    textArea
                    onChange={(event) => {
                      field.onChange(event.target.value);
                      setMotorClaimFormData({
                        ...motorClaimFormData,
                        thirdPartyInformation: event.target.value,
                      });
                    }}
                    error={props?.errors?.thirdPartyInformation?.message}
                  />
                )}
                name='thirdPartyInformation'
                defaultValue=''
              />
            ) : null}
            {motorClaimFormData.claimType === "Accident" &&
            motorClaimFormData.damageType === "Total Loss" ? (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <TextInput
                    placeHolder='0'
                    label='Claims amount'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                      setMotorClaimFormData({
                        ...motorClaimFormData,
                        claimsAmount: event.target.value,
                      });
                    }}
                    error={props?.errors?.claimsAmount?.message}
                  />
                )}
                name='claimsAmount'
                defaultValue=''
              />
            ) : motorClaimFormData.claimType === "Fire" &&
              motorClaimFormData.damageType === "Total Loss" ? (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <TextInput
                    placeHolder='0'
                    label='Claims amount'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                      setMotorClaimFormData({
                        ...motorClaimFormData,
                        claimsAmount: event.target.value,
                      });
                    }}
                    error={props?.errors?.claimsAmount?.message}
                  />
                )}
                name='claimsAmount'
                defaultValue=''
              />
            ) : motorClaimFormData.claimType === "Theft" ? (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <TextInput
                    placeHolder='0'
                    label='Claims amount'
                    value={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                      setMotorClaimFormData({
                        ...motorClaimFormData,
                        claimsAmount: event.target.value,
                      });
                    }}
                    error={props?.errors?.claimsAmount?.message}
                  />
                )}
                name='claimsAmount'
                defaultValue=''
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
