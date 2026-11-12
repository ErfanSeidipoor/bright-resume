import cls from "classnames";

import classes from "./index.module.scss";
import { FloatingIconButtonProps } from "../../index.type";

export const FloatingIconButton: React.FC<FloatingIconButtonProps> = ({
  variant = "contained",
  color = "blue",
  rootClassName = "",
  icon,
  className,
  onClick = () => null,
  ...props
}) => {
  const renderIcon = () => {
    return <div className={classes.float_icon}>{icon}</div>;
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
      {renderIcon()}
    </button>
  );
};

export default FloatingIconButton;
