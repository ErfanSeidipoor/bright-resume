import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography from '.';

export default {
  component: Typography,
  title: 'Typography',
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => {
  return <Typography {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
