import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import TextField, { TextFieldVariantEnum } from '.';

export default {
  component: TextField,
  title: 'TextField',
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <TextField
      {...args}
      value={value}
      defaultValue="Position"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const xLarge = Template.bind({});
xLarge.args = {
  variant: TextFieldVariantEnum.xxl,
};

export const large = Template.bind({});
large.args = {
  variant: TextFieldVariantEnum.xl,
};

export const medium = Template.bind({});
medium.args = {};
