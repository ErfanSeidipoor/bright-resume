import { useState } from "react";

import { Meta, StoryFn } from "@storybook/react";

import {
  LanguageChildProps,
  ProficiencyEnum,
  TextFieldProps,
} from "@bright-resume/components";
import { Language } from "./";

export default {
  component: Language,
  title: "Language",
} as Meta<typeof Language>;

const Template: StoryFn<typeof Language> = (args) => {
  const defaultItem: LanguageChildProps = {
    id: "language-1",
    language: {
      placeholder: "English",
    },
    proficiency: ProficiencyEnum.native,
    onChangeProficiency: () => null,
  };
  const [items, setItems] = useState<LanguageChildProps[]>([defaultItem]);

  const handleChangeProficiency = (
    selectedId: string,
    selectedProficiency: ProficiencyEnum
  ) => {
    const allItems = [...items];
    const selectedItemIndex = allItems.findIndex(
      (item) => item.id === selectedId
    );
    console.log("selectedId", selectedId);
    console.log("selectedItemIndex", selectedItemIndex);
    if (selectedItemIndex < 0) return;
    allItems[selectedItemIndex] = {
      ...allItems[selectedItemIndex],
      proficiency: selectedProficiency,
    };
    setItems(allItems);
  };

  const onDecrease = (selectedId: string) => {
    const newItems = items.filter((item) => item.id !== selectedId);
    setItems(newItems);
  };

  const onIncrease = () => {
    const newItem = { ...defaultItem, id: `language-${items.length + 1}` };
    setItems((prevState) => [...prevState, newItem]);
  };

  const onChangeLanguage = (
    selectedId: string,
    languageValue: TextFieldProps["value"]
  ) => {
    const allItems = [...items];
    const selectedItemIndex = allItems.findIndex(
      (item) => item.id === selectedId
    );
    if (selectedItemIndex < 0) return;
    allItems[selectedItemIndex] = {
      ...allItems[selectedItemIndex],
      language: {
        ...allItems[selectedItemIndex].language,
        value: languageValue,
      },
    };
    setItems(allItems);
  };

  return (
    <div id="theme-blue">
      <Language
        {...args}
        items={items.map((item) => ({
          ...item,
          language: {
            ...item.language,
            onChange: (e) => onChangeLanguage(item.id, e.target.value),
          },
          onChangeProficiency: handleChangeProficiency,
        }))}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
