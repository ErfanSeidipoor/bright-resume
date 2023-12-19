import cls from "classnames";

import classes from "./index.module.scss";
import { Typography, TypographyVariant } from "@bright-resume/components";
import { EmptyRadioCircleIcon, CheckIcon } from "../Icons";

export type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelVariant?: TypographyVariant;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  rootClassName?: string;
  label?: string;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  icon = <EmptyRadioCircleIcon className={classes.icon} />,
  checkedIcon = <CheckIcon className={classes.checked__icon} />,
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
        type="checkbox"
        name="checkbox"
        {...props}
      />
      <Typography className={classes.label} variant={labelVariant}>
        {label}
      </Typography>
    </label>
  );
};

export default CheckBox;
