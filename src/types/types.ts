export interface PrevNextButtonProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export interface downloadProps {
  data: any;
}

export interface tabContentsProps {
  data: tabContentsType[];
}

export type tabContentsType = {
  id: number;
  tabHeader: string;
  tabData: tabDataType[];
};

export type tabDataType = {
  id: number;
  title: string;
  position: string;
  color: string;
};

export interface contentsProps {
  tabContentsData: tabDataType[];
  gridView: boolean;
}
