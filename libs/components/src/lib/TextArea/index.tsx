import { FC } from "react";
import cls from "classnames";
import Image from "next/image";
// svg
import SolarPenBoldSvg from "@bright-resume/assets/svg/solar-pen-bold.svg";
// types
import { TypographyVariant } from "../types/index.type";
// components
// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";
import Typography from "../Typography";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: TypographyVariant;
};

export const TextArea: FC<TextAreaProps> = ({ variant = "h6", ...props }) => {
  const data = useData();

  const renderIcon = () => {
    return (
      <Image
        className={classes.edit__icon}
        src={SolarPenBoldSvg}
        alt="solar-pen"
        width={18}
        height={18}
      />
    );
  };

  const renderInput = () => {
    return (
      <Typography
        component="textarea"
        onFocus={data.handleActiveInput}
        autoFocus={data.isInputActive}
        className={classes.input}
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
