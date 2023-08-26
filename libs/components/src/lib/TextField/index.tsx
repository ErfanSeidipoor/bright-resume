import { FC } from "react";
import cls from "classnames";
// types
import { TextFieldProps } from "../types/index.type";
// components
import { SolarPenBoldIcon } from "../Icons";
import Typography from "../Typography";
// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";

export const TextField: FC<TextFieldProps> = ({
  variant = "h3",
  rootClassName = "",
  label = "",
  ...props
}) => {
  const data = useData();

  const renderTypography = () => {
    return (
      <>
        <Typography {...props} variant={variant}>
          {props.value || props.defaultValue || props.placeholder}
        </Typography>
        <div className={classes.edit__icon}>
          <SolarPenBoldIcon width={18} height={18} />
        </div>
      </>
    );
  };

  const renderInput = () => {
    return (
      <>
        <label htmlFor={props.id} className={classes.label}>
          {label}
        </label>
        <Typography
          {...props}
          component="input"
          autoFocus
          className={cls(classes.input, {
            [props.className || ""]: !!props.className,
          })}
          onKeyDown={(event) =>
            event.key === "Enter" && data.handleDeActiveInput()
          }
          variant={variant}
        />
      </>
    );
  };

  const renderBody = () => {
    if (!data.isInputActive) return renderTypography();
    else return renderInput();
  };

  return (
    <div
      className={cls(classes.root, {
        [rootClassName]: !!rootClassName,
        [classes.enable__root]: !!data.isInputActive,
      })}
      onBlur={data.handleDeActiveInput}
      onClick={data.handleActiveInput}
    >
      {renderBody()}
    </div>
  );
};
