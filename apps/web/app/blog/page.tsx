import { BlogContent, BlogTitle } from "@web/components/blog";
import { StringifiableRecord } from "query-string";
import classes from "./page.module.scss";
import { queryStringUrl } from "@bright-resume/utils";

interface IQuery {
  search: string;
  "pagination[page]": string;
}

type BlogPageProps = {
  searchParams?: IQuery;
};

const getPosts = async ({ query }: { query: StringifiableRecord }) => {
  const revalidateTime = 60 * 60 * 3;
  const response = await fetch(
    queryStringUrl(`${process.env.REACT_APP_SERVER_URL}/posts`, query),
    {
      next: { revalidate: revalidateTime },
    }
  );
  return response.json();
};

export default async function Index(props: BlogPageProps) {
  const { searchParams } = props;
  const convertQueryFromSearchParams: Record<keyof IQuery, string> = {
    search: searchParams?.search || "",
    "pagination[page]": searchParams?.["pagination[page]"] || "1",
  };
  const posts = await getPosts({ query: convertQueryFromSearchParams });

  return (
    <div className={classes.container}>
      <BlogTitle />
      <BlogContent blogsData={posts} />
    </div>
  );
}
