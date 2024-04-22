import React from "react";
import { sectionItemProps } from "../../types/types";

export const TopSectionItem: React.FC<sectionItemProps> = ({
  keyIndex,
  items,
}) => {
  return (
    <div key={keyIndex} className='flex flex-col gap-2'>
      <p className='text-[#606060] text-[12px] md:text-[16px] lg:text-[16px] font-bold'>
        {items.title}
      </p>
      <p className='text-[#808080] text-[12px] md:text-[16px] lg:text-[16px] font-normal'>
        {items.description}
      </p>
      <ul className='list-disc pl-5 text-[#808080] text-[12px] md:text-[16px] lg:text-[16px] font-normal'>
        {items.list &&
          items.list.map((listItems, index) => (
            <li key={index} className='pb-2 leading-loose'>
              {listItems}
            </li>
          ))}
      </ul>
    </div>
  );
};

export const BottomSectionItem: React.FC<sectionItemProps> = ({
  keyIndex,
  items,
}) => {
  return (
    <div key={keyIndex} className='flex flex-col gap-2'>
      <p className='text-[#606060] text-[12px] md:text-[16px] lg:text-[16px] font-bold'>
        {items.title}
      </p>
      <p className='text-[#808080] text-[12px] md:text-[16px] lg:text-[16px] font-normal'>
        {items.description}
      </p>
      <ul className='list-disc pl-5 text-[#808080] text-[12px] md:text-[16px] lg:text-[16px] font-normal'>
        {items.list &&
          items.list.map((listItems, index) => (
            <li key={index} className='pb-2 leading-loose'>
              {listItems}
            </li>
          ))}
      </ul>
    </div>
  );
};
