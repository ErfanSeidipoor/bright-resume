"use client";
import { FC } from "react";
import Dompurify from "dompurify";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ArrowBack, Button, Typography } from "@bright-resume/components";

import classes from "./index.module.scss";
import { texts } from "./texts";

type BlogDetailProps = {
  blogDetailData?: any;
};

const BlogDetail: FC<BlogDetailProps> = ({ blogDetailData }) => {
  const router = useRouter();

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
    const blogDetailContentHTML = Dompurify.sanitize(
      blogDetailData.attributes.content
    );
    return (
      <div className={classes.blog__detail__content__wrapper}>
        <Typography variant="h2" className={classes.blog__detail__title}>
          {blogDetailData.attributes.title}
        </Typography>
        <Typography variant="h4" className={classes.blog__detail__description}>
          {blogDetailData.attributes.sammary}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: blogDetailContentHTML }}></div>
      </div>
    );
  };

  const renderBack = () => {
    return (
      <div className={classes.blog__detail__button__wrapper}>
        <Button
          variant="text"
          iconLeft={<ArrowBack />}
          onClick={() => router.push("/blog")}
        >
          {texts.view_all_posts}
        </Button>
      </div>
    );
  };

  return (
    <div className={classes.blog__detail__wrapper}>
      {/* {renderImage()} */}
      {renderContent()}
      {renderBack()}
    </div>
  );
};

export { BlogDetail };
