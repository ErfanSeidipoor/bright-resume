import cls from "classnames";

import classes from "./index.module.scss";
import { CheckBoxProps, Typography } from "@bright-resume/components";
import { EmptySquareIcon, CheckSquareIcon } from "../Icons";

export const CheckBox: React.FC<CheckBoxProps> = ({
  icon = <EmptySquareIcon className={classes.icon} />,
  checkedIcon = <CheckSquareIcon className={classes.checked__icon} />,
  rootClassName,
  labelVariant = "h9",
  label = "",
  ...props
}) => {
  const renderIcon = () => {
    return !props.checked ? icon : checkedIcon;
  };

  return (
    <label
      className={cls(
        classes.root,
        props.disabled ? classes.disabled : "",
        rootClassName
      )}
    >
      {renderIcon()}
      <Typography
        component="input"
        className={cls(classes.input)}
        type="radio"
        name="radio"
        {...props}
      />
      <Typography className={classes.label} variant={labelVariant}>
        {label}
      </Typography>
    </label>
  );
};

export default CheckBox;
