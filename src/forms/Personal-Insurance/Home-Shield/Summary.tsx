import React from "react";
import { FormTitle } from "../../../components";
import { useHomeShieldForm } from "../../../hooks/store/home-shield/useHomeShieldForm";
import { formatAmount } from "../../../helper/helper";

export const HomeShieldSummary: React.FC<{}> = () => {
  const { homeShieldFormData, setHomeShieldFormData } = useHomeShieldForm();
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Home Shield Summary' />
          <div className='flex flex-col md:flex-col lg:flex-row items-center gap-4 mb-3'>
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
                          {homeShieldFormData.surname +
                            " " +
                            homeShieldFormData.first_name}
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
                          Home shield Insurance
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* <tr>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='ml-4'>
                      <div className='text-sm font-medium text-gray-900'>
                        Product Name
                      </div>
                      <div className='text-sm text-gray-500'>
                        Unknown
                      </div>
                    </div>
                  </div>
                </td>
              </tr> */}
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <div className='ml-4'>
                        <div className='text-sm font-medium text-gray-900'>
                          Policy Frequency
                        </div>
                        <div className='text-sm text-gray-500'>
                          {homeShieldFormData.policy_period}
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
                          {homeShieldFormData.insured_date}
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
                          Vehicle Value
                        </div>
                        <div className='text-sm text-gray-500'>
                          {formatAmount(Number(homeShieldFormData.premium))}
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
                          {formatAmount(Number(homeShieldFormData.premium))}
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
    </>
  );
};
