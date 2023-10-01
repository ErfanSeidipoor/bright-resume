import { Meta, StoryFn } from "@storybook/react";

import { ContactInfo } from "./";
import { texts } from "./texts";

export default {
  component: ContactInfo,
  title: "ContactInfo",
} as Meta<typeof ContactInfo>;

const Template: StoryFn<typeof ContactInfo> = (args) => {
  return (
    <div id="theme-blue">
      <ContactInfo
        {...args}
        EmailAddress={{
          label: texts.emailAddress,
          placeholder: texts.emailAddress,
        }}
        PhoneNumber={{
          label: texts.phoneNumber,
          placeholder: texts.phoneNumber,
        }}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
