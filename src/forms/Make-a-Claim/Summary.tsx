import React from "react";
import { ToastContainer } from "react-toastify";
import { FormTitle } from "../../components";
import { useMakeAClaimForm } from "../../hooks/store/make-a-claim/useMakeAClaim";

export const ClaimSummary: React.FC<{}> = () => {
  const { makeAClaimFormData } = useMakeAClaimForm();
  return (
    <div>
      <ToastContainer />
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Claims Summary' />
          <table className='min-w-full divide-y divide-gray-200'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Claims Details
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              <tr>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='ml-4'>
                      <div className='text-sm font-medium text-gray-900'>
                        Product Type
                      </div>
                      <div className='text-sm text-gray-500'>
                        Private Car Insurance
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
                        Policy Holder Name
                      </div>
                      <div className='text-sm text-gray-500'>
                        {makeAClaimFormData.policyHolderName}
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
                        Claims Type
                      </div>
                      <div className='text-sm text-gray-500'>
                        {makeAClaimFormData.claimType}
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
                        Damage Type
                      </div>
                      <div className='text-sm text-gray-500'>
                        {makeAClaimFormData.damageType}
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
                        Date & Time of Loss
                      </div>
                      <div className='text-sm text-gray-500'>
                        {makeAClaimFormData.dateTimeOfLoss}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
