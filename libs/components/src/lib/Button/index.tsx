import cls from "classnames";

import classes from "./index.module.scss";
import { ButtonProps, ButtonVariant } from "../../index.type";

export const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.text,
  rootClassName = "",
  text,
  iconRight,
  iconLeft,
  className,
  onClick = () => null,
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
      className={cls(classes.root, className ? classes[className] : "", {
        [rootClassName]: !!rootClassName,
        [classes[variant]]: variant,
      })}
      onClick={onClick}
      {...props}
    >
      {renderIconLeft()}
      {text}
      {renderIconRight()}
    </button>
  );
};

export default Button;
