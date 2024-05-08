import React from "react";
import { formatAmount } from "../../../helper/helper";
import { ToastContainer } from "react-toastify";
import { FormTitle } from "../../../components";
import { useMachineryBreakdownForm } from "../../../hooks/store/machinery-breakdown/useMachineryBreakdownForm";

export const MachineryBreakdownSummary: React.FC<{}> = () => {
  const { machineryBreakdownFormData } = useMachineryBreakdownForm();

  return (
    <div>
      <ToastContainer />
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Machinery Breakdown Summary' />
          <table className='min-w-full divide-y divide-gray-200'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Quotation Details
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              <tr>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='ml-4'>
                      <div className='text-sm font-medium text-gray-900'>
                        Client Name
                      </div>
                      <div className='text-sm text-gray-500'>
                        {machineryBreakdownFormData.surname +
                          " " +
                          machineryBreakdownFormData.first_name}
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
                        Product Category
                      </div>
                      <div className='text-sm text-gray-500'>
                        {machineryBreakdownFormData.machine_category}
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
                        Product Name
                      </div>
                      <div className='text-sm text-gray-500'>
                        Machinery Breakdown Insurance
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
                        Payments Frequency
                      </div>
                      <div className='text-sm text-gray-500'>
                        {machineryBreakdownFormData.payment_option}
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
                        Start Date
                      </div>
                      <div className='text-sm text-gray-500'>
                        {machineryBreakdownFormData.insured_date}
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
                        Machine Value
                      </div>
                      <div className='text-sm text-gray-500'>
                        {formatAmount(
                          Number(machineryBreakdownFormData.machine_value)
                        )}
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
                        Premium Amount
                      </div>
                      <div className='text-sm text-gray-500'>
                        {formatAmount(
                          Number(machineryBreakdownFormData.machine_value)
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
