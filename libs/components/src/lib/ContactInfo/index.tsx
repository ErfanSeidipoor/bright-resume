import React from "react";

// icons
import { EmailAddressIcon } from "../Icons/emailAddress";
import { PhoneNumberIcon } from "../Icons/phoneNumber";
import { TextField } from "../TextField";
// types
import { ContactInfoProps } from "../types/index.type";
import Typography from "../Typography";
// locals
import classes from "./index.module.scss";
import { texts } from "./texts";

export const ContactInfo: React.FC<ContactInfoProps> = ({
  EmailAddress = {},
  PhoneNumber = {},
}) => {
  return (
    <div className={classes.title__wrapper}>
      <Typography variant="h2">{texts.contactInfo}</Typography>
      <div className={classes.container}>
        <EmailAddressIcon />
        <TextField
          rootClassName={classes.item__wrapper}
          {...EmailAddress}
          variant="h7"
        />
      </div>
      <div className={classes.container}>
        <PhoneNumberIcon />
        <TextField
          rootClassName={classes.item__wrapper}
          {...PhoneNumber}
          variant="h7"
          placeholder={PhoneNumber.placeholder}
        />
      </div>
    </div>
  );
};
