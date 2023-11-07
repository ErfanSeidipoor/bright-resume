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
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: TypographyVariant;
    rootClassName?: string;
    label?: string;
  };

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

export enum FontWeight {
  semiBold = "semiBold",
  bold = "bold",
  regular = "regular",
  medium = "medium",
  light = "light",
}

export enum FontFamily {
  sansSerif = "sansSerif",
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
  fromMonth: MonthEnum | undefined;
  fromYear: number | undefined;
  onChangeFromMonth: (month: MonthEnum) => void;
  onChangeFromYear: (year: number) => void;
  toMonth: MonthEnum | undefined;
  toYear: number | undefined;
  onChangeToMonth: (month: MonthEnum) => void;
  onChangeToYear: (year: number) => void;
  disabled?: boolean;
}
