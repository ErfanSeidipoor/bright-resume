import { FC } from "react";

import { TextArea } from "../TextArea";
import { TextField } from "../TextField";
import classes from "./index.module.scss";

/* eslint-disable-next-line */
export interface AboutMeProps {
  headerValue: string;
  onChangeHeaderValue: (value: string) => void;
  bodyValue: string;
  onChangeBodyValue: (value: string) => void;
}

export const AboutMe: FC<AboutMeProps> = ({
  headerValue,
  onChangeHeaderValue,
  bodyValue,
  onChangeBodyValue,
}) => {
  const renderHeader = () => {
    return (
      <TextField
        value={headerValue}
        onChange={(e) => onChangeHeaderValue(e.target.value)}
        variant="h1"
        defaultValue="About Me"
      />
    );
  };

  const renderBody = () => {
    return (
      <TextArea
        value={bodyValue}
        onChange={(e) => onChangeBodyValue(e.target.value)}
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
