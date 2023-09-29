import { faker } from "@faker-js/faker";
import { Meta, StoryFn } from "@storybook/react";
import { Accordion } from "./index";

export default {
  component: Accordion,
  title: "Accordion",
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args) => {
  return (
    <div id="theme-blue">
      <Accordion {...args} />
    </div>
  );
};

// eslint-disable-next-line storybook/prefer-pascal-case
const accordionSample = faker.datatype.array(4).map(() => ({
  title: faker.word.adjective(),
  children: <div>{faker.lorem.paragraph(10)}</div>
}));


export const Main = Template.bind({});
Main.args = {
  items: accordionSample,
};
