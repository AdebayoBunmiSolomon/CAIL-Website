import React from "react";

type selectOptionProps = {
  data?: any[];
  label?: string;
  placeholder?: string;
  error?: string;
  selectedOption: string;
  loading?: boolean;
  onChangeSelectedOption: (selectedOption: string) => void;
};

export const SelectOptions: React.FC<selectOptionProps> = ({
  data,
  label,
  selectedOption,
  loading,
  onChangeSelectedOption,
  placeholder,
  error,
}) => {
  return (
    <div className='flex flex-col w-full mb-4'>
      {label && (
        <p
          className={`${
            error ? "text-black" : "text-black"
          } text-[15px] mb-2 font-medium`}>
          {label}
        </p>
      )}
      <select
        className='block w-full py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          onChangeSelectedOption(event.target.value)
        }
        value={selectedOption}
        placeholder={data?.[0]}>
        <option>{placeholder}</option>
        {loading ? (
          <option>loading...</option>
        ) : (
          data &&
          data.map((items, index) => (
            <option key={index} className=''>
              {items}
            </option>
          ))
        )}
      </select>
      {error && (
        <p className='font-medium text-[crimson] text-sm h-5'>{error}</p>
      )}
    </div>
  );
};
