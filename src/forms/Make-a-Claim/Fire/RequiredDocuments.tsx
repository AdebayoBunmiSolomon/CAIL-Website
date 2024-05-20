import React, { useEffect } from "react";
import { FormTitle } from "../../../components";
import { Controller } from "react-hook-form";
import { FileInput } from "../../../components/shared/FileInput";
import { getFileSize } from "../../../helper/helper";
import {
  useFireClaimForm,
  useGlobalFileStore,
} from "../../../hooks/store/make-a-claim";

type useFormProps = {
  useFormProps: any;
};

export const FireClaimRequiredDocumentsDetails: React.FC<useFormProps> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  const { fireClaimFormData, setFireClaimFormData } = useFireClaimForm();
  const { globalFileData, setGlobalFileData } = useGlobalFileStore();

  useEffect(() => {
    if (fireClaimFormData.doYouHaveAWitness === "Yes") {
      props?.setValues("eyeWitnessReport", null);
    } else {
      props?.setValues("eyeWitnessReport", "NULL");
    }
  }, [fireClaimFormData.doYouHaveAWitness]);

  useEffect(() => {
    if (fireClaimFormData.hasThePoliceBeenInformed === "Yes") {
      props?.setValues("policeReport", null);
    } else {
      props?.setValues("policeReport", "NULL");
    }
  }, [fireClaimFormData.hasThePoliceBeenInformed]);

  useEffect(() => {
    if (
      fireClaimFormData.claimType === "Fire/Explosion" &&
      fireClaimFormData.doYouHaveAFireServiceReport === "Yes"
    ) {
      props?.setValues("fireServiceReport", null);
    } else {
      props?.setValues("fireServiceReport", "NULL");
    }
  }, [
    fireClaimFormData.claimType,
    fireClaimFormData.doYouHaveAFireServiceReport,
  ]);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Fire Claim Required Documents' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <FileInput
                  label='Upload Purchase / Replacement Invoice- (ONLY JPG : PNG : PDF)'
                  placeHolder='Choose File'
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                      const selectedFile = target.files?.[0];
                      const isSize2Mb = getFileSize(selectedFile?.size);
                      if (selectedFile?.name) {
                        if (isSize2Mb) {
                          field.onChange(selectedFile?.name);
                          setFireClaimFormData({
                            ...fireClaimFormData,
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
                  label='Upload Damage Report 1 - (ONLY JPG : PNG : PDF)'
                  placeHolder='Choose File'
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                      const selectedFile = target.files?.[0];
                      const isSize2Mb = getFileSize(selectedFile?.size);
                      if (selectedFile?.name) {
                        if (isSize2Mb) {
                          field.onChange(selectedFile?.name);
                          setFireClaimFormData({
                            ...fireClaimFormData,
                            uploadDamagePic1: selectedFile,
                          });
                          setGlobalFileData({
                            ...globalFileData,
                            uploadDamagePic1: selectedFile?.name,
                          });
                        } else {
                          props?.setValues("uploadDamagePic1", "");
                          props?.setError("uploadDamagePic1", {
                            type: "custom",
                            message: "File size is more than 2MB.",
                          });
                        }
                      } else {
                        props?.setError("uploadDamagePic1", {
                          type: "custom",
                          message: "This file is required",
                        });
                      }
                    }
                  }}
                  error={props?.errors?.uploadDamagePic1?.message}
                />
              )}
              name='uploadDamagePic1'
              defaultValue={globalFileData.uploadDamagePic1}
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <FileInput
                  label='Upload Damage Report 2 - (ONLY JPG : PNG : PDF)'
                  placeHolder='Choose File'
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                      const selectedFile = target.files?.[0];
                      const isSize2Mb = getFileSize(selectedFile?.size);
                      if (selectedFile?.name) {
                        if (isSize2Mb) {
                          field.onChange(selectedFile?.name);
                          setFireClaimFormData({
                            ...fireClaimFormData,
                            uploadDamagePic2: selectedFile,
                          });
                          setGlobalFileData({
                            ...globalFileData,
                            uploadDamagePic2: selectedFile?.name,
                          });
                        } else {
                          props?.setValues("uploadDamagePic2", "");
                          props?.setError("uploadDamagePic2", {
                            type: "custom",
                            message: "File size is more than 2MB.",
                          });
                        }
                      } else {
                        props?.setError("uploadDamagePic2", {
                          type: "custom",
                          message: "This file is required",
                        });
                      }
                    }
                  }}
                  error={props?.errors?.uploadDamagePic2?.message}
                />
              )}
              name='uploadDamagePic2'
              defaultValue={globalFileData.uploadDamagePic2}
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            <Controller
              control={props?.control}
              render={({ field }) => (
                <FileInput
                  label='Upload Damage Report 3 - (ONLY JPG : PNG : PDF)'
                  placeHolder='Choose File'
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                      const selectedFile = target.files?.[0];
                      const isSize2Mb = getFileSize(selectedFile?.size);
                      if (selectedFile?.name) {
                        if (isSize2Mb) {
                          field.onChange(selectedFile?.name);
                          setFireClaimFormData({
                            ...fireClaimFormData,
                            uploadDamagePic3: selectedFile,
                          });
                          setGlobalFileData({
                            ...globalFileData,
                            uploadDamagePic3: selectedFile?.name,
                          });
                        } else {
                          props?.setValues("uploadDamagePic3", "");
                          props?.setError("uploadDamagePic3", {
                            type: "custom",
                            message: "File size is more than 2MB.",
                          });
                        }
                      } else {
                        props?.setError("uploadDamagePic3", {
                          type: "custom",
                          message: "This file is required",
                        });
                      }
                    }
                  }}
                  error={props?.errors?.uploadDamagePic3?.message}
                />
              )}
              name='uploadDamagePic3'
              defaultValue={globalFileData.uploadDamagePic3}
            />
            <Controller
              control={props?.control}
              render={({ field }) => (
                <FileInput
                  label='Upload Damage Report 4 - (ONLY JPG : PNG : PDF)'
                  placeHolder='Choose File'
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                      const selectedFile = target.files?.[0];
                      const isSize2Mb = getFileSize(selectedFile?.size);
                      if (selectedFile?.name) {
                        if (isSize2Mb) {
                          field.onChange(selectedFile?.name);
                          setFireClaimFormData({
                            ...fireClaimFormData,
                            uploadDamagePic4: selectedFile,
                          });
                          setGlobalFileData({
                            ...globalFileData,
                            uploadDamagePic4: selectedFile?.name,
                          });
                        } else {
                          props?.setValues("uploadDamagePic4", "");
                          props?.setError("uploadDamagePic4", {
                            type: "custom",
                            message: "File size is more than 2MB.",
                          });
                        }
                      } else {
                        props?.setError("uploadDamagePic4", {
                          type: "custom",
                          message: "This file is required",
                        });
                      }
                    }
                  }}
                  error={props?.errors?.uploadDamagePic4?.message}
                />
              )}
              name='uploadDamagePic4'
              defaultValue={globalFileData.uploadDamagePic4}
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            {fireClaimFormData.doYouHaveAWitness === "Yes" && (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <FileInput
                    label='Upload Witness report - (ONLY JPG : PNG : PDF)'
                    placeHolder='Choose File'
                    onChange={(event) => {
                      const target = event.target as HTMLInputElement;
                      if (target) {
                        const selectedFile = target.files?.[0];
                        const isSize2Mb = getFileSize(selectedFile?.size);
                        if (selectedFile?.name) {
                          if (isSize2Mb) {
                            field.onChange(selectedFile?.name);
                            setFireClaimFormData({
                              ...fireClaimFormData,
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
            {fireClaimFormData.hasThePoliceBeenInformed === "Yes" && (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <FileInput
                    label='Upload Police report - (ONLY JPG : PNG : PDF)'
                    placeHolder='Choose File'
                    onChange={(event) => {
                      const target = event.target as HTMLInputElement;
                      if (target) {
                        const selectedFile = target.files?.[0];
                        const isSize2Mb = getFileSize(selectedFile?.size);
                        if (selectedFile?.name) {
                          if (isSize2Mb) {
                            field.onChange(selectedFile?.name);
                            setFireClaimFormData({
                              ...fireClaimFormData,
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
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            {fireClaimFormData.claimType === "Fire/Explosion" &&
              fireClaimFormData.doYouHaveAFireServiceReport === "Yes" && (
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='Upload Fire Service report - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setFireClaimFormData({
                                ...fireClaimFormData,
                                fireServiceReport: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                fireServiceReport: selectedFile?.name,
                              });
                            } else {
                              props?.setValues("fireServiceReport", "");
                              props?.setError("fireServiceReport", {
                                type: "custom",
                                message: "File size is more than 2MB.",
                              });
                            }
                          } else {
                            props?.setError("fireServiceReport", {
                              type: "custom",
                              message: "This file is required",
                            });
                          }
                        }
                      }}
                      error={props?.errors?.fireServiceReport?.message}
                    />
                  )}
                  name='fireServiceReport'
                  defaultValue={globalFileData.fireServiceReport}
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
};
