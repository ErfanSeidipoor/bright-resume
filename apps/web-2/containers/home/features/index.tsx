import {
  CloudIcon,
  InternationalIcon,
  RocketIcon,
} from "@bright-resume/components/Icons";

import { FC } from "react";
import styles from "./index.module.scss";

const featureList = [
  {
    icon: <RocketIcon className={styles.icon} />,
    title: "Speedy",
  },
  {
    icon: <CloudIcon className={styles.icon} />,
    title: "Cloud-base Saving",
  },
  {
    icon: <InternationalIcon className={styles.icon_international} />,
    title: "International standard",
  },
  {
    icon: <CloudIcon className={styles.icon} />,
    title: "Speedy",
  },
  {
    icon: <RocketIcon className={styles.icon} />,
    title: "Cloud-base Saving",
  },
  {
    icon: <InternationalIcon className={styles.icon_international} />,
    title: "International standard",
  },
];

const Features: FC = () => {
  return (
    <div className={styles.container} id="feature-section">
      <div className={styles.wrapper}>
        <div className={styles.text}>Top Features of Bright Resumes</div>
      </div>
      <div className={styles.wrapperGrid}>
        <div className={styles.featureGrid}>
          {featureList.map((feature, i) => (
            <div key={i} className={styles.feature}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <div className={styles.featureTitle}>{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Features };
