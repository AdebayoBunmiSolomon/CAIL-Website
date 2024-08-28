import React from "react";
import { formatAmount } from "../../../helper/helper";
import { FormTitle } from "../../../components";
import { useEventForm } from "../../../hooks/store/event";

export const EventSummary: React.FC<{}> = () => {
  const { eventFormData } = useEventForm();

  return (
    <div className='px-20 pt-[200px] pb-5'>
      <div className='flex justify-center items-center'>
        <div className='w-[95%] bg-white rounded-md self-center p-6'>
          <FormTitle title='Custodian Events Insurance Summary' />
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
                        {eventFormData.surname + " " + eventFormData.first_name}
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
                        Custodian Event Insurance
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
                        Cover Type
                      </div>
                      <div className='text-sm text-gray-500'>
                        {eventFormData.cover_type &&
                          eventFormData.cover_type
                            .map((items) => items)
                            .join(", ")}
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
                        Event Involvement
                      </div>
                      <div className='text-sm text-gray-500'>
                        {eventFormData.event_involvement}
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
                        {eventFormData.event_date}
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
                        Premium Value
                      </div>
                      <div className='text-sm text-gray-500'>
                        {formatAmount(Number(eventFormData.sum_insured))}
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
                        {formatAmount(Number(eventFormData.sum_insured))}
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
