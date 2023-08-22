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
          className={cls(classes.input, {
            [props.className || ""]: !!props.className,
            [classes.disable__input]: !data.isInputActive,
          })}
          onKeyDown={(event) =>
            event.key === "Escape" && data.handleDeActiveInput()
          }
          variant={variant}
          rows={props.rows || 3}
        />
      </>
    );
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
      {renderInput()}
      {renderIcon()}
    </div>
  );
};
