import { queryStringUrl } from "@bright-resume/utils";

export interface IQuery {
  search: string;
  "pagination[page]": string;
}

type useDataProps = { searchParams: IQuery };

export const useData = ({ searchParams }: useDataProps) => {
  const convertQueryFromSearchParams: Record<keyof IQuery, string> = {
    search: searchParams?.search || "",
    "pagination[page]": searchParams?.["pagination[page]"] || "1",
  };

  const getPosts = async () => {
    const revalidateTime = 60 * 60 * 3;
    const response = await fetch(
      queryStringUrl(
        `${process.env.REACT_APP_SERVER_URL}/posts`,
        convertQueryFromSearchParams
      ),
      {
        next: { revalidate: revalidateTime },
      }
    );
    return response.json();
  };

  return { getPosts, convertQueryFromSearchParams };
};
