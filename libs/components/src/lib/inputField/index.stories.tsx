import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import InputField, { InputFieldVariantEnum } from '.';

export default {
  component: InputField,
  title: 'InputField',
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <InputField
      {...args}
      value={value}
      defaultValue="Position"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const xLarge = Template.bind({});
xLarge.args = {
  variant: InputFieldVariantEnum.xxl,
};

export const large = Template.bind({});
large.args = {
  variant: InputFieldVariantEnum.xl,
};

export const medium = Template.bind({});
medium.args = {};
