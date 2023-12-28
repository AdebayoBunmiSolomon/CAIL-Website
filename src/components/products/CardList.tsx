import React from "react";

interface benefitListProps {
  benefitList: any;
  textColor: any;
  titleColor: any;
  costImplication: string;
  title: string;
}

export const BenefitList: React.FunctionComponent<benefitListProps> = ({
  benefitList,
  textColor,
  titleColor,
  costImplication,
  title,
}) => {
  const { ul, li } = benefitList;

  return (
    <div>
      <div>
        <ul
          className={`${`text-[${titleColor}]`} text-[12px] md:text-[15px] lg:text-[18px] font-bold list-disc text-justify p-5`}>
          {ul}
          {li &&
            li.map((list: any, index: number) => {
              return (
                <span key={index} className='flex py-2'>
                  <li
                    className={`${`text-[${textColor}]`} text-[12px] md:text-[15px] lg:text-[18px] font-normal leading-relaxed`}>
                    {list.desc}
                  </li>
                </span>
              );
            })}
        </ul>
        {costImplication === title && (
          <ul
            className={`${`text-[${titleColor}]`} text-[12px] md:text-[15px] lg:text-[18px] font-bold list-none text-justify p-5`}>
            Cost Implication
            <span className='flex py-2'>
              <li
                className={`${`text-[${textColor}]`} text-[12px] md:text-[15px] lg:text-[18px] font-normal leading-relaxed`}>
                The premium payable on the policy is a function of age and the
                level of benefit required. To this extent we require the
                following information to determine the premium payable:
              </li>
            </span>
          </ul>
        )}
      </div>
    </div>
  );
};

interface keyFeaturesListProps {
  keyFeaturesList: any;
  textColor: any;
  titleColor: any;
}

export const KeyFeaturesList: React.FunctionComponent<keyFeaturesListProps> = ({
  keyFeaturesList,
  textColor,
  titleColor,
}) => {
  const { ul, li } = keyFeaturesList;

  return (
    <div>
      <div>
        <ul
          className={`${`text-[${titleColor}]`} text-[12px] md:text-[15px] lg:text-[18px] font-bold list-disc text-justify p-5`}>
          {ul}
          {li &&
            li.map((list: any, index: number) => {
              return (
                <span key={index} className='flex py-2'>
                  <li
                    className={`${`text-[${textColor}]`} text-[12px] md:text-[15px] lg:text-[18px] font-normal leading-relaxed`}>
                    {list.desc}
                  </li>
                </span>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
