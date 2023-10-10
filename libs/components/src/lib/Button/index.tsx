import cls from "classnames";

import classes from "./index.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={cls(classes.root, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
