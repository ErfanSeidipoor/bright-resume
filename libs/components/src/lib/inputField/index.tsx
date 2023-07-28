import { FC } from "react";
import cls from "classnames";

// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";
import Image from "next/image";
import Typography from "../Typography";
import SolarPenBoldSvg from "@bright-resume/assets/svg/solar-pen-bold.svg";

export enum InputFieldVariantEnum {
  "xxl" = "h1",
  "xl" = "h2",
  "lg" = "h3",
  "md" = "h4",
  "sm" = "h5",
  "xs" = "h6",
  "xxs" = "h6",
}

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputFieldVariantEnum;
}

export const InputField: FC<InputFieldProps> = ({
  variant = InputFieldVariantEnum.lg,
  ...props
}) => {
  const data = useData(variant);

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
        className={cls(
          classes.input,
          data.handleGetVariantClassName(variant),
          props.className
        )}
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
