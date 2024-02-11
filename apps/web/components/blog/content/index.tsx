"use client";
import { FC } from "react";
import { BlogCard, NavigationButton } from "@bright-resume/components";

import classes from "./index.module.scss";

type BlogContentProps = {
  blogsData: any[];
};

const BlogContent: FC<BlogContentProps> = ({ blogsData }) => {
  const renderBlogContent = () => {
    if (blogsData.length <= 0) return;
    return blogsData.map((blog, index) => (
      <div className={classes.blog__card__wrapper} key={crypto.randomUUID()}>
        <BlogCard
          rootClassName={classes.blog__card}
          title={blog.title}
          description={blog.description}
          shortDescription={blog.shortDescription}
          image={blog.coverImage.src}
          imageWidth={"100%"}
          imageHeight={"400px"}
          link={`/blog/${index}`}
          categories={blog.categories}
          isCutOutImage
        />
      </div>
    ));
  };

  const renderNavigationButton = () => {
    return <NavigationButton className="navigation-button" color="grey" />;
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
