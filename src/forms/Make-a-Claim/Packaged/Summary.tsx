import React from "react";
import { FormTitle } from "../../../components";
import {
  useMakeAClaimForm,
  usePackagedPolicyClaimForm,
} from "../../../hooks/store/make-a-claim";
import { formatAmount } from "../../../helper/helper";

export const PackagedPolicyClaimSummary: React.FC<{}> = () => {
  const { packagedPolicyClaimFormData } = usePackagedPolicyClaimForm();
  const { makeAClaimFormData } = useMakeAClaimForm();
  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Accident Claims Summary' />
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
                        {makeAClaimFormData.subRisk}
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
                        Claims Type
                      </div>
                      <div className='text-sm text-gray-500'>
                        {packagedPolicyClaimFormData.claimType}
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
                        Police Informed
                      </div>
                      <div className='text-sm text-gray-500'>
                        {packagedPolicyClaimFormData.hasThePoliceBeenInformed}
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
                        Witness Present
                      </div>
                      <div className='text-sm text-gray-500'>
                        {packagedPolicyClaimFormData.doYouHaveAWitness}
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
                        Date & Time of Incident
                      </div>
                      <div className='text-sm text-gray-500'>
                        {packagedPolicyClaimFormData.dateTimeOfIncident}
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
                        Claims Amount
                      </div>
                      <div className='text-sm text-gray-500'>
                        {formatAmount(
                          Number(packagedPolicyClaimFormData.claimsAmount)
                        )}
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
