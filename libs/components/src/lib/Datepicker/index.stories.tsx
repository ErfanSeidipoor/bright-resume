import { Meta, StoryFn } from "@storybook/react";
import DatePicker from ".";
import { useState } from "react";
import { MonthEnum } from "./index.hook";

export default {
  component: DatePicker,
  title: "DatePicker",
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args) => {
  const [month, setMonth] = useState<MonthEnum | undefined>(undefined);
  const [year, setYear] = useState<number | undefined>(undefined);
  return (
    <DatePicker
      {...args}
      month={month}
      year={year}
      onChangeMonth={setMonth}
      onChangeYear={setYear}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  month: undefined,
  year: undefined,
  placeholder: "Pick your date!",
  placeholderColor: "black",
};

export const Secondary = Template.bind({});
Secondary.args = {};
