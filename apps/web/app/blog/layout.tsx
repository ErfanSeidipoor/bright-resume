"use client";
import { FC, ReactNode } from "react";

import { MainLayout } from "@web/components/layouts";
import classes from "./page.module.scss";
import "libs/theme/_index.scss";

type BlogLayoutProps = {
  children: ReactNode;
};

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={classes.blog__layout}>
        <MainLayout>
          <main className={classes.root}>{children}</main>
        </MainLayout>
        <div className={classes.page__footer}>©2023 Bright Résumé Co.</div>
      </body>
    </html>
  );
};

export default BlogLayout;
