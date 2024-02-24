import { FC } from "react";
import { Search } from "@bright-resume/components";

import classes from "./index.module.scss";

export type BlogSearchProps = {};

const BlogSearch: FC<BlogSearchProps> = ({}) => {
  return (
    <div className={classes.search__container}>
      <Search />
    </div>
  );
};

export { BlogSearch };
