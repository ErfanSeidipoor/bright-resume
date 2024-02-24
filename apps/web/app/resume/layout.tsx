"use client";
import classes from "./page.module.scss";

import {
  Menu,
  ThemeColor,
  ThemeProvider,
  useTheme,
} from "@bright-resume/components";
import "libs/theme/_index.scss";
import { FC } from "react";

interface IResumeLayout {
  children: React.ReactNode;
}

const ResumeLayout: FC<IResumeLayout> = ({ children }) => {
  const { fonSize, fontFamily, themeColor } = useTheme();
  return (
    <section className={classes.root}>
      <ThemeProvider
        themeColor={themeColor}
        fontFamily={fontFamily}
        fonSize={fonSize}
      >
        <section className={classes.container}>{children}</section>
      </ThemeProvider>
    </section>
  );
};

export default ResumeLayout;
