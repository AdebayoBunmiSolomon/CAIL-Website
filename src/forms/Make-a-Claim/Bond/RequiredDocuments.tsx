import React, { useEffect } from "react";
import { FormTitle } from "../../../components";
import { Controller } from "react-hook-form";
import { FileInput } from "../../../components/shared/FileInput";
import {
  useBondClaimForm,
  useGlobalFileStore,
} from "../../../hooks/store/make-a-claim";
import { getFileSize } from "../../../helper/helper";

type useFormProps = {
  useFormProps: any;
};

export const BondClaimRequiredDocumentsDetails: React.FC<useFormProps> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  const { globalFileData, setGlobalFileData } = useGlobalFileStore();
  const { setBondClaimFormData, bondClaimFormData } = useBondClaimForm();

  useEffect(() => {
    if (bondClaimFormData.doYouHaveAWitness === "Yes") {
      props?.setValues("eyeWitnessReport", null);
    } else {
      props?.setValues("eyeWitnessReport", "NULL");
    }
  }, [bondClaimFormData.doYouHaveAWitness]);

  useEffect(() => {
    if (bondClaimFormData.hasThePoliceBeenInformed === "Yes") {
      props?.setValues("policeReport", null);
    } else {
      props?.setValues("policeReport", "NULL");
    }
  }, [bondClaimFormData.hasThePoliceBeenInformed]);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Bond Claim Required Documents' />
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
                          setBondClaimFormData({
                            ...bondClaimFormData,
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
                          setBondClaimFormData({
                            ...bondClaimFormData,
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
            <Controller
              control={props?.control}
              render={({ field }) => (
                <FileInput
                  label='Upload Evidence 3 - (ONLY JPG : PNG : PDF)'
                  placeHolder='Choose File'
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                      const selectedFile = target.files?.[0];
                      const isSize2Mb = getFileSize(selectedFile?.size);
                      if (selectedFile?.name) {
                        if (isSize2Mb) {
                          field.onChange(selectedFile?.name);
                          setBondClaimFormData({
                            ...bondClaimFormData,
                            evidenceUpload3: selectedFile,
                          });
                          setGlobalFileData({
                            ...globalFileData,
                            evidenceUpload3: selectedFile?.name,
                          });
                        } else {
                          props?.setValues("evidenceUpload3", "");
                          props?.setError("evidenceUpload3", {
                            type: "custom",
                            message: "File size is more than 2MB.",
                          });
                        }
                      } else {
                        props?.setError("evidenceUpload3", {
                          type: "custom",
                          message: "This file is required",
                        });
                      }
                    }
                  }}
                  error={props?.errors?.evidenceUpload3?.message}
                />
              )}
              name='evidenceUpload3'
              defaultValue={globalFileData.evidenceUpload3}
            />

            <Controller
              control={props?.control}
              render={({ field }) => (
                <FileInput
                  label='Upload Evidence 4 - (ONLY JPG : PNG : PDF)'
                  placeHolder='Choose File'
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                      const selectedFile = target.files?.[0];
                      const isSize2Mb = getFileSize(selectedFile?.size);
                      if (selectedFile?.name) {
                        if (isSize2Mb) {
                          field.onChange(selectedFile?.name);
                          setBondClaimFormData({
                            ...bondClaimFormData,
                            evidenceUpload4: selectedFile,
                          });
                          setGlobalFileData({
                            ...globalFileData,
                            evidenceUpload4: selectedFile?.name,
                          });
                        } else {
                          props?.setValues("evidenceUpload4", "");
                          props?.setError("evidenceUpload4", {
                            type: "custom",
                            message: "File size is more than 2MB.",
                          });
                        }
                      } else {
                        props?.setError("evidenceUpload4", {
                          type: "custom",
                          message: "This file is required",
                        });
                      }
                    }
                  }}
                  error={props?.errors?.evidenceUpload4?.message}
                />
              )}
              name='evidenceUpload4'
              defaultValue={globalFileData.evidenceUpload4}
            />
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
            {bondClaimFormData.doYouHaveAWitness === "Yes" && (
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
                            setBondClaimFormData({
                              ...bondClaimFormData,
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
            {bondClaimFormData.hasThePoliceBeenInformed === "Yes" && (
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
                            setBondClaimFormData({
                              ...bondClaimFormData,
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
