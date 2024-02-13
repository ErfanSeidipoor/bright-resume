"use client";
import classes from "./page.module.scss";

import { ThemeColor, ThemeProvider } from "@bright-resume/components";
import "libs/theme/_index.scss";
import { FC } from "react";

interface IResumeLayout {
  children: React.ReactNode;
}

const ResumeLayout: FC<IResumeLayout> = ({ children }) => {
  return (
    <ThemeProvider themeColor={ThemeColor.blue}>
      <section className={classes.root}>{children}</section>
    </ThemeProvider>
  );
};

export default ResumeLayout;
