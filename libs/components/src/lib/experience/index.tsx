import { FC } from "react";
import cls from "classnames";
// components
import { TextArea, TextField } from "@bright-resume/components";
// types
import { TextAreaProps, TextFieldProps } from "../types/index.type";
// icons
import { AddCircleRoundedIcon } from "../Icons";
// locals
import { useData } from "./useData";
import classes from "./index.module.scss";

/* eslint-disable-next-line */
type ExperienceChildProps = {
  id: string;
  position: TextFieldProps;
  company: TextFieldProps;
  description: TextAreaProps;
};

type ExperienceProps = {
  header: TextFieldProps;
  children: ExperienceChildProps[];
  increase: () => void;
  decrease: (id: string | number) => void;
};

export const Experience: FC<ExperienceProps> = ({
  header = { placeholder: "Experience" },
  children = [
    {
      id: "child-1",
      position: { placeholder: "Position" },
      company: { placeholder: "company name" },
      description: { placeholder: "type here" },
    },
  ],
  increase = () => null,
  decrease = () => null,
}) => {
  const data = useData();

  const renderHeader = () => {
    return (
      <div className={classes.header__container}>
        <TextField
          variant="h2"
          placeholder={header.placeholder}
          rootClassName={cls(classes.header, {
            [header.rootClassName || ""]: !!header.rootClassName,
          })}
        />
        <AddCircleRoundedIcon className={classes.add__icon} />
      </div>
    );
  };

  const renderChild = (child: ExperienceChildProps) => {
    return (
      <li key={child.id}>
        <TextField
          {...child.position}
          variant="h4"
          placeholder={child.position.placeholder}
          rootClassName={cls(classes.position, {
            [child.position.rootClassName || ""]:
              !!child.position.rootClassName,
          })}
        />
        <TextField
          {...child.company}
          variant="h5"
          placeholder={child.company.placeholder}
        />
        <TextArea
          {...child.description}
          variant="h7"
          placeholder={child.description.placeholder}
          className={cls(classes.description, {
            [child.description.className || ""]: !!child.description.className,
          })}
        />
      </li>
    );
  };

  const renderChildren = () => {
    return (
      <ul className={classes.child__container}>
        {children.map((child) => renderChild(child))}
      </ul>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {renderHeader()}
        {renderChildren()}
      </div>
    </div>
  );
};

export default Experience;
