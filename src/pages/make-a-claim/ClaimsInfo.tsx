import React from "react";
import { Button, FormTitle } from "../../components";
import { GoArrowRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useMakeAClaimForm } from "../../hooks/store/make-a-claim/useMakeAClaim";
import { getPolicyClassType, getStatusColors } from "../../helper/helper";
import { useClaimStatusForm } from "../../hooks/store/make-a-claim";

type callBackFormProps = {
  showClaimsInfo: boolean;
  closeModal: (value: React.SetStateAction<boolean>) => void;
  statusForm?: boolean;
};

export const ClaimsInfo: React.FC<callBackFormProps> = ({
  showClaimsInfo,
  closeModal,
  statusForm,
}) => {
  const navigate: NavigateFunction = useNavigate();
  const { makeAClaimFormData } = useMakeAClaimForm();
  const { claimStatusFormData } = useClaimStatusForm();
  const policyType = getPolicyClassType(makeAClaimFormData.policyId);
  const statusColor = getStatusColors(claimStatusFormData.status.toLowerCase());
  return (
    <>
      {showClaimsInfo &&
        (statusForm ? (
          <div className='flex flex-row justify-center items-center fixed bg-[#00000067] top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] z-50'>
            <div className='w-[80%] md:w-[60%] lg:w-[40%] py-4 bg-white rounded-xl z-50 fixed px-3'>
              <div className='w-[100%] bg-white rounded-md self-center items-center'>
                <FormTitle title='Claims Info' />
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Confirm Your Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              Policy number
                            </div>
                            <div className='text-sm text-gray-500'>
                              {claimStatusFormData.policyNumber &&
                                claimStatusFormData.policyNumber}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              Status
                            </div>
                            <div>
                              <p
                                className={`text-sm text-[${statusColor.txtColor}] bg-[${statusColor.bg}]`}>
                                {claimStatusFormData.status &&
                                  claimStatusFormData.status}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              Policy Type
                            </div>
                            <div className='text-sm text-gray-500'>
                              {claimStatusFormData.policyType &&
                                claimStatusFormData.policyType}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className='flex flex-row justify-center items-center gap-5 pt-5'>
                  <Button
                    text={"Close"}
                    onPress={() => closeModal(!showClaimsInfo)}
                    className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
                    rightIcon={<IoClose size={25} />}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-row justify-center items-center fixed bg-[#00000067] top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] z-50'>
            <div className='w-[80%] md:w-[60%] lg:w-[40%] py-4 bg-white rounded-xl z-50 fixed px-3'>
              <div className='w-[100%] bg-white rounded-md self-center items-center'>
                <FormTitle title='Claims Info' />
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Confirm Your Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              Insured Name
                            </div>
                            <div className='text-sm text-gray-500'>
                              {makeAClaimFormData.officeName}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              Policy Number
                            </div>
                            <div className='text-sm text-gray-500'>
                              {makeAClaimFormData.policyId}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              Policy Type
                            </div>
                            <div className='text-sm text-gray-500'>
                              {makeAClaimFormData.subRisk}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className='flex flex-row justify-center items-center gap-5 pt-5'>
                  <Button
                    text={"Next"}
                    onPress={() => {
                      if (policyType) {
                        navigate(`/forms/make-a-claim/${policyType}`);
                      }
                    }}
                    className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg hover:bg-[#900000d7] hover:duration-700'
                    rightIcon={<GoArrowRight size={25} />}
                  />
                  <Button
                    text={"Cancel"}
                    onPress={() => closeModal(!showClaimsInfo)}
                    className='py-[4px] md:py-[7px] lg:py-[7px] text-[white] px-5 flex rounded-lg bg-slate-400 hover:bg-slate-500 hover:duration-700'
                    rightIcon={<IoClose size={25} />}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
