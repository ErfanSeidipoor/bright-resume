import FAQImage from "@bright-resume/assets/image/faq.png";
import Image from "next/image";
import { FC } from "react";
import styles from "./index.module.scss";
import { Accordion } from "@bright-resume/components/accordion";
import { texts } from "./texts";

const FAQ: FC = () => {
  return (
    <div className={styles.container} id="faq-section">
      <div className={styles.wrapper}>
        <Image src={FAQImage} alt="Picture of the author" />
      </div>
      <div className={styles.wrapperGrid}>
        <Accordion items={texts.accordion_items} />
      </div>
    </div>
  );
};

export { FAQ };
