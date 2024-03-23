"use client";
import { FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BlogCard, NavigationButton } from "@bright-resume/components";

import classes from "./index.module.scss";

type BlogContentProps = {
  blogsData: any[];
};

const BlogContent: FC<BlogContentProps> = ({ blogsData }) => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const router = useRouter();
  const currentPage = Number(searchParams?.get("page")) || 1;

  const renderBlogContent = () => {
    if (blogsData.data.length <= 0) return;
    return blogsData.data.map((blog, index) => (
      <div className={classes.blog__card__wrapper} key={blog.id}>
        <BlogCard
          rootClassName={classes.blog__card}
          title={blog.attributes.title}
          description={blog.attributes.sammary}
          shortDescription={blog.attributes.content}
          image={
            process.env.STRAPI_URL +
            blog.attributes.coverImage.data.attributes.url
          }
          imageWidth={"100%"}
          imageHeight={"400px"}
          link={`/blog/${blog.id}`}
          categories={blog.attributes.categories.data}
          isCutOutImage
        />
      </div>
    ));
  };

  const handleNextPage = (page: number) => {
    const urlPagination = new URLSearchParams(searchParams);
    urlPagination.set("page", (page + 1).toString());
    router.replace(`${path}?${urlPagination.toString()}`);
  };

  const handlePrevPage = (page: number) => {
    const urlPagination = new URLSearchParams(searchParams);
    urlPagination.set("page", (page - 1).toString());
    if (page <= 2) {
      urlPagination.delete("page");
    }
    router.replace(`${path}?${urlPagination.toString()}`);
  };

  const renderNavigationButton = () => {
    return (
      <NavigationButton
        className="navigation-button"
        color="grey"
        onNextPage={() => handleNextPage(currentPage)}
        onPrevPage={() => handlePrevPage(currentPage)}
        hasNextPage={currentPage >= blogsData?.meta?.pagination.pageCount}
        hasPrevPage={currentPage <= 1}
      />
    );
  };

  return (
    <div className={classes.content__wrapper}>
      <div className={classes.blog__card__content__wrapper}>
        {renderBlogContent()}
      </div>
      {renderNavigationButton()}
    </div>
  );
};

export { BlogContent };
