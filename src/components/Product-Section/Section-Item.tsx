import React from "react";
import { sectionItemProps } from "../../types/types";

export const TopSectionItem: React.FC<sectionItemProps> = ({
  keyIndex,
  items,
}) => {
  const BoldText = ({ text }) => {
    const boldBeforeColon = (text: string) => {
      const parts = text.split(":");
      if (parts.length > 1) {
        return (
          <>
            <b>{parts[0]}</b>: {parts.slice(1).join(":")}
          </>
        );
      }
      return text; // Return the original text if there's no colon
    };

    return <div>{boldBeforeColon(text)}</div>;
  };

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
              <BoldText text={listItems} />
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
  const BoldText = ({ text }) => {
    const boldBeforeColon = (text: string) => {
      const parts = text.split(":");
      if (parts.length > 1) {
        return (
          <>
            <b>{parts[0]}</b>: {parts.slice(1).join(":")}
          </>
        );
      }
      return text; // Return the original text if there's no colon
    };

    return <div>{boldBeforeColon(text)}</div>;
  };
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
              <BoldText text={listItems} />
            </li>
          ))}
      </ul>
    </div>
  );
};
