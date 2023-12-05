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

export type BackgroundInfoChildKeys = "title" | "subtitle" | "description";

export type BackgroundInfoChildProps = {
  id: string;
  title: TextFieldProps;
  subtitle?: TextFieldProps;
  description?: TextAreaProps;
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
