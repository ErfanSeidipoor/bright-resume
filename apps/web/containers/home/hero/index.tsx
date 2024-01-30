"use client";
import { FC } from "react";
import classes from "./index.module.scss";
import ImageCombo from "./ImageCombo";

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
        <ImageCombo />
      </div>
    </div>
  );
};
