import React from "react";
export const DownloadApp = () => {
  return (
    <section className='bg-[#061D30] relative'>
      <div className='container -left-0 -right-0'>
        <div className='bg-red-700 w-full rounded-2xl mt-[-200px]'>
          <div className='container p-10'>
            <div className='max-w-[500px]'>
              <h2 className='text-[#F5F5F5] text-[48px] leading-[58px] font-bold'>
                Take control of your future – download the app now!
              </h2>
              <div className='flex gap-5 mt-5'>
                {/* <img
                  src={googleAppStore}
                  alt=''
                  className='w-[150px] h-[50px]'
                />
                <img src={iosStore} alt='' className='w-[150px] h-[50px]' /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
