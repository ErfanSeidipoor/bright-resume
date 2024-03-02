"use client";
import { ResumeSidebar, ResumeContent } from "@web/components/resume";
import classes from "./page.module.scss";
import {
  Experience,
  Menu,
  ThemeProvider,
  useTheme,
} from "@bright-resume/components";
import { useData } from "./index.hook";

/* eslint-disable-next-line */
export interface ResumeProps {}

const ResumePage = () => {
  const theme = useTheme();
  const data = useData();

  return (
    <div className={classes.resume__container}>
      <ResumeSidebar />
      <ResumeContent sections={data.selectedSections} />
      <Menu
        color={theme.themeColor}
        fonSize={theme.fonSize}
        fontFamily={theme.fontFamily}
        onChangeColor={theme.changeThemeColor}
        onChangeFontFamily={theme.changeFontFamily}
        onChangeFontSize={theme.changeFontSize}
        sections={data.selectedSections}
        onAppendSection={data.handleAppendSections}
        onRemoveSection={data.handleRemoveSections}
      />
    </div>
  );
};

export default ResumePage;
