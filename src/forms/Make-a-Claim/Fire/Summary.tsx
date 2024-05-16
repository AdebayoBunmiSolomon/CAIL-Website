import React from "react";
import { ToastContainer } from "react-toastify";
import { FormTitle } from "../../../components";

export const FireClaimSummary: React.FC<{}> = () => {
  return (
    <>
      <div>
        <ToastContainer />
        <div className='flex justify-center items-center'>
          <div className='w-[95%] bg-white rounded-md self-center p-6'>
            <FormTitle title='Fire Claims Summary' />
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
                        <div className='text-sm text-gray-500'></div>
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
