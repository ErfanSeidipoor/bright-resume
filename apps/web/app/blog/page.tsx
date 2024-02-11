import { BlogTitle } from "@web/components/blog";
import classes from "./page.module.scss";

type BlogPageProps = {};

export default async function Index(props: BlogPageProps) {
  return (
    <div className={classes.container}>
      <BlogTitle />
    </div>
  );
}
