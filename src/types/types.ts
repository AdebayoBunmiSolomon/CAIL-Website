import React from "react";

export interface PrevNextButtonProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// export interface downloadProps {
//   data: any;
// }

export interface tabContentsProps {
  data: tabContentsType[];
  tabClick: (selectedTabData: tabDataType[], tabHeader: string) => void;
  style?: string;
}

export type tabContentsType = {
  id: number;
  tabHeader: string;
  title: string;
  subTitle: string;
  subTitle2: string;
  description: string;
  tabData: tabDataType[];
};

export type tabDataType = {
  id: number;
  title: string;
  description: string;
  position: string;
  getQuote: string;
  benefits: {
    title: string;
    description: string;
    list: string[];
  }[];
  keyFeatures: {
    title: string;
    description: string;
    list: string[];
  }[];
};

export interface singleProdDataProps {
  id: number;
  title: string;
  description: string;
  position: string;
  getQuote: string;
  benefits: {
    title: string;
    description: string;
    list: string[];
  }[];
  keyFeatures: {
    title: string;
    description: string;
    list: string[];
  }[];
}

export interface contentsProps {
  tabContentsData: tabDataType[];
  gridView: boolean;
}

export interface headerDropDownProps {
  data: nestedLists[];
  parentRoute: string;
}

export type nestedLists = {
  id: number;
  title: string;
  page: string;
};

export interface productCardProps {
  data?: tabDataType[];
  tabHeader?: string;
  showDataDescription?: boolean;
  showExploreMore?: boolean;
  productsToShowPerPage: number;
  routeName: string;
  navigateToProdSection?: boolean;
}

export interface sectionItemProps {
  keyIndex: number;
  items: {
    description: string;
    title: string;
    list: string[];
  };
}

export interface buttonProps {
  text?: any;
  className?: string;
  onPress: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}

export interface heroProps {
  title: string;
  subtitle: string;
  subtitle2?: string;
  description: string;
}

export interface executiveProps {
  data?: tabDataType[];
  tabHeader?: string;
}

export interface inputProps {
  textArea?: boolean;
  type?: React.HTMLInputTypeAttribute;
  placeHolder: string;
  label?: string;
  error?: string;
  value?: string;
  disabled?: boolean;
  min?: string | number;
  max?: string | number;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface fileInputProps {
  placeHolder: string;
  label?: string;
  error?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

export interface resourcesProps {
  resourcesType: string;
  data: resourcesDataType[];
}

export type resourcesDataType = {
  id: number;
  list: string;
  info: string;
};

export interface faqProps {
  data: resourcesDataType[];
}

export type financialDataType = {
  financialYear: string;
  financialType: string;
  download: string;
};

export interface financialProps {
  data: financialDataType[];
  viewArchive: () => void;
}

export interface downloadProps {
  data: downloadDataType[];
}

export type downloadDataType = {
  downloadType: string;
  download: string;
};

export type officesDataType = {
  name: string;
  address: string;
  phone: string;
};
