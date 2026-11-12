import { Meta, StoryFn } from "@storybook/react";
import { DatePicker } from ".";
import { useState } from "react";
import { MonthEnum } from "@bright-resume/components";

import "../../../../theme/_index.scss";

export default {
  component: DatePicker,
  title: "DatePicker",
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args) => {
  const [month, setMonth] = useState<MonthEnum | undefined>(undefined);
  const [year, setYear] = useState<number | undefined>(undefined);
  return (
    <div id="theme-green">
      <DatePicker
        {...args}
        month={month}
        year={year}
        onChangeMonth={setMonth}
        onChangeYear={setYear}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {
  month: undefined,
  year: undefined,
  onChangeMonth: () => null,
  onChangeYear: () => null,
  placeholder: "Pick your date!",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  month: undefined,
  year: undefined,
  onChangeMonth: () => null,
  onChangeYear: () => null,
  placeholder: "Pick your date!",
};
