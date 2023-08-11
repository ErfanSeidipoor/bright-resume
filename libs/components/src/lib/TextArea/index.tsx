import { FC } from "react";
import cls from "classnames";
// types
import { TypographyVariant } from "../types/index.type";
// components
import Typography from "../Typography";
import { SolarPenBoldIcon } from "../Icons";
// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: TypographyVariant;
};

export const TextArea: FC<TextAreaProps> = ({ variant = "h6", ...props }) => {
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
      <Typography
        component="textarea"
        onFocus={data.handleActiveInput}
        autoFocus={data.isInputActive}
        className={cls(classes.input, {
          [classes.disable__input]: !data.isInputActive,
        })}
        onKeyDown={(event) =>
          event.key === "Escape" && data.handleDeActiveInput()
        }
        variant={variant}
        rows={props.rows || 3}
        {...props}
      />
    );
  };

  return (
    <div
      className={cls(classes.root, {
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
