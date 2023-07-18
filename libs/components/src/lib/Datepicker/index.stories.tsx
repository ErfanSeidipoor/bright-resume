import { ComponentMeta, ComponentStory } from '@storybook/react';
import DatePicker from '.';

export default {
  component: DatePicker,
  title: 'DatePicker',
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
  return <DatePicker {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Pick your date!',
  placeholderColor: 'black',
};

export const Secondary = Template.bind({});
Secondary.args = {};
