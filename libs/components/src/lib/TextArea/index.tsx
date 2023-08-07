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
  showDefaultValue?: boolean;
};

export const TextArea: FC<TextAreaProps> = ({
  variant = "h6",
  showDefaultValue = false,
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
        />
      </>
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
          event.key === "Enter" && data.handleDeActiveInput()
        }
        variant={variant}
        rows={props.rows || 3}
        defaultValue={""}
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
        [classes.enableRoot]: !!data.isInputActive,
      })}
      onBlur={data.handleDeActiveInput}
      onClick={data.handleActiveInput}
    >
      {renderBody()}
    </div>
  );
};
