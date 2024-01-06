import { ChangeEventHandler } from "react";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h7"
  | "h8"
  | "h9";

export type TextAreaProps =
  | (React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
      variant?: TypographyVariant;
      rootClassName?: string;
      label?: string;
      isSeparateValue?: boolean;
      setValue: (value: string | undefined) => void;
      value: string | undefined;
      getSeparatedValues?: (value: string[]) => void;
    })
  | (React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
      variant?: TypographyVariant;
      rootClassName?: string;
      label?: string;
      isSeparateValue?: false;
      setValue?: (value: string | undefined) => void;
      value?: string | undefined;
      getSeparatedValues?: (value: string[]) => void;
    });

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: TypographyVariant;
  rootClassName?: string;
  enableRootClassName?: string;
  label?: string;
};

export type BackgroundInfoChildKeys =
  | "title"
  | "subtitle"
  | "description"
  | "rangeDate";

export type ExperienceInfoChildKeys =
  | "role"
  | "company"
  | "points"
  | "location"
  | "rangeDate";

export type BackgroundInfoRangeDateChildKeys =
  | "fromMonth"
  | "fromYear"
  | "toMonth"
  | "toYear";

export type BackgroundInfoChildProps = {
  id: string;
  title: TextFieldProps;
  subtitle?: TextFieldProps;
  description?: TextAreaProps;
  rangeDate?: RangePickerProps;
};

export type BackgroundInfoProps = {
  header: TextFieldProps;
  items: BackgroundInfoChildProps[];
  hoverItem?: BackgroundInfoChildProps;
  onIncrease: () => void;
  onDecrease: (id: string) => void;
};

export type showOptionsType = {
  isShow: boolean;
  onToggle: () => void;
};

export type ExperienceChildProps = {
  id: string;
  role: TextFieldProps;
  company: TextFieldProps;
  location?: TextFieldProps;
  rangeDate?: RangePickerProps;
  points?: TextAreaProps;
  showLocation?: showOptionsType;
  showDate?: showOptionsType;
  showPoints?: showOptionsType;
};

export type ExperienceProps = {
  header: TextFieldProps;
  items: ExperienceChildProps[];
  hoverItem?: ExperienceChildProps;
  onIncrease: () => void;
  onDecrease: (id: string) => void;
};

export type LanguageChildProps = {
  id: string;
  language: TextFieldProps;
  proficiency: ProficiencyEnum;
  onChangeProficiency: (id: string, proficiency: ProficiencyEnum) => void;
};

export type LanguageProps = {
  items: LanguageChildProps[];
  onIncrease: () => void;
  onDecrease: (id: string) => void;
};

export type ContactInfoProps = {
  EmailAddress: TextFieldProps;
  PhoneNumber: TextFieldProps;
};

export type AboutMeProps = {
  header: TextFieldProps;
  description: TextAreaProps;
};

export enum ThemeColor {
  blue = "blue",
  green = "green",
  purple = "purple",
  gold = "gold",
  grey = "grey",
}

export enum FonSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum FontFamily {
  arial = "arial",
  montserrat = "montserrat",
}
export enum ProficiencyEnum {
  beginner = "Beginner",
  intermediate = "Intermediate",
  advanced = "Advanced",
  native = "Native",
}

export type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelVariant?: TypographyVariant;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  rootClassName?: string;
  label?: string;
};

export type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelVariant?: TypographyVariant;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  rootClassName?: string;
  label?: string;
};

export type ButtonVariant = "text" | "outlined" | "contained" | "rounded";

export type ButtonColor = "blue" | "green" | "purple" | "gold" | "grey";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  rootClassName?: string;
  text?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  onClick?: () => void;
};

export type NavigationButtonProps = ButtonProps & {
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  onPrevPage?: () => void;
  onNextPage?: () => void;
};

export type BlogCardProps = {
  rootClassName?: string;
  imageWidth?: string | number;
  imageHeight?: string | number;
  link?: string;
  categories?: { name: string }[];
  isCutOutImage?: boolean;
};

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  rootClassName?: string;
  onEmptyValue?: () => void;
};

export enum MonthEnum {
  Jan = "Jan",
  Feb = "Feb",
  Mar = "Mar",
  Apr = "Apr",
  May = "May",
  Jun = "Jun",
  Jul = "Jul",
  Aug = "Aug",
  Sep = "Sep",
  Oct = "Oct",
  Nov = "Nov",
  Dec = "Dec",
}

export enum DatePickerSectionsEnum {
  Month = "Month",
  Year = "Year",
}

export type ButtonPositionClassType = "right" | "left" | "";

export interface DatePickerProps {
  month: MonthEnum | undefined;
  year: number | undefined;
  onChangeMonth: (month: MonthEnum) => void;
  onChangeYear: (year: number) => void;
  placeholder?: string;
  ref?: React.RefObject<HTMLButtonElement> | null;
  disabled?: boolean;
}

export interface RangePickerProps {
  id?: string;
  className?: string;
  fromMonth?: MonthEnum | undefined;
  fromYear?: number | undefined;
  onChangeFromMonth?: (month: MonthEnum) => void;
  onChangeFromYear?: (year: number) => void;
  toMonth?: MonthEnum | undefined;
  toYear?: number | undefined;
  onChangeToMonth?: (month: MonthEnum) => void;
  onChangeToYear?: (year: number) => void;
  disabled?: boolean;
}
export type Option<T = any, K = any> = {
  label: T;
  value: K;
};

export type SliderProps = React.InputHTMLAttributes<HTMLInputElement> & {
  rootClassName?: string;
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
