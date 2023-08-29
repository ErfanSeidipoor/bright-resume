import { ComponentMeta, ComponentStory } from "@storybook/react";
import DatePicker from ".";
import { useState } from "react";
import { MonthEnum } from "./index.hook";

export default {
  component: DatePicker,
  title: "DatePicker",
} as ComponentMeta<typeof DatePicker>;

// use different situation of the component in every examples. e.g. Primary, Secondary

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [month, setMonth] = useState<MonthEnum | undefined>(undefined);
  const [year, setYear] = useState<number | undefined>(undefined);
  return (
    <div id="theme-grey">
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

export const Primary = Template.bind({});
Primary.args = {
  month: undefined,
  year: undefined,
  placeholder: "Pick your date!",
};

export const Secondary = Template.bind({});
Secondary.args = {};
