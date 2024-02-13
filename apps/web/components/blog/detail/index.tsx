"use client";
import { FC } from "react";
import { Button, Typography } from "@bright-resume/components";

import classes from "./index.module.scss";
import { texts } from "./texts";
import Image from "next/image";

type BlogDetailProps = {
  blogDetailData?: any;
};

const BlogDetail: FC<BlogDetailProps> = ({ blogDetailData }) => {
  const renderImage = () => {
    return (
      <div className={classes.blog__detail__image__wrapper}>
        <Image
          className={classes.blog__detail__image}
          src={blogDetailData.coverImage.src}
          alt={"blog-post-img"}
          width={500}
          height={300}
        />
        {renderCategories()}
      </div>
    );
  };

  const renderCategories = () => {
    if (blogDetailData.categories.length <= 0) return;
    return (
      <div className={classes.blog__details__categories}>
        {blogDetailData.categories.map((category: { name: string }) => (
          <Button
            className={classes.blog__details__category__button}
            key={crypto.randomUUID()}
            variant="rounded"
          >
            {category.name}
          </Button>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    return <div></div>;
  };

  return (
    <div className={classes.blog__detail__wrapper}>
      {renderImage()}
      {renderContent()}
    </div>
  );
};

export { BlogDetail };
