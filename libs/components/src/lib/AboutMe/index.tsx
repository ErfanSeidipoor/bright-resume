import { FC } from "react";

import { TextArea } from "../TextArea";
import { TextField } from "../TextField";
import { AboutMeProps } from "../types/index.type";
import classes from "./index.module.scss";

/* eslint-disable-next-line */

export const AboutMe: FC<AboutMeProps> = ({
  header = { label: "header", placeholder: "About Me" },
  description = {
    label: "description",
    placeholder:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
}) => {
  const renderHeader = () => {
    return (
      <TextField {...header} variant="h2" placeholder={header.placeholder} />
    );
  };

  const renderBody = () => {
    return (
      <TextArea
        {...description}
        variant="h7"
        placeholder={description.placeholder}
      />
    );
  };

  return (
    <div className={classes.container}>
      {renderHeader()}
      {renderBody()}
    </div>
  );
};

export default AboutMe;
