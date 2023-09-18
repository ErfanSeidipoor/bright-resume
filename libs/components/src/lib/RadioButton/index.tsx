import cls from "classnames";

import classes from "./index.module.scss";
import Typography from "../Typography";
import { RadioButtonProps } from "../types/index.type";
import { EmptyRadioCircleIcon, CheckedRadioCircleIcon } from "../Icons";

export const RadioButton: React.FC<RadioButtonProps> = ({
  icon = <EmptyRadioCircleIcon />,
  checkedIcon = <CheckedRadioCircleIcon />,
  rootClassName,
  labelVariant = "h9",
  label = "",
  ...props
}) => {
  const renderIcon = () => {
    return !props.checked ? icon : checkedIcon;
  };

  return (
    <label className={cls(classes.root, rootClassName)}>
      {renderIcon()}
      <input
        className={cls(classes.input)}
        type="radio"
        name="radio"
        {...props}
      />
      <Typography variant={labelVariant}>{label}</Typography>
    </label>
  );
};

export default RadioButton;
