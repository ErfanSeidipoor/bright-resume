import { FC } from "react";
import cls from "classnames";
// types
import { TextAreaProps } from "../types/index.type";
// components
import Typography from "../Typography";
import { SolarPenBoldIcon } from "../Icons";
// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";

export const TextArea: FC<TextAreaProps> = ({
  variant = "h6",
  rootClassName = "",
  label = "",
  rows = 3,
  ...props
}) => {
  const data = useData();

  const renderIcon = () => {
    return (
      <div className={classes.edit__icon}>
        <SolarPenBoldIcon width={18} height={18} />
      </div>
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
          component="textarea"
          onFocus={data.handleActiveInput}
          autoFocus={data.isInputActive}
          rootClassName={cls(classes.input__container)}
          className={cls(classes.input, {
            [props.className || ""]: !!props.className,
            [classes.disable__input]: !props.disabled && !data.isInputActive,
            [classes.not__allow_input]: props.disabled,
          })}
          onKeyDown={(event) =>
            event.key === "Escape" && data.handleDeActiveInput()
          }
          variant={variant}
          rows={rows}
        />
      </>
    );
  };

  return (
    <div
      className={cls(classes.root, {
        [rootClassName]: !!rootClassName,
        [classes.enable__root]: !!data.isInputActive,
        [classes.disable__root]: props.disabled,
      })}
      onBlur={data.handleDeActiveInput}
      onClick={() => !props.disabled && data.handleActiveInput()}
    >
      {renderInput()}
      {renderIcon()}
    </div>
  );
};
