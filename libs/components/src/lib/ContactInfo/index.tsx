import React from "react";

// icons
import { EmailAddressIcon, PhoneNumberIcon } from "../Icons";
// components
import {
  ContactInfoProps,
  Typography,
  TextField,
} from "@bright-resume/components";
// locals
import classes from "./index.module.scss";
import { texts } from "./texts";
import { Controller } from "react-hook-form";

export const ContactInfo: React.FC<ContactInfoProps> = ({
  EmailAddress = {},
  PhoneNumber = {},
  control,
}) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2">{texts.contactInfo}</Typography>
      <div className={classes.field__container}>
        <EmailAddressIcon />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              rootClassName={classes.field}
              enableRootClassName={classes.enable__field}
              {...EmailAddress}
              variant="h7"
            />
          )}
        />
      </div>
      <div className={classes.field__container}>
        <PhoneNumberIcon />
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <TextField
              {...field}
              rootClassName={classes.field}
              enableRootClassName={classes.enable__field}
              {...PhoneNumber}
              variant="h7"
              placeholder={PhoneNumber.placeholder}
            />
          )}
        />
      </div>
    </div>
  );
};
