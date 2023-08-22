import cls from "classnames";

import { TypographyVariant } from "../types/index.type";

import classes from "./index.module.scss";

export type TypographyProps<T extends React.ElementType> = {
  component?: T;
  variant?: TypographyVariant;
  children?: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export const Typography = <T extends React.ElementType = "p">({
  variant = "h7",
  component,
  children,
  className,
  ...props
}: TypographyProps<T>) => {
  return <p>{children}</p>;
};

export default Typography;
