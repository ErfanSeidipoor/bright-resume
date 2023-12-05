import {
  CloudIcon,
  InternationalIcon,
  RocketIcon,
} from "@bright-resume/components/Icons";

import { FC } from "react";
import classes from "./index.module.scss";

const featureList = [
  {
    icon: <RocketIcon className={classes.icon} />,
    title: "Speedy",
  },
  {
    icon: <CloudIcon className={classes.icon} />,
    title: "Cloud-base Saving",
  },
  {
    icon: <InternationalIcon className={classes.icon_international} />,
    title: "International standard",
  },
  {
    icon: <CloudIcon className={classes.icon} />,
    title: "Speedy",
  },
  {
    icon: <RocketIcon className={classes.icon} />,
    title: "Cloud-base Saving",
  },
  {
    icon: <InternationalIcon className={classes.icon_international} />,
    title: "International standard",
  },
];

const Features: FC = () => {
  return (
    <div className={classes.container} id="feature-section">
      <div className={classes.wrapper}>
        <div className={classes.text}>Top Features of Bright Resumes</div>
        <div className={classes.description}>
          A resume builder is a valuable tool for job seekers, helping them
          create professional and visually appealing resumes that showcase their
          skills and experience. Here are some of the top features to look for
          in a resume builder
        </div>
      </div>
      <div className={classes.wrapperGrid}>
        <div className={classes.featureGrid}>
          {featureList.map((feature, i) => (
            <div key={i} className={classes.feature}>
              <div className={classes.featureIcon}>{feature.icon}</div>
              <div className={classes.featureTitle}>{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Features };
