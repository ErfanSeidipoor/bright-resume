import cls from "classnames";

import classes from "./index.module.scss";
import { RadioButtonProps, Typography } from "@bright-resume/components";
import { EmptyRadioCircleIcon, CheckedRadioCircleIcon } from "../Icons";

export const RadioButton: React.FC<RadioButtonProps> = ({
  icon = <EmptyRadioCircleIcon className={classes.icon} />,
  checkedIcon = <CheckedRadioCircleIcon className={classes.checked__icon} />,
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

export default RadioButton;
