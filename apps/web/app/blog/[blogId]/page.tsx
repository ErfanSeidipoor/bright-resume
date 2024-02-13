import { BlogDetail } from "@web/components/blog";
import classes from "./page.module.scss";
import { useData } from "./useData";

type BlogDetailPageProps = {};

export default async function Index(props: BlogDetailPageProps) {
  const data = useData();

  return (
    <div className={classes.container}>
      <BlogDetail blogDetailData={data.blogDetailSample} />
    </div>
  );
}
