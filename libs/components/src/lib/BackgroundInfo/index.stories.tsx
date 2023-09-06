import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import BackgroundInfo from ".";
import {
  BackgroundInfoChildKeys,
  BackgroundInfoChildProps,
  TextFieldProps,
} from "../types/index.type";

export default {
  component: BackgroundInfo,
  title: "BackgroundInfo",
} as Meta<typeof BackgroundInfo>;

const renderChangedValue = ({
  item,
  changeItemKey,
  changeItemValue,
}: {
  item: BackgroundInfoChildProps;
  changeItemKey: BackgroundInfoChildKeys;
  changeItemValue: TextFieldProps["value"];
}): BackgroundInfoChildProps => {
  switch (changeItemKey) {
    case "title":
      return {
        ...item,
        title: { ...item.title, value: changeItemValue },
      };
    case "subtitle":
      return {
        ...item,
        subtitle: { ...item.subtitle, value: changeItemValue },
      };
    case "description":
      return {
        ...item,
        description: { ...item.description, value: changeItemValue },
      };
  }
};

const onChangeItems = ({
  defaultItems,
  setItems,
  defaultItemId,
  changeItemKey,
  changeItemValue,
}: {
  defaultItems: BackgroundInfoChildProps[];
  setItems: React.Dispatch<React.SetStateAction<BackgroundInfoChildProps[]>>;
  defaultItemId: string;
  changeItemKey: BackgroundInfoChildKeys;
  changeItemValue: TextFieldProps["value"];
}) => {
  const itemIndex = defaultItems.findIndex(
    (defaultItem) => defaultItem.id === defaultItemId
  );
  const items = [...defaultItems];
  const item = items[itemIndex];

  const newItem = renderChangedValue({ item, changeItemKey, changeItemValue });
  items[itemIndex] = newItem;
  setItems(items);
};

const ExperienceTemplate: StoryFn<typeof BackgroundInfo> = (args) => {
  const defaultExperienceItems: BackgroundInfoChildProps = {
    id: "item-1",
    title: { placeholder: "Position" },
    subtitle: { placeholder: "Company" },
    description: {
      placeholder:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  };

  const [experienceItems, setExperienceItems] = useState<
    BackgroundInfoChildProps[]
  >([defaultExperienceItems]);

  const onDecrease = (id: string) => {
    const newItems = experienceItems.filter((item) => item.id !== id);
    setExperienceItems(newItems);
  };
  const onIncrease = () => {
    setExperienceItems((prevState) => [
      ...prevState,
      { ...defaultExperienceItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  const onChangeExperienceItems = ({
    experienceId,
    changeItemKey,
    changeItemValue,
  }: {
    experienceId: string;
    changeItemKey: BackgroundInfoChildKeys;
    changeItemValue: TextFieldProps["value"];
  }) => {
    onChangeItems({
      defaultItems: experienceItems,
      setItems: setExperienceItems,
      defaultItemId: experienceId,
      changeItemKey,
      changeItemValue,
    });
  };

  return (
    <div id="theme-blue">
      <BackgroundInfo
        {...args}
        items={experienceItems.map((item) => ({
          id: item.id,
          title: {
            ...item.title,
            onChange: (e) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "title",
                changeItemValue: e.target.value,
              }),
          },
          subtitle: {
            ...item.subtitle,
            onChange: (e) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "subtitle",
                changeItemValue: e.target.value,
              }),
          },
          description: {
            ...item.description,
            onChange: (e) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "description",
                changeItemValue: e.target.value,
              }),
          },
        }))}
        hoverItem={defaultExperienceItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

const EducationTemplate: StoryFn<typeof BackgroundInfo> = (args) => {
  const defaultEducationItems: BackgroundInfoChildProps = {
    id: "item-1",
    title: { placeholder: "Degree" },
    subtitle: { placeholder: "University" },
  };

  const [educationItems, setEducationItems] = useState<
    BackgroundInfoChildProps[]
  >([defaultEducationItems]);

  const onDecrease = (id: string) => {
    const newItems = educationItems.filter((item) => item.id !== id);
    setEducationItems(newItems);
  };
  const onIncrease = () => {
    setEducationItems((prevState) => [
      ...prevState,
      { ...defaultEducationItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  const onChangeEducationItems = ({
    educationId,
    changeItemKey,
    changeItemValue,
  }: {
    educationId: string;
    changeItemKey: BackgroundInfoChildKeys;
    changeItemValue: TextFieldProps["value"];
  }) => {
    onChangeItems({
      defaultItems: educationItems,
      setItems: setEducationItems,
      defaultItemId: educationId,
      changeItemKey,
      changeItemValue,
    });
  };

  return (
    <div id="theme-blue">
      <BackgroundInfo
        {...args}
        items={educationItems.map((item) => ({
          id: item.id,
          title: {
            ...item.title,
            onChange: (e) =>
              onChangeEducationItems({
                educationId: item.id,
                changeItemKey: "title",
                changeItemValue: e.target.value,
              }),
          },
          subtitle: {
            ...item.subtitle,
            onChange: (e) =>
              onChangeEducationItems({
                educationId: item.id,
                changeItemKey: "subtitle",
                changeItemValue: e.target.value,
              }),
          },
        }))}
        hoverItem={defaultEducationItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

const AchievementTemplate: StoryFn<typeof BackgroundInfo> = (args) => {
  const defaultAchievementItems: BackgroundInfoChildProps = {
    id: "item-1",
    title: { placeholder: "Degree" },
    description: {
      placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  };

  const [achievementItems, setAchievementItems] = useState<
    BackgroundInfoChildProps[]
  >([defaultAchievementItems]);

  const onDecrease = (id: string) => {
    const newItems = achievementItems.filter((item) => item.id !== id);
    setAchievementItems(newItems);
  };
  const onIncrease = () => {
    setAchievementItems((prevState) => [
      ...prevState,
      { ...defaultAchievementItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  const onChangeAchievementItems = ({
    achievementId,
    changeItemKey,
    changeItemValue,
  }: {
    achievementId: string;
    changeItemKey: BackgroundInfoChildKeys;
    changeItemValue: TextFieldProps["value"];
  }) => {
    onChangeItems({
      defaultItems: achievementItems,
      setItems: setAchievementItems,
      defaultItemId: achievementId,
      changeItemKey,
      changeItemValue,
    });
  };

  return (
    <div id="theme-blue">
      <BackgroundInfo
        {...args}
        items={achievementItems.map((item) => ({
          id: item.id,
          title: {
            ...item.title,
            onChange: (e) =>
              onChangeAchievementItems({
                achievementId: item.id,
                changeItemKey: "title",
                changeItemValue: e.target.value,
              }),
          },
          description: {
            ...item.description,
            onChange: (e) =>
              onChangeAchievementItems({
                achievementId: item.id,
                changeItemKey: "description",
                changeItemValue: e.target.value,
              }),
          },
        }))}
        hoverItem={defaultAchievementItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

const SkillTemplate: StoryFn<typeof BackgroundInfo> = (args) => {
  const defaultSkillItems: BackgroundInfoChildProps = {
    id: "item-1",
    title: { placeholder: "Skill 1" },
    description: {
      placeholder: "Some Skills",
    },
  };

  const [skillItems, setSkillItems] = useState<BackgroundInfoChildProps[]>([
    defaultSkillItems,
  ]);

  const onDecrease = (id: string) => {
    const newItems = skillItems.filter((item) => item.id !== id);
    setSkillItems(newItems);
  };
  const onIncrease = () => {
    setSkillItems((prevState) => [
      ...prevState,
      { ...defaultSkillItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  const onChangeSkillItems = ({
    skillId,
    changeItemKey,
    changeItemValue,
  }: {
    skillId: string;
    changeItemKey: BackgroundInfoChildKeys;
    changeItemValue: TextFieldProps["value"];
  }) => {
    onChangeItems({
      defaultItems: skillItems,
      setItems: setSkillItems,
      defaultItemId: skillId,
      changeItemKey,
      changeItemValue,
    });
  };

  return (
    <div id="theme-blue">
      <BackgroundInfo
        {...args}
        items={skillItems.map((item) => ({
          id: item.id,
          title: {
            ...item.title,
            onChange: (e) =>
              onChangeSkillItems({
                skillId: item.id,
                changeItemKey: "title",
                changeItemValue: e.target.value,
              }),
          },
          description: {
            ...item.description,
            onChange: (e) =>
              onChangeSkillItems({
                skillId: item.id,
                changeItemKey: "description",
                changeItemValue: e.target.value,
              }),
          },
        }))}
        hoverItem={defaultSkillItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export const Experience = ExperienceTemplate.bind({});
Experience.args = {
  header: { placeholder: "Experience" },
};

export const Education = EducationTemplate.bind({});
Education.args = {
  header: { placeholder: "Education" },
};

export const Achievement = AchievementTemplate.bind({});
Achievement.args = {
  header: { placeholder: "Achievements" },
};

export const Skill = SkillTemplate.bind({});
Skill.args = {
  header: { placeholder: "Skills" },
};
