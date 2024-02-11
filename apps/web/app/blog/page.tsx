import { BlogContent, BlogTitle } from "@web/components/blog";
import classes from "./page.module.scss";
import { useData } from "./useData";

type BlogPageProps = {};

export default async function Index(props: BlogPageProps) {
  const data = useData();

  return (
    <div className={classes.container}>
      <BlogTitle />
      <BlogContent blogsData={data.blogsData} />
    </div>
  );
}
