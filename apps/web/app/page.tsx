import { FAQ } from "../containers/home/faq";
import { Features } from "../containers/home/features";
import classes from "./page.module.scss";
import { Hero } from "../containers/home/hero";
import { MainLayout } from "../components/layouts/MainLayout";

export default async function Index() {
  return (
    <MainLayout>
      <div className={classes.page}>
        <Hero />
        <Features />
        <FAQ />
        <div className={classes.page__footer}>©2023 Bright Résumé Co.</div>
      </div>
    </MainLayout>
  );
}
