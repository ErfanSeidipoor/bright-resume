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
  label?: string;
};

export type ExperienceChildProps = {
  id: string;
  position: TextFieldProps;
  company: TextFieldProps;
  description: TextAreaProps;
};

export type ExperienceProps = {
  header: TextFieldProps;
  items: ExperienceChildProps[];
  onIncrease: () => void;
  onDecrease: (id: string) => void;
};
