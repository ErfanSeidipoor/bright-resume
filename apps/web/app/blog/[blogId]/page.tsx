import { BlogDetail } from "@web/components/blog";
import classes from "./page.module.scss";
import { useData } from "./index.hook";

type BlogDetailPageProps = { params: { blogId: string } };

export default async function Index(props: BlogDetailPageProps) {
  const data = useData();
  const post = await data.getPost({ blogId: props.params.blogId });

  return (
    <div className={classes.container}>
      <BlogDetail blogDetailData={post.data} />
    </div>
  );
}
