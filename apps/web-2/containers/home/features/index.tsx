import Cloud from "@bright-resume/assets/icons/cloud";
import International from "@bright-resume/assets/icons/international";
import Rocket from "@bright-resume/assets/icons/rocket";
import { FC } from "react";
import styles from "./index.module.scss";

const featureList = [
  {
    icon: <Rocket className={styles.icon} />,
    title: "Speedy",
  },
  {
    icon: <Cloud className={styles.icon} />,
    title: "Cloud-base Saving",
  },
  {
    icon: <International className={styles.icon} />,
    title: "International standard",
  },
  {
    icon: <Cloud className={styles.icon} />,
    title: "Speedy",
  },
  {
    icon: <Rocket className={styles.icon} />,
    title: "Cloud-base Saving",
  },
  {
    icon: <International className={styles.icon} />,
    title: "International standard",
  },
];

const Features: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.text}>Top Features of Bright Resumes</div>
      </div>
      <div className={styles.wrapperGrid}>
        <div className={styles.featureGrid}>
          {featureList.map((feature, i) => (
            <div key={i} className={styles.feature}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <div className={styles.featureTitle}>{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Features };
