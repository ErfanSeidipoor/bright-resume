import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography from '.';

export default {
  component: Typography,
  title: 'Typography',
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => {
  return <Typography {...args} />;
};

export const H1 = Template.bind({});
H1.args = { variant: 'h1', children: 'H1' };

export const H2 = Template.bind({});
H2.args = { variant: 'h2', children: 'H2' };

export const H3 = Template.bind({});
H3.args = { variant: 'h3', children: 'H3' };

export const H4 = Template.bind({});
H4.args = { variant: 'h4', children: 'H4' };

export const H5 = Template.bind({});
H5.args = { variant: 'h5', children: 'H5' };

export const H6 = Template.bind({});
H6.args = { variant: 'h6', children: 'H6' };

export const H7 = Template.bind({});
H7.args = { variant: 'h7', children: 'H7' };

export const H8 = Template.bind({});
H8.args = { variant: 'h8', children: 'H8' };

export const H9 = Template.bind({});
H9.args = { variant: 'h9', children: 'H9' };
