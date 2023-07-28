import { FC } from "react";
import cls from "classnames";
import Image from "next/image";
// svg
import SolarPenBoldSvg from "@bright-resume/assets/svg/solar-pen-bold.svg";
// types
import { TypographyVariant } from "../types";
// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";
import Typography from "../Typography";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: TypographyVariant;
}

export const InputField: FC<InputFieldProps> = ({
  variant = "h3",
  ...props
}) => {
  const data = useData();

  const renderTypography = () => {
    return (
      <>
        <Typography variant={variant}>
          {props.value || props.defaultValue}
        </Typography>
        <Image
          className={classes.editIcon}
          src={SolarPenBoldSvg}
          alt="solar-pen"
          width={18}
          height={18}
          onClick={() => data.setIsInputActive(!data.isInputActive)}
        />
      </>
    );
  };

  const renderInput = () => {
    return (
      <input
        ref={data.inputRef}
        className={cls(classes.input, props.className, {
          [classes.headingOne]: variant === "h1",
          [classes.headingTwo]: variant === "h2",
          [classes.headingThree]: variant === "h3",
          [classes.headingFour]: variant === "h4",
          [classes.headingFive]: variant === "h5",
          [classes.headingSix]: variant === "h6",
          [classes.headingSeven]: variant === "h7",
          [classes.headingEight]: variant === "h8",
          [classes.headingNine]: variant === "h9",
        })}
        disabled={!data.isInputActive}
        onKeyDown={(event) =>
          event.key === "Enter" && data.setIsInputActive(false)
        }
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
        [classes.enableInput]: !!data.isInputActive,
      })}
      onBlur={() => data.setIsInputActive(false)}
    >
      {renderBody()}
    </div>
  );
};

export default InputField;
