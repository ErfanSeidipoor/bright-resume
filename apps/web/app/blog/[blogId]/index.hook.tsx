import { queryStringUrl } from "@bright-resume/utils";

export const useData = () => {
  const getPost = async ({ blogId }: { blogId: string }) => {
    const response = await fetch(
      queryStringUrl(`${process.env.REACT_APP_SERVER_URL}/posts/${blogId}`, {})
    );
    return response.json();
  };

  return { getPost };
};
