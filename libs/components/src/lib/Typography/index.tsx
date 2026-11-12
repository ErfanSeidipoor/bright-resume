import cls from "classnames";

import { TypographyVariant } from "@bright-resume/components";

import classes from "./index.module.scss";

export type TypographyProps<T extends React.ElementType> = {
  component?: T;
  variant?: TypographyVariant;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  rootClassName?: string;
} & React.ComponentPropsWithoutRef<T>;

export const Typography = <T extends React.ElementType = "p">({
  variant = "h7",
  component,
  startAdornment,
  endAdornment,
  children,
  className,
  rootClassName = "",
  ...props
}: TypographyProps<T>) => {
  const getComponent = (): React.ElementType => {
    if (!component && ["h7", "h8", "h9"].includes(variant)) {
      return "p";
    }
    return component || (variant as React.ElementType);
  };

  const Component = getComponent();

  const rootClasses = cls(className, {
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

  const renderStartAdornment = () => {
    if (!startAdornment) return;
    return startAdornment;
  };

  const renderEndAdornment = () => {
    if (!endAdornment) return;
    return endAdornment;
  };

  return (
    <div
      className={cls(classes.root, {
        [rootClassName]: !!rootClassName,
      })}
    >
      {renderStartAdornment()}
      <Component className={rootClasses} {...props}>
        {children}
      </Component>
      {renderEndAdornment()}
    </div>
  );
};

export default Typography;
