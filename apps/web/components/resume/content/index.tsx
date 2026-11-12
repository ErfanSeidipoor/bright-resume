"use client";
import { FC } from "react";
import { Control, UseFormSetValue, UseFormWatch } from "react-hook-form";
// dto
import { CreateResumeResumeInputs } from "@dto";
// components
import {
  Experience,
  AboutMe,
  Education,
  Certification,
  CourseWork,
  Project,
  Involvement,
  SectionsEnum,
} from "@bright-resume/components";
// locals
import classes from "./index.module.scss";
import { useData } from "./index.hook";

type ResumeContentProps = {
  sections: SectionsEnum[];
  watch: UseFormWatch<CreateResumeResumeInputs>;
  control: Control<CreateResumeResumeInputs, any>;
  setValue: UseFormSetValue<CreateResumeResumeInputs>;
};

export const ResumeContent: FC<ResumeContentProps> = ({
  sections = [],
  watch,
  control,
  setValue,
}) => {
  const data = useData(watch);

  return (
    <div className={classes.container}>
      <AboutMe
        header={{
          value: "About Me",
        }}
        description={{
          placeholder:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        }}
        isHidden={!sections.includes(SectionsEnum.about_me)}
      />
      <Experience
        control={control}
        setValue={setValue}
        experienceValues={data.experienceValues || []}
        isHidden={!sections.includes(SectionsEnum.experience)}
      />
      <Education
        control={control}
        setValue={setValue}
        educationValues={data.educationValues || []}
        isHidden={!sections.includes(SectionsEnum.education)}
      />
      <Certification
        control={control}
        setValue={setValue}
        certificationValues={data.certificationValues || []}
        isHidden={!sections.includes(SectionsEnum.certification)}
      />
      <CourseWork
        control={control}
        setValue={setValue}
        courseWorkValues={data.courseWorkValues || []}
        isHidden={!sections.includes(SectionsEnum.course_work)}
      />
      <Project
        control={control}
        setValue={setValue}
        projectValues={data.projectValues || []}
        isHidden={!sections.includes(SectionsEnum.project)}
      />
      <Involvement
        control={control}
        setValue={setValue}
        involvementValues={data.involvementValues || []}
        isHidden={!sections.includes(SectionsEnum.involvement)}
      />
    </div>
  );
};
