import { BlogDetail } from "@web/components/blog";
import classes from "./page.module.scss";

type BlogDetailPageProps = { params: { blogId: string } };

const getPost = async ({ blogId }: { blogId: string }) => {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/posts/${blogId}`
  );
  return response.json();
};

export default async function Index(props: BlogDetailPageProps) {
  const post = await getPost({ blogId: props.params.blogId });

  return (
    <div className={classes.container}>
      <BlogDetail blogDetailData={post.data} />
    </div>
  );
}
