import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '.';

import '../../../../theme/_index.scss';

export default {
  component: Button,
  title: 'Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Blue = Template.bind({});
Blue.args = { id: 'theme-blue', children: 'Blue' };

export const Green = Template.bind({});
Green.args = { id: 'theme-green', children: 'Green' };

export const Purple = Template.bind({});
Purple.args = { id: 'theme-purple', children: 'Purple' };

export const Gold = Template.bind({});
Gold.args = { id: 'theme-gold', children: 'Gold' };

export const Grey = Template.bind({});
Grey.args = { id: 'theme-grey', children: 'Grey' };
