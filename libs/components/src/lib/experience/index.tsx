import { FC } from "react";

import { TextField } from "../TextField";
// locals
import { useData } from "./useData";
import classes from "./index.module.scss";

/* eslint-disable-next-line */
export interface ExperienceProps {}

export const Experience: FC<ExperienceProps> = () => {
  const data = useData();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1 className={classes.heading1}>Experience</h1>
        <div className={classes.text}>
          <div className={classes.dot} />
          <TextField
            value={data.value}
            onChange={(e) => data.setValue(e.target.value)}
          />
          <hr className={classes.hr} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
