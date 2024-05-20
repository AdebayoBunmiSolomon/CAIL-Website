import React from "react";
import { FormTitle } from "../../../components";
import { Controller } from "react-hook-form";
import { FileInput } from "../../../components/shared/FileInput";
import { getFileSize } from "../../../helper/helper";
import {
  useGlobalFileStore,
  useMotorClaimForm,
} from "../../../hooks/store/make-a-claim";

type useFormProps = {
  useFormProps: any;
};

export const MotorClaimRequiredDocuments: React.FC<useFormProps> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  const { motorClaimFormData, setMotorClaimFormData } = useMotorClaimForm();
  const { globalFileData, setGlobalFileData } = useGlobalFileStore();
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Motor Claim Required Documents' />
          {motorClaimFormData.claimType === "Theft" && (
            <>
              <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='Purchase / Replacement Inv - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                purchaseOrReplacementInvoice: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                purchaseOrReplacementInvoice:
                                  selectedFile?.name,
                              });
                            } else {
                              props?.setValues(
                                "purchaseOrReplacementInvoice",
                                ""
                              );
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
                      error={
                        props?.errors?.purchaseOrReplacementInvoice?.message
                      }
                    />
                  )}
                  name='purchaseOrReplacementInvoice'
                  defaultValue={globalFileData.purchaseOrReplacementInvoice}
                />

                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='Scanned Vehicle Lic. - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                uploadScannedVehicleLicense: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                uploadScannedVehicleLicense: selectedFile?.name,
                              });
                            } else {
                              props?.setValues(
                                "uploadScannedVehicleLicense",
                                ""
                              );
                              props?.setError("uploadScannedVehicleLicense", {
                                type: "custom",
                                message: "File size is more than 2MB.",
                              });
                            }
                          } else {
                            props?.setError("uploadScannedVehicleLicense", {
                              type: "custom",
                              message: "This file is required",
                            });
                          }
                        }
                      }}
                      error={
                        props?.errors?.uploadScannedVehicleLicense?.message
                      }
                    />
                  )}
                  name='uploadScannedVehicleLicense'
                  defaultValue={globalFileData.uploadScannedVehicleLicense}
                />
              </div>
              <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='Insurance certificate. - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                uploadInsuranceCertificate: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                uploadInsuranceCertificate: selectedFile?.name,
                              });
                            } else {
                              props?.setValues(
                                "uploadInsuranceCertificate",
                                ""
                              );
                              props?.setError("uploadInsuranceCertificate", {
                                type: "custom",
                                message: "File size is more than 2MB.",
                              });
                            }
                          } else {
                            props?.setError("uploadInsuranceCertificate", {
                              type: "custom",
                              message: "This file is required",
                            });
                          }
                        }
                      }}
                      error={props?.errors?.uploadInsuranceCertificate?.message}
                    />
                  )}
                  name='uploadInsuranceCertificate'
                  defaultValue={globalFileData.uploadInsuranceCertificate}
                />
              </div>
            </>
          )}
          {motorClaimFormData.claimType === "Accident" &&
          motorClaimFormData.damageType === "Partial Loss" &&
          motorClaimFormData.isThirdPartyInvolved === "Yes (Insured Liable)" ? (
            <>
              <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='3rd party evidence of insurance - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                thirdPartyEvidenceOfInsuranceCover:
                                  selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                thirdPartyEvidenceOfInsuranceCover:
                                  selectedFile?.name,
                              });
                            } else {
                              props?.setValues(
                                "thirdPartyEvidenceOfInsuranceCover",
                                ""
                              );
                              props?.setError(
                                "thirdPartyEvidenceOfInsuranceCover",
                                {
                                  type: "custom",
                                  message: "File size is more than 2MB.",
                                }
                              );
                            }
                          } else {
                            props?.setError(
                              "thirdPartyEvidenceOfInsuranceCover",
                              {
                                type: "custom",
                                message: "This file is required",
                              }
                            );
                          }
                        }
                      }}
                      error={
                        props?.errors?.thirdPartyEvidenceOfInsuranceCover
                          ?.message
                      }
                    />
                  )}
                  name='thirdPartyEvidenceOfInsuranceCover'
                  defaultValue={
                    globalFileData.thirdPartyEvidenceOfInsuranceCover
                  }
                />
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='3rd party repairs est. - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                thirdPartyRepairEstimate: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                thirdPartyRepairEstimate: selectedFile?.name,
                              });
                            } else {
                              props?.setValues("thirdPartyRepairEstimate", "");
                              props?.setError("thirdPartyRepairEstimate", {
                                type: "custom",
                                message: "File size is more than 2MB.",
                              });
                            }
                          } else {
                            props?.setError("thirdPartyRepairEstimate", {
                              type: "custom",
                              message: "This file is required",
                            });
                          }
                        }
                      }}
                      error={props?.errors?.thirdPartyRepairEstimate?.message}
                    />
                  )}
                  name='thirdPartyRepairEstimate'
                  defaultValue={globalFileData.thirdPartyRepairEstimate}
                />
              </div>
              <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='3rd party damage evidence 1 - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                thirdPartyDamageEvidence1: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                thirdPartyDamageEvidence1: selectedFile?.name,
                              });
                            } else {
                              props?.setValues("thirdPartyDamageEvidence1", "");
                              props?.setError("thirdPartyDamageEvidence1", {
                                type: "custom",
                                message: "File size is more than 2MB.",
                              });
                            }
                          } else {
                            props?.setError("thirdPartyDamageEvidence1", {
                              type: "custom",
                              message: "This file is required",
                            });
                          }
                        }
                      }}
                      error={props?.errors?.thirdPartyDamageEvidence1?.message}
                    />
                  )}
                  name='thirdPartyDamageEvidence1'
                  defaultValue={globalFileData.thirdPartyDamageEvidence1}
                />
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='3rd party damage evidence 2. - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                thirdPartyDamageEvidence2: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                thirdPartyDamageEvidence2: selectedFile?.name,
                              });
                            } else {
                              props?.setValues("thirdPartyDamageEvidence2", "");
                              props?.setError("thirdPartyDamageEvidence2", {
                                type: "custom",
                                message: "File size is more than 2MB.",
                              });
                            }
                          } else {
                            props?.setError("thirdPartyDamageEvidence2", {
                              type: "custom",
                              message: "This file is required",
                            });
                          }
                        }
                      }}
                      error={props?.errors?.thirdPartyDamageEvidence2?.message}
                    />
                  )}
                  name='thirdPartyDamageEvidence2'
                  defaultValue={globalFileData.thirdPartyDamageEvidence2}
                />
              </div>
              <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='Repair estimate inv. - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                repairEstimateInvoice: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                repairEstimateInvoice: selectedFile?.name,
                              });
                            } else {
                              props?.setValues("repairEstimateInvoice", "");
                              props?.setError("repairEstimateInvoice", {
                                type: "custom",
                                message: "File size is more than 2MB.",
                              });
                            }
                          } else {
                            props?.setError("repairEstimateInvoice", {
                              type: "custom",
                              message: "This file is required",
                            });
                          }
                        }
                      }}
                      error={props?.errors?.repairEstimateInvoice?.message}
                    />
                  )}
                  name='repairEstimateInvoice'
                  defaultValue={globalFileData.repairEstimateInvoice}
                />
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='Vehicle front view. - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                vehicleFrontView: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                vehicleFrontView: selectedFile?.name,
                              });
                            } else {
                              props?.setValues("vehicleFrontView", "");
                              props?.setError("vehicleFrontView", {
                                type: "custom",
                                message: "File size is more than 2MB.",
                              });
                            }
                          } else {
                            props?.setError("vehicleFrontView", {
                              type: "custom",
                              message: "This file is required",
                            });
                          }
                        }
                      }}
                      error={props?.errors?.vehicleFrontView?.message}
                    />
                  )}
                  name='vehicleFrontView'
                  defaultValue={globalFileData.vehicleFrontView}
                />
              </div>
              <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='Vehicle rear view - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                vehicleRearView: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                vehicleRearView: selectedFile?.name,
                              });
                            } else {
                              props?.setValues("vehicleRearView", "");
                              props?.setError("vehicleRearView", {
                                type: "custom",
                                message: "File size is more than 2MB.",
                              });
                            }
                          } else {
                            props?.setError("vehicleRearView", {
                              type: "custom",
                              message: "This file is required",
                            });
                          }
                        }
                      }}
                      error={props?.errors?.vehicleRearView?.message}
                    />
                  )}
                  name='vehicleRearView'
                  defaultValue={globalFileData.vehicleRearView}
                />
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='Vehicle Left view. - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                vehicleLeftView: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                vehicleLeftView: selectedFile?.name,
                              });
                            } else {
                              props?.setValues("vehicleLeftView", "");
                              props?.setError("vehicleLeftView", {
                                type: "custom",
                                message: "File size is more than 2MB.",
                              });
                            }
                          } else {
                            props?.setError("vehicleLeftView", {
                              type: "custom",
                              message: "This file is required",
                            });
                          }
                        }
                      }}
                      error={props?.errors?.vehicleLeftView?.message}
                    />
                  )}
                  name='vehicleLeftView'
                  defaultValue={globalFileData.vehicleLeftView}
                />
              </div>
              <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
                <Controller
                  control={props?.control}
                  render={({ field }) => (
                    <FileInput
                      label='Vehicle right view - (ONLY JPG : PNG : PDF)'
                      placeHolder='Choose File'
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                          const selectedFile = target.files?.[0];
                          const isSize2Mb = getFileSize(selectedFile?.size);
                          if (selectedFile?.name) {
                            if (isSize2Mb) {
                              field.onChange(selectedFile?.name);
                              setMotorClaimFormData({
                                ...motorClaimFormData,
                                vehicleRightView: selectedFile,
                              });
                              setGlobalFileData({
                                ...globalFileData,
                                vehicleRightView: selectedFile?.name,
                              });
                            } else {
                              props?.setValues("vehicleRightView", "");
                              props?.setError("vehicleRightView", {
                                type: "custom",
                                message: "File size is more than 2MB.",
                              });
                            }
                          } else {
                            props?.setError("vehicleRightView", {
                              type: "custom",
                              message: "This file is required",
                            });
                          }
                        }
                      }}
                      error={props?.errors?.vehicleRightView?.message}
                    />
                  )}
                  name='vehicleRightView'
                  defaultValue={globalFileData.vehicleRightView}
                />
              </div>
            </>
          ) : null}

          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            {motorClaimFormData.doYouHaveAWitness === "Yes" && (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <FileInput
                    label='Eye witness report - (ONLY JPG : PNG : PDF)'
                    placeHolder='Choose File'
                    onChange={(event) => {
                      const target = event.target as HTMLInputElement;
                      if (target) {
                        const selectedFile = target.files?.[0];
                        const isSize2Mb = getFileSize(selectedFile?.size);
                        if (selectedFile?.name) {
                          if (isSize2Mb) {
                            field.onChange(selectedFile?.name);
                            setMotorClaimFormData({
                              ...motorClaimFormData,
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
                    error={props?.errors?.vehicleRightView?.message}
                  />
                )}
                name='vehicleRightView'
                defaultValue={globalFileData.vehicleRightView}
              />
            )}

            {motorClaimFormData.hasThePoliceBeenInformed === "Yes" && (
              <Controller
                control={props?.control}
                render={({ field }) => (
                  <FileInput
                    label='Police report - (ONLY JPG : PNG : PDF)'
                    placeHolder='Choose File'
                    onChange={(event) => {
                      const target = event.target as HTMLInputElement;
                      if (target) {
                        const selectedFile = target.files?.[0];
                        const isSize2Mb = getFileSize(selectedFile?.size);
                        if (selectedFile?.name) {
                          if (isSize2Mb) {
                            field.onChange(selectedFile?.name);
                            setMotorClaimFormData({
                              ...motorClaimFormData,
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
