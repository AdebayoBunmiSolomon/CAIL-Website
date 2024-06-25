import React from "react";

export const ComplaintsProcedure: React.FC<{}> = () => {
  return (
    <>
      <section className='bg-[#F5EFEF] py-24 pt-[180px]'>
        <div className='px-[90px] items-center justify-center'>
          <h1 className='heading text-gradient text-center'>
            COMPLAINTS PROCEDURE
          </h1>
          <div className='flex flex-col gap-2 mt-[30px]'>
            <p className='text-[16px] leading-[26px] font-[400] text-[#606060]'>
              If you have any complaint, you can contact us through any of the
              following medium:
              <ul className='list-disc list-inside gap-1 mt-[10px]'>
                <li>
                  Send an e-mail to carecentre@custodianinsurance.com or
                  contactcentre@custodianinsurance.com
                </li>
                <li>
                  You can visit any of our offices nationwide and lodge your
                  complaint
                </li>
                <li>
                  You can also write to us directly through our head-office or
                  any of our branches or offices nationwide
                </li>
                <li>
                  Alternatively, you can make an oral complaint via any of our
                  telephone lines
                </li>
                <li>Through our social media platforms or in writing</li>
              </ul>
            </p>
            <p className='text-[16px] leading-[26px] font-[400] text-[#606060] mt-[20px]'>
              Your complaint will be registered and acknowledged within 48
              hours.
              <ul className='list-disc list-inside gap-1 mt-[10px]'>
                <li>
                  All complaints logged will be treated promptly and fairly with
                  a view to a timely and satisfactory resolution.
                </li>
                <li>
                  Where a complaint requires investigation and or consultation
                  with any relevant party, these will be done promptly and in a
                  competent, deligent and fair manner, having taken into
                  consideration all material circumstances.
                </li>
                <li>
                  Custodian will also provide you with progress updates on the
                  complaint including:
                </li>
                <li>
                  If you are dissatisfied with the resolution of the complaint,
                  the complaint can be escalated to our regulator at the
                  following address:
                  <br />
                  <br />
                  The Complaints Bureau, <br />
                  National Insurance Commission, <br />
                  Plot 1239, <br />
                  Ladoke Akintola Boulevard, <br />
                  Garki II, <br />
                  PMB 457 Garki, <br />
                  Abuja, Nigeria.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
