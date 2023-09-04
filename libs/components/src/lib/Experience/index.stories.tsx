import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import Experience from ".";
import { ExperienceChildProps } from "../types/index.type";

export default {
  component: Experience,
  title: "Experience",
} as Meta<typeof Experience>;

const Template: StoryFn<typeof Experience> = (args) => {
  const defaultItems: ExperienceChildProps = {
    id: "child-1",
    position: { placeholder: "Position" },
    company: { placeholder: "company name" },
    description: {
      placeholder:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  };
  const [items, setItems] = useState<ExperienceChildProps[]>([defaultItems]);
  const onIncrease = () =>
    setItems((prevState) => [
      ...prevState,
      { ...defaultItems, id: `child-${prevState.length + 1}` },
    ]);
  const onDecrease = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div id="theme-blue">
      <Experience
        {...args}
        items={items}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
