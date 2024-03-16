import { BlogContent, BlogTitle } from "@web/components/blog";
import classes from "./page.module.scss";
import { IQuery, useData } from "./index.hook";

type BlogPageProps = {
  searchParams?: IQuery;
};

export default async function Index(props: BlogPageProps) {
  const { searchParams } = props;
  const data = useData({ searchParams: searchParams! });

  const posts = await data.getPosts();

  return (
    <div className={classes.container}>
      <BlogTitle />
      <BlogContent blogsData={posts} />
    </div>
  );
}
