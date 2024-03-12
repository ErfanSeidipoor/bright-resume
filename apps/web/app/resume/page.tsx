"use client";
import { ResumeSidebar, ResumeContent } from "@web/components/resume";
import classes from "./page.module.scss";
import {
  Experience,
  Menu,
  ThemeProvider,
  useTheme,
} from "@bright-resume/components";

/* eslint-disable-next-line */
export interface ResumeProps {}

const ResumePage = () => {
  const theme = useTheme();

  return (
    <ThemeProvider
      fonSize={theme.fonSize}
      fontFamily={theme.fontFamily}
      themeColor={theme.themeColor}
    >
      <div className={classes.resume__container}>
        <ResumeSidebar />
        <ResumeContent />
        {/* <div className={classes.menu__wrapper}> */}
        <Menu
          color={theme.themeColor}
          fonSize={theme.fonSize}
          fontFamily={theme.fontFamily}
          onChangeColor={theme.changeThemeColor}
          onChangeFontFamily={theme.changeFontFamily}
          onChangeFontSize={theme.changeFontSize}
          sections={[]}
          onChangeSections={() => undefined}
        />
      </div>
      {/* </div> */}
    </ThemeProvider>
  );
};

export default ResumePage;
