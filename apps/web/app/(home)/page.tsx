import { FAQ } from "@web/components/faq";
import { Features } from "@web/components/features";
import classes from "./page.module.scss";
import { Hero } from "@web/components/hero";


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
