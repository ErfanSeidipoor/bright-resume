import { FAQ } from "../containers/home/faq";
import { Features } from "../containers/home/features";
import classes from "./page.module.scss";
import { Hero } from "../containers/home/hero";

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
