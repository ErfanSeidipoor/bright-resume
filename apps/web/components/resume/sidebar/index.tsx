"use client";
import {
  ImageProfile,
  TextField,
  ContactInfo,
  Typography,
  Slider,
  Language,
} from "@bright-resume/components";
import classes from "./index.module.scss";

export const ResumeSidebar = () => {
  return (
    <div className={classes.container}>
      <ImageProfile />
      <div>
        <TextField
          rootClassName={classes.field}
          variant="h3"
          placeholder="Your Full Name"
        />
        <TextField variant="h6" placeholder="Your Job Title" />
      </div>
      <ContactInfo
        EmailAddress={{
          placeholder: "Email Address",
        }}
        PhoneNumber={{
          placeholder: "Phone Number",
        }}
      />
      <div>
        <Typography variant="h3">Top Skills</Typography>
        <Slider onChange={() => {}} label="Skill #1" />
      </div>
      <Language
        items={[]}
        onDecrease={() => undefined}
        onIncrease={() => undefined}
      />
    </div>
  );
};
