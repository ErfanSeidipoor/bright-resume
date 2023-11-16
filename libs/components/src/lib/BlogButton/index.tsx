import cls from "classnames";

import classes from "./index.module.scss";
import { BlogButtonProps, ButtonVariant } from "../../index.type";

export const BlogButton: React.FC<BlogButtonProps> = ({
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
      {renderIconRight()}
      {text}
      {renderIconLeft()}
    </button>
  );
};

export default BlogButton;
