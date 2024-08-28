import React, { useEffect } from "react";
import { FormTitle } from "../../../components";
import { Controller } from "react-hook-form";
import { FileInput } from "../../../components/shared/FileInput";
import {
  useAccidentClaimForm,
  useGlobalFileStore,
} from "../../../hooks/store/make-a-claim";
import { getFileSize } from "../../../helper/helper";

type useFormProps = {
  useFormProps: any;
};

export const AccidentClaimRequiredDocuments: React.FC<useFormProps> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  const { accidentClaimFormData, setAccidentClaimFormData } =
    useAccidentClaimForm();
  const { globalFileData, setGlobalFileData } = useGlobalFileStore();
  // console.log(props);

  useEffect(() => {
    if (accidentClaimFormData.doYouHaveAWitness === "Yes") {
      props?.setValues("eyeWitnessReport", null);
    } else {
      props?.setValues("eyeWitnessReport", "NULL");
    }
  }, [accidentClaimFormData.doYouHaveAWitness]);

  useEffect(() => {
    if (accidentClaimFormData.hasThePoliceBeenInformed === "Yes") {
      props?.setValues("policeReport", null);
    } else {
      props?.setValues("policeReport", "NULL");
    }
  }, [accidentClaimFormData.doYouHaveAWitness]);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Accident Claim Required Documents' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <FileInput
                  label='Upload Purchase/Replacement Invoice - (ONLY JPG : PNG : PDF)'
                  placeHolder='Choose File'
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                      const selectedFile = target.files?.[0];
                      const isSize2Mb = getFileSize(selectedFile?.size);
                      if (selectedFile?.name) {
                        if (isSize2Mb) {
                          field.onChange(selectedFile?.name);
                          setAccidentClaimFormData({
                            ...accidentClaimFormData,
                            purchaseOrReplacementInvoice: selectedFile,
                          });
                          setGlobalFileData({
                            ...globalFileData,
                            purchaseOrReplacementInvoice: selectedFile?.name,
                          });
                        } else {
                          props?.setValues("purchaseOrReplacementInvoice", "");
                          props?.setError("purchaseOrReplacementInvoice", {
                            type: "custom",
                            message: "File size is more than 2MB.",
                          });
                        }
                      } else {
                        props?.setError("purchaseOrReplacementInvoice", {
                          type: "custom",
                          message: "This file is required",
                        });
                      }
                    }
                  }}
                  error={props?.errors?.purchaseOrReplacementInvoice?.message}
                />
              )}
              name='purchaseOrReplacementInvoice'
              defaultValue={globalFileData.purchaseOrReplacementInvoice}
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <FileInput
                  label='Upload Evidence 1 - (ONLY JPG : PNG : PDF)'
                  placeHolder='Choose File'
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                      const selectedFile = target.files?.[0];
                      const isSize2Mb = getFileSize(selectedFile?.size);
                      if (selectedFile?.name) {
                        if (isSize2Mb) {
                          field.onChange(selectedFile?.name);
                          setAccidentClaimFormData({
                            ...accidentClaimFormData,
                            evidenceUpload1: selectedFile,
                          });
                          setGlobalFileData({
                            ...globalFileData,
                            evidenceUpload1: selectedFile?.name,
                          });
                        } else {
                          props?.setValues("evidenceUpload1", "");
                          props?.setError("evidenceUpload1", {
                            type: "custom",
                            message: "File size is more than 2MB.",
                          });
                        }
                      } else {
                        props?.setError("evidenceUpload1", {
                          type: "custom",
                          message: "This file is required",
                        });
                      }
                    }
                  }}
                  error={props?.errors?.evidenceUpload1?.message}
                />
              )}
              name='evidenceUpload1'
              defaultValue={globalFileData.evidenceUpload1}
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <FileInput
                  label='Upload Evidence 2 - (ONLY JPG : PNG : PDF)'
                  placeHolder='Choose File'
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                      const selectedFile = target.files?.[0];
                      const isSize2Mb = getFileSize(selectedFile?.size);
                      if (selectedFile?.name) {
                        if (isSize2Mb) {
                          field.onChange(selectedFile?.name);
                          setAccidentClaimFormData({
                            ...accidentClaimFormData,
                            evidenceUpload2: selectedFile,
                          });
                          setGlobalFileData({
                            ...globalFileData,
                            evidenceUpload2: selectedFile?.name,
                          });
                        } else {
                          props?.setValues("evidenceUpload2", "");
                          props?.setError("evidenceUpload2", {
                            type: "custom",
                            message: "File size is more than 2MB.",
                          });
                        }
                      } else {
                        props?.setError("evidenceUpload2", {
                          type: "custom",
                          message: "This file is required",
                        });
                      }
                    }
                  }}
                  error={props?.errors?.evidenceUpload2?.message}
                />
              )}
              name='evidenceUpload2'
              defaultValue={globalFileData.evidenceUpload2}
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            {accidentClaimFormData.doYouHaveAWitness === "Yes" && (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <FileInput
                    label='Upload Witness Report - (ONLY JPG : PNG : PDF)'
                    placeHolder='Choose File'
                    onChange={(event) => {
                      const target = event.target as HTMLInputElement;
                      if (target) {
                        const selectedFile = target.files?.[0];
                        const isSize2Mb = getFileSize(selectedFile?.size);
                        if (selectedFile?.name) {
                          if (isSize2Mb) {
                            field.onChange(selectedFile?.name);
                            setAccidentClaimFormData({
                              ...accidentClaimFormData,
                              eyeWitnessReport: selectedFile,
                            });
                            setGlobalFileData({
                              ...globalFileData,
                              eyeWitnessReport: selectedFile?.name,
                            });
                          } else {
                            props?.setValues("eyeWitnessReport", "");
                            props?.setError("eyeWitnessReport", {
                              type: "custom",
                              message: "File size is more than 2MB.",
                            });
                          }
                        } else {
                          props?.setError("eyeWitnessReport", {
                            type: "custom",
                            message: "This file is required",
                          });
                        }
                      }
                    }}
                    error={props?.errors?.eyeWitnessReport?.message}
                  />
                )}
                name='eyeWitnessReport'
                defaultValue={globalFileData.eyeWitnessReport}
              />
            )}
            {accidentClaimFormData.hasThePoliceBeenInformed === "Yes" && (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <FileInput
                    label='Upload Police Report - (ONLY JPG : PNG : PDF)'
                    placeHolder='Choose File'
                    onChange={(event) => {
                      const target = event.target as HTMLInputElement;
                      if (target) {
                        const selectedFile = target.files?.[0];
                        const isSize2Mb = getFileSize(selectedFile?.size);
                        if (selectedFile?.name) {
                          if (isSize2Mb) {
                            field.onChange(selectedFile?.name);
                            setAccidentClaimFormData({
                              ...accidentClaimFormData,
                              policeReport: selectedFile,
                            });
                            setGlobalFileData({
                              ...globalFileData,
                              policeReport: selectedFile?.name,
                            });
                          } else {
                            props?.setValues("policeReport", "");
                            props?.setError("policeReport", {
                              type: "custom",
                              message: "File size is more than 2MB.",
                            });
                          }
                        } else {
                          props?.setError("policeReport", {
                            type: "custom",
                            message: "This file is required",
                          });
                        }
                      }
                    }}
                    error={props?.errors?.policeReport?.message}
                  />
                )}
                name='policeReport'
                defaultValue={globalFileData.policeReport}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
