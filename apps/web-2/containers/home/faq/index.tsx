import FAQImage from "@bright-resume/assets/image/faq.png";
import Image from "next/image";
import { FC } from "react";
import styles from "./index.module.scss";


const FAQ: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={FAQImage} alt="Picture of the author" />
      </div>
      <div className={styles.wrapperGrid}>
        <div className={styles.featureGrid}>
          
        </div>
      </div>
    </div>
  );
};

export { FAQ };
