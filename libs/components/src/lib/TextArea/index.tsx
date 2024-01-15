import { FC } from "react";
import cls from "classnames";
// components
import { TextAreaProps, Typography } from "@bright-resume/components";
// icons
import { SolarPenBoldIcon } from "../Icons";
// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";

export const TextArea: FC<TextAreaProps> = ({
  variant = "h6",
  rootClassName = "",
  label = "",
  rows = 3,
  isSeparateValue = false,
  setValue = () => undefined,
  getSeparatedValues = () => undefined,
  ...props
}) => {
  const data = useData({ defaultRows: rows });

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
          onChange={(e) => {
            if (props.onChange) {
              props.onChange(e);
            }
            data.handleChangeRows(e.target.value);
            data.handleResetRows(e.target.value);
            setValue(
              data.handleChangeValue({ value: e.target.value, isSeparateValue })
            );
            getSeparatedValues(data.handleMakeArrayValue(e.target.value));
          }}
          component="textarea"
          onFocus={data.handleActiveInput}
          autoFocus={data.isInputActive}
          rootClassName={cls(classes.input__container)}
          className={cls(classes.input, {
            [props.className || ""]: !!props.className,
            [classes.disable__input]: !props.disabled && !data.isInputActive,
            [classes.not__allow_input]: props.disabled,
          })}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              data.handleDeActiveInput();
            }
            if (event.key === "Backspace") {
              data.handleRemoveEmptyValue({ value: props.value }) &&
                setValue(data.handleRemoveEmptyValue({ value: props.value }));
            }
          }}
          variant={variant}
          rows={data.rows}
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
