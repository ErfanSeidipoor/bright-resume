import { useState } from "react";

import { Meta, StoryFn } from "@storybook/react";

import { ContactInfo } from "./";
import { texts } from "./texts";

export default {
  component: ContactInfo,
  title: "ContactInfo",
} as Meta<typeof ContactInfo>;

const Template: StoryFn<typeof ContactInfo> = (args) => {
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  return (
    <div id="theme-blue">
      <ContactInfo
        {...args}
        EmailAddress={{
          label: texts.emailAddress,
          placeholder: texts.emailAddress,
          onChange: (e) => setEmailValue(e.target.value),
          value: emailValue,
        }}
        PhoneNumber={{
          label: texts.phoneNumber,
          placeholder: texts.phoneNumber,
          onChange: (e) => setPhoneValue(e.target.value),
          value: phoneValue,
        }}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
