import React from "react";

type checkedOptionProps = {
  data?: any[];
  label?: string;
  error?: string;
  checkedOption: string[];
  onChangeCheckedOption: (checkedOptions: string[]) => void;
};

export const CheckBoxOptions: React.FC<checkedOptionProps> = ({
  data,
  label,
  error,
  checkedOption,
  onChangeCheckedOption,
}) => {
  let isChecked: boolean;
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    isChecked = event.target.checked;
    let updatedCheckedOptions: string[] = [];

    if (isChecked) {
      updatedCheckedOptions = [...checkedOption, value];
    } else {
      updatedCheckedOptions = checkedOption.filter((item) => item !== value);
    }

    onChangeCheckedOption(updatedCheckedOptions);
  };

  return (
    <>
      <div className='flex flex-col w-full mb-4'>
        {label && (
          <p
            className={`${
              error ? "text-black" : "text-black"
            } text-[15px] mb-2 font-medium`}>
            {label}
          </p>
        )}
        <div className='flex flex-wrap gap-4'>
          {data &&
            data.map((item, index) => (
              <label key={index} className='flex items-center'>
                <input
                  type='checkbox'
                  id={item}
                  name={item}
                  value={item}
                  checked={checkedOption.includes(item)}
                  onChange={handleCheckboxChange}
                  className='form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out'
                />
                <span className='ml-2'>{item}</span>
              </label>
            ))}
        </div>

        {error && (
          <p className='font-medium text-[crimson] text-sm h-5'>{error}</p>
        )}
      </div>
    </>
  );
};
