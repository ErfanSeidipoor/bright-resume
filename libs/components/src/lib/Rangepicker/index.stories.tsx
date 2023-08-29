import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { MonthEnum } from "../Datepicker/index.hook";
import RangePicker from ".";

export default {
  component: RangePicker,
  title: "RangePicker",
} as ComponentMeta<typeof RangePicker>;

const Template: ComponentStory<typeof RangePicker> = (args) => {
  const [fromMonth, setFromMonth] = useState<MonthEnum | undefined>(undefined);
  const [toMonth, setToMonth] = useState<MonthEnum | undefined>(undefined);
  const [fromYear, setFromYear] = useState<number | undefined>(undefined);
  const [toYear, setToYear] = useState<number | undefined>(undefined);
  return (
    <div className="theme-purple">
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

export const Primary = Template.bind({});
Primary.args = {
  id: "theme-purple",
};

export const Secondary = Template.bind({});
Secondary.args = {};
