import React from "react";
import { useMotorForm } from "../../../hooks/store/motor";
import { formatAmount } from "../../../helper/helper";
import { FormTitle } from "../../../components";

export const PersonalInsuranceSummary: React.FC<{}> = () => {
  const { motorFormData } = useMotorForm();

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-full bg-white rounded-md self-center p-6 overflow-x-auto'>
          <FormTitle title='Motor Vehicle Summary' />
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Quotation Details
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      Client Name
                    </div>
                    <div className='text-sm text-gray-500'>
                      {motorFormData.surName} {motorFormData.firstName}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      Product Category
                    </div>
                    <div className='text-sm text-gray-500'>Car Insurance</div>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      Product Name
                    </div>
                    <div className='text-sm text-gray-500'>
                      {motorFormData.coverTypeName}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      Payments Frequency
                    </div>
                    <div className='text-sm text-gray-500'>
                      {motorFormData.paymentOption}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      Start Date
                    </div>
                    <div className='text-sm text-gray-500'>
                      {motorFormData.startDate}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      Vehicle Value
                    </div>
                    <div className='text-sm text-gray-500'>
                      {formatAmount(Number(motorFormData.vehicleValue))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      Premium Amount
                    </div>
                    <div className='text-sm text-gray-500'>
                      {formatAmount(Number(motorFormData.cost))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
