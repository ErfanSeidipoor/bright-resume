import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextField from '.';

export default {
  component: TextField,
  title: 'TextField',
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
