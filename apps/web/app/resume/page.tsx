"use client";
import { ResumeSidebar, ResumeContent } from "@web/components/resume";
import classes from "./page.module.scss";
import { Experience } from "@bright-resume/components";

/* eslint-disable-next-line */
export interface ResumeProps {}

export default async function Index(props: ResumeProps) {
  return (
    <div className={classes.resume__container}>
      <ResumeSidebar />
      <ResumeContent />
    </div>
  );
}
