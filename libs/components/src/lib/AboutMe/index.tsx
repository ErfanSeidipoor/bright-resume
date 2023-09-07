import { FC } from "react";

import { TextArea } from "../TextArea";
import { TextField } from "../TextField";
import { AboutMeProps } from "../types/index.type";
import classes from "./index.module.scss";

/* eslint-disable-next-line */

export const AboutMe: FC<AboutMeProps> = ({
  header = {},
  description = {},
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
