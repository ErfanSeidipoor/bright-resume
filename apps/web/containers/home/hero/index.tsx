import { FC } from "react";
import Image from "next/image";
import classes from "./index.module.scss";

export const Hero: FC = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.hero__title__wrapper}>
        <span>Wanna get the job?</span>
        <span className={classes.message}>
          Build a <span className={classes.blue}>Bright</span> resume
        </span>
        <button>Get Started</button>
      </div>
      <div className={classes.hero__image}>
        <Image
          src="/assets/image/hero-image.png"
          alt="Hero image"
          fill
          sizes="100%"
        />
      </div>
    </div>
  );
};
