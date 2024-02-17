import { FAQ } from "@web/components/faq";
import { Features } from "@web/components/features";
import classes from "./page.module.scss";
import { Hero } from "@web/components/hero";
import { auth } from "@web/auth";

export default async function Page() {
  let session = await auth();
  let user = session?.user;

  return (
    <div className={classes.page}>
      <Hero />
      <Features />
      <FAQ />
      <div className={classes.page__footer}>©2023 Bright Résumé Co.</div>
    </div>
  );
}
