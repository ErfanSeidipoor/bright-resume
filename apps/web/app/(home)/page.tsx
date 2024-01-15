import { FAQ } from "apps/web/containers/home/faq";
import { Features } from "apps/web/containers/home/features";
import classes from "./page.module.scss";
import { Hero } from "apps/web/containers/home/hero";

export default async function Index() {
  return (
    <div className={classes.page}>
      <Hero />
      <Features />
      <FAQ />
      <div className={classes.page__footer}>©2023 Bright Résumé Co.</div>
    </div>
  );
}

// https://cms-development.bright-resume.com/documentation
// https://cms-staging.bright-resume.com/documentation#/
// https://back-staging.bright-resume.com/graphql
// https://back.bright-resume.com/graphql
// https://cms.bright-resume.com/documentation
