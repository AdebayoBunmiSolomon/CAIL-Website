import React from "react";
import { Button } from "../ui/button";
import { Controller, useForm } from "react-hook-form";
import { newsLetter } from "../../form-types/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { newsLetterValidationSchema } from "../../form-types/validationSchema";
import { useNewsLetter } from "../../api/services/Newsletter";

export const NewLetter: React.FC<{}> = () => {
  const { subscribeToNewsLetter, loading, isError } = useNewsLetter();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<newsLetter>({
    mode: "onChange",
    resolver: yupResolver(newsLetterValidationSchema),
  });

  const onSubmit = (data: newsLetter) => {
    if (data) {
      subscribeToNewsLetter(data.email);
    }
  };
  return (
    <>
      <div className='flex flex-col w-full '>
        <div className='  font-bold flex  justify-center text-6xl my-2'>
          <p>Subscribe to our Newsletter</p>
        </div>
        <div className='flex flex-col'>
          <div className='hover:border-[#FFF] hover:cursor-pointer w-full flex items-center mt-10 text-[28px] justify-between pl-4 pr-2 py-5 rounded-full border-[4px] border-solid focus-within:border-white   group-focus:outline-2 border-[#6C8396] h-[70px] point-event-none'>
            <Controller
              control={control}
              render={({ field }) => (
                <>
                  <input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      field.onChange(event.target.value);
                    }}
                    value={field.value}
                    type='email'
                    className='group w-[600px] bg-transparent flex flex-1 px-2 outline-none focus:shadow-outline-blue text-[#6C8396] point-event-auto'
                    placeholder='Enter your email address'
                  />
                </>
              )}
              name='email'
              defaultValue=''
            />
            <Button
              type='submit'
              onClick={handleSubmit(onSubmit)}
              className='bg-[#900000] h-[55px] w-[191px] rounded-[50px]'>
              {loading ? (
                <span className='text-[18px] leading-[30px] font-[500]'>
                  Loading...
                </span>
              ) : (
                <span className='text-[18px] leading-[30px] font-[500]'>
                  Subscribe
                </span>
              )}
            </Button>
          </div>
        </div>
        {errors?.email?.message && (
          <p className='font-medium text-[crimson] text-sm h-5 pl-7 py-2'>
            {errors?.email?.message}
          </p>
        )}
      </div>
    </>
  );
};
