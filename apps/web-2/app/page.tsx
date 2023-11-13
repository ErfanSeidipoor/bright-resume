"use client";
import Image from "next/image";
import { FAQ } from "../containers/home/faq";
import { Features } from "../containers/home/features";
import classes from "./page.module.scss";

import HeroImage from "@bright-resume/assets/image/hero.png";

export default async function Index() {
  return (
    <div className={classes.page}>
      <div className={classes.page__hero}>
        <div className={classes.page__hero__title__wrapper}>
          <div>Wanna get the job? Build a Bright resume</div>
          <button>Get Started</button>
        </div>
        <Image src={HeroImage} alt="Picture of the author" fill sizes="100%" />
      </div>
      <Features />
      <FAQ />
      <div className={classes.page__footer}>©2023 Bright Résumé Co.</div>
    </div>
  );
}
