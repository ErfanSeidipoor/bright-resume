import cls from "classnames";
import { TypographyVariant } from "../types/index.type";

import classes from "./index.module.scss";

type TypographyProps<T extends React.ElementType> = {
  component?: T;
  variant?: TypographyVariant;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Typography = <T extends React.ElementType = "p">({
  variant = "h7",
  component,
  children,
  className,
  ...props
}: TypographyProps<T>) => {
  const getComponent = (): React.ElementType => {
    if (!component && ["h7", "h8", "h9"].includes(variant)) {
      return "p";
    }
    return component || (variant as React.ElementType);
  };

  const Component = getComponent();

  const rootClasses = cls(classes.root, className, {
    [classes.h1]: variant === "h1",
    [classes.h2]: variant === "h2",
    [classes.h3]: variant === "h3",
    [classes.h4]: variant === "h4",
    [classes.h5]: variant === "h5",
    [classes.h6]: variant === "h6",
    [classes.h7]: variant === "h7",
    [classes.h8]: variant === "h8",
    [classes.h9]: variant === "h9",
  });

  return (
    <Component className={rootClasses} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
