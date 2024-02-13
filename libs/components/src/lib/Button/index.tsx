import cls from "classnames";

import classes from "./index.module.scss";
import { ButtonProps } from "../../index.type";

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "blue",
  rootClassName = "",
  text,
  iconRight,
  iconLeft,
  className,
  onClick = () => null,
  children,
  ...props
}) => {
  const renderIconRight = () => {
    return <div className={classes.iconRightClassName}>{iconRight}</div>;
  };
  const renderIconLeft = () => {
    return <div className={classes.iconLeftClassName}>{iconLeft}</div>;
  };

  return (
    <button
      color={color}
      className={cls(classes.root, className ? classes[className] : "", {
        [rootClassName]: !!rootClassName,
        [classes[color]]: color,
        [classes[variant]]: variant,
      })}
      onClick={onClick}
      {...props}
    >
      {renderIconLeft()}
      {text ? text : children}
      {renderIconRight()}
    </button>
  );
};

export default Button;
