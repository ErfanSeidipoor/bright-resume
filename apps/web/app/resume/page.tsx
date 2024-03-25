"use client";
import {
  ResumeSidebar,
  ResumeContent,
  ResumeConfirmationPopup,
} from "@web/components/resume";
import classes from "./page.module.scss";
import {
  Experience,
  Menu,
  Popup,
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
      <ResumeSidebar control={data.control} />
      <ResumeContent
        sections={data.selectedSections}
        watch={data.watch}
        control={data.control}
        setValue={data.setValue}
      />
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
        onSave={data.handleOpenConfirmation}
        control={data.control}
      />

      <ResumeConfirmationPopup
        isOpen={data.isOpenConfirmation}
        onClose={data.handleCloseConfirmation}
        control={data.control}
        onSubmit={data.handleSubmitForm}
      />
    </div>
  );
};

export default ResumePage;
