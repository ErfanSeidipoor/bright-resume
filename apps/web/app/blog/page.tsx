import { BlogContent, BlogTitle } from "@web/components/blog";
import classes from "./page.module.scss";

type BlogPageProps = {};

const getPosts = async () => {
  const revalidateTime = 60 * 60 * 3;
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/posts`, {
    next: { revalidate: revalidateTime },
  });
  return response.json();
};

export default async function Index(props: BlogPageProps) {
  const posts = await getPosts();

  return (
    <div className={classes.container}>
      <BlogTitle />
      <BlogContent blogsData={posts.data} />
    </div>
  );
}
