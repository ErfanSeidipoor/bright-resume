import { FC } from "react";

import cls from "classnames";

// Icons
import { SolarPenBoldIcon } from "../Icons";
// components
import { TextFieldProps, Typography } from "@bright-resume/components";
// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";

export const TextField: FC<TextFieldProps> = ({
  variant = "h3",
  rootClassName = "",
  enableRootClassName = "",
  label = "",
  ...props
}) => {
  const data = useData();

  const renderTypography = () => {
    return (
      <>
        <Typography
          {...props}
          rootClassName={cls(classes.input__container)}
          variant={variant}
          className={cls(classes.typography, {
            [classes.placeholder__typography]:
              !props.value && !props.defaultValue,
          })}
        >
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
      <Typography
        {...props}
        component="input"
        autoFocus
        rootClassName={cls(classes.input__container)}
        className={cls(classes.input, {
          [props.className || ""]: !!props.className,
        })}
        onKeyDown={(event) =>
          event.key === "Enter" && data.handleDeActiveInput()
        }
        variant={variant}
      />
    );
  };

  const renderBody = () => {
    if (!data.isInputActive) return renderTypography();
    else return renderInput();
  };

  const renderLabel = () => {
    if (!label) return;
    return (
      <Typography variant="h4" component="label" htmlFor={props.id}>
        {label}
      </Typography>
    );
  };

  return (
    <div className={classes.container}>
      {renderLabel()}
      <div
        className={cls(classes.root, {
          [rootClassName]: !!rootClassName,
          [classes.enable__root]: !!data.isInputActive,
          [enableRootClassName]: !!data.isInputActive && !!enableRootClassName,
          [classes.disable__root]: props.disabled,
        })}
        onBlur={data.handleDeActiveInput}
        onClick={() => !props.disabled && data.handleActiveInput()}
      >
        {renderBody()}
      </div>
    </div>
  );
};
