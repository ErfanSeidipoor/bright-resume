import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { MonthEnum } from "@bright-resume/components";
import { RangePicker } from ".";

export default {
  component: RangePicker,
  title: "RangePicker",
} as Meta<typeof RangePicker>;

const Template: StoryFn<typeof RangePicker> = (args) => {
  const [fromMonth, setFromMonth] = useState<MonthEnum | undefined>(undefined);
  const [toMonth, setToMonth] = useState<MonthEnum | undefined>(undefined);
  const [fromYear, setFromYear] = useState<number | undefined>(undefined);
  const [toYear, setToYear] = useState<number | undefined>(undefined);

  return (
    <div className="theme-blue">
      <RangePicker
        {...args}
        fromMonth={fromMonth}
        fromYear={fromYear}
        onChangeFromMonth={setFromMonth}
        onChangeFromYear={setFromYear}
        toMonth={toMonth}
        toYear={toYear}
        onChangeToMonth={setToMonth}
        onChangeToYear={setToYear}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
