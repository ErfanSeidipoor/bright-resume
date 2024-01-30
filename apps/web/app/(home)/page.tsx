import { FAQ } from "apps/web/containers/home/faq";
import { Features } from "apps/web/containers/home/features";
import classes from "./page.module.scss";
import { Hero } from "apps/web/containers/home/hero";

export default async function Page() {
  return (
    <div className={classes.page}>
      <Hero />
      <Features />
      <FAQ />
      <div className={classes.page__footer}>©2023 Bright Résumé Co.</div>
    </div>
  );
}
