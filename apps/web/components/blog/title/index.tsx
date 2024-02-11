"use client";
import { FC } from "react";
import { Search, Typography } from "@bright-resume/components";

import classes from "./index.module.scss";
import { texts } from "./texts";

type BlogTitleProps = {};

const BlogTitle: FC<BlogTitleProps> = () => {
  return (
    <div className={classes.title__wrapper}>
      <div className={classes.title}>
        <Typography variant="h1" className={classes.title__our__text}>
          {texts.our}
        </Typography>
        <Typography variant="h1" className={classes.title__blog__text}>
          {texts.blog}
        </Typography>
      </div>
      <div className={classes.search}>
        <Search />
      </div>
    </div>
  );
};

export default BlogTitle;
