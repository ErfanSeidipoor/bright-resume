"use client";
import { FC } from "react";
import {
  Control,
  Controller,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
// dto
import { CreateResumeResumeInputs } from "@dto";
// components
import {
  ImageProfile,
  TextField,
  ContactInfo,
  Typography,
  Slider,
  Language,
} from "@bright-resume/components";
import classes from "./index.module.scss";

type ResumeSidebarProps = {
  control: Control<CreateResumeResumeInputs, any>;
};

export const ResumeSidebar: FC<ResumeSidebarProps> = ({ control }) => {
  return (
    <div className={classes.container}>
      <ImageProfile />
      <div>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              {...field}
              rootClassName={classes.field}
              variant="h3"
              placeholder="Your Full Name"
            />
          )}
        />
        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <TextField {...field} variant="h6" placeholder="Your Job Title" />
          )}
        />
      </div>
      <ContactInfo
        EmailAddress={{
          placeholder: "Email Address",
        }}
        PhoneNumber={{
          placeholder: "Phone Number",
        }}
        control={control}
      />
      <div>
        <Typography variant="h3">Top Skills</Typography>
        <Slider onChange={() => {}} label="Skill #1" />
      </div>
      <Language control={control} />
    </div>
  );
};
