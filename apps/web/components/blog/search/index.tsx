"use client";
import { ChangeEvent, FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Search } from "@bright-resume/components";

import classes from "./index.module.scss";

export type BlogSearchProps = {};

const BlogSearch: FC<BlogSearchProps> = ({}) => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const urlSearch = new URLSearchParams(searchParams);
      if (e.target.value) {
        urlSearch.set("search", e.target.value);
      } else {
        urlSearch.delete("search");
      }
      router.replace(`${path}?${urlSearch.toString()}`);
    },
    1000
  );

  return (
    <div className={classes.search__container}>
      <Search onChange={handleSearch} />
    </div>
  );
};

export { BlogSearch };
