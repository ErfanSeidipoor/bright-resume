import cls from "classnames";

import classes from "./index.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <label className={cls(classes.root, className)}>
      <input type="radio" name="radio" {...props} />
      <span>{children}</span>
    </label>
  );
};

export default RadioButton;
