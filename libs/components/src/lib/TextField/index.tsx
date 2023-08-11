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

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: TypographyVariant;
};

export const TextField: FC<TextFieldProps> = ({ variant = "h3", ...props }) => {
  const data = useData();

  const renderTypography = () => {
    return (
      <>
        <Typography variant={variant}>
          {props.value || props.defaultValue || props.placeholder}
        </Typography>
        <Image
          className={classes.edit__icon}
          src={SolarPenBoldSvg}
          alt="solar-pen"
          width={18}
          height={18}
        />
      </>
    );
  };

  const renderInput = () => {
    return (
      <Typography
        component="input"
        autoFocus
        className={classes.input}
        onKeyDown={(event) =>
          event.key === "Enter" && data.handleDeActiveInput()
        }
        variant={variant}
        {...props}
      />
    );
  };

  const renderBody = () => {
    if (!data.isInputActive) return renderTypography();
    else return renderInput();
  };

  return (
    <div
      className={cls(classes.root, {
        [classes.enable__root]: !!data.isInputActive,
      })}
      onBlur={data.handleDeActiveInput}
      onClick={data.handleActiveInput}
    >
      {renderBody()}
    </div>
  );
};
